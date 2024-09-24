import "./styles.css";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import image77 from "../../../assets/Images/AnimeLaunch/image 77.png";
import image76 from "../../../assets/Images/AnimeLaunch/image 76.png";
import image80 from "../../../assets/Images/AnimeLaunch/image 80.png";
import image75 from "../../../assets/Images/AnimeLaunch/image 75.png";
import image81 from "../../../assets/Images/AnimeLaunch/image 81.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

export default function AnimesesLancamentos({ animes }) {
    const imgAnimes = [
        image77,
        image76,
        image80,
        image75,
        image81
    ];

    return (
        <div className="area-lancamentos">
            <h2 className="titulo-lancamentos">Lançamentos</h2>

            <Swiper
                slidesPerView={2} // Corrigido aqui
                pagination={{ clickable: true }}
                navigation
                spaceBetween={-300}
                loop={true}
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