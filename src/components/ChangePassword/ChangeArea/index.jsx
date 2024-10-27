import { Link } from 'react-router-dom';
import './styles.css';

export default function MudarSenhaArea({ id, onClick }) {
    return (
        <div className='mudar-area'>
            <h2 className='mudar-titulo'>Crie uma nova senha</h2>
            <form className='mudar-form-area'>
                <div className='mudar-form'>
                    <input className='mudar-input' id={id} placeholder='Criar nova senha' />
                    <input className='mudar-input' id={id} placeholder='Confirmar senha' />
                    <input className='mudar-input' id={id} placeholder='Digitar o token' />
                </div>
                <Link to={'/login'}>
                    <button className='mudar-botao' type='submit' onClick={onClick}>Confirmar</button>
                </Link>
            </form>
        </div>
    );
}