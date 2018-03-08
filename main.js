// Bring in dojo and javascript api classes as well as varObject.json, js files, and content.html
define([
	"dojo/_base/declare", "framework/PluginBase", "dijit/layout/ContentPane", "dojo/dom", "dojo/dom-style", "dojo/dom-geometry", "dojo/_base/lang", "dojo/text!./obj.json", 
	"dojo/text!./html/content.html", './js/esriapi', './js/clicks', './js/chartjs', './js/barChart', './js/horizontalBar'
],
function ( 	declare, PluginBase, ContentPane, dom, domStyle, domGeom, lang, obj, content, esriapi, clicks, chartjs, barChart, hbar) {
	return declare(PluginBase, {
		// The height and width are set here when an infographic is defined. When the user click Continue it rebuilds the app window with whatever you put in.
		toolbarName: "Water Scarcity Explorer", showServiceLayersInLegend: true, allowIdentifyWhenActive: false, rendered: false, resizable: false,
		hasCustomPrint: true, usePrintPreviewMap: true, previewMapSize: [1000, 550], size:'custom', width:460,	
		// First function called when the user clicks the pluging icon. 
		initialize: function (frameworkParameters){
			// Access framework parameters
			declare.safeMixin(this, frameworkParameters);
			// Define object to access global variables from JSON object. Only add variables to varObject.json that are needed by Save and Share. 
			this.obj = dojo.eval("[" + obj + "]")[0];	
			this.url = "http://services.coastalresilience.org:6080/arcgis/rest/services/Water_Blueprint/Water_Scarcity/MapServer";
			this.layerDefs = [];
		},
		// Called after initialize at plugin startup (why all the tests for undefined). Also called after deactivate when user closes app by clicking X. 
		hibernate: function () {
			if (this.appDiv != undefined){
				$('#' + this.id + 'sliderStop').trigger('click');
				this.dynamicLayer.setVisibleLayers([-1]);
			}
			this.open = "no";
		},
		// Called after hibernate at app startup. Calls the render function which builds the plugins elements and functions.   
		activate: function () {
			$('.sidebar-nav .nav-title').css("margin-left", "0px");
			if (this.rendered == false) {
				this.rendered = true;							
				this.render();
				// Hide the print button until a hex has been selected
				$(this.printButton).hide();
			}else{
				//this.map.addLayer(this.dynamicLayer);	
				this.dynamicLayer.setVisibleLayers(this.obj.visibleLayers);
				$('#' + this.id).parent().parent().css('display', 'flex');
				this.clicks.updateAccord(this);
			}	
			this.open = "yes";
		},
		// Called when user hits the minimize '_' icon on the pluging. Also called before hibernate when users closes app by clicking 'X'.
		deactivate: function () {
			if (this.appDiv != undefined){
				$('#' + this.id + 'sliderStop').trigger('click');
				this.dynamicLayer.setVisibleLayers([-1]);
			}
			this.open = "no";
		},	
		// Called when user hits 'Save and Share' button. This creates the url that builds the app at a given state using JSON. 
		// Write anything to you varObject.json file you have tracked during user activity.		
		getState: function () {
			state = this.obj;
			return state;	
		},
		// Called before activate only when plugin is started from a getState url. 
		//It's overwrites the default JSON definfed in initialize with the saved stae JSON.
		setState: function (state) {
			this.obj = state;
		},
		// Called when the user hits the print icon
		beforePrint: function(printDeferred, $printArea, mapObject) {
			printDeferred.resolve();
		},	
		// Called by activate and builds the plugins elements and functions
		render: function() {
			
			this.rendered = true;	
		}
	});
});
