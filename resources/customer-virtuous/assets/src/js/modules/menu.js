/*
 * Menu module
 * Controls the showing and hiding of dropdown navigation items when hovered
*/

var menuModule = {

    /*
     * Initialises the module
     *
     * @method init
    */
    init: function () {

        var els = document.querySelectorAll('[data-js="sub-nav-parent"]');

        for(var i = 0; i < els.length; i++) {

            var activeClass = els[i].dataset.activeClass;
            var dropdownActiveClass = els[i].dataset.dropdownActiveClass;

            // Show dropdown on entering parent item
            els[i].children[0].addEventListener('mouseenter', function (event) {
                this.classList.add(activeClass);
                this.nextElementSibling.classList.add(dropdownActiveClass);
            }, false);

            // Hide dropdown on entering parent item
            els[i].addEventListener('mouseleave', function (event) {
                this.children[0].classList.remove(activeClass);
                this.children[0].nextElementSibling.classList.remove(dropdownActiveClass);
            }, false);
        }

        menuModule.attachMenuToggleListener();
    },

    attachMenuToggleListener: function () {
        var els = [].slice.call(document.querySelectorAll('[data-js="menu-toggle"]'));

        els.forEach(function (element, index, array) {
            element.addEventListener('click', function (event) {
                document.body.classList.toggle(element.dataset.bodyClass);
            });
        });
    }

};

module.exports = menuModule;