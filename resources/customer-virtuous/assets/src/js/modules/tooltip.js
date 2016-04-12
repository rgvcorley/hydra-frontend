/*
 * Tooltip module
 * Implements tooltip functionality to specified DOM elements
*/

var tooltipModule = {

    /*
     * Initialises the module
     *
     * @method init
    */
    init: function () {

        // Live event listener for clicks on tooltip icons
        document.body.addEventListener('click', function(e) {

            // If a tooltip was clicked
            if(e.target && e.target.getAttribute('data-js') === 'tooltip-icon') {

                var icon = e.target;

                // Show the associated message
                var message = icon.nextElementSibling;
                var state = icon.getAttribute('data-state');

                // If message exists
                if(message) {
                    // Update the class
                    if(state === 'closed') {
                        message.setAttribute('class', 'tooltip__message tooltip__message--is-visible');

                        // Set vertical position based on offset height of tooltip message
                        message.style.top = - message.offsetHeight - 20 + 'px';

                        // Set horizontal position based on offset width of tooltip message
                        message.style.left = - message.offsetWidth / 2 - 25 + 'px';

                        icon.setAttribute('data-state', 'open');
                    }
                    else {
                        message.setAttribute('class', 'tooltip__message');
                        icon.setAttribute('data-state', 'closed');
                    }
                }
            }

        });

    }

};

module.exports = tooltipModule;