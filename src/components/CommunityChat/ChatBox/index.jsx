import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useUser } from "../../../services/UserContext";

export default function ChatBox({ userSms }) {
    const { messages } = useUser();
    const containerRef = useRef(null); // Referência ao contêiner de mensagens

    // Função para rolar automaticamente para a última mensagem
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    // Efeito para rolar ao carregar mensagens ou ao receber novas
    useEffect(() => {
        scrollToBottom();
    }, [messages]); // Dispara o scroll sempre que mensagens mudarem

    return (
        <div ref={containerRef} className="container-menssager">
            {messages && messages.map((msg, index) => (
                <div
                    key={index}
                    className={msg.usuario === userSms ? 'mensagem-direita' : 'mensagem-esquerda'}
                >
                    <span>{msg.usuario}</span>
                    <p>{msg.conteudo}</p>
                </div>
            ))}
        </div>
    );
}