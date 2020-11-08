'use strict'

const link = Array.from(document.getElementsByClassName("menu__link"));

link.forEach(element => {
    element.onclick = () => {
        if (element.closest("li").querySelector(".menu_active")) {
            document.querySelector(".menu_active").classList.remove('menu_active');
            return false;
        } else {
            if (document.querySelector(".menu_active")) {
                document.querySelector(".menu_active").classList.remove('menu_active');
            }
            if (element.closest("li").querySelector("ul.menu_sub")) {
                element.closest("li").querySelector("ul.menu_sub").classList.add('menu_active');
                return false;
            }
        };
    }
});