function lista(app) {
    app.innerHTML = `
    <div>
    <h1>Lista</h1>
    </div>`
}

export default { 
    url: "#lista",
    label: "Lista",
    icon: "badge-dollar-sign",
    pagina: lista
 };