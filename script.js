const boton = document.getElementById('boton-tema');

const cuerpo = document.body;

function cambiarTema() {
    cuerpo.classList.toggle('dark-mode');
}

if(cuerpo.classList.contains('dark-mode')) {
    boton.innerText = 'Modo Claro';
}else {
    boton.innerText = 'Modo Oscuro';
}

boton.addEventListener('click', cambiarTema);