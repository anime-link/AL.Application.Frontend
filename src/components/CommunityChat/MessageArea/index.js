import React from "react";
import "./styles.css";
import Mensagem from "../Message";
import logoMono from "../../../assets/logo-animelink-mono.svg";

export default function MensagemArea() {
    return ( 
        <div className="chat-mensagem-container">
            <div className="chat-mensagem-caixa">
                <img className="chat-mensagem-logo" src={logoMono} alt="Logo monocromatica" />
                <Mensagem placeholder={"Digite sua mensagem"} />
            </div>
        </div>
    );
}