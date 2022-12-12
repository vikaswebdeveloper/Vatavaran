const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '034ff3e9e0mshce751db1721c409p16d473jsnb6a2f5385f83',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			temp.innerHTML = response.temp + "&#8451;"
		})
		.catch(err => console.error(err));
}

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		Kolkata_feel.innerHTML = response.feels_like
		Kolkata_humidity.innerHTML = response.humidity
		Kolkata_temp.innerHTML = response.temp + "&#8451;"
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gujrat', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		Gujrat_feel.innerHTML = response.feels_like
		Gujrat_humidity.innerHTML = response.humidity
		Gujrat_temp.innerHTML = response.temp + "&#8451;"
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		Bihar_feel.innerHTML = response.feels_like
		Bihar_humidity.innerHTML = response.humidity
		Bihar_temp.innerHTML = response.temp + "&#8451;"
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		Haryana_feel.innerHTML = response.feels_like
		Haryana_humidity.innerHTML = response.humidity
		Haryana_temp.innerHTML = response.temp + "&#8451;"
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		Goa_feel.innerHTML = response.feels_like
		Goa_humidity.innerHTML = response.humidity
		Goa_temp.innerHTML = response.temp + "&#8451;"
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kerala', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		Keral_feel.innerHTML = response.feels_like
		Keral_humidity.innerHTML = response.humidity
		Keral_temp.innerHTML = response.temp + "&#8451;"
	})
	.catch(err => console.error(err));


submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})