import React from "react";
import "./styles.css";
import Header from "../Header";
import Pesquisa from "../Search";
import ComunidadesPopular from "./PopularCommunities";
import ComunidadesEscolha from "./CommunityChoice";
import Footer from "../Footer";

export default function ComunidadesArea() {
    return (
        <div className="comunidade-pagina">
            <Header />
            <main className="comunidade-body">
                <Pesquisa className="comunidade-search" placeholder={"Pesquisar comunidades"} />
                <ComunidadesPopular />
                <hr className="comunidade-divisor" />
                <ComunidadesEscolha />
                <Footer />
            </main>
        </div>
    );
}