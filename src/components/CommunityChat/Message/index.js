import React from "react";
import "./styles.css";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function Mensagem({ placeholder }) {
    return (
        <div className="chat-caixa-mensagem">
            <input 
                className="chat-mensagem" 
                type="text"
                placeholder={placeholder} 
            />
            <RiSendPlane2Fill className="chat-mensagem-icon" />
        </div>
    );
}