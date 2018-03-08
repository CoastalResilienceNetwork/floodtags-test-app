define([
	"esri/tasks/query", "esri/tasks/QueryTask", "dojo/_base/declare", "esri/layers/FeatureLayer", "dojo/_base/lang", "dojo/on", './esriapi', "dojo/dom",
],
function ( Query, QueryTask, declare, FeatureLayer, lang, on, esriapi, dom ) {
        "use strict";

        return declare(null, {
			clickListener: function(t){
				console.log('hello world')
			},
			

			// number with comma function
			numberWithCommas: function(x){
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
        });
    }
)
