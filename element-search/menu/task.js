const menuLinks = document.querySelectorAll('.menu__link');

for (let link of Array.from(menuLinks)) {
    link.onclick = function() {
        const parent = link.closest('.menu__item');
        if (parent.querySelector('.menu_sub') === null) {
         return true; 
        }
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub'
        };
        if (link.closest('.menu_main')) {
            return false
        };
    };
};