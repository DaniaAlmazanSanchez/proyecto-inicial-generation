const menuicono = document.querySelector('.menuicono');
const menunavegacion = document.querySelector('.menunavegacion');
console.log(menuicono)
console.log(menunavegacion)

menuicono.addEventListener('click', () => {
    menunavegacion.classList.toggle("spread")

})

window.addEventListener('click', e => {
    if (menunavegacion.classList.contains('spread')
        && e.target != menunavegacion && e.target != menuicono) {
        menunavegacion.classList.toggle("spread")
    }
})