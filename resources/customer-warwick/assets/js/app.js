$.noConflict();

jQuery(document).ready(function($) {
	
	// call jRespond and add breakpoints
	var jRes = jRespond([
	    {
	        label: 'handheld',
	        enter: 0,
	        exit: 979
	    },{
	        label: 'laptop',
	        enter: 980,
	        exit: 10000
	    }
	]);
	
	
	// register enter and exit functions for a single breakpoint
	
	jRes.addFunc({
	    breakpoint: 'handheld',
	    enter: function() {
			$('.menu-container').hamburger({
				label:'',
				speed:100,
				downArrow:'<i class="fa fa-caret-down fa-2x"></a>'
			});
			

	    },
	    exit: function() {
	        $('.hamburger > ul').show();
	        $('.hamburger a.burger').remove();
	        $('.hamburger span.dropper').remove();
	        $('.hamburger').removeClass('hamburger open');
	        
	        
	    }
	});
	
	// 	$('#blocks .row').equalize();

    if ($('table.data-table')) {
		$('table.data-table').dataTable({
		    "pageLength": 50,
		    "ordering": true,
		    "info": false,
		    "searching": false
		});
    }

});