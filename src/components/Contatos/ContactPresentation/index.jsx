import "./styles.css";
import React from 'react';
import { RiGlasses2Fill } from "react-icons/ri";
import { RiUserVoiceFill } from "react-icons/ri";

export default function ContatosBemVindo() {
    return (
        <div className="bemVindos-area">
            <h1 className="boasVindas-titulo">
                Bem Vindo a pagína de contatos
            </h1>

            <div className="boasVindas-cont">
                <div className="contate-nos" >
                    <RiUserVoiceFill  className="boasVindas-icon" fontSize={75} />
                    <p>Contate-nos para nos dar sugestões</p>
                </div>
                <div className="admins">
                    <RiGlasses2Fill  className="boasVindas-icon" fontSize={75} />
                    <p>Conheça os criadores do projeto</p>
                </div>
            </div>

        </div>
    );

}