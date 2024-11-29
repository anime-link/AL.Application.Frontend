import React, { useState } from "react";
import { CamposCadastro } from "./SignUpLabels";
import "./styles.css";
// import { BotaoCadastro } from "./SignUpButton";
import {
  RiArrowLeftCircleFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { useProfileImage } from "../../../services/PicContext";
import { AreaImagemPerfil } from "../ChosePicArea";
import { BotaoCadastro } from "./SignUpButton";

export function AreaCadastro({ areaLateral }) {
  // Estado do sidebar estar visível ou não
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();
  const { profileImage } = useProfileImage();

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  }

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  }

  // Função que ativa a área lateral
  const ativarSideBar = () => {
    const estado = !isSideBarVisible;
    setIsSideBarVisible(estado);
    areaLateral(estado);
  };

  const createUsers = async (event) => {
    event.preventDefault();


    const nomeInput = document.querySelector("#nome-input").value;
    const emailInput = document.querySelector("#email-input").value;
    const senhaInput = document.querySelector("#senha-input").value;
    const idImageInput = profileImage.id;
    const confirmarSenha = document.querySelector(
      "#confirmar-senha-input"
    ).value;

    if (senhaInput !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }
    try {
      await api.post("/usuario", {
        nome: nomeInput,
        email: emailInput,
        senha: senhaInput,
        idImage: profileImage.id,
      });

      console.log("User: ", nomeInput, emailInput, senhaInput, idImageInput);

      document.querySelector("#nome-input").value = '';
      document.querySelector("#email-input").value = '';
      document.querySelector("#senha-input").value = '';
      document.querySelector("#confirmar-senha-input").value = '';

      navigate("/login");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Esse email já está em uso");
    }
  };

  return (
    <div
      className="cadastro-area"
    >
      <div
        className="cadastro-area-main"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cadastro-icone-fechar-area">
          <Link className="cadastro-icone-link" to={"/"}>
            <RiArrowLeftCircleFill className="cadastro-icone-fechar" />
          </Link>
        </div>
        <h1 className="cadastro-area-titulo">Cadastro</h1>
        <div className="cadastro-input-area">
          <CamposCadastro
            placeholder={'Seu nome'}
            type={'text'}
            id={'nome-input'}
          />
          <CamposCadastro
            placeholder={'Seu email'}
            type={'text'}
            id={'email-input'}
          />
          <CamposCadastro
            placeholder={'Criar senha'}
            type={'password'}
            id={'senha-input'}
          />
          <CamposCadastro
            placeholder={'Confirmar senha'}
            type={'password'}
            id={'confirmar-senha-input'}
          />
        </div>

        <div className="cadastro-botao-area">
          <BotaoCadastro onClick={createUsers} />
        </div>

        {isButtonVisible && (

          <div onClick={ativarSideBar} className="cadastro-mudar-img visivel">
            {isSideBarVisible ? (
              <RiArrowRightSLine className="cadastro-mudar-icon" />
            ) : (
              <RiArrowLeftSLine className="cadastro-mudar-icon" />
            )}
          </div>
        )}

      </div>
      <div
        className="cadastro-area-lateral"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`cadastro-lateral ${isSideBarVisible ? "visivel" : ""}`}
        >
          <AreaImagemPerfil />
        </div>
      </div>
    </div>
  );
}
