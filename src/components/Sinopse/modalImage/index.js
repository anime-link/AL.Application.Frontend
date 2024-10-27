import React from 'react';
import './styles.css';
import modalP from "../../../assets/Images/Sinopse/modalP.png";

export default function  ModalImage(){
    return(
        <div className='modal-container'>
            <div style={{ backgroundImage: `url(${modalP})` }} className="modal">
                <h1 className= "tittle-link">
                    Digite o link do Anime
                </h1>
                <div className="modal-space-link">
                    <label className="modal-label" htmlFor="homepage">Link</label>
                    <input  className="modal-input" type= "text" />
                </div>
            </div>
        </div>
    )
}