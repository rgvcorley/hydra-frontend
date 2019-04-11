$.noConflict();

jQuery(document).ready(function($) {

	// This allows ANY number of datefields in a form to work with the datepicker, that's right bitch, any number
	var dateFields = $('.datepicker');
	var numberOfDateFields = dateFields.length;

	for (let i = 0; i < numberOfDateFields; i++) {
		new Pikaday({
			field: $('.datepicker')[i],
			format: 'DD/MM/YYYY'
		});
	}
});
