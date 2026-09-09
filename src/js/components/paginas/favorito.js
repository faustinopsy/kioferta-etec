function favorito(app) {
    app.innerHTML = `
    <div>
    <h1>Página favorito</h1>
    </div>`
}

export default { 
    url: "#favorito",
    label: "favorito",
    icon: "bookmark",
    pagina: favorito
 };