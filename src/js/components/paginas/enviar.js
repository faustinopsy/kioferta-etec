function enviar(app) {
    app.innerHTML = `
    <div>
    <h1>Página Inicial</h1>
    </div>`
}

export default { 
    url: "#enviar",
    label: "enviar",
    icon: "diff",
    pagina: enviar
 };