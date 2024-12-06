import React, { useState } from "react";
import "./styles.css";
import { AreaCadastro } from "../../components/SignUp/SignUpArea";
import { RiStarFill } from "react-icons/ri";

export default function Cadastro() {
    // Estado do sidebar estar visível ou não
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    // Função que ativa a área lateral
    const ativarSideBar = (status) => {
        setIsSideBarVisible(status);
    }

    return(
        <div className={`cadastro-pagina ${isSideBarVisible ? "lateral-ativo" : ""}`}>
            <div className={`cadastro-texto ${isSideBarVisible ? "lateral-ativo" : ""}`}>
                <p className="cadastro-texto-titulo">Cadastre-se no AnimesLink</p>
                <div className="cadastro-sub-icon">
                    <RiStarFill className="cadastro-texto-icon" />
                    <div className="cadastro-texto-sub">
                        <p className="cadastro-sub">Interaja com outros otakus</p>
                        <p className="cadastro-sub">e tenha onde assistir seu anime favorito</p>
                    </div>
                </div>
            </div>
            <AreaCadastro areaLateral={ativarSideBar} />
        </div>
    );
}