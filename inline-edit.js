define(function(require) {
	'use strict';

	return {
	 	template: require('rv!../bower_components/ractive-inline-edit/inline-edit-template'),
	   init: function (event) {
	    this.on( 'add', function (event) {  
	    	this.set('adding', true);

	    });
	    this.on( 'on-blur', function () {	
	    	this.set('adding', false);
	    });
	   	this.on( 'on-keypress', function (event) { 
	   	
	    	if(event.original.charCode === 13 && event.original.shiftKey === true){
				this.set('adding', false);	
			}
	    });
	  }
	}
});