import { RiSendPlane2Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./styles.css";
import { useUser } from "../../../services/UserContext";

export default function ChatBarraMensagem() {
    const { user, setMessages } = useUser();
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);
    const socketRef = useRef(null); // Ref para garantir uma única instância do WebSocket
    const chatId = 1; // Identificador do chat

    // Função para rolar automaticamente até a última mensagem
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Função para conectar ao WebSocket
    const connectWebSocket = () => {

        const webSocket = new WebSocket(`wss://api.animeslink.com.br/chat/${chatId}`);
        socketRef.current = webSocket;

        webSocket.onopen = () => {
            console.log('WebSocket conectado');
        };

        webSocket.onmessage = (event) => {
            const data = event.data;

            // Verifica se a mensagem é JSON válida
            const isValidJSON = (str) => {
                try {
                    JSON.parse(str);
                    return true;
                } catch {
                    return false;
                }
            };

            if (isValidJSON(data)) {
                const newMessage = JSON.parse(data);
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                setTimeout(scrollToBottom, 100);
            } else {
                console.warn('Mensagem não é um JSON válido:', data);
            }
        };

        webSocket.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        webSocket.onclose = () => {
            console.log('WebSocket desconectado');

            setTimeout(() => connectWebSocket(), 500); // Tenta reconectar após 10 segundos
        };
    };

    // Enviar ping para manter a conexão ativa
    const keepAlive = () => {
        const keepAliveInterval = setInterval(() => {
            if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
                socketRef.current.send(JSON.stringify({ type: 'ping' }));
            }
        }, 30000); // A cada 30 segundos

        return () => clearInterval(keepAliveInterval); // Limpa o intervalo ao desmontar o componente
    };

    // Desconectar o WebSocket ao desmontar
    const disconnectWebSocket = () => {
        if (socketRef.current) {
            socketRef.current.onclose = null; // Evita reconexão após fechar
            socketRef.current.close(); // Fecha a conexão
            socketRef.current = null; // Limpa a referência
            console.log('WebSocket desconectado manualmente');
        }
    };

    // Carregar mensagens ao entrar no chat e conectar ao WebSocket
    useEffect(() => {
        if (!user) return;

        // Carregar mensagens do banco de dados
        axios.get(`https://api.animeslink.com.br/mensagens?chatId=${chatId}`)
            .then((response) => {
                setMessages(response.data);
                setTimeout(scrollToBottom, 100); // Ajustar o scroll após carregar
            })
            .catch((error) => {
                console.error("Erro ao carregar mensagens:", error);
            });

        // Conectar ao WebSocket
        connectWebSocket();

        // Ativar Keep-Alive
        const cleanupKeepAlive = keepAlive();

        // Desconectar ao desmontar
        return () => {
            disconnectWebSocket(); // Desconecta ao sair do componente
            cleanupKeepAlive(); // Limpa o intervalo do Keep-Alive
        };
    }, [user, chatId, setMessages]);

    // Enviar nova mensagem
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            const newMessage = { usuario: user.name, conteudo: message, chatId };
            socketRef.current.send(JSON.stringify(newMessage));
            setMessage(''); // Limpar o campo de entrada
            setTimeout(scrollToBottom, 100); // Garantir que o scroll atualize após enviar
        } else {
            alert("Não foi possível enviar a mensagem. Tente novamente mais tarde.");
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