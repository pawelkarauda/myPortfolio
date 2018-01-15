(function () {

    'use strict';


    /* Zamykanie */
    const modalExits = document.querySelectorAll('.skills-modal-exit');

    for (let i = 0; i < modalExits.length; i++) {

        modalExits[i].addEventListener('click', function (e) {
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

    htmlIcon.addEventListener('click', function (e) {
        modalHtmlContainer.classList.add('fullScreen');
        htmlModal.style.display = "block";
    });


    /* SASS Modal */
    const modalSassContainer = document.querySelector('.modal-sass-container');
    const sassIcon = document.querySelector('.skills-sass');
    const sassModal = document.querySelector('.skills-sass-modal');

    sassIcon.addEventListener('click', function (e) {
        modalSassContainer.classList.add('fullScreen');
        sassModal.style.display = "block";
    })

    /* JS Modal  */
    const modalJsContainer = document.querySelector('.modal-js-container');
    const jsModal = document.querySelector('.skills-js-modal');
    const jsIcon = document.querySelector('.skills-js');

    jsIcon.addEventListener('click', function (e) {
        modalJsContainer.classList.add('fullScreen');
        jsModal.style.display = "block";
    })


    /* React Modal */
    const modalReactContainer = document.querySelector('.modal-react-container');
    const reactModal = document.querySelector('.skills-react-modal');
    const reactIcon = document.querySelector('.skills-react');

    reactIcon.addEventListener('click', function (e) {
        modalReactContainer.classList.add('fullScreen');
        reactModal.style.display = "block";
    });




    /* DRAGGING MODAL */

    dragModal(document.querySelector('.skills-html-modal'));
    dragModal(document.querySelector('.skills-sass-modal'));
    dragModal(document.querySelector('.skills-js-modal'));
    dragModal(document.querySelector('.skills-react-modal'));


    function dragModal(element) {
        /* początkowe wartości na 0 */
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;

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