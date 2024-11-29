import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useUser } from "../../../services/UserContext";

export default function ChatBox({ userSms }) {
    const { messages } = useUser();
    const containerRef = useRef(null); // Referência para o contêiner das mensagens
    const lastMessageRef = useRef(null); // Referência para a última mensagem

    // Função para rolar suavemente para a última mensagem
    const scrollToBottom = () => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Rolar para o final ao carregar ou receber novas mensagens
    useEffect(() => {
        scrollToBottom();
    }, [messages]); // Dispara sempre que o estado de mensagens mudar

    return (
        <div ref={containerRef} className="container-menssager">
            {messages && messages.map((msg, index) => (
                <div
                    key={index}
                    ref={index === messages.length - 1 ? lastMessageRef : null} // Adiciona ref à última mensagem
                    className={msg.usuario === userSms ? 'mensagem-direita' : 'mensagem-esquerda'}
                >
                    <span>{msg.usuario}</span>
                    <p>{msg.conteudo}</p>
                </div>
            ))}
        </div>
    );
}