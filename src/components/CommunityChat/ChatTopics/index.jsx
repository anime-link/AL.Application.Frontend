import { useState } from "react";
import "./styles.css";
import community1 from '../../../assets/Images/Communities/community1.png';
import community2 from '../../../assets/Images/Communities/community2.png';
import community3 from '../../../assets/Images/Communities/community3.png';
import community4 from '../../../assets/Images/Communities/community4.png';
import community5 from '../../../assets/Images/Communities/community5.png';
import community6 from '../../../assets/Images/Communities/community6.png';

export default function ChatTopicos({ setCanalAtivo, chatId }) {
    const [activeChannel, setActiveChannel] = useState("");

    const communitiesImg = {
        1: community1,
        2: community2,
        3: community3,
        4: community4,
        5: community5,
        6: community6,
    }

    const handleChannelClick = (canal) => {
        setActiveChannel(canal);
        setCanalAtivo(canal);
    }

    return (
        <div className="chat-topicos">
            <h1 className="chat-topicos-titulo">Anime</h1>
            <div className="chat-topicos-canais">
                {["chat geral"].map((canal) => (
                    <p
                        key={canal}
                        className={`chat-topicos-canal ${activeChannel === canal ? "active" : ""}`}
                        onClick={() => handleChannelClick(canal)}
                    >
                        {canal}
                    </p>
                ))}
            </div>
            <div className="chat-topicos-img">
                <img src={communitiesImg[chatId] || null} alt="Imagem da comunidade" width={140} height={140} />
                <p>Comunidade</p>
            </div>
        </div>
    );
}