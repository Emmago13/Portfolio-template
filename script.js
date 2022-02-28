
const navbarMenuIcon = (() => {
    let header = document.querySelector('.header');
    let menuIcon = document.querySelector('.menu__icon');

    menuIcon.addEventListener('click', () => toogleClass(header, 'nav__active'));
    
    const toogleClass = (element, activeClass) => {
        if (element.classList.contains(activeClass)) {
            element.classList.remove(activeClass);
        }else{
            element.classList.add(activeClass);
        }
    }

})();
 