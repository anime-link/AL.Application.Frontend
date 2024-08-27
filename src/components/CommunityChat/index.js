import React, { useState } from "react";
import "./styles.css";
import ChatHeader from "./ChatHeader";
import MensagemArea from "./MessageArea";

export default function ChatComunidade() {
    const [activeChannel, setActiveChannel] = useState("chat-geral");

    return (
        <div className="comunidade-chat">
            <ChatHeader />
            <div className="chat-canais-conversa-area">
                <div className="chat-canais-area">
                    <h1 className="chat-canais-titulo">Anime</h1>
                    <div className="chat-canais-texto-area">
                        <p 
                        className={`chat-canais-texto ${activeChannel === "chat-geral" ? "active" : ""}`}
                        onClick={() => setActiveChannel("chat-geral")}
                        >
                            chat-geral
                        </p>
                        <p 
                        className={`chat-canais-texto ${activeChannel === "perguntas" ? "active" : ""}`}
                        onClick={() => setActiveChannel("perguntas")}
                        >
                            perguntas
                        </p>
                        <p 
                        className={`chat-canais-texto ${activeChannel === "fan-arts" ? "active" : ""}`}
                        onClick={() => setActiveChannel("fan-arts")}
                        >
                            fan-arts
                        </p>
                        <p 
                        className={`chat-canais-texto ${activeChannel === "fan-fics" ? "active" : ""}`}
                        onClick={() => setActiveChannel("fan-fics")}
                        >
                            fan-fics
                        </p>
                    </div>
                </div>
                <MensagemArea />
            </div>
        </div>
    );
}