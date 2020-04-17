// my api key: 0e715fd6e4dd427ee64eeda6aab95586

//https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js


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
	return "<h3>Weather Forecast: "+ result.weather[0].main +" </h3>" + 
			"<h3>Description: "+ result.weather[0].description +" </h3>" +
			"<h3>Temperature: "+ result.main.temp +" </h3>";
}




// $(document).ready(function(){
// 	$.ajax({
// 		url: "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=0e715fd6e4dd427ee64eeda6aab95586",
// 		type: "GET",
// 		success: function(result){
// 			console.log(result);
// 		},
// 		error: function(error){
// 			console.log(error);
// 		}
// 	})
// })

// $('.mainButton').on("click", function(x){
// 	$.get('api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={0e715fd6e4dd427ee64eeda6aab95586}', function(x){
// 		console.log(x);
// 	})
// })