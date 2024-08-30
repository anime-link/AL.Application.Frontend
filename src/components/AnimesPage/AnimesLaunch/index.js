
import { React, useEffect, useRef, useState } from "react";
import "./styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
export default function AnimesesLancamentos({ animes }) {

    // useState começa no primeiro item
    const [indexAtual, setIndexAtual] = useState(0);

    // Quantas imagens aparecerão no slider
    const imgsPorSlider = 4;

    // Função para passar o slide
    const proxSlide = () => {
        setIndexAtual((antSlide) =>
            antSlide < animes.length - imgsPorSlider ? antSlide + 1 : antSlide
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
        if (indexAtual + i < animes.length) {
            imgsMostradas.push(animes[indexAtual + i]);   
        }
    }

    return (
        <div className="animes-escolha">
            <h1 className="animes-escolha-titulo">Lan</h1>
            <div className="animes-escolha-slider-area">
                <RiArrowLeftSLine className="animes-escolha-antes" onClick={antSlide} />
                <div 
                    className="animes-escolha-slider"
                    style={{ transform:`translateX(-${indexAtual * (100 / imgsPorSlider)}%)` }}
                >
                    {animes.map((img, index) => (
                       <img 
                            className="animes-escolha-img" 
                            src={img} 
                            key={index} 
                            alt={`animes ${indexAtual + index}`} 
                        />
                    ))}
                </div>
                <RiArrowRightSLine className="animes-escolha-depois" onClick={proxSlide} />
            </div>
        </div>
    );
}