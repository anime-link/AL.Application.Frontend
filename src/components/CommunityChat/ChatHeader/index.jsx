import "./styles.css";
import imgPerfil from "../../../assets/Images/SignUp/profile-pic-choosen.jpeg";
import { RiArrowLeftCircleFill, RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useProfileImage } from "../../../services/PicContext";

export default function ChatHeader() {
    const { profileImage } = useProfileImage();

    return (
        <div className="chat-header-area">
            <img className="chat-header-usuario" src={profileImage || imgPerfil} width={50} height={50} alt="Usuário" />
            <hr className="chat-header-divisor" />
            <Link to={"/comunidades"}>
                <RiArrowLeftCircleFill className="chat-header-voltar" fontSize={40} />
            </Link>
        </div>
    );
}
