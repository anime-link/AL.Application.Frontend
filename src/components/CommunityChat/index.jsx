import React, { useState } from "react";
import "./styles.css";
import ChatHeader from "./ChatHeader";
import ChatTopicos from "./ChatTopics";
import ChatMensagem from "./ChatMessage";

export default function ChatComunidade() {
    const [canalAtivo, setCanalAtivo] = useState("canal");

    return (
        <div className="comunidade-chat">
            <ChatHeader />
            <ChatTopicos setCanalAtivo={setCanalAtivo} />
            <ChatMensagem  canalAtivo={canalAtivo} />
        </div>
    );
}