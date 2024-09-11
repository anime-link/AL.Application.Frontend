import React from "react";
import "./styles.css";
import Header from "../Header";
import Pesquisa from "../Search";
import Footer from "../Footer";
import { RiEmotionLaughFill, RiSearchEyeFill } from "react-icons/ri";
import ComunidadeTopicos from "./CommunityTopics";

export default function ComunidadesArea() {
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
                <Pesquisa className="comunidade-search" placeholder={"Pesquisar comunidades"} />
            </div>
            <Footer />
        </div>
    );
}