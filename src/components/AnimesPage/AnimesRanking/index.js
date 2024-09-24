import React from 'react';
import "./styles.css";
import { RiTrophyFill } from "react-icons/ri";

export default function AnimesRanking({ colocacao, rankingNome }) {
    return (
        <div className="ranking-area">
            <p className="ranking-colocacao">{colocacao}</p>
            <p className="ranking-nome">{rankingNome}</p>
            <RiTrophyFill className="trofeu"/>
        </div>
    );
}