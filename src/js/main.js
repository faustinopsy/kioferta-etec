import { renderNavbar } from './components/navbar/navbar.js'
import { createIcons, icons } from 'lucide';
import { roteador,iniciarApp } from './components/rotas/rotas.js';

renderNavbar(roteador)
iniciarApp()

createIcons({ icons });