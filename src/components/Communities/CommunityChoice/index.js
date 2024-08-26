import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function ComunidadesEscolha({ comunidades }) {

    // useState começa no primeiro item
    const [indexAtual, setIndexAtual] = useState(0);

    // Quantas imagens aparecerão no slider
    const imgsPorSlider = 4;

    // Função para passar o slide
    const proxSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide < comunidades.length - imgsPorSlider ? antSlide + 1 : antSlide
        );
    };

    // Função para voltar o slide
    const antSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide > 0 ? antSlide - 1 : antSlide
        );
    };

    const imgsMostradas = [];
    for (let i = 0; i < imgsPorSlider; i++) {
        if (indexAtual + i < comunidades.length) {
            imgsMostradas.push(comunidades[indexAtual + i]);   
        }
    }

    return (
        <div className="comunidade-escolha">
            <h1 className="comunidade-escolha-titulo">Comunidades</h1>
            <div className="comunidade-escolha-slider-area">
                <RiArrowLeftSLine className="comunidade-escolha-antes" onClick={antSlide} />
                <div 
                    className="comunidade-escolha-slider"
                    style={{ transform:`translateX(-${indexAtual * (100 / imgsPorSlider)}%)` }}
                >
                    {comunidades.map((img, index) => (
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