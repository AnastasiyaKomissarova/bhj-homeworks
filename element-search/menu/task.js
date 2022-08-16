const menuLinks = document.querySelectorAll('.menu__link');

for (let link of Array.from(menuLinks)) {
    link.onclick = function() {
        /*const parent = link.closest('.menu__item');*/
        if (this.parentElement.querySelector('.menu_sub').className === 'menu menu_sub') {
            this.parentElement.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            this.parentElement.querySelector('.menu_sub').className = 'menu menu_sub'
        };

        if (link.closest('.menu_main')) {
            return false
        };
    };
};