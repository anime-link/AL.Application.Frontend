import "./styles.css";
import imgPerfil from "../../../assets/Images/SignUp/profile-pic-choosen.webp";
import { RiArrowLeftCircleFill, RiArrowLeftSLine } from "react-icons/ri";

export default function ChatHeader() {
    return (
        <div className="chat-header-area">
            <img className="chat-header-usuario" src={imgPerfil} width={50} height={50} alt="Usuário" />
            <hr className="chat-header-divisor" />
            <div className="chat-header-funcoes">
                <RiArrowLeftCircleFill className="chat-header-voltar" fontSize={40} />
                <RiArrowLeftSLine className="chat-header-esconder" fontSize={35} />
            </div>
        </div>
    );
}