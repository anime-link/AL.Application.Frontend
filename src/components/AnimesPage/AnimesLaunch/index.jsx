import './styles.css';
import 'swiper/css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const AnimesLaunch = () => {
  const [recentAnimes, setRecentAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchLauches = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://api.jikan.moe/v4/seasons/now');

        if (!response.ok) {
          throw new Error(`API response not ok ${response.status}`);
        }

        const data = await response.json();
        setRecentAnimes(data.data.slice(0, 12));

      } catch (error) {
        console.error('Error fetch launches animes: ', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }

      fetchLauches();

      return () => {
        isMounted = false;
      }
    }

    const timer = setTimeout(() => {
      fetchLauches();
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  const handleClick = (animeId) => {
    navigate(`/anime/${animeId}`);
  };

  return (
    <div className='animes-lancamentos'>
      <h1 className='lancamentos-titulo'>Lançamentos</h1>
      <div className='lancamentos-slider'>
        <Swiper
          spaceBetween={25}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{
            prevEl: '.lancamentos-slider-antes',
            nextEl: '.lancamentos-slider-depois'
          }}
          pagination={{ clickable: true }}
          modules={[ Navigation, Pagination ]}
          loop={true}
        >
          {recentAnimes.map(anime => (
            <SwiperSlide key={anime.mal_id}>
              <div className="lancamentos-img-area" onClick={() => handleClick(anime.mal_id)}>
                {/* Verifique se a imagem está presente */}
                {anime.images && anime.images.jpg && (
                  <img
                    className='lancamentos-img'
                    src={anime.images.jpg.image_url}
                    width={175}
                    height={244}
                    alt={anime.title}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <RiArrowLeftSLine fontSize={70} className='lancamentos-slider-antes' />
        <RiArrowRightSLine fontSize={70} className='lancamentos-slider-depois' />
      </div>
    </div>
  );
};

export default AnimesLaunch;