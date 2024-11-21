import React, { useEffect, useState } from "react";
import './styles.css';
import Header from '../Header/index.jsx';
import { RiPencilFill } from 'react-icons/ri';
import UsuarioInput from "./UserInput/index.jsx";
import defaultImg from '../../assets/Images/SignUp/profile-pic-choosen.jpeg';
import { useProfileImage } from "../../services/PicContext/index.js";
import { profilePics } from './../../assets/Images/ProfilePics/profilePics';
import { useUser } from './../../services/UserContext/index';

export default function Usuario() {
    const { user } = useUser();
    const [userData, setUserData] = useState({
        nome: "",
        email: "",
        senha: "",
    });
    const { profileImage, setProfileImage } = useProfileImage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnChangeImg = (newImg) => {
        setProfileImage(newImg);
        setIsModalOpen(false);

    }

    useEffect(() => {
        setUserData({
            nome: user?.nome,
            email: user?.email,
            senha: user?.senha
        })
    });

    return (
        <div className="usuario-area">
            <Header />
            <div className="usuario-infos">
                <h1 className="usuario-titulo">Dados do usuário</h1>
                <div className="usuario-infos-area">
                    <div className="usuario-foto-fav">
                        <img
                            className="usuario-foto"
                            src={profileImage || defaultImg}
                            width={220}
                            height={220}
                            alt="Perfil"
                        />
                        <button className="usuario-botao-mudar" onClick={() => setIsModalOpen(true)}>Mudar ícone</button>
                    </div>
                    <form className="usuario-form">
                        <div className="usuario-input-infos">
                            <UsuarioInput
                                label={"Nome"}
                                type={'text'}
                                value={userData.nome}
                                onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                            />
                            <UsuarioInput
                                label={"E-mail"}
                                type={'text'}
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />
                            <UsuarioInput
                                label={"Senha"}
                                type={'password'}
                                value={userData.senha}
                                onChange={(e) => setUserData({ ...userData, senha: e.target.value })}
                            />
                        </div>
                        <div className="usuario-mudar-info">
                            <RiPencilFill color="var(--bright-sun)" fontSize={30} />
                            <button
                                className="usuario-mudar-info-btn"
                                type="button"
                                onClick={() => console.log("Dados: ", userData)}
                            >
                                Editar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {isModalOpen && (
                <div className="usuario-modal">
                    <h2 className="usuario-modal-titulo">Escolha sua nova imagem</h2>
                    <div className="usuario-img-grid">
                        {profilePics.map(pic => (
                            <img
                                className="usuario-img-modal"
                                key={pic.id}
                                src={pic.url}
                                alt={`Opção ${pic.id}`}
                                width={80}
                                height={80}
                                onClick={() => handleOnChangeImg(pic.url)}
                            />
                        ))}
                    </div>
                    <button className="usuario-modal-fechar" onClick={() => setIsModalOpen(false)}>Fechar</button>
                </div>
            )}
        </div>
    );
}