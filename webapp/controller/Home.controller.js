sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("pwa.gitzpwa_git.controller.Home", {
		onInit: function() {
			setTimeout(this._showNotification(), 10000);
		},
		_showNotification: function() {
			navigator.serviceWorker.getRegistration().then(function(reg) {
				var options = {
					body: 'Here is a notification body!',
					icon: 'icons/icon-152x152.png',
					vibrate: [100, 50, 100],
					data: {
						dateOfArrival: Date.now(),
						primaryKey: 1
					}
				};
				reg.showNotification('Hello world!', options);
			});
		}
	});
});