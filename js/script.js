const header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.addEventListener('click', ()=> {
    navmenu.classList.toggle('open')
    if (menu.classList.contains('bx-menu')) {
        console.log('hello');
        menu.classList.replace('bx-menu', 'bx-x');
    } else {
        menu.classList.replace('bx-x', 'bx-menu');
    }
})


const drop = document.querySelectorAll('.doc-box');


drop.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('open');

        const icon_1 = element.querySelector('.control');

        if (icon_1.classList.contains('uil-plus')) {
            icon_1.classList.replace('uil-plus', 'uil-minus');
        } else {
            icon_1.classList.replace('uil-minus', 'uil-plus');
        }
    })
});