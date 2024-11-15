import React from "react";
import "./styles.css";
import ChatComunidade from "../../components/CommunityChat";
import { useUser } from "../../services/UserContext";

export default function ComunidadeChat() {
    const { user } = useUser();

    return (
        <div className="chat-pagina">
            <ChatComunidade />
        </div>
    );
}