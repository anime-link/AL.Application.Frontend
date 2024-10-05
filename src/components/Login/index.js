import React, { useState } from 'react';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useUser } from "../../services/UserContext";
import "./styles.css";

export default function LoginArea() {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Pega a função setUser do contexto

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const createUsers = async (event) => {
    event.preventDefault();
    
    try {
      const response = await api.post("/usuario/login", {
        email: email,
        senha: senha,
      });

      const userData = { id: response.data.id, name: response.data.nome, email: email };
      setUser(userData); // Armazena o usuário no contexto para uso posterior

      setEmail('');
      setSenha('');

      // Redirecionar para a página de comunidades
      navigate("/comunidades");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Usuário ou senha incorretos");
      } else {
        console.error("Erro ao fazer login: ", error);
        alert("Ocorreu um erro ao tentar fazer login. Tente novamente.");
      }
    }
  };

  return (
    <div className="login-area">
      <div className="login-icone-voltar">
        <Link className="login-icone-link" to={"/"}>
          <RiArrowLeftCircleFill className="login-icone-fechar" alt="Fechar" />
        </Link>
      </div>
      <h1 className="login-area-titulo">Login</h1>
      
      <form className='login-input-area' onSubmit={createUsers}>
        <input 
          className='login-input email-input'
          placeholder='Email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className='login-input senha-input'
          placeholder='Senha'
          type='password'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        <p className="login-esquecer-senha">Esqueci minha senha</p>
        <button type='submit' className='login-botao'>Confirmar</button>
      </form>
      
      <hr className="login-divisor" />
      <p className="login-pergunta">Não tem conta?</p>
      <Link className="login-cadastro-link" to={"/cadastro"}>
        <p className="login-cadastro">Cadastre-se</p>
      </Link>
    </div>
  );
}