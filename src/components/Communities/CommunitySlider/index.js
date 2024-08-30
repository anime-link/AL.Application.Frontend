import React, { useEffect, useState } from "react";
import "./styles.css";
import "swiper/swiper-bundle.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// Instalação de módulos
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function ComunidadeSlider({ images, interval = 6500 }) {
    return (
        <div className="comunidade-slider">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: '.comunidade-slider-antes',
                    nextEl: '.comunidade-slider-depois'
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: interval }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="comunidade-slide"
                        >
                            <div className="comunidade-slide-nome-img">
                                <img className="comunidade-slide-img" src={img} alt={`Comunidade ${i}`} />
                                <h2 className="comunidade-slide-nome">Anime</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <RiArrowLeftSLine className="comunidade-slider-antes" />
            <RiArrowRightSLine className="comunidade-slider-depois" />
        </div>   
    );
}