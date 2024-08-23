import React, { useEffect, useState } from "react";
import "./styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function ComunidadeSlider({ images, interval = 6500 }) {
    // useState para os indexes do slider
    const [indexAtual, setIndexAtual] = useState(0);

    // Função para passar o slide
    const proxSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide === images.length - 1 ? 0 : antSlide + 1
        );
    };

    // Função para voltar o slide
    const antSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide === 0 ? images.length - 1 : antSlide - 1
        );
    };

    // Função de intervalo entre os sliders
    useEffect(() => {
        const slideInterval = setInterval(proxSlide, interval);

        // Limpa o intervalo quando o slide é desmontado
        return () => clearInterval(slideInterval);
    }, [indexAtual, interval]);

    const goToSlide = (index) => {
        setIndexAtual(index);
    };
    
    
    return (
        <div className="comunidade-slider">
            <RiArrowLeftSLine className="comunidade-slider-antes" onClick={antSlide} />
            <div className="comunidade-slider-area" style={{'--index-atual': indexAtual}}>
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`comunidade-slide ${index === indexAtual ? "active" : ""}`}
                    >
                        <div className="comunidade-slide-nome-img">
                            <img className="comunidade-slide-img" src={image} alt={`Slide ${index}`} />
                            <h2 className="comunidade-slide-nome">Anime</h2>
                        </div>
                    </div>
                ))}
            </div>
            <RiArrowRightSLine className="comunidade-slider-depois" onClick={proxSlide} />
            <div className="comunidade-slider-indicador">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`comunidade-slider-indica ${index === indexAtual ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    >
                    </span>
                ))}
            </div>
        </div>   
    );
}