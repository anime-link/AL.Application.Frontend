import React, { useEffect, useState } from "react";
import './styles.css';
import Header from '../Header/index.jsx';
import { RiPencilFill } from 'react-icons/ri';
import { RiBrushLine } from "react-icons/ri";
import UsuarioInput from "./UserInput/index.jsx";
import defaultImg from '../../assets/Images/SignUp/profile-pic-choosen.jpeg';

import { useUser } from '../../services/UserContext/index';
import { useProfileImage } from "../../services/PicContext/index.js";
import { profilePics } from './../../assets/Images/ProfilePics/profilePics';

import logoHxh from "../../assets/Images/User/logoHxh.png"
import api from './../../services/api';

export default function Usuario() {
    const { user, setUser } = useUser();
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

    const handleSaveChanges = async () => {
        try {
            const updatedUser = {
                name: userData.nome,
                email: userData.email,
                password: userData.senha,
            }

            const response = await api.put(`/usuario/${user.id}`, updatedUser);
            if (response.status === 200) {
                setUser({ ...user, ...updatedUser });
                alert("Dados atualizados com sucesso!");
            } else {
                alert("Erro ao atualizar os dados");
            }

        } catch (error) {
            console.error("Erro ao atualizar os dados: ", error);
            alert(`Falha ao atualizar os dados: ${error.message}`);
            
        }
    }

    useEffect(() => {
        setUserData({
            nome: user?.name || "",
            email: user?.email || "",
            senha: user?.password || "",
        })

        console.log("Dados do usuário: ", userData);
    }, [user]);

    return (
        <div className="usuario-area">
            <Header />
            <div className="usuario-infos">
                <div className="usuario-infos-area">
                    <div className="usuario-foto-fav">
                        <img
                            className="usuario-foto"
                            src={profileImage || defaultImg}
                            width={159}
                            height={160}
                            alt="Perfil"
                        />
                        <button
                            className="usuario-botao-mudar"
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <RiBrushLine className="perfil-brush" />
                        </button>
                        <input className="user-name"
                            type="text"
                            value={userData.nome}
                            onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                        />
                    </div>
                    <form className="usuario-form">
                        <div className="usuario-input-infos">
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
                                onClick={handleSaveChanges}
                            >
                                Salvar
                            </button>
                        </div>
                        <div className="logo">
                            <img
                                src={logoHxh}
                                alt="logo-perfil" />
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