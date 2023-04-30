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

    let w = window.innerWidth;
    if (w <= 540) {
        let right = document.getElementsByClassName('main__container__right')
        right[0].style.display = 'flex';
        let left = document.getElementsByClassName('main__container__left')
        left[0].style.display = 'none';
    }
}


function  retorno() {
    let right = document.getElementsByClassName('main__container__right')
        right[0].style.display = 'none';
        let left = document.getElementsByClassName('main__container__left')
        left[0].style.display = 'flex';

}