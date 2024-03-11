// Objeto 3D no fundo

window.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fffbb,
      points: 3.00,
      maxDistance: 23.00,
      spacing: 16.00
    })

setTimeout(() => {
  const main = document.querySelector('main')
  main.style.opacity = 1
  main.style.filter = 'blur(0px)'
  },300)
  })


// Overlay do Menu Mobile (Escurece a Tela do Fundo e abre a Lista)

let btnMenu = document.getElementById('btn-menu')
let menu = documente.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

