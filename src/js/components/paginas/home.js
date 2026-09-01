function home(app){
    app.innerHTML = `
    <div>
        <h1>
            Pággina inicial
        </h1>
    </div>
    `
}

export default {
    url: '#home',
    label: 'Home',
    icon: 'house',
    pagina: home
}