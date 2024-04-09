
var menuItems = document.querySelectorAll('.item-menu'); 
function selectLink() { 
    menuItems.forEach((item) => { 
        item.classList.remove('ativo');
    });
    
    this.classList.add('ativo'); 
}

menuItems.forEach((item) => {
    item.addEventListener('click', selectLink);
});

var btnExp = document.querySelector('.btn-expandir');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
});
