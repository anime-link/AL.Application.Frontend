import React, { useState } from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";
import { BotaoCadastro } from "./SignUpButton";
import { AreaImagemPerfil } from "../ChosePicArea"
import { RiArrowLeftCircleFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function AreaCadastro() {
    // Estado do sidebar estar visível ou não
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    // Função que ativa a área lateral
    const ativarSideBar = () => {
        setIsSideBarVisible(!isSideBarVisible);
    }

    return(
        <div className="cadastro-area">
            {isSideBarVisible && (
                <div className={`cadastro-lateral ${isSideBarVisible ? "visivel" : ""}`}>
                    <AreaImagemPerfil />
                </div>
            )}
            <div className="cadastro-icone-fechar-area">
                <Link className="cadastro-icone-link" to={"/"}>
                    <RiArrowLeftCircleFill className="cadastro-icone-fechar" />
                </Link>
            </div> 
            <h1 className="cadastro-area-titulo">Cadastro</h1>
            <div className="cadastro-input-area">
                <CamposCadastro placeholder={"Seu nome"} type={"text"}/>
                <CamposCadastro placeholder={"Criar usuário"} type={"text"} />
                <CamposCadastro placeholder={"Criar senha"} type={"text"}/>
                <CamposCadastro placeholder={"Confirmar senha"} type={"password"} />
            </div>
            <BotaoCadastro/>
            <div onClick={ativarSideBar} className="cadastro-mudar-img">
                {isSideBarVisible ? (
                    <RiArrowRightSLine className="cadastro-mudar-icon" />
                ) : (
                    <RiArrowLeftSLine className="cadastro-mudar-icon" />
                )}
            </div>
        </div>
    );
}