import React from "react";
import "./styles.css";
import Mensagem from "../Message";

export default function MensagemArea() {
    return ( 
        <div className="chat-mensagem-container">
            <div className="chat-mensagem-caixa">
                <Mensagem placeholder={"Digite sua mensagem"} />
            </div>
        </div>
    );
}