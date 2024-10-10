import React, { useState } from 'react';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useUser } from "../../services/UserContext";
import "./styles.css";
import { CamposLogin } from './LoginLabels';
import { CampoCheck } from './LoginCheck';
import { BotaoAvancar } from './LoginButton';

export default function LoginArea() {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Pega a função setUser do contexto

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false); // Estado para o checkbox

  const createUsers = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/usuario/login", {
        email: email,
        senha: senha,
      });

      const userData = { id: response.data.id, name: response.data.nome, email: email };
      setUser(userData); // Armazena o usuário no contexto para uso posterior

      // Armazenar no localStorage se "manter conectado" estiver ativado
      if (manterConectado) {
        localStorage.setItem('user', JSON.stringify(userData));
      }

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

  // Função para lidar com o estado do checkbox
  const handleCheckboxChange = (event) => {
    setManterConectado(event.target.checked);
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
        <div className='login-inputs'>
          <CamposLogin 
            placeholder={'E-mail'}
            type={'text'}
          />
          <CamposLogin
            placeholder={'Senha'}
            type={'password'} 
          />
        </div>

        <CampoCheck manterConectado={manterConectado} handleCheckboxChange={handleCheckboxChange} />

        <p className="login-esquecer-senha">Esqueci minha senha</p>
        <BotaoAvancar />
      </form>

      <hr className="login-divisor" />
      <p className="login-pergunta">Não tem conta?</p>
      <Link className="login-cadastro-link" to={"/cadastro"}>
        <p className="login-cadastro">Cadastre-se</p>
      </Link>
    </div>
  );
}