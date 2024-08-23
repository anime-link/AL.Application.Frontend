import React, { useState } from "react";
import "./styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import community1 from "../../../assets/Images/Communities/community1.png";
import community2 from "../../../assets/Images/Communities/community2.png";
import community3 from "../../../assets/Images/Communities/community3.png";
import community4 from "../../../assets/Images/Communities/community4.png";

export default function ComunidadesEscolha({ comunidades }) {
    const imgComunidades = [
        community1,
        community2,
        community3,
        community4
    ];

    const [index, setIndex] = useState(0);

    // Quantas imagens aparecerão no slider
    const imgsPorSlider = 4;

    // Função para passar o slider
    const mudarImagem = (direcao) => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + direcao * imgsPorSlider;
            
            if (newIndex < 0) {
                newIndex = imgComunidades.length - imgsPorSlider;     
            } else if (newIndex >= imgComunidades.length) {
                newIndex = 0;
            }

            return newIndex;
        });
    }

    // Função de quantas imagens vão aparecer no slider
    const imgsMostradas = () => {
        let img = [];

        for (let i = 0; i < imgsPorSlider; i++) {
            img.push(imgComunidades[(index + i) % imgComunidades.length]);
            
        }

        return img;
    }

    return (
        <div className="comunidade-escolha">
            <h1 className="comunidade-escolha-titulo">Comunidades</h1>
            <div className="comunidade-escolha-slider-area">
                <RiArrowLeftSLine className="comunidade-escolha-antes" onClick={() => mudarImagem(-1)} />
                <div className="comunidade-escolha-slider">
                    {imgsMostradas().map((img, index) => (
                       <img className="comunidade-escolha-img" src={img} key={index} alt={`Comunidade ${index}`} />
                    ))}
                </div>
                <RiArrowRightSLine className="comunidade-escolha-depois" onClick={() => mudarImagem(1)} />
            </div>
        </div>
    );
}