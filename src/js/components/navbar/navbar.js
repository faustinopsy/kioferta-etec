function renderNavbar(rotas) {
    const nav = document.querySelector("#navbar");

    nav.innerHTML = `
        <nav>
            <ul class="navbar-bottom">
                ${
                    rotas.filter(menu => menu.label !== "").map((menu) => `<li><a href="${menu.url}" class="nav-icon"> <i data-lucide="${menu.icon}"></i>${menu.label}</a></li>`).join("")
                }
            </ul>
        </nav>
    `;
}

export { renderNavbar };
