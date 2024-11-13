import React from "react";
import './styles.css';
import Header from '../Header/index.jsx';
import { RiPencilFill, RiStarFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import UsuarioInput from "./UserInput/index.jsx";
import userImg from '../../assets/Images/SignUp/profile-pic-choosen.jpeg';

export default function Usuario() {
    return (
        <div className="usuario-area">
            <Header />
            <div className="usuario-infos">
                <h1 className="usuario-titulo">Dados do usuário</h1>
                <div className="usuario-infos-area">
                    <div className="usuario-foto-fav">
                        <img
                            className="usuario-foto"
                            src={userImg}
                            width={220}
                            height={220}
                            alt="Perfil"
                        />
                        <button className="usuario-botao-mudar">Mudar ícone</button>
                    </div>
                    <form className="usuario-form">
                        <div className="usuario-input-infos">
                            <UsuarioInput label={"Nome"} />
                            <UsuarioInput label={"Usuário"} />
                            <UsuarioInput label={"E-mail"} />
                            <UsuarioInput label={"Senha"} />
                        </div>
                        <div className="usuario-mudar-info">
                            <RiPencilFill color="var(--bright-sun)" fontSize={30} />
                            <button className="usuario-mudar-info-btn">Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}