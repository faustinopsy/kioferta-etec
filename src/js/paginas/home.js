async function home(app) {
    const pagina =  `<h1> Esta é página Inicial </h1>

    `
    app.innerHTML = pagina;
}

export default {
    url: '#home',
    label: 'Home',
    pagina: home
}