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

        axios.get(`http://localhost:8080/mensagens?chatId=${chatId}`)
          .then((response) => {
            setMessages(response.data);
            scrollToBottom();
          })
          .catch((error) => {
            console.error('Erro ao carregar mensagens:', error);
          });
    }, [chatId]);

    useEffect(() => {
        const webSocket = new WebSocket(`ws://localhost:8080/chat/${chatId}`);
        setSocket(webSocket);
    
        webSocket.onopen = () => {
          console.log('WebSocket conectado');
        };
    
        webSocket.onmessage = (event) => {
          const newMessage = JSON.parse(event.data);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
          scrollToBottom();
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
            const newMessage = { usuario: user.id, conteudo: message, chatId };
            socket.send(JSON.stringify(newMessage));
            setMessage('');
            console.log(message, 'oioi')
            setMessages(message)
        } else {
            alert('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="chat-msg-barra-area">
            <div className="chat-msg-barra">
                <input
                    className="chat-msg-input"
                    type="text"
                    placeholder="Digite uma mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <div className="chat-msg-icone-area">
                    <RiEmotionHappyFill className="chat-msg-icone" fontSize={35} />
                    <RiSendPlane2Fill className="chat-msg-icone" fontSize={35} onClick={handleSendMessage} />
                </div>
            </div>
            <div ref={messagesEndRef} />
        </div>
    );
}
