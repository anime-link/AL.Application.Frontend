import React from "react";
import "./styles.css";
import user from "../../../assets/Images/SignUp/profile-pic-choosen.png";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-header-area">
                <div className="chat-header-voltar">
                    <Link to={"/comunidades"}>
                        <RiArrowLeftCircleFill className="chat-header-icon" />
                    </Link>
                    <h1 className="chat-header-texto">Voltar</h1>
                </div>
                <img className="chat-header-usuario" src={user} alt="Usuário" />
            </div>
        </div>
    );
}