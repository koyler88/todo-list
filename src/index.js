import './styles.css'

import { createHomepage } from './home.js'
import { createMenu } from './menu.js'
import { createContact } from './contact.js'

function clearContent() {
    const page = document.getElementById('content')
    while (page.firstChild) {
        page.removeChild(page.firstChild)
    }
}

const home = document.querySelector('.home')
home.addEventListener('click', () => {
    clearContent();
    createHomepage();
})

const menu = document.querySelector('.menu')
menu.addEventListener('click', () => {
    clearContent();
    createMenu();
})

const contact = document.querySelector('.contact')
contact.addEventListener('click', () => {
    clearContent();
    createContact();
})

createHomepage();

