import React from 'react';
import './styles.css';

export default function CardComedia({ cardImgComedia}) {
    return (
        <div className="container-card">
            <div className="card-anime-comedia"
                style={{ backgroundImage: `url(${cardImgComedia})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-comedia-tittle">
                    Horimya
                </p>
                <p className="card-comedia-text">
                    gfdtujygijffryhdcutjdfyrhdfvikjfikjfkumjfumjtgbik
                    6ufgikgholhoukgbolhnohnolholpjçgukhpolyholhkghnoljpçjpç
                    hgikgoholhnolihiykghokg,hikgbikgbikgholhik,jhuk,uhok,ho
                    ikgbnoljmoukgbiljpçuhgyikughtujgbukgukhikyhiughoyttuhghpoftujftgu
                    7ikhj8olj0ogbiluj0iknoghlouniykghmyikghouyiukujiujkhujkjukjikjk
                    iklikiykhjkoiyuhuhujm8yuhjyutjujutklukyutiujnbuuiijuyiuiutuyuityuyk
                </p>
            </div>

        </div>


    );
}

