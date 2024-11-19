import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';

export default function MudarSenhaArea() {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (novaSenha !== confirmarSenha) {
            alert("Senhas não coincidem");
        }

        try {
            const response = await fetch(`https://api.animeslink.com.br/usuario/redefinir-senha?token=${token}&novaSenha=${novaSenha}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                alert('Senha redefinida com sucesso.');
                navigate('/login');

            } else if (response.status === 401) {
                alert('Token inválido ou expirado.');
            } else if (response.status === 404) {
                alert('Usuário não encontrado.');
            } else {
                alert('Erro ao redefinir a senha. Tente novamente.');
            }

        } catch (error) {
            console.error("Erro ao redefinir a senha");
            alert("Erro ao redefinir a senha");
        }
    }

    return (
        <div className='mudar-area'>
            <h2 className='mudar-titulo'>Crie uma nova senha</h2>
            <form className='mudar-form-area' onSubmit={handleSubmit}>
                <div className='mudar-form'>
                    <input
                        className='mudar-input'
                        placeholder='Criar nova senha'
                        type='password'
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                    />
                    <input
                        className='mudar-input'
                        placeholder='Confirmar senha'
                        type='password'
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                    <input
                        className='mudar-input'
                        placeholder='Digitar o token'
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </div>
                <button className='mudar-botao' type='submit'>Confirmar</button>
            </form>
        </div>
    );
}