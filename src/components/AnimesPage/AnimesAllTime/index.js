import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Navigation, Pagination } from 'swiper/modules';

export default function AnimesPopulares({ filter }) {
    const [popularAnimes, setPopularAnimes] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=tv&filter=${filter}`);

                if (!response.ok) {
                    throw new Error(`API response not ok ${response.status}`);
                }

                const data = await response.json();
                setPopularAnimes(data.data.slice(0, 12)); // Limita para 12 animes

            } catch (error) {
                console.error('Error fetch popular animes: ', error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }

            fetchData();

            return () => {
                isMounted = false;
            }
        }

        const timer = setTimeout(() => {
            fetchData();
        }, 1500);

        return () => clearTimeout(timer);

        // // Fetch recent anime releases from Jikan API
        // fetch(`https://api.jikan.moe/v4/top/anime?type=tv&filter=${filter}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Animes fetched:', data.data); // Debug: verificar dados recebidos
        //         setPopularAnimes(data.data.slice(0, 12)); // Limitar para 12 lançamentos
        //     })
        //     .catch(error => console.error('Error fetching popular animes:', error));
    }, [filter]);

    const handleClick = (animeId) => {
        navigate(`/anime/${animeId}`);
    }

    return (
        <div className='animes-populares'>
            <h1 className='animes-populares-titulo'>Os mais populares</h1>
            <div className='animes-pop-area'>
                <Swiper
                    spaceBetween={120}
                    slidesPerView={4}
                    centeredSlides={true}
                    navigation={{
                        prevEl: '.animes-pop-antes',
                        nextEl: '.animes-pop-depois'
                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    loop={true}
                >
                    {popularAnimes.map(anime => (
                        <SwiperSlide key={anime.mal_id}>
                            <div className='animes-pop-img-area' onClick={() => handleClick(anime.mal_id)}>
                                {anime.images && anime.images.jpg && (
                                    <img
                                        className='animes-pop-img'
                                        src={anime.images.jpg.image_url}
                                        width={220}
                                        height={330}
                                        alt={anime.title}
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <RiArrowLeftSLine fontSize={80} className='animes-pop-antes' />
                <RiArrowRightSLine fontSize={80} className='animes-pop-depois' />
            </div>
        </div>
    );
}