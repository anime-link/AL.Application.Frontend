import { Link } from 'react-router-dom';
import './styles.css';

export default function EsqueciSenhaArea({ id, onClick }) {
    return (
        <div className='esquecer-area'>
            <h2 className='esquecer-label'>Coloque seu e-mail</h2>
            <form className='esquecer-form'>
                <input className='esquecer-input' placeholder='Seu email' id={id} />
                <Link to={'/recuperar'}>
                    <button className='esquecer-botao' type='submit' onClick={onClick}>Enviar</button>
                </Link>
            </form>
        </div>
    );
}