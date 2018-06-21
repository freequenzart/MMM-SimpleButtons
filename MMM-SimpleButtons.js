/* global Module */

/* Magic Mirror
 * Module: MMM-SimpleButtons based on MMM-Button
 *
 * MIT Licensed.
 */

Module.register('MMM-SimpleButtons',{	
	requiresVersion: "2.1.0",
	defaults: {
				clickDelay: 2000,
			    buttons: {
					17: "BUTTON_17_CLICKED",
					27: "BUTTON_27_CLICKED"
				}	
	},	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "BUTTON_CLICKED"){
			this.sendNotification(payload, { })
		}
	},	
	start: function() {
		this.sendSocketNotification('BUTTON_CONFIG', this.config);
		Log.info('Starting module: ' + this.name);
	}
});
