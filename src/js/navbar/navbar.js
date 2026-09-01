function navbar(item_menu){
const navbar = document.getElementById('navbar');
navbar.innerHTML = `
<nav class="navbar">
    <ul class="menu">
        ${
            item_menu.map((item)=>{
                return `<li><a href="${item.url}" class="navbar-item">${item.label}</a></li>`
            }).join('')
        }
    </ul>
</nav>`;

}

export default navbar;