import React from "react";
import "./styles.css";
import logo from "../../assets/logo-animelink.svg";

export default function HomeArea() {
    return (
        <header className="home-header">
            <img src={logo} alt="AnimeLink" />
            <h1 className="home-header-titulo">AnimeLink</h1>
        </header>
    );
}