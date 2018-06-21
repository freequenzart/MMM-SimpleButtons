'use strict';

/* Magic Mirror
 * Module: MMM-Button
 *
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const gpio = require('onoff');
module.exports = NodeHelper.create({

	start: function () {
    		this.started = false;
  	},

  	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
    		const self = this;

    		if (notification === 'BUTTON_CONFIG' && this.started == false) {     
			const self = this
			this.config = payload;   	  
			var GPIO = require('onoff').Gpio;
			var buttons = this.config.buttons;

			for(var pin in buttons) {
				console.log("init button on pin " + pin)
				var button = new GPIO(pin, 'in', 'both', { persistentWatch: true, debounceTimeout: this.config.clickDelay });
				button.watch(self.watchWrapper(button));  
		
			}
        
		this.started = true
    		};
  	},

	watchWrapper: function(button) {
		var self = this;
		return function(err, state) {
		  	// check the state of the button
		  	// 1 == pressed, 0 == not pressed
	  		if(state == 1) {
				// send notification for broadcast
				self.sendSocketNotification("BUTTON_CLICKED", self.config.buttons[button._gpio]);
				console.log("button pressed", button._gpio);
			}
		}
	}
  
});
