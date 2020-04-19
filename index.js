// my api key: 0e715fd6e4dd427ee64eeda6aab95586

//https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js

// var Moment = 'moment-timezone';
	
	// var timeUpdate = function(){
	// 	var time = moment();
	// 	var currentTime = time.tz("America/New_York").format()
	// 	console.log(currentTime);
	// };

$(document).ready(function(){
	
	$('.mainButton').on("click", function(){
			var zip = $('#zipcode').val();
			//let disp = $('h2.display');

		p = new Promise(function (resolve, reject){	
			if(zip !== ""){

				resolve($.ajax({
					url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us" + "&units=imperial" + "&appid=0e715fd6e4dd427ee64eeda6aab95586",
					type: "GET",
					success: function(result){
					console.log(result);
					
					var disp = display(result);
					$('#presentData').html(disp);

					var dispClock = showTime(result);
					$('.clock').html(dispClock);

					// var dispClock = finalZone()
					// $('.clock').text(dispClock);


					$('#zipcode').val('');
					},
			
				}), 

				);
			} else {
				reject(alert('zipcode field cannot be empty'));
			}
		})
		return p
	});

});

function display(result){
	return 	"<h3>Today's weather forecast for: " + result.name + " </h3>" +
			"<h3>Forecast: "+ result.weather[0].main +" </h3>" + 
			"<h3>Description: "+ result.weather[0].description +" </h3>" +
			"<h3>Temperature: "+ result.main.temp +" </h3>";
}

function showTime(result){
	var lat = result.coord.lat;
	var log = result.coord.lon;
	console.log(lat);
	console.log(log);

	$.ajax({
		url: "http://api.timezonedb.com/v2.1/get-time-zone?key=6MKQQZGX0OWK&format=json&by=position&lat=" + lat + "&lng=" + log,
		type: "GET",
		success: function(result){
			finalZone(result);
		}
	})
		// console.log(zone);

		// var finalZone = zone;

		

	
}
function finalZone(finalZone){
		var time = moment();
		var currentTime = time.tz(finalZone.zoneName).format()
		console.log(currentTime);
		$('.clock').html("<h3>The current time is: " + currentTime + "</h3>");
	}
        


