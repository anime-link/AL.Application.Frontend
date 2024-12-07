import React, { useState } from "react";
import "./styles.css";
import ChatHeader from "./ChatHeader";
import ChatTopicos from "./ChatTopics";
import ChatMensagem from "./ChatMessage";
import { useParams } from "react-router-dom";

import community1 from '../../assets/Images/Communities/community1.png';
import community2 from '../../assets/Images/Communities/community2.png';
import community3 from '../../assets/Images/Communities/community3.png';
import community4 from '../../assets/Images/Communities/community4.png';
import community5 from '../../assets/Images/Communities/community5.png';
import community6 from '../../assets/Images/Communities/community6.png';

export default function ChatComunidade() {
    const { chatId } = useParams(); // Extrai o ID do chat da URL
    const [canalAtivo, setCanalAtivo] = useState("canal");

    const communitiesImg = {
        1: community1,
        2: community2,
        3: community3,
        4: community4,
        5: community5,
        6: community6,
    };

    return (
        <div className="comunidade-chat" style={{ backgroundImage: `url(${communitiesImg[chatId]})` || null }}>
            <ChatHeader />
            <ChatTopicos setCanalAtivo={setCanalAtivo} chatId={chatId} />
            <ChatMensagem canalAtivo={canalAtivo} chatId={chatId} /> {/* Passa o ID */}
        </div>
    );
}