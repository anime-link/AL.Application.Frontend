import React from "react";
import "./styles.css";
import Header from "../Header";
import Pesquisa from "../Search";

export default function ComunidadesArea() {
    return (
        <div className="comunidade-pagina">
            <Header />
            <main className="comunidade-body">
                <Pesquisa className="comunidade-search" placeholder={"Pesquisar comunidades"} />
            </main>
        </div>
    );
}