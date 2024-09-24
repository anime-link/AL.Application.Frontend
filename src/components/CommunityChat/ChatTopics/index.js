import { useState } from "react";
import "./styles.css";

export default function ChatTopicos() {
    const [activeChannel, setActiveChannel] = useState("");
    
    return (
        <div className="chat-topicos">
            <h1 className="chat-topicos-titulo">Anime</h1>
            <div className="chat-topicos-canais">
                <p
                    className={`chat-topicos-canal ${activeChannel === "chat geral" ? "active" : ""}`}
                    onClick={() => setActiveChannel("chat geral")}
                >
                    chat geral
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "perguntas" ? "active" : ""}`}
                    onClick={() => setActiveChannel("perguntas")}
                >
                    perguntas
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "artes" ? "active" : ""}`}
                    onClick={() => setActiveChannel("artes")}
                >
                    artes
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "notícias" ? "active" : ""}`}
                    onClick={() => setActiveChannel("notícias")}
                >
                    notícias
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "eventos" ? "active" : ""}`}
                    onClick={() => setActiveChannel("eventos")}
                >
                    eventos
                </p>
            </div>
        </div>
    );
}