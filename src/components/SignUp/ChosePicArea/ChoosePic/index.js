import React from "react";
import "./styles.css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

export function AreaEscolhaImagem({ img, setImgSelecionada }) {
    return (
        <div className="imagem-escolha-area">
            <div className="imagem-escolha-slider">
            <Swiper 
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 45,
                    stretch: 10,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                navigation={{
                    prevEl: '.imagem-escolha-antes',
                    nextEl: '.imagem-escolha-depois',
                }}
                modules={[Navigation, EffectCoverflow]}
            >
                {img.map((pics, i) => (
                    <SwiperSlide key={i}>
                        <div className="imagem-escolha-img-area">
                            <img 
                                className="imagem-escolha-slider-img" 
                                src={pics} 
                                alt={`Imagem de perfil ${i}`}
                                onClick={() => setImgSelecionada(pics)} 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                <RiArrowLeftSLine className="imagem-escolha-antes" />
                <RiArrowRightSLine className="imagem-escolha-depois" />
            </div>
        </div>
    );
}