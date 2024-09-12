import React from 'react';
import "./styles.css";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { CamposLogin } from "./LoginLabels";
import { BotaoAvancar} from "./LoginButton";
import { CampoCheck } from './LoginCheck';
import { Link } from "react-router-dom";

export default function LoginArea(){
    return(
        <div className="login-area">
            <div className="login-icone-voltar">
                <Link className="login-icone-link" to={"/"}>
                    <RiArrowLeftCircleFill className= "login-icone-fechar" alt= "Fechar"/>
                </Link>
            </div>
            <h1 className="login-area-titulo">Login</h1>
            <div className='login-input-area'>
                <CamposLogin placeholder={"Usuário"} type={"text"} />
                <CamposLogin placeholder={"Senha"} type={"password"} />
            </div>
            <p className="login-esquecer-senha">Esqueci minha senha</p>
            <CampoCheck />
            <BotaoAvancar />
            <hr className="login-divisor" />
            <p className="login-pergunta">Não tem conta?</p>
            <Link className="login-cadastro-link" to={"/cadastro"}>
                <p className="login-cadastro">Cadastre-se</p>
            </Link>
        </div>
    );
}