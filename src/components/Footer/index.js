import React from "react";
import "./styles.css";
import { RiGroup2Fill } from "react-icons/ri";
import logo from "../../assets/logo-animelink.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-elementos">
                <img className="footer-logo" src={logo} alt="AnimeLink Logo" />
                <hr className="footer-divisor" />
                <div className="footer-grupo">
                    <RiGroup2Fill className="footer-icon" />
                    <p className="footer-texto">The Illuminated</p>
                </div>
            </div>
        </footer>
    );
}