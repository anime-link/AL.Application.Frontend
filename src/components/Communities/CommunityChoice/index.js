import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function ComunidadesEscolha({ comunidades }) {

    // useState começa no primeiro item
    const [indexAtual, setIndexAtual] = useState(comunidades.length);

    // Quantas imagens aparecerão no slider
    const imgsPorSlider = 4;

    // Duplicar as imagens
    const sliderRef = useRef();

    // Array de duplicação de imagens
    const totalComunidades = [...comunidades, ...comunidades, ...comunidades];

    // Função para passar o slide
    const proxSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide === comunidades.length - 1 ? 0 : antSlide + 1
        );
    };

    // Função para voltar o slide
    const antSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide === 0 ? comunidades.length - 1 : antSlide - 1
        );
    };

    const imgsMostradas = [];
    for (let i = 0; i < imgsPorSlider; i++) {
        imgsMostradas.push(comunidades[(indexAtual + 1) % comunidades.length]);
    }

    // useEffect para quando o index atingir seu limite,
    // volta para o ponto correto da array
    useEffect(() => {
        if (indexAtual === totalComunidades.length - imgsPorSlider) {
            setTimeout(() => {
                sliderRef.current.style.transition = 'none';
                setIndexAtual(comunidades.length);
                sliderRef.current.style.transition = 'transform 0.5s ease';
            }, 500);
        }

        if (indexAtual === 0) {
            setTimeout(() => {
                sliderRef.current.style.transition = 'none';
                setIndexAtual(comunidades.length);
                sliderRef.current.style.transition = 'transform 0.5s ease';
            }, 500);
        }
    }, [indexAtual, comunidades.length, totalComunidades.length]);

    return (
        <div className="comunidade-escolha">
            <h1 className="comunidade-escolha-titulo">Comunidades</h1>
            <div className="comunidade-escolha-slider-area">
                <RiArrowLeftSLine className="comunidade-escolha-antes" onClick={antSlide} />
                <div 
                    className="comunidade-escolha-slider"
                    ref={sliderRef} 
                    style={{ transform:`translateX(-${indexAtual * (100 / imgsPorSlider)}%)` }}
                >
                    {totalComunidades.map((img, index) => (
                       <img 
                            className="comunidade-escolha-img" 
                            src={img} 
                            key={index} 
                            alt={`Comunidade ${indexAtual + index}`} 
                        />
                    ))}
                </div>
                <RiArrowRightSLine className="comunidade-escolha-depois" onClick={proxSlide} />
            </div>
        </div>
    );
}