import React from "react";
import "./styles.css";
import Header from "../Header";
import Pesquisa from "../Search";
import ComunidadesPopular from "./PopularCommunities";
import ComunidadesEscolha from "./CommunityChoice";
import Footer from "../Footer";
import community1 from "../../assets/Images/Communities/community1.png";
import community2 from "../../assets/Images/Communities/community2.png";
import community3 from "../../assets/Images/Communities/community3.png";
import community4 from "../../assets/Images/Communities/community4.png";
import community5 from "../../assets/Images/Communities/community5.png";
import community6 from "../../assets/Images/Communities/community6.png";

export default function ComunidadesArea() {
    const imgComunidades = [
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
            <main className="comunidade-body">
                <Pesquisa className="comunidade-search" placeholder={"Pesquisar comunidades"} />
                <ComunidadesPopular />
                <hr className="comunidade-divisor" />
                <ComunidadesEscolha comunidades={imgComunidades} />
                <Footer />
            </main>
        </div>
    );
}