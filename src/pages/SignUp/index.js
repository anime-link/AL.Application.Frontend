import React from "react";
import "./styles.css";
import { AreaCadastro } from "../../components/SignUp/SignUpArea";
import { RiStarFill } from "react-icons/ri";

export default function Cadastro() {
    return(
        <div className="cadastro-pagina">
            <div className="cadastro-texto">
                <p className="cadastro-texto-titulo">Cadastre-se no AnimeLink</p>
                <div className="cadastro-sub-icon">
                    <RiStarFill className="cadastro-texto-icon" />
                    <div className="cadastro-texto-sub">
                        <p className="cadastro-sub">Interaja com outros otakus</p>
                        <p className="cadastro-sub">e tenha onde assistir seu anime favorito</p>
                    </div>
                </div>
            </div>
            <AreaCadastro />
        </div>
    );
}