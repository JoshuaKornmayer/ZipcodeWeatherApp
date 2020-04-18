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

					// disp.empty();
					// var x = disp.innerHTML = "Weather: " + result.weather[0].main + " Description:" ;
					// // JSON.stringify(result.weather[0].main);
					// disp.append(x);

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
		url: "http://api.timezonedb.com/v2.1/get-time-zone?key=6MKQQZGX0OWK&format=xml&by=position&lat=" + lat + "&lng=" + log,
		type: "GET",
		success: function(zone){
		console.log(zone);

		
		}

	})

	var time = moment(result);
		var currentTime = time.tz(zone.zoneName).format()
		console.log(currentTime);
	return "<h3>The current time is: " + currentTime +"</h3>"
}

