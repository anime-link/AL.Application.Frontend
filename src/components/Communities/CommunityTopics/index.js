import "./styles.css";
import community1 from "../../../assets/Images/Communities/community1.webp";
import community2 from "../../../assets/Images/Communities/community2.png";
import community3 from "../../../assets/Images/Communities/community3.png";
import community4 from "../../../assets/Images/Communities/community4.webp";
import community5 from "../../../assets/Images/Communities/community5.png";
import community6 from "../../../assets/Images/Communities/community6.png";
import { RiAddLine, RiStarFill } from "react-icons/ri";
import ComunidadeSlider from "../CommunitySlider";

export default function ComunidadeTopicos() {
    const comunidadesPopular = [
        community1,
        community2,
        community3
    ];

    const comunidadesNovo = [
        community4,
        community5,
        community6
    ];

    return (
        <div className="comunidade-topicos-area">
            <h1 className="comunidade-topicos-titulo">Tópicos</h1>
            <hr className="comunidade-topicos-divisor" />
            <div className="comunidade-topicos-pop">
                <div className="comunidade-topicos-pop-p">
                    <p className="comunidade-topicos-pop-titulo">Mais populares</p>
                    <RiStarFill className="comunidade-topicos-pop-icon" />
                </div>
                <ComunidadeSlider images={comunidadesPopular} />
            </div>
            <hr className="comunidade-topicos-divisor" />
            <div className="comunidade-topicos-novo">
                <ComunidadeSlider images={comunidadesNovo} />
                <div className="comunidade-topicos-novo-p">
                    <p className="comunidade-topicos-novo-titulo">Novas comunidades</p>
                    <RiAddLine className="comunidade-topicos-novo-icon" />
                </div>
            </div>
            <hr className="comunidade-topicos-divisor" />
            <div className="comunidade-topicos-alta">
                <p className="comunidade-topicos-alta-titulo">Em alta</p>
                <div className="comunidade-topicos-alta-com">
                    <div className="comunidade-topicos-alta-exp">
                        <img className="comunidade-topicos-alta-img" src={community1} alt="Comunidade" />
                        <p className="comunidade-topicos-alta-membros">x membros</p>
                    </div>
                    <div className="comunidade-topicos-alta-exp">
                        <img className="comunidade-topicos-alta-img" src={community4} alt="Comunidade" />
                        <p className="comunidade-topicos-alta-membros">x membros</p>
                    </div>
                    <div className="comunidade-topicos-alta-exp">
                        <img className="comunidade-topicos-alta-img" src={community2} alt="Comunidade" />
                        <p className="comunidade-topicos-alta-membros">x membros</p>
                    </div>
                </div>
            </div>
            <hr className="comunidade-topicos-divisor" />
        </div>
    );
}