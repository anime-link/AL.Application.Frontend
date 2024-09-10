import React from 'react';
import "./styles.css";
import Header from '../Header';
import ContatosBemVindo from './ConatosPresentation';
import ContatosAdms from './ContatosAdm';
import bluelock from '../../assets/Images/Contatos/bluelock.png';

export default function ContatosAdm() {
    return (
        <div className="contatos-area">
            <Header />
            <main className="contatos-body">
                <ContatosBemVindo />
                <ContatosAdms imgAnime={bluelock} name={'lalallalaa'}/>
                <ContatosAdms imgAnime={bluelock} />
                <ContatosAdms imgAnime={bluelock} />
                <ContatosAdms imgAnime={bluelock} />
            </main>
        </div>
    );
}