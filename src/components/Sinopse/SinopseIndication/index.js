import React from "react";
import './styles.css';
import { RiVideoFill } from "react-icons/ri";


export default function SinopseIndication({prop}) {
  return (
      <div className="link-card">
        
        <p> <RiVideoFill className="icon-play"/> Onde assistir?</p>
        <img className="imgApp" src={prop} />
      </div>
  );

}