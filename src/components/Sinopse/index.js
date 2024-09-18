import React from "react";
import './styles.css';
import Header from '../Header';
import SinopseCard from './SinopseCard';
import SinopseIndication from "./SinopseIndication";
import SinopseCommit from "./SinopseCommit";
import Footer from "../Footer";

import image72 from "../../assets/Images/Sinopse/image 72.png";
import animeImg from "../../assets/Images/Sinopse/animeImg.png";
import image75 from '../../assets/Images/AnimeLaunch/image 75.png';

import user from '../../assets/Images/Sinopse/user.png'


export default function SinopseArea() {
  return (
    <div className="sinopse-area">
      <Header/>
      <SinopseCard ImgBack={animeImg} ImgSin={image75}/>
      <SinopseIndication prop={image72}/>
      <SinopseCommit ImgPerfil={user}  placeholder={"Digite seu comentário"} type={"text"}/>
      <Footer/>
    </div>
  );

}