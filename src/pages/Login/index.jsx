import React from "react";
import './styles.css';
import LoginArea from "../../components/Login";
import { RiHeart3Fill } from "react-icons/ri";

export default function Login() {
  return (
    <div className="login-page">
      <LoginArea/>
      <div className="login-texto">
        <p className="login-texto-titulo">Faça login no AnimesLink</p>
        <div className="login-sub-icon">
          <p className="login-sub">E seja feliz fazendo o que você ama</p>
          <RiHeart3Fill className="login-texto-icon" />
        </div>
      </div>
    </div>
  );

}