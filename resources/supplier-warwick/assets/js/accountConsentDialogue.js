$(function(){
   
   $('form').on('submit', function(e) {
       if ($('#form_consent_1').is(':checked')) {
           e.preventDefault();
           $(document).on('click', '#enable-consent', function() {
               $('#form_consent_0').prop('checked', true);
               $('form').submit();
           });
           $(document).on('click', '#sure', function() {
               $('form').off('submit');
               $('form').submit();
           });
           $('#consentModal').modal('show');
       }
   });
    
});
