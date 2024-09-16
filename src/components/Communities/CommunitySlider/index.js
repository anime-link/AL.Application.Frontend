import "./styles.css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

export default function ComunidadeSlider ({ images }) {
    return (
        <div className="comunidade-slider-area">
            <Swiper
                modules={[Navigation, EffectCoverflow, Autoplay, Pagination]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 100,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true, 
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="comunidade-slide">
                            <div className="comunidade-img-nome">
                                <img 
                                    className="comunidade-slide-img" 
                                    src={img} 
                                    alt={`Anime ${i}`} 
                                />
                                <p className="comunidade-slide-nome">Comunidade</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}