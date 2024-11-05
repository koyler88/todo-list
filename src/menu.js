export function createMenu() {
    const content = document.getElementById("content")
    
    const active = document.querySelector(".active")
    active.classList.remove('active')
    
    const menu = document.querySelector('.menu')
    menu.classList.add('active')
}