import React, { useEffect, useState } from "react";
import "./styles.css";
import imgPadrao from "../../../assets/Images/SignUp/profile-pic-choosen.jpeg";
import { AreaEscolhaImagem } from "./ChoosePic";
import { useProfileImage } from "../../../services/PicContext";

export function AreaImagemPerfil() {
    const { setProfileImage } = useProfileImage();

    // Mudança de imagens
    const [imgSelecionada, setImgSelecionada] = useState(imgPadrao);
    const [animation, setAnimation] = useState("");

    const handleSetImgSelecionada = (novaImg) => {
        // Inicia a animação de opacidade 0
        setAnimation("fade-out");

        setTimeout(() => {
            setImgSelecionada(novaImg); // Atualização da imagem
            setProfileImage(novaImg); // Definição de imagem no context
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
                <AreaEscolhaImagem setImgSelecionada={handleSetImgSelecionada} />
                <button className="imagem-perfil-botao" onClick={() => handleSetImgSelecionada(imgPadrao)}>Padrão</button>
            </div>
        </div>
    );
}