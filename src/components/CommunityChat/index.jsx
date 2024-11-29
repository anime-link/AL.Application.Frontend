import React, { useState } from "react";
import "./styles.css";
import ChatHeader from "./ChatHeader";
import ChatTopicos from "./ChatTopics";
import ChatMensagem from "./ChatMessage";
import { useParams } from "react-router-dom";

export default function ChatComunidade() {
    const { chatId } = useParams(); // Extrai o ID do chat da URL
    const [canalAtivo, setCanalAtivo] = useState("canal");

    return (
        <div className="comunidade-chat">
            <ChatHeader />
            <ChatTopicos setCanalAtivo={setCanalAtivo} />
            <ChatMensagem canalAtivo={canalAtivo} chatId={chatId} /> {/* Passa o ID */}
        </div>
    );
}