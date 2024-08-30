import React from 'react';
import "./styles.css";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { CamposLogin } from "./LoginLabels";
import { BotaoAvancar} from "./LoginButton";
import { CampoCheck } from './LoginCheck';
import { Link} from "react-router-dom";


export default function LoginArea(){
    return(
        <div className="login-area">
            <div className="login-icone-voltar">
                <Link className="login-icone-link" to={"/"}>
                    <RiArrowLeftCircleFill className= "login-icone-fechar" alt= "Fechar"/>
                </Link>
            </div>
            <h1 className="login-area-titulo">Login</h1>
            <CamposLogin title={"Usuário"} placeholder={"Usuário"} type={"text"} />
            <CamposLogin title={"Senha"} placeholder={"Senha"} type={"password"} />
            <p className="contPassword">Esqueci minha senha</p>
            <CampoCheck/>
            <p>Não tem conta?</p>
            <h2>Cadastre-se</h2>
            <BotaoAvancar/>
        </div>
    );
}