import "./styles.css";
import React from 'react';
import { RiTrophyFill } from "react-icons/ri";

export default function AnimesRanking({ colocacao, rankingNome, cor, rating }) {
    const trofeuCor = {
        color: `${cor}`
    };

    const colocacaoCor = {
        backgroundColor: `${cor}`,
        borderRadius: '50%'
    }

    return (
        <div className="ranking-area">
            <p className="ranking-colocacao" style={colocacaoCor}>{colocacao}</p>
            <p className="ranking-nome">{rankingNome}</p>
            <RiTrophyFill className="trofeu" style={trofeuCor} />
        </div>
    );
}