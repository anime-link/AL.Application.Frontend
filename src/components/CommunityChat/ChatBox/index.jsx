import React from "react";
import "./styles.css";
import { useUser } from "../../../services/UserContext";

export default function ChatBox({ userSms }) {
    const { messages } = useUser();

    return (
        <div className="container-menssager">
            {messages && messages.map((msg, index) => {
                return (
                    <div key={index} className={msg.usuario === userSms ? 'mensagem-direita' : 'mensagem-esquerda'}>
                        <span>{msg.usuario}</span>
                        <p>{msg.conteudo}</p>
                    </div>
                );
            })}
        </div>
    );
}
