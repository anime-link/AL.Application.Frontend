import React from "react";
import "./styles.css";
import logo from "../../assets/logo-animelink.svg";
import user from "../../assets/Images/SignUp/profile-pic-choosen.webp";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header-area">
                <div className="header-logo-area">
                    <img className="header-logo" src={logo} alt="AnimeLink" />
                    <p className="header-logo-texto">AnimeLink</p>
                </div>
                <div className="header-paginas">
                    <NavLink to={"/comunidades"} className={({ isActive }) => isActive ? "header-pagina active" : "header-pagina"}>
                        Comunidades
                    </NavLink>
                    <NavLink to={"/animes"} className={({ isActive }) => isActive ? "header-pagina active" : "header-pagina"}>
                        Animes
                    </NavLink>
                    <NavLink to={"/contatos"} className={({ isActive }) => isActive ? "header-pagina active" : "header-pagina"}>
                        Contatos
                    </NavLink>
                </div>
                <img className="header-usuario" src={user} alt="Usuário" />
            </div>
        </header>
    );
}