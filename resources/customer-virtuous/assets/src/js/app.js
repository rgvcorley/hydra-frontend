var menu = require('./modules/menu');
var toggle = require('./modules/toggle');
var tooltip = require('./modules/tooltip');

menu.init();
tooltip.init();

// Pick up module elements present in the DOM via specific data attribute
var toggleEls = document.querySelectorAll('[data-module="toggle"]');

for (var i = 0; i < toggleEls.length; i++) {
    toggle.init(toggleEls[i]);
}