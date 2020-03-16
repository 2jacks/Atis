
var burger = document.getElementById("burger-menu");

            burger.addEventListener("click", showNav);
            
            function showNav() {
                var nav = document.getElementById("header__nav");
                nav.classList.toggle("open-nav");
                burger.classList.toggle("change");
            }