import React, { useState } from "react";
import "./styles.css";
import imgPadrao from "../../../assets/Images/SignUp/profile-pic-choosen.png";
import { AreaEscolhaImagem } from "./ChoosePic";

export function AreaImagemPerfil() {
    return(
        <div className="imagem-perfil-area">
            <div className="imagem-perfil-escolher">
                <img className="imagem-perfil" src={imgPadrao} alt="Imagem de perfil" />
                <AreaEscolhaImagem />
                <button className="imagem-perfil-botao">Padrão</button>
            </div>
        </div>
    );
}