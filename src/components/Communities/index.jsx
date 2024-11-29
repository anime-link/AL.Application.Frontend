import React from "react";
import "./styles.css";
import Header from "../Header";
import Pesquisa from "../Search";
import Footer from "../Footer";
import { RiEmotionLaughFill, RiSearchEyeFill } from "react-icons/ri";
import ComunidadeTopicos from "./CommunityTopics";
import ComunidadeOpcoes from "./CommunityOptions";
import community1 from "../../assets/Images/Communities/community1.png";
import community2 from "../../assets/Images/Communities/community2.png";
import community3 from "../../assets/Images/Communities/community3.png";
import community4 from "../../assets/Images/Communities/community4.png";
import community5 from "../../assets/Images/Communities/community5.png";
import community6 from "../../assets/Images/Communities/community6.png";

export default function ComunidadesArea() {
    const sugComunidades = [
        { nome: "Comunidade 1", imagem: community1 },
        { nome: "Comunidade 2", imagem: community2 },
        { nome: "Comunidade 3", imagem: community3 },
        { nome: "Comunidade 4", imagem: community4 },
        { nome: "Comunidade 5", imagem: community5 },
        { nome: "Comunidade 6", imagem: community6 },
    ]

    const comunidades = [
        community1,
        community2,
        community3,
        community4,
        community5,
        community6
    ];

    return (
        <div className="comunidade-pagina">
            <Header />
            <div className="comunidade-body">
                <div className="comunidade-inicio">
                    <h1 className="comunidade-inicio-titulo">Bem vindo a página de comunidades</h1>
                    <div className="comunidade-inicio-p-area">
                        <div className="comunidade-inicio-p-icon">
                            <RiEmotionLaughFill className="comunidade-inicio-icon" />
                            <p className="comunidade-inicio-p">Divirta-se conversando sobre os assuntos que mais gosta</p>
                        </div>
                        <div className="comunidade-inicio-p-icon">
                            <RiSearchEyeFill className="comunidade-inicio-icon" />
                            <p className="comunidade-inicio-p">Visite outras comunidades</p>
                        </div>
                    </div>
                </div>
                <ComunidadeTopicos />
                <div className="comunidades-opcoes-fundo">
                    <div className="comunidade-search">
                        <Pesquisa
                            placeholder={"Pesquisar comunidades"}
                            sugestoes={sugComunidades}
                            tipo={'comunidade'}
                        />
                    </div>
                    <ComunidadeOpcoes comunidades={comunidades} />
                </div>
            </div>
            <Footer />
        </div>
    );
}