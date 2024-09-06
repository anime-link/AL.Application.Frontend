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
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 10,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                navigation={true}
                modules={[Navigation, EffectCoverflow]}
            >
                {img.map((pics, i) => (
                    <SwiperSlide key={i}>
                        <div className="imagem-escolha-img-area">
                            <img className="imagem-escolha-slider-img" src={pics} alt={`Imagem de perfil ${i}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev">
                <RiArrowLeftSLine className="imagem-escolha-icon" />
            </div>
            <div className="swiper-button-next">
                <RiArrowRightSLine className="imagem-escolha-icon" />
            </div>
            </div>
        </div>
    );
}