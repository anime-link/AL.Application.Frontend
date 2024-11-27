import { RiEmotionHappyFill, RiSendPlane2Fill } from "react-icons/ri";
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

        axios.get(`https://api.animeslink.com.br/mensagens?chatId=${chatId}`)
            .then((response) => {
                setMessages(response.data);
                scrollToBottom();
            })
            .catch((error) => {
                console.error('Erro ao carregar mensagens:', error);
            });
    }, [chatId]);

    useEffect(() => {
        const webSocket = new WebSocket(`wss://api.animeslink.com.br/chat/${chatId}`);
        setSocket(webSocket);

        webSocket.onopen = () => {
            console.log('WebSocket conectado');
        };

        webSocket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setTimeout(scrollToBottom, 100);
        };

        webSocket.onclose = () => {
            console.log('WebSocket desconectado');
        };

        webSocket.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        return () => {
            webSocket.close();
        };
    }, [chatId]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && socket && socket.readyState === WebSocket.OPEN) {
            const newMessage = { usuario: user.name, conteudo: message, chatId };

            // Enviar a mensagem pelo WebSocket
            socket.send(JSON.stringify(newMessage));

            // Limpar a mensagem
            setMessage('');

            scrollToBottom();

        } else {
            alert('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
        }
    };

    useEffect(() => {
        scrollToBottom();
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
                    <RiSendPlane2Fill className="chat-msg-icone" fontSize={35} onClick={handleSendMessage} />
                </button>
            </form>
            <div ref={messagesEndRef} />
        </div>
    );
}