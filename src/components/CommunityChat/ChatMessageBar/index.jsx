import { RiSendPlane2Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./styles.css";
import { useUser } from "../../../services/UserContext";

export default function ChatBarraMensagem() {
    const { user, setMessages } = useUser();
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);
    const chatId = 1;
    const socketRef = useRef(null); // Ref para garantir uma única instância do WebSocket

    // Função para rolar automaticamente até a última mensagem
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Carregar as mensagens do banco
    useEffect(() => {
        if (user) {
            console.log("User Data: ", user?.name);
        } else {
            console.log("User not found");
        }

        // Carregar mensagens do banco de dados
        axios.get(`https://api.animeslink.com.br/mensagens?chatId=${chatId}`)
            .then((response) => {
                const invertedMessages = response.data;
                setMessages(invertedMessages);
                setTimeout(scrollToBottom, 100); // Ajustar o scroll após carregar
            })
            .catch((error) => {
                console.error('Erro ao carregar mensagens:', error);
            });
    }, [chatId, user, setMessages]);

    // Estabelecer conexão WebSocket
    const connectWebSocket = () => {
        const webSocket = new WebSocket(`wss://api.animeslink.com.br/chat/${chatId}`);
        socketRef.current = webSocket;

        webSocket.onopen = () => {
            console.log('WebSocket conectado');
        };

        webSocket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);

            // Adicionar nova mensagem e rolar para o final
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setTimeout(scrollToBottom, 100);
        };

        webSocket.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        webSocket.onclose = () => {
            console.log('WebSocket desconectado, tentando reconectar...');
            setTimeout(connectWebSocket, 5000);
        };
    };

    useEffect(() => {
        if (!socketRef.current) {
            connectWebSocket();
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [chatId]);

    // Enviar uma nova mensagem
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            const newMessage = { usuario: user.name, conteudo: message, chatId };

            // Enviar mensagem pelo WebSocket
            socketRef.current.send(JSON.stringify(newMessage));

            // Limpar input e rolar para o final
            setMessage('');
            setTimeout(scrollToBottom, 100);
        } else {
            alert('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="chat-msg-barra-area">
            <div className="chat-msg-area">
                {/* Div oculta usada para rolar ao final */}
                <div ref={messagesEndRef} />
            </div>
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
        </div>
    );
}