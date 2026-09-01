import { menuModal } from "./menumodal.js"
function renderNavbar(rotas){
    const nav = document.querySelector("#navbar")
    nav.innerHTML = `
    <nav>
        <ul class="navbar-bottom">
            ${
                rotas.map((menu)=> `<li>
                <a href="${menu.url}" class="nav-icon">
                    <i data-lucide="${menu.icon}"></i>  
                    ${menu.label}
                </a>
            </li>` )
            }
            
            <i data-lucide="menu" class="nav-icon menu-ham"></i> 
        </ul>
    </nav>
    `
    nav.innerHTML += menuModal()
    
}
document.addEventListener("DOMContentLoaded", abrirModal, false);
function abrirModal(){
    const botaomenu = document.querySelector(".menu-ham")
    const modal = document.getElementById("modal")
    let aberto = 0
    botaomenu.addEventListener("click", ()=>{
        if(aberto===0){
            modal.style.display = "block"
            aberto=1
            return
        }
         aberto=0
         modal.style.display = "none"
    })
   
}
export { renderNavbar }