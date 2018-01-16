document.addEventListener('DOMContentLoaded', function () {

    'use strict';


    /* Zamykanie */
    function ModalAddEventClosing(container, modal) {
        var exits = modal.querySelectorAll('.skills-modal-exit');

        for (let i = 0; i < exits.length; i++) {

            exits[i].addEventListener('click', function (e) {
                container.classList.remove('fullScreen');
                modal.style.display = "none";
            });
        };
    }


    /* Otwieranie */
    function ModalAddEventOpening(name) {
        var
            container = document.querySelector('.modal-' + name + '-container'),
            icon = document.querySelector('.skills-' + name),
            modal = document.querySelector('.skills-' + name + '-modal');

        icon.addEventListener('click', function (e) {
            container.classList.add('fullScreen');
            modal.style.display = "block";
            centerModal(name); // centrowanie
        });

        ModalAddEventClosing(container, modal);

    };

        ModalAddEventOpening('html'),
        ModalAddEventOpening('sass'),
        ModalAddEventOpening('js'),
        ModalAddEventOpening('react');


    /* centrowanie okienka modalnego */
    function centerModal(name) {

            var modal = document.querySelector('.skills-'+name+'-modal');

            /* zbadaj rozmiar okienka modalnego bo każdy inny */
            var modalHeight = modal.offsetHeight;
            var modalWidth = modal.offsetWidth;

            /* ustaw modal po srodku */
            modal.style.top = (window.innerHeight - modalHeight) / 2 + "px";
            modal.style.left = (window.innerWidth - modalWidth) / 2 + "px";

    };

    window.addEventListener('resize', function(){
        centerModal('html');
        centerModal('sass');
        centerModal('js');
        centerModal('react');
    });
    


    /* DRAGGING MODAL */

    function dragModal(element_class) {
        /* początkowe wartości na 0 */
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0,
            element = document.querySelector(element_class);


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

        function dragMouseDown(e) {

            /* ustal pozycje kursora */
            pos3 = e.clientX; // pozycja od lewej
            pos4 = e.clientY; // pozycja od gory            

            /* myszka puszczona - zakoncz przenoszenie */
            document.onmouseup = closeDragElement;

            /* ruch myszki - przenies element */
            document.onmousemove = elementDrag;
        };

        /* Wywolaj sprawdzanie na wcisniecie myszki na naglowku */
        element.querySelector('.skills-modal-header').onmousedown = dragMouseDown;
    };


    dragModal('.skills-html-modal');
    dragModal('.skills-sass-modal');
    dragModal('.skills-js-modal');
    dragModal('.skills-react-modal');


});