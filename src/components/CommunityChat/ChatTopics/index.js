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
                {["chat geral", "perguntas", "artes", "notícias", "eventos"].map((canal) => (
                    <p
                        key={canal}
                        className={`chat-topicos-canal ${activeChannel === canal ? "active" : ""}`}
                        onClick={() => handleChannelClick(canal)}
                    >
                        {canal}
                    </p>
                ))}
            </div>
        </div>
    );
}