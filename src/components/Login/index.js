import React from 'react';
import "./styles.css";
import { RiArrowLeftCircleFill } from "react-icons/ri";
// import { CamposLogin } from "./LoginLabels";
import { BotaoAvancar} from "./LoginButton";
import { CampoCheck } from './LoginCheck';
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";
import { useUser } from "../../services/UserContext";

export default function LoginArea(){

    const navigate = useNavigate();
    const { setUser } = useUser();

    const createUsers = async (event) => {
        event.preventDefault();
    
        const emailInput = document.querySelector(".email-input").value;
        const senhaInput = document.querySelector(".senha-input").value;
        
        try {
          const response = await api.post("/usuario/login", {
            email: emailInput,
            senha: senhaInput,
          });
    
          const userData = { id: response.data.id, name: response.data.nome, email: emailInput }
          setUser(userData);
          console.log("User: ", userData);
    
          document.querySelector(".email-input").value = '';
          document.querySelector(".senha-input").value = '';
    
        //   navigate("/comunidades");
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
            <BotaoAvancar onClick={createUsers}/>
            <hr className="login-divisor" />
            <p className="login-pergunta">Não tem conta?</p>
            <Link className="login-cadastro-link" to={"/cadastro"}>
                <p className="login-cadastro">Cadastre-se</p>
            </Link>
        </div>
    );
}


