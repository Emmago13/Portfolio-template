
const navbarMenuIcon = (() => {
    let body = document.querySelector('body');
    let menuIcon = document.querySelector('.menu__icon');

    menuIcon.addEventListener('click', () => toogleClass(body, 'nav__active'));
    
    const toogleClass = (element, activeClass) => {
        if (element.classList.contains(activeClass)) {
            console.log(element);
            element.classList.remove(activeClass);
        }else{
            console.log(element);
            element.classList.add(activeClass);
        }
    }

})();
 