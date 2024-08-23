import React from "react";
import "./styles.css";
import { RiGroup2Fill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-elementos">
                <div className="footer-integrantes-icon">
                    <RiGroup2Fill className="footer-icon" />
                    <h1 className="footer-integrantes">Integrantes</h1>
                </div>
                <div className="footer-nomes">
                    <ul>
                        <li>Carlos André</li>
                        <li>Felipe Ferreira</li>
                        <li>João Vitor</li>
                        <li>Nathan Rodrigues</li>
                        <li>Pablo Cândido</li>
                        <li>William Patricio</li>
                        <li>Wilson Benacchio</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}