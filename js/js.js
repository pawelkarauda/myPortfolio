(function() {

    'use strict';

    
    /* Zamykanie */
    const modalExits = document.querySelectorAll('.skills-modal-exit');
    
    for (let i = 0; i < modalExits.length; i++) {

        modalExits[i].addEventListener('click', function(e) {
            modalHtmlContainer.classList.remove('fullScreen');
            modalSassContainer.classList.remove('fullScreen');
            modalJsContainer.classList.remove('fullScreen');
            modalReactContainer.classList.remove('fullScreen');
            htmlModal.style.display = "none";
            sassModal.style.display = "none";
            jsModal.style.display = "none";
            reactModal.style.display = "none";


        });
    }; 


    
    /* HTML Modal */
    const modalHtmlContainer = document.querySelector('.modal-html-container');
    const htmlIcon = document.querySelector('.skills-html');
    const htmlModal = document.querySelector('.skills-html-modal');
    
    htmlIcon.addEventListener('click', function(e) {
        modalHtmlContainer.classList.add('fullScreen');
        htmlModal.style.display = "block";
    });
    
    
    /* SASS Modal */
    const modalSassContainer = document.querySelector('.modal-sass-container');
    const sassIcon = document.querySelector('.skills-sass');
    const sassModal = document.querySelector('.skills-sass-modal');

    sassIcon.addEventListener('click', function(e) {
        modalSassContainer.classList.add('fullScreen');
        sassModal.style.display = "block";
    })

    /* JS Modal  */
    const modalJsContainer = document.querySelector('.modal-js-container');
    const jsModal = document.querySelector('.skills-js-modal');
    const jsIcon = document.querySelector('.skills-js');

    jsIcon.addEventListener('click', function(e) {
        modalJsContainer.classList.add('fullScreen');
        jsModal.style.display = "block";
    })


    /* React Modal */
    const modalReactContainer = document.querySelector('.modal-react-container');
    const reactModal = document.querySelector('.skills-react-modal');
    const reactIcon = document.querySelector('.skills-react');

    reactIcon.addEventListener('click', function(e) {
        modalReactContainer.classList.add('fullScreen');
        reactModal.style.display = "block";
    })

})(document);