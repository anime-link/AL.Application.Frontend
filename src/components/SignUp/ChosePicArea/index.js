import React, { useEffect, useState } from "react";
import "./styles.css";
import imgPadrao from "../../../assets/Images/SignUp/profile-pic-choosen.png";
import { AreaEscolhaImagem } from "./ChoosePic";
import blueLock from "../../../assets/Images/ProfilePics/blue-lock-pic.png";
import bnha from "../../../assets/Images/ProfilePics/bnha-pic.png";
import chainsaw from "../../../assets/Images/ProfilePics/chainsaw-man-pic.png";
import classroom from "../../../assets/Images/ProfilePics/classroom-pic.png";
import dbz from "../../../assets/Images/ProfilePics/dbz-pic.png";
import demon from "../../../assets/Images/ProfilePics/demon-slayer-pic.png";
import stone from "../../../assets/Images/ProfilePics/dr-stone-pic.png";
import frieren from "../../../assets/Images/ProfilePics/frieren-pic.png";
import goblin from "../../../assets/Images/ProfilePics/goblin-slayer-pic.png";
import hxh from "../../../assets/Images/ProfilePics/hxh-pic.png";
import jibaku from "../../../assets/Images/ProfilePics/jibaku-pic.png";
import naruto from "../../../assets/Images/ProfilePics/naruto-pic.png";
import pokemon from "../../../assets/Images/ProfilePics/pokemon-pic.png";
import spy from "../../../assets/Images/ProfilePics/spy-family-pic.png";
import tokyo from "../../../assets/Images/ProfilePics/tokyo-revengers-pic.png";

export function AreaImagemPerfil() {
    // Array das imagens de perfil
    const profilePics = [
        blueLock,
        bnha,
        chainsaw,
        classroom,
        dbz,
        demon,
        stone,
        frieren,
        goblin,
        hxh,
        jibaku,
        naruto,
        pokemon,
        spy,
        tokyo
    ];

    // Mudança de imagens
    const [imgSelecionada, setImgSelecionada] = useState(imgPadrao);
    const [animation, setAnimation] = useState("");

    const handleSetImgSelecionada = (novaImg) => {
        // Inicia a animação de opacidade 0
        setAnimation("fade-out");

        setTimeout(() => {
            setImgSelecionada(novaImg); // Atualização da imagem
            setAnimation("fade-in") // Inica a animação de opacidade 1
        }, 300);
    };

    useEffect(() => {
        if (animation === "fade-in") {
            const tempo = setTimeout(() => {
                setAnimation("");
            }, 300)
            return () => clearTimeout(tempo);
        }
    }, [animation]);

    return(
        <div className="imagem-perfil-area">
            <div className="imagem-perfil-escolher">
                <img 
                    className={`imagem-perfil ${animation}`} 
                    src={imgSelecionada} 
                    alt="Imagem de perfil" 
                />
                <AreaEscolhaImagem img={profilePics} setImgSelecionada={handleSetImgSelecionada} />
                <button className="imagem-perfil-botao" onClick={() => handleSetImgSelecionada(imgPadrao)}>Padrão</button>
            </div>
        </div>
    );
}