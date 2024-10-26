import './styles.css';
import EsquecerSenhaArea from './ForgotArea/index.jsx';

export default function EsquecerSenhaPagina() {
    return (
        <div className='esquecer-senha'>
            <div className='esquecer-texto'>
                <h1 className='esquecer-texto-titulo'>Satte satte...</h1>
                <h2 className='esquecer-texto-subtitulo'>Vamos precisar do seu email para te redirecionar</h2>
            </div>
            <EsquecerSenhaArea />
        </div>
    );
}