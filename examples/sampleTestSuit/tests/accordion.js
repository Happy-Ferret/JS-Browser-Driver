// The test as generated by the recordPageEvents utility is : 
//
//driver.loadLib("replayPageEvents");
//asyncTest("auto-generated-test", function (){
//	var test=this;
//
//	expect(8)
//
//	testWaitForEvent("load", driver.targetSiteFrame);
//	testFireEvent("click", "html>body>a");
//	testWaitForEvent("load", driver.targetSiteFrame);
//	testFireEvent("click", "button#create");
//	testFireEvent("click", "div#accordion>h3.ui-accordion-header.ui-helper-reset.ui-state-hover.ui-state-focus.ui-state-active.ui-corner-top>a");
//	testFireEvent("click", "div#accordion>h3.ui-accordion-header.ui-helper-reset.ui-state-hover.ui-state-focus.ui-state-active.ui-corner-top>a");
//	testFireEvent("click", "div#accordion>h3.ui-accordion-header.ui-helper-reset.ui-state-hover.ui-state-focus.ui-state-active.ui-corner-top>a");
//
//	execCb(function (){
//		ok(true, "complete");
//		start();
//	});
//});
//
//
// The code was then altered to look like this:

driver.loadLib("util");
driver.loadLib("recordPageEvents/replayPageEvents");
asyncTest("Accordion widget", 12, function (){
	var test=this;

	driver.storage.ReplayPageEvents.initialize();

	testUtils.setPath('/public_html/jqueryui/index.html', ok); // load the index page
	testWaitForEvent("load", driver.targetSiteFrame);
	testFireEvent("click", "html>body>ul>li:eq(0)>a");
	testWaitForEvent("load", driver.targetSiteFrame);
	testFireEvent("click", "button#create");
	wait(2000); // give a little time (2 sec) for the accordion widget to be creaeted
	testFireEvent("click", "div#accordion>h3.ui-accordion-header.ui-helper-reset:eq(1)>a");
	wait(1000); // give a little time (1 sec) for the accordion section to open
	execCb(function (){
		ok(testUtils.$('div#accordion>h3.ui-accordion-header.ui-helper-reset:eq(1)').hasClass('ui-state-active ui-corner-top'), 'has classes');
	});
	testFireEvent("click", "div#accordion>h3.ui-accordion-header.ui-helper-reset:eq(2)>a");
	wait(1000); // give a little time (1 sec) for the accordion section to open
	execCb(function (){
		ok(testUtils.$('div#accordion>h3.ui-accordion-header.ui-helper-reset:eq(2)').hasClass('ui-state-active ui-corner-top'), 'has classes');
	});
	testFireEvent("click", "div#accordion>h3.ui-accordion-header.ui-helper-reset:last>a");
	wait(1000); // give a little time (1 sec) for the accordion section to open
	execCb(function (){
		ok(testUtils.$('div#accordion>h3.ui-accordion-header.ui-helper-reset:last').hasClass('ui-state-active ui-corner-top'), 'has classes');
	});

	execCb(function (){
		ok(true, "complete");
		start();
	});
});

/**
 * !!! IMPORRTANT: Most browsers will detect if the browser window that executes the test is not visible (eg. minimized or its tab is not active) 
 * and will not execute most of the simulated UI events to preserve computational resources, but that of course will break the test. So make sure
 * that window is visible !
 */