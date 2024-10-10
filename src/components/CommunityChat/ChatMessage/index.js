import "./styles.css";
import logoMono from "../../../assets/logo-animelink-mono.svg";
import ChatBarraMensagem from "../ChatMessageBar";
import ChatBox from "../ChatBox";
import { useUser } from "../../../services/UserContext";

export default function ChatMensagem({ canalAtivo }) {
    const { user } = useUser();
    return (
        <div className="chat-mensagem-area">
            <h1 className="chat-mensagem-titulo">{canalAtivo}</h1>
            <img className="chat-mensagem-img" src={logoMono} width={91} alt="Logo Monocromático" />
            <div className="chat-msg-container">
                <ChatBox userSms={user?.name}/>
            </div>
            <ChatBarraMensagem />
        </div>
    );
}