import React from "react";
import "./styles.css";
import Header from "../Header";
import Pesquisa from "../Search";
import ComunidadesPopular from "./PopularCommunities";

export default function ComunidadesArea() {
    return (
        <div className="comunidade-pagina">
            <Header />
            <main className="comunidade-body">
                <Pesquisa className="comunidade-search" placeholder={"Pesquisar comunidades"} />
                <ComunidadesPopular />
            </main>
        </div>
    );
}