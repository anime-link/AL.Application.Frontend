import React from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";
import { BotaoCadastro } from "./SignUpButton";
import { RiCloseCircleFill } from "react-icons/ri";

export function AreaCadastro() {
    return(
        <div className="cadastro-area">
            <div className="cadastro-icone-fechar-area">
                <RiCloseCircleFill className="cadastro-icone-fechar" alt="Fechar" />
            </div> 
            <h1 className="cadastro-area-titulo">Cadastro</h1>
            <CamposCadastro title={"Nome completo"} placeholder={"Seu nome"} type={"text"} />
            <CamposCadastro title={"Data de nascimento"} type={"date"} />
            <CamposCadastro title={"Usuário"} placeholder={"Usuário"} type={"text"} />
            <CamposCadastro title={"Senha"} placeholder={"Senha"} type={"password"} />
            <BotaoCadastro />
        </div>
    );
}