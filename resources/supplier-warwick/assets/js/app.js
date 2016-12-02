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
	
	$('.mobile-sub-nav').change(function() {
        window.location = $(this).find("option:selected").val();
      });
	
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

    if ($('table.dataTable')) {
		$('table.dataTable').dataTable({
		    "pageLength": 50,
		    "ordering": true,
		    "info": false,
		    "searching": false
		});
    }
    
    // Enable email comms
	$('form[action="/account/update"] input[type="submit"]').on('click', function(e) {
		if($('input[name="form[consent]"]:checked').val() == 0) {
			e.preventDefault();
			$('#consentModal').addClass('active');
		}
	});
	$('#consentModal #sure').on('click', function(e) {
		e.preventDefault();
		$('form[action="/account/update"]').submit();
	});
	$('#consentModal #enable-consent').on('click', function(e) {
		e.preventDefault();
		$('#form_consent_1').prop('checked', false);
		$('#form_consent_0').prop('checked', true);
		$('#consentModal').removeClass('active');
		$('form[action="/account/update"]').submit();
	});
	$('#consentModal #close').on('click', function(e) {
		e.preventDefault();
		$('#consentModal').removeClass('active');
	});

});