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
      color: 0xa828b6,
      backgroundColor: 0x0,
      points: 5.00,
      maxDistance: 22.00,
      spacing: 11.00
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

$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

