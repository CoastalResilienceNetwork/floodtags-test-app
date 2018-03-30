define([
	"dojo/_base/declare", "esri/tasks/query", "esri/tasks/QueryTask"
],
function ( declare, Query, QueryTask ) {
        "use strict";

        return declare(null, {
			eventListeners: function(t){
				// main radio buttons toggle functionality
				$("#" + t.id + "mainRadBtnWrapper input").click(function(c){
					if(c.currentTarget.value == 'flood'){
						$('#' + t.id + 'mangroveWrapper').hide();
						$('#' + t.id + 'floodWrapper').slideDown();
					}else{
						$('#' + t.id + 'floodWrapper').hide();
						$('#' + t.id + 'mangroveWrapper').slideDown();
					}
				})

			}, 
			
			// map click functionality call the map click query function //////////////////////////////////////////////////
			mapClickFunction: function(t){
				
				t.map.on('click',function(c){
					// t.obj.pnt = c.mapPoint;
					// t.clicks.mapClickQuery(t,t.obj.pnt); // call t.mapClickQuery function
				});
			},
			// map click query function /////////////////////////////////////////////////////////////////////
			mapClickQuery: function(t, p){
				
			},

			attributePopulate: function(t, suc, track, atts){
				
				
			},

			buildTextObject: function(t){
				// infographic text object ///////////////////////////////
			     t.infographicText = {
					"habitatSites-option":"Habitat Sites - Habitat Sites text",
					"habitat-option": "Habitat Types - Habitat Types text"
				}
			},
			// makeVariables: function(t){
			// 	t.aoc = 5;
			// 	t.lowerFoxBound = 6;
			// 	t.countyBounds = 7;
			// 	t.surveyRank = 8;
			// 	t.habitatSites = 9;
			// 	t.siteVisits = 10;
			// 	t.wetlands = 11;
			// 	t.prwWetlands = 12;
			// 	t.wetlandsBord = 13;
			// 	t.prwWetlandsBord = 14;
			// 	t.wetlandsFAH = 15;
			// 	t.prwFAH = 16;
			// 	// sup data
			// 	t.AOCPriorityAreas = 17;
			// 	t.huc12Bounds = 18;
			// 	t.oneidaBound = 19;
			// 	t.kepBound = 20;
			// 	// sel data
			// 	t.siteVisitSel = 4;
			// 	t.surveyRankSel = 3;
			// 	t.wetlandsSel= 2;
			// 	t.wetlandsSubSel = 1;
			// 	t.habitatSel = 0;
			// },
			// commaSeparateNumber: function(val){
			// 	while (/(\d+)(\d{3})/.test(val.toString())){
			// 		val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
			// 	}
			// 	return val;
			// },
			// abbreviateNumber: function(num) {
			//     if (num >= 1000000000) {
			//         return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
			//      }
			//      if (num >= 1000000) {
			//         return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
			//      }
			//      if (num >= 1000) {
			//         return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
			//      }
			//      return num;
			// }
        });
    }
);

