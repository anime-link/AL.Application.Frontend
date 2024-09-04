import React from 'react';
import "./styles.css";
import { RiAwardFill } from "react-icons/ri";

export default function AnimesRanking({ rankingList }) {
    return (
        <div className="ranking-area">
            <div className="ranking-box">
                <h2 className="ranking-titulo">Top 5</h2>
                {rankingList.map((item, index) => (
                    <div key={index} className="ranking-cont">
                        <span className="ranking-number">{item.number}</span>
                        <span className="ranking-anime">{item.anime}</span>
                        <RiAwardFill />
                    </div>
                ))}
            </div>
        </div>
    );
}