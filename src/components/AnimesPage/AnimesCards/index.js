import React from 'react';
import "./styles.css";





export default function CardAnime({imageURL, altText}){
    return(
      <div className="image-box">
        <div className='posiciona-titulo'>
            <h1>{altText}</h1>
        </div>
        <img src={imageURL} alt={altText} />
      </div>
    );
}