import { RiEmotionHappyFill, RiSendPlane2Fill } from "react-icons/ri";
import "./styles.css";

export default function ChatBarraMensagem() {
    return (
        <div className="chat-msg-barra-area">
            <div className="chat-msg-barra">
                <input 
                    className="chat-msg-input"
                    placeholder="Digite sua mensagem"
                    type="text"
                />
                <div className="chat-msg-icone-area">    
                    <RiEmotionHappyFill className="chat-msg-icone" fontSize={35} />
                    <RiSendPlane2Fill className="chat-msg-icone" fontSize={35} />
                </div>
            </div>
        </div>
    );
}