import React, { useEffect, useRef } from "react";
import "./styles.css";
import logoMono from "../../../assets/logo-animelink-mono.svg";
import ChatBarraMensagem from "../ChatMessageBar";
import ChatBox from "../ChatBox";
import { useUser } from "../../../services/UserContext";

export default function ChatMensagem({ canalAtivo }) {
    const { user, messages } = useUser();
    const containerRef = useRef(null); // Referência ao contêiner principal das mensagens

    // Função para rolar automaticamente para a última mensagem
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    // Rolar para o final ao carregar ou receber novas mensagens
    useEffect(() => {
        scrollToBottom();
    }, [messages]); // Dispara quando mensagens mudarem

    return (
        <div className="chat-mensagem-area">
            <h1 className="chat-mensagem-titulo">{canalAtivo}</h1>
            <img className="chat-mensagem-img" src={logoMono} width={91} alt="Logo Monocromático" />
            <div ref={containerRef} className="chat-msg-container">
                <ChatBox userSms={user?.name} />
            </div>
            <ChatBarraMensagem />
        </div>
    );
}