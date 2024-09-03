import React from 'react';
import "./styles.css";


export default function AnimesRanking({anime, number}){
    return(
        <div className= "ranking-area">
           <h2 className= "ranking-titulo">
           </h2>
           <div className= "ranking-box">
            {number}
            {anime}
           </div>
        </div>
    )
}