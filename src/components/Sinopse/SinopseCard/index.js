import React from "react";
import './styles.css';


export default function SinopseCard({ImgSin}) {
  return (
    <div className="space-card">
       <div className="sinopse-card">
          <img className="imgSin" src={ImgSin} />
          <div className="container-content">
            <div className="anime-attribute">
              <p className="tittle">Classroom of The Elite</p>
              <p className="ano">2024</p>
              <p className="episodes">13</p>
              <p className="classification">Drama Escolar</p>
              <p className="status">Ativo</p>
              <p className="nota">89.9</p>
            </div>
            <div className="anime-plot">
              <p className="text-plot">
              Classroom of the Elite (ようこそ実力至上主義の教室へ Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e?, lit.
               "Bem-vindo a Sala de Aula de Doutrina Suprema e Habilidade") é uma série de light novel japonesa escrita
                por Shōgo Kinugasa e ilustrada por Shunsaku Tomose. Uma adaptação para mangá ilustrada por Yuyu Ichino se 
                iniciou na Monthly Comic Alive do Media Factory em 27 de janeiro de 2016. Uma adaptação para anime pelo estúdio 
                de animação  Lerche foi ao ar de julho a setembro de 2017. A segunda temporada foi lançada em julho de 2022.[2] 
                A terceira temporada estreiou em janeiro de 2024.[1]
              </p>
            </div>
          </div>          
       </div>
      
    </div>
  );

}