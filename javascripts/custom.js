  $(document).ready(function() {

	// Accordion
	$("#accordion").accordion({ header: "h3", active: false, autoHeight: false,
			navigation: true, alwaysOpen: false, animated: 'bounceslide', collapsible: true });
			
	// Change the Default Arrow icons to Plus and Minus
	$("#accordion").accordion("option", "icons",
{ 'header': 'ui-icon-circle-plus', 'headerSelected': 'ui-icon-circle-minus' });
	
	//hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
	
});

  $(document).ready(function() {

	// Accordion for phone/mobile
	$("#accordionphone").accordion({ header: "h3", active: false, autoHeight: false,
			navigation: true, alwaysOpen: false, animated: 'bounceslide', collapsible: true });
			
	// Change the Default Arrow icons to Plus and Minus
	$("#accordionphone").accordion("option", "icons",
{ 'header': 'ui-icon-circle-plus', 'headerSelected': 'ui-icon-circle-minus' });
	
	//hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
	
});

// pdf icons
$(document).ready(function() {
    $('a[href$=".pdf"]').addClass('pdf');
});
