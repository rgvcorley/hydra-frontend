$.noConflict();

jQuery(document).ready(function($) {
	
	var picker = new Pikaday({
		field: $('.datepicker')[0],
        format: 'DD/MM/YYYY'
	});

});