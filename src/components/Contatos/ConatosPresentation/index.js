import React from 'react';
import "./styles.css";
import { RiGlasses2Fill } from "react-icons/ri";
import { RiUserVoiceFill } from "react-icons/ri";

export default function ContatosBemVindo() {
    return (
        <div className="bemVindos-area">
            <div className="boasVindas-titulo">
                <h3>Bem Vindo a</h3>
                <h3>pagína de contatos</h3>
            </div>

            <div className="boasVindas-cont">
                <div className="contate-nos" >
                    <RiUserVoiceFill  className="boasVindas-icon" />
                    <p>Contate-nos para nos dar sugestões</p>
                </div>
                <div className="admins">
                    <RiGlasses2Fill  className="boasVindas-icon" />
                    <p>Conheça os criadores do projeto</p>
                </div>
            </div>

        </div>
    );

}