async function sobre(app) {
    const pagina =  `<h1> Esta é página Sobre </h1>

    `
    app.innerHTML = pagina;
}

export default {
    url: '#sobre',
    label: 'sobre',
    pagina: sobre
}