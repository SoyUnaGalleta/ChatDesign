function  check(a) {
    let personas = document.getElementsByClassName('main__container__left__list__cont')
    let compr = 'chat' + a

    for (let i = 0; i < personas.length; i++) {
        let texto = 'chat' + i
        if (compr == texto) {
            personas[i].style.background = "#CEE5D0";
            personas[i].style.color = "#000";
        } else {
            personas[i].style.background = "#fff";
            personas[i].style.color = "#88ac95";
        }
    }
}

function enlaces() {
    let enlacesBarra = document.getElementsByClassName('navegation_enlaces')[0]
    enlacesBarra.style.height = '170px';
    enlacesBarra.style.padding = '5px';
    enlacesBarra.style.boxShadow = '2px 2px 2px $darkTwo';

    let boton1 = document.getElementById('navigation__button')
    let boton2 = document.getElementById('navigation__button2')

    boton1.style.display = 'none';
    boton2.style.display = 'block'

}

function ocultarEnlaces() {

    let enlacesBarra = document.getElementsByClassName('navegation_enlaces')[0]
    enlacesBarra.style.height = '0px';
    enlacesBarra.style.padding = '0px 20px';
    enlacesBarra.style.boxShadow = '0px 0px 0px $darkTwo';

    let boton1 = document.getElementById('navigation__button')
    let boton2 = document.getElementById('navigation__button2')

    boton1.style.display = 'block';
    boton2.style.display = 'none'
}