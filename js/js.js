(function () {

    'use strict';


    function createModal(name){
        var 
            modalContainer = document.querySelector('.modal-'+ name +'-container'),
            icon = document.querySelector('.skills-'+ name),
            modal = document.querySelector('.skills-'+ name +'-modal');

        icon.addEventListener('click', function (e) {
            modalContainer.classList.add('fullScreen');
            modal.style.display = "block";
        });

        return {
            container: modalContainer,
            modal: modal
        };
    }

    const 
        modalHtml =     createModal('html'),
        modalSass =     createModal('sass'),
        modalJs =       createModal('js'),
        modalReact =    createModal('react');


    /* Zamykanie */
    const modalExits = document.querySelectorAll('.skills-modal-exit');

    for (let i = 0; i < modalExits.length; i++) {

        modalExits[i].addEventListener('click', function (e) {
            modalHtml.container.classList.remove('fullScreen');
            modalSass.container.classList.remove('fullScreen');
            modalJs.container.classList.remove('fullScreen');
            modalReact.container.classList.remove('fullScreen');

            modalHtml.modal.style.display = "none";
            modalSass.modal.style.display = "none";
            modalJs.modal.style.display = "none";
            modalReact.modal.style.display = "none";
        });
    };


    /* DRAGGING MODAL */

    dragModal('.skills-html-modal');
    dragModal('.skills-sass-modal');
    dragModal('.skills-js-modal');
    dragModal('.skills-react-modal');


    function dragModal(element_class) {
        /* początkowe wartości na 0 */
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0,
            element = document.querySelector(element_class);

        

        /* Wywolaj sprawdzanie na wcisniecie myszki na naglowku */
        element.querySelector('.skills-modal-header').onmousedown = dragMouseDown;



        function dragMouseDown(e) {

            /* ustal pozycje kursora */
            pos3 = e.clientX; // pozycja od lewej
            pos4 = e.clientY; // pozycja od gory            

            /* myszka puszczona - zakoncz przenoszenie */
            document.onmouseup = closeDragElement;

            /* ruch myszki - przenies element */
            document.onmousemove = elementDrag;
        };

        function elementDrag(e) {

            /* pobierz o ile przesunal sie kursor */
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;

            /* przesun element o przesuniecie kursora*/
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";

            /* ustal ponownie pozycje kursora */
            pos3 = e.clientX;
            pos4 = e.clientY;
        };

        /* Przerwanie przenoszenia */
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        };
    };


})(document);