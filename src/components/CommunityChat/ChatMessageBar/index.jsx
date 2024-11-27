import { RiSendPlane2Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./styles.css";
import { useUser } from "../../../services/UserContext";

export default function ChatBarraMensagem() {
    const { user, setMessages } = useUser();
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const messagesEndRef = useRef(null);
    const chatId = 1;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (user) {
            console.log("User Data: ", user?.name);
        } else {
            console.log("User not found");
        }

        // Carregar as mensagens do banco de dados (invertendo a ordem)
        axios.get(`https://api.animeslink.com.br/mensagens?chatId=${chatId}`)
            .then((response) => {
                // Inverte a ordem para que a mais recente venha primeiro
                const reversedMessages = response.data.reverse();
                setMessages(reversedMessages);
                scrollToBottom(); // Garante que o scroll vai para o final ao carregar
            })
            .catch((error) => {
                console.error('Erro ao carregar mensagens:', error);
            });
    }, [chatId]);

    // Função para estabelecer a conexão WebSocket
    const connectWebSocket = () => {
        const webSocket = new WebSocket(`wss://api.animeslink.com.br/chat/${chatId}`);
        setSocket(webSocket);

        webSocket.onopen = () => {
            console.log('WebSocket conectado');
        };

        webSocket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [newMessage, ...prevMessages]);  // Adiciona a nova mensagem no início
            setTimeout(scrollToBottom, 100); // Garante que o scroll vá para baixo ao receber nova mensagem
        };

        webSocket.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        webSocket.onclose = (event) => {
            console.log('WebSocket desconectado, tentando reconectar...');
            setTimeout(connectWebSocket, 5000);  // Tenta reconectar após 5 segundos
        };
    };

    useEffect(() => {
        // Conectar ao WebSocket assim que o componente for montado
        connectWebSocket();

        // Limpeza ao desmontar o componente
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [chatId]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && socket && socket.readyState === WebSocket.OPEN) {
            const newMessage = { usuario: user.name, conteudo: message, chatId };

            // Enviar a mensagem pelo WebSocket
            socket.send(JSON.stringify(newMessage));

            // Limpar a mensagem e garantir que o scroll vá para baixo
            setMessage('');
            setTimeout(scrollToBottom, 100);
        } else {
            alert('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
        }
    };

    useEffect(() => {
        scrollToBottom();  // Garantir que o scroll vai para baixo quando o conteúdo da mensagem mudar
    }, [message]);

    return (
        <div className="chat-msg-barra-area">
            <form className="chat-msg-barra" onSubmit={handleSendMessage}>
                <input
                    className="chat-msg-input"
                    type="text"
                    placeholder="Digite uma mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button className="chat-msg-icone-area" type="submit">
                    <RiSendPlane2Fill className="chat-msg-icone" fontSize={35} />
                </button>
            </form>
            <div ref={messagesEndRef} />
        </div>
    );
}