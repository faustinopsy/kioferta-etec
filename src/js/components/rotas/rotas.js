import enviar from "../paginas/enviar.js";
import mapa from "../paginas/mapa.js";
import favorito from '../paginas/favorito.js';
import conta from "../paginas/conta.js";
import buscar from "../paginas/buscar.js"
import produtos from "../paginas/produtos.js"
const rotas = [
    buscar,
    mapa,
    enviar,
    favorito,
    conta,
    produtos
]

export {rotas}