import { useState } from "react";
import "./styles.css";

export default function ChatTopicos({ setCanalAtivo }) {
    const [activeChannel, setActiveChannel] = useState("");
    
    const handleChannelClick = (canal) => {
        setActiveChannel(canal);
        setCanalAtivo(canal);
    }

    return (
        <div className="chat-topicos">
            <h1 className="chat-topicos-titulo">Anime</h1>
            <div className="chat-topicos-canais">
                <p
                    className={`chat-topicos-canal ${activeChannel === "chat geral" ? "active" : ""}`}
                    onClick={() => handleChannelClick("chat geral")}
                >
                    chat geral
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "perguntas" ? "active" : ""}`}
                    onClick={() => handleChannelClick("perguntas")}
                >
                    perguntas
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "artes" ? "active" : ""}`}
                    onClick={() => handleChannelClick("artes")}
                >
                    artes
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "notícias" ? "active" : ""}`}
                    onClick={() => handleChannelClick("notícias")}
                >
                    notícias
                </p>
                <p
                    className={`chat-topicos-canal ${activeChannel === "eventos" ? "active" : ""}`}
                    onClick={() => handleChannelClick("eventos")}
                >
                    eventos
                </p>
            </div>
        </div>
    );
}