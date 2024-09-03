import "./styles.css";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import animes1 from "../../../assets/Images/Animes/animes1.png";
import animes2 from "../../../assets/Images/Animes/animes2.png";
import animes3 from "../../../assets/Images/Animes/animes3.png";
import animes4 from "../../../assets/Images/Animes/animes4.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

export default function AnimesesLancamentos({ animes }) {
    const imgAnimes = [
        animes1,
        animes2,
        animes3,
        animes4
    ];

    return (
        <div className="area-lancamentos">
            <h2 className="titulo-lancamentos">Lançamentos</h2>

            <Swiper
                slidesPerView={1} // Corrigido aqui
                pagination={{ clickable: true }}
                navigation
            >
                {imgAnimes.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item} // Corrigido aqui
                            alt="Slider"
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}