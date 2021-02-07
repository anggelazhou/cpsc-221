/* Hides the "Delete My Account" button from User Profile setting */
$(function() {
  if (window.location.pathname == "/profile/settings") {
    $("a[href$='withdrawal-form']").hide();
  }
});

/*Hide Privacy Policy Element & Change Acceptable Use HTML Text*/
$(document).ready(function() {
  $('.terms_link').html('Acceptable Use and Privacy Policy');
  $('#footer-links > a[href="https://ubc.instructure.com/privacy_policy"]').hide();
  $('#footer-links > a[href="https://canvas.ubc.ca/privacy_policy"]').hide();
  $('.ic-Self-enrollment-footer__Secondary').hide();
});

/*Enable Ally*/
window.ALLY_CFG = {
    'baseUrl': 'https://prod-ca-central-1.ally.ac',
    'clientId': 4
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');
