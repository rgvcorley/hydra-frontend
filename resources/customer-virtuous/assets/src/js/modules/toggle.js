/*
 * Toggle module
 * Implements toggle functionality to specified DOM elements
*/

var toggleModule = {

    /*
     * Initialises the module
     *
     * @method init
     * @param {HTMLObject} el should be an HTMLObject containing the DOM module element
    */
    init: function (el) {

        // High-level parameter checking, if no DOM element, we cannot proceed
        if(!el) {
            return;
        }

        // Initialise module instances
        if(!toggleModule.instances) {
            toggleModule.instances = [];
        }

        // Set base module properties
        toggleModule.els = {};
        toggleModule.els.moduleEl = el;
        toggleModule.els.wrapperEl = el.querySelector('[data-js="toggle-wrapper"]');
        toggleModule.els.primaryEl = el.querySelector('[data-js="toggle-primary"]');
        toggleModule.els.secondaryEl = el.querySelector('[data-js="toggle-secondary"]');
        toggleModule.els.coverEl = el.querySelector('[data-js="toggle-cover"]');
        toggleModule.els.checkboxEl = el.querySelector('[data-js="toggle-checkbox"]');

        // Push this instance into instance array and delete the els object key
        toggleModule.instances.push(toggleModule.els);
        delete toggleModule.els;

        // Push reference to module instance into DOM
        el.setAttribute('data-module-instance', toggleModule.instances.length - 1);

        // Bind event handlers
        toggleModule.bindEventHandlers(toggleModule.instances[toggleModule.instances.length - 1]);
    },


    /*
     * Binds event handlers to the necessary DOM elements
     *
     * @method bindEventHandlers
    */
    bindEventHandlers: function (thisInstance) {

        // Wrapper element click event handler
        thisInstance.moduleEl.addEventListener('click', function (e) {

            // If checkbox is checked
            if(thisInstance.checkboxEl.checked) {
                // Un-check it
                thisInstance.wrapperEl.setAttribute('class', 'toggle__input-ui toggle__input-ui--secondary');
                thisInstance.checkboxEl.checked = false;
            }
            else {
                // Check it
                thisInstance.wrapperEl.setAttribute('class', 'toggle__input-ui toggle__input-ui--primary');
                thisInstance.checkboxEl.checked = true;
            }

        }, false);


    }

};

module.exports = toggleModule;