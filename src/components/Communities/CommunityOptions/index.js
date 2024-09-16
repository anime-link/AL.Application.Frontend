import { useState } from "react";
import "./styles.css";
import ReactPaginate from "react-paginate";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function ComunidadeOpcoes({ comunidades }) {
    const [paginaAtual, setPaginaAtual] = useState(0);
    const comunidadesPorPagina = 6;

    // Cálculo do índice inicial e final de itens da página atual
    const inicio = paginaAtual * comunidadesPorPagina;
    const fim = inicio + comunidadesPorPagina;
    const comunidadesPagina = comunidades.slice(inicio, fim);

    const handlePageClick = (data) => {
        setPaginaAtual(data.selected);
    }

    return (
        <div className="comunidade-opcoes-area">
            <h1 className="comunidade-opcoes-titulo">Todas as comunidades</h1>
            <div className="comunidade-opcoes-img-area">
                {comunidadesPagina.map((img, i) => (
                    <div className="comunidade-opcoes-img" key={i}>
                        <img src={img} width={270} height={141} alt={`Comunidade ${i}`} />
                    </div>
                ))}
            </div>
            <ReactPaginate 
                previousLabel={<RiArrowLeftSLine className="comunidade-opcoes-antes" />}
                nextLabel={<RiArrowRightSLine className="comunidade-opcoes-depois" />}
                pageCount={Math.ceil(comunidades.length / comunidadesPorPagina)}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'pagina-item'}
                pageLinkClassName={'pagina-link'}
                pageLabelBuilder={(page) => `${page}`}
            />
        </div>
    );
}