import './styles.css';
import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const AnimesLaunch = () => {
  const [recentAnimes, setRecentAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recent anime releases from Jikan API
    fetch('https://api.jikan.moe/v4/seasons/now')
      .then(response => response.json())
      .then(data => {
        console.log('Animes fetched:', data.data); // Debug: verificar dados recebidos
        setRecentAnimes(data.data.slice(0, 10)); // Limitar para 6 lançamentos
      })
      .catch(error => console.error('Error fetching recent animes:', error));
  }, []);

  const handleClick = (animeId) => {
    navigate(`/anime/${animeId}`);
  };

  return (
    <div className='animes-lancamentos'>
      <h1 className='lancamentos-titulo'>Lançamentos</h1>
      <div className='lancamentos-slider'>
        <Swiper
          spaceBetween={-50}
          slidesPerView={5}
          centeredSlides={true}
          navigation={{
            prevEl: '.lancamentos-slider-antes',
            nextEl: '.lancamentos-slider-depois'
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
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
        <RiArrowLeftSLine fontSize={65} className='lancamentos-slider-antes' />
        <RiArrowRightSLine fontSize={65} className='lancamentos-slider-depois' />
      </div>
    </div>
  );
};

export default AnimesLaunch;
