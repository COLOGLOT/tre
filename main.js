var btn = document.querySelector('#btn');
var menu = document.querySelector('#menu');
btn.addEventListener('click', () => {
    if (menu.classList.contains('menu')){
        menu.classList.remove('menu');
        document.getElementById('btn').style.cssText = 'transform: rotate(-180deg); transition: ease-in .4s'
    }
    else{
        menu.classList.add('menu');
        document.getElementById('btn').style.cssText = 'transform: rotate(180deg); transition: ease-in .4s'
    }
})