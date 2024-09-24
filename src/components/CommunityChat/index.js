import React, { useState } from "react";
import "./styles.css";
import ChatHeader from "./ChatHeader";
import ChatTopicos from "./ChatTopics";
import ChatMensagem from "./ChatMessage";

export default function ChatComunidade() {
    const [activeChannel, setActiveChannel] = useState("chat-geral");

    return (
        <div className="comunidade-chat">
            <ChatHeader />
            <ChatTopicos />
            <ChatMensagem />
        </div>
    );
}