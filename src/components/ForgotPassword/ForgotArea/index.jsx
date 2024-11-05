import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';

export default function EsqueciSenhaArea() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEsqueciSenha = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/usuario/esqueci-senha?email=${email}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert("Verificar seu e-mail para o link de redefinição de senha.")
                navigate('/recuperar');
            } else if (response.status === 404) {
                alert("E-mail não encontrado.");
            } else {
                alert("Erro ao enviar o e-mail. Tente novamente.");
            }

        } catch (error) {
            console.error("Erro ao enviar e-mail: ", error);
            alert("Erro ao redefinir a senha");
        }

    };

    return (
        <div className='esquecer-area'>
            <h2 className='esquecer-label'>Coloque seu e-mail</h2>
            <form className='esquecer-form' onSubmit={handleEsqueciSenha}>
                <input
                    className='esquecer-input'
                    placeholder='Seu email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='esquecer-botao' type='submit'>Enviar</button>
            </form>
        </div>
    );
}