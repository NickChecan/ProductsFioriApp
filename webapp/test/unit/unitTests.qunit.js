/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jd/poc/product/app/ProductApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});