// AnimesArea.js
import "./styles.css";
import Header from '../Header';
import Pesquisa from "../Search";
import AnimeCards from './AnimesCards';
import acao from '../../assets/Images/AnimesCard/acao.png';
import romance from '../../assets/Images/AnimesCard/romance.png';
import terror from '../../assets/Images/AnimesCard/terror.png';
import comedia from '../../assets/Images/AnimesCard/comedia.png';
import misterio from '../../assets/Images/AnimesCard/misterio.png';
import esporte from '../../assets/Images/AnimesCard/esporte.png';
import Footer from "../Footer";
import AnimesLaunch from './AnimesLaunch';
import { Link } from 'react-router-dom';
import { AnimesTop } from "./AnimesTop";

export default function AnimesArea() {
    

    return (
        <div className="animes-area">
            <Header />
            <main className="animes-body">
                <Pesquisa  
                    placeholder="Pesquisar Animes" 
                    tipo={'anime'}
                />
                <AnimesLaunch />
                <AnimesTop filter={"favorite"} />
                <hr className="ranking-divisao" />
                <>
                <ul>
                    <li>
                        <Link to={"/animes/acao"}>
                            <AnimeCards nome="Ação" imgAnime={acao} />
                        </Link>
                        <Link to={"/animes/terror"}>
                            <AnimeCards nome="Terror" imgAnime={terror} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/animes/comedia"}>
                            <AnimeCards nome="Comédia" imgAnime={comedia} />
                        </Link>
                        <Link to={"/animes/romance"}>
                            <AnimeCards nome="Romance" imgAnime={romance} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/animes/esporte"}>
                            <AnimeCards nome="Esporte" imgAnime={esporte} />
                        </Link>
                        <Link to={"/animes/misterio"}>
                            <AnimeCards nome="Mistério" imgAnime={misterio} />
                        </Link>
                    </li>
                </ul>
                </> 
            </main>
            <Footer/>
        </div>
    );
}
