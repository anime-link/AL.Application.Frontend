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
    const socketRef = useRef(null);  // Ref para garantir uma única instância do WebSocket


    const handleScrollfinal = () => {
        const target = document.querySelector('.chat-msg-input');
        if (target) { 
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    const scrollToBottom = () => {
        console.log(messagesEndRef.current)
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    // Carregar as mensagens do banco
    useEffect(() => {
        if (user) {
            console.log("User Data: ", user?.name);
        } else {
            console.log("User not found");
        }

        // Carregar as mensagens do banco de dados e inverter a ordem para exibir mais antigas primeiro
        axios.get(`https://api.animeslink.com.br/mensagens?chatId=${chatId}`)
            .then((response) => {
                // Inverter a lista de mensagens para que as mais antigas fiquem no topo
                const invertedMessages = response.data;
                setMessages(invertedMessages); 
                
                scrollToBottom();  // Ajustar o scroll para o final quando as mensagens forem carregadas
            })
            .catch((error) => {
                console.error('Erro ao carregar mensagens:', error);
            });
    }, [chatId, user, setMessages]);    

    // Função para estabelecer a conexão WebSocket
    const connectWebSocket = () => {
        const webSocket = new WebSocket(`wss://api.animeslink.com.br/chat/${chatId}`);
        socketRef.current = webSocket;  // Armazenar o WebSocket na ref

        webSocket.onopen = () => {
            console.log('WebSocket conectado');
        };

        webSocket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            // Adicionar nova mensagem ao início da lista (de baixo para cima)

            setMessages((prevMessages) => [ ...prevMessages, newMessage]);
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
        if (!socketRef.current) {
            connectWebSocket();  // Conectar ao WebSocket apenas uma vez
        }

        // Limpeza ao desmontar o componente
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [chatId]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            const newMessage = { usuario: user.name, conteudo: message, chatId };

            // Enviar a mensagem pelo WebSocket
            socketRef.current.send(JSON.stringify(newMessage));

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
            <div className="chat-msg-area">
                {/* Exibir mensagens de baixo para cima */}
                {messagesEndRef.current && messagesEndRef.current.scrollTop === 0 && (
                    <div ref={messagesEndRef} />
                )}
                {/* Aqui renderizamos as mensagens */}
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
                    <RiSendPlane2Fill  className="chat-msg-icone" onClick={handleScrollfinal} fontSize={35} />
                </button>
            </form>
            
            <div ref={messagesEndRef} />
        </div>
    );
}