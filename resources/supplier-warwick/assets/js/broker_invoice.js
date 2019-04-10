let costCentreId = parseInt(document.getElementById('form_costCentreId').value);
// the following invalid javascript is necessary to interpolate the required strings in the php file in which it is used
let telephoneCostCentres = [%s];
let nonTelephoneCostCentres = [%s];

let meterNumberGroup = document.getElementById('meter_number_group');
let meterLocationGroup = document.getElementById('meter_location_group');
let telephoneNumberGroup = document.getElementById('telephone_number_group');

if (telephoneCostCentres.indexOf(costCentreId) != -1) {
  meterNumberGroup.hidden = true;
  meterLocationGroup.hidden = true;
  telephoneNumberGroup.hidden = false;
} else if (nonTelephoneCostCentres.indexOf(costCentreId) != -1) {
  meterNumberGroup.hidden = false;
  meterLocationGroup.hidden = false;
  telephoneNumberGroup.hidden = true;
}
