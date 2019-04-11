// The javascript in this file is for hiding/showing fields depending on
// which cost centre is chosen by the Broker, and making the visible fields required
// This javascript is used by the BrokerUploadController in the Supplier App

let costCentreId = parseInt(document.getElementById('form_costCentreId').value);
// the following invalid javascript is necessary to interpolate the required strings
// in the php file in which it is used
let telephoneCostCentres = [%s];
let nonTelephoneCostCentres = [%s];

let meterNumberGroup = document.getElementById('meter_number_group');
let meterLocationGroup = document.getElementById('meter_location_group');
let telephoneNumberGroup = document.getElementById('telephone_number_group');

let meterNumberField = document.getElementById('form_meterNumber');
let meterLocationField = document.getElementById('form_meterLocation');
let telephoneNumberField = document.getElementById('form_telephoneNumber');

if (telephoneCostCentres.indexOf(costCentreId) != -1) {
  meterNumberGroup.hidden = true;
  meterLocationGroup.hidden = true;
  telephoneNumberGroup.hidden = false;

  meterNumberField.required = false;
  meterLocationField.required = false;
  telephoneNumberField.required = true;
} else if (nonTelephoneCostCentres.indexOf(costCentreId) != -1) {
  meterNumberGroup.hidden = false;
  meterLocationGroup.hidden = false;
  telephoneNumberGroup.hidden = true;

  meterNumberField.required = true;
  meterLocationField.required = true;
  telephoneNumberField.required = false;
}
