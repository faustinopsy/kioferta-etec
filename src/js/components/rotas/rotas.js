import home from '../paginas/home.js'
import lista from '../paginas/lista.js'

const roteador = [
    home,
    lista
]

function iniciarApp(){
    const app = document.querySelector("#app")
    let hash = window.location.hash || '#inicio';
    const mapaDeRotas = {}

    for(const rota of roteador){
        mapaDeRotas[rota.url] = rota
    }
    
    render();
    window.addEventListener("hashchange", ()=>{
        hash = window.location.hash;
        render();

    })
    const rota404 = { pagina: () => `<div> Página não encontrada 404 </div>`}
    async function render(){
        const rotaAtual = mapaDeRotas[hash] || rota404
        await rotaAtual.pagina(app)
    }

    
}
export {roteador, iniciarApp}