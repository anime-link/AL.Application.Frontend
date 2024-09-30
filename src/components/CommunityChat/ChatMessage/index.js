import "./styles.css";
import logoMono from "../../../assets/logo-animelink-mono.svg";
import ChatBarraMensagem from "../ChatMessageBar";

export default function ChatMensagem({ canalAtivo }) {
    return (
        <div className="chat-mensagem-area">
            <h1 className="chat-mensagem-titulo">{canalAtivo}</h1>
            <img className="chat-mensagem-img" src={logoMono} width={91} alt="Logo Monocromático" />
            <ChatBarraMensagem />
        </div>
    );
}