import React, { useEffect, useRef } from "react";
import "./styles.css";
import logoMono from "../../../assets/logo-animelink-mono.svg";
import ChatBarraMensagem from "../ChatMessageBar";
import ChatBox from "../ChatBox";
import { useUser } from "../../../services/UserContext";

export default function ChatMensagem({ chatId }) { // Removei "canalAtivo" e usei apenas "chatId"
    const { user, messages } = useUser();
    const containerRef = useRef(null); // Referência ao contêiner principal das mensagens

    // Define os nomes dos chats
    const nomesDosChats = {
        1: "Naruto",
        2: "Bleach",
        3: "Demon Slayer",
        4: "Dragon Ball",
        5: "One Piece",
        6: "Fullmetal Alchemist"
    };

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
            {/* Exibe o nome do chat com base no ID ou um fallback padrão */}
            <h1 className="chat-mensagem-titulo">
                {nomesDosChats[chatId] || "Chat Desconhecido"}
            </h1>
            <img className="chat-mensagem-img" src={logoMono} width={91} alt="Logo Monocromático" />
            <div ref={containerRef} className="chat-msg-container">
                <ChatBox userSms={user?.name} />
            </div>
            <ChatBarraMensagem chatId={chatId} />
        </div>
    );
}
