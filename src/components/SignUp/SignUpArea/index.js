import React, { useState, useEffect } from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";
// import { BotaoCadastro } from "./SignUpButton";
import { AreaImagemPerfil } from "../ChosePicArea";
import {
  RiArrowLeftCircleFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";

import api from "../../../services/api";

export function AreaCadastro({ areaLateral }) {
  // Estado do sidebar estar visível ou não
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const navigate = useNavigate();

  // Função que ativa a área lateral
  const ativarSideBar = () => {
    const estado = !isSideBarVisible;
    setIsSideBarVisible(estado);
    areaLateral(estado);
  };

  const createUsers = async (event) => {
    event.preventDefault();


    const nomeInput = document.querySelector(".nome-input").value;
    const emailInput = document.querySelector(".email-input").value;
    const senhaInput = document.querySelector(".senha-input").value;
    const idImageInput = 1;
    const confirmarSenha = document.querySelector(
      ".confirmar-senha-input"
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
        idImage: idImageInput,
      });

      console.log("User: ", nomeInput, emailInput, senhaInput, idImageInput);

      document.querySelector(".nome-input").value = '';
      document.querySelector(".email-input").value = '';
      document.querySelector(".senha-input").value = '';
      document.querySelector(".confirmar-senha-input").value = '';

      navigate("/login");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const mostrarSenha = () => {
      setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="cadastro-area">
      <div className="cadastro-area-main">
        <div className="cadastro-icone-fechar-area">
          <Link className="cadastro-icone-link" to={"/"}>
            <RiArrowLeftCircleFill className="cadastro-icone-fechar" />
          </Link>
        </div>
        <h1 className="cadastro-area-titulo">Cadastro</h1>
        <div className="cadastro-input-area">
          <div className="cadastro-campos">
            <input
              className="cadastro-input nome-input"
              id="cadastro-label"
              placeholder="Seu nome"
              type="text"
            />
          </div>
          <div className="cadastro-campos ">
            <input
              className="cadastro-input email-input"
              id="cadastro-label"
              placeholder="Seu email"
              type="text"
            />
          </div>
          <div className="cadastro-campos ">
            <input
              className="cadastro-input senha-input"
              id="cadastro-label"
              placeholder="Criar senha"
              type={isPasswordVisible ? "text" : "password"}
            />
            <button type="button" className="cadastro-senha-botao" onClick={mostrarSenha}>
            {isPasswordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          </div>
          <div className="cadastro-campos">
            <input
              className="cadastro-input confirmar-senha-input"
              id="cadastro-label"
              placeholder="Confirmar senha"
              type={isPasswordVisible ? "text" : "password"}
            />
            <button type="button" className="cadastro-senha-botao">
            {isPasswordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          </div>
        </div>

        <div className="cadastro-botao-area">
          <button className="cadastro-botao" onClick={createUsers}>
            Confirme
          </button>
        </div>

        <div onClick={ativarSideBar} className="cadastro-mudar-img">
          {isSideBarVisible ? (
            <RiArrowRightSLine className="cadastro-mudar-icon" />
          ) : (
            <RiArrowLeftSLine className="cadastro-mudar-icon" />
          )}
        </div>
      </div>
      <div className="cadastro-area-lateral">
        <div
          className={`cadastro-lateral ${isSideBarVisible ? "visivel" : ""}`}
        >
          <AreaImagemPerfil />
        </div>
      </div>
    </div>
  );
}
