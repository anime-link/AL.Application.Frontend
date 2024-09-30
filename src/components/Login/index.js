import React from 'react';
import "./styles.css";
import { RiArrowLeftCircleFill } from "react-icons/ri";
// import { CamposLogin } from "./LoginLabels";
// import { BotaoAvancar} from "./LoginButton";
import { CampoCheck } from './LoginCheck';
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";

export default function LoginArea(){
    const navigate = useNavigate();

    const createUsers = async (event) => {
        event.preventDefault();
    
        const emailInput = document.querySelector(".email-input").value;
        const senhaInput = document.querySelector(".senha-input").value;
        
        try {
          await api.post("/usuario/login", {
            email: emailInput,
            senha: senhaInput,
          });
    
          console.log("User: ", emailInput, senhaInput);
    
          document.querySelector(".email-input").value = '';
          document.querySelector(".senha-input").value = '';
    
          navigate("/comunidades");
        } catch (error) {
          console.error("Usuario não encontrado ", error);
          alert("Usuário ou senha inválidos");
        }
      };
    
    return(
        <div className="login-area">
            <div className="login-icone-voltar">
                <Link className="login-icone-link" to={"/"}>
                    <RiArrowLeftCircleFill className= "login-icone-fechar" alt= "Fechar"/>
                </Link>
            </div>
            <h1 className="login-area-titulo">Login</h1>
            <div className='login-input-area'>
                {/* <CamposLogin placeholder={"Email"} type={"text"} />
                <CamposLogin placeholder={"Senha"} type={"password"} /> */}
                <input className='login-input email-input' placeholder='Email' type='text' />
                <input className='login-input senha-input' placeholder='Senha' type='text' />
            </div>
            <p className="login-esquecer-senha">Esqueci minha senha</p>
            <CampoCheck />
            {/* <BotaoAvancar /> */}
            <button className='login-botao' onClick={createUsers}>Confirmar</button>
            <hr className="login-divisor" />
            <p className="login-pergunta">Não tem conta?</p>
            <Link className="login-cadastro-link" to={"/cadastro"}>
                <p className="login-cadastro">Cadastre-se</p>
            </Link>
        </div>
    );
}