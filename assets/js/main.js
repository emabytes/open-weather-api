fetch("https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=62645c4824fa2ef6fe5b46f3b4b30d52")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let city = data.name
        // console.log(city)
        let description = data.weather[0].description
        // console.log(description)
        let icon = data.weather[0].icon
        // console.log(icon)
        let iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";
        let temp = data.main.temp
        // console.log(temp)
        let tempFeelsLike = data.main.feels_like
        // console.log(tempFeelsLike)
        let pressure = data.main.pressure
        // console.log(pressure)
        let humidity = data.main.humidity
        // console.log(humidity)
        let clouds = data.clouds.all
        // console.log(clouds)
        let windSpeed = data.wind.speed
        // console.log(windSpeed)
     
        let today = new Date();
        let localTime = (today.getHours()-1) + ":" + (String(today.getMinutes()).padStart(2, "0")); 
        let localDate = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

        document.getElementById("output").innerHTML = 
        `<div>
            <h1>Weather in <span>${city}</span></h1>
            <h2>${temp} °C</h2>
            <h3>${description}</h3>
            <img src="${iconUrl}" alt="">
        </div>
         <div>
            <ul>
                <li>Local time</li>
                <li>${localTime} 
                <span>${localDate}</span> </li>
            </ul>
            <ul>
            <li>Wind </li>
            <li>${windSpeed} m/s</li>
        </ul>
        <ul>
            <li>Cloudliness</li>
            <li>${clouds} %</li>
        </ul>
        <ul>
            <li>Pressure</li>
            <li>${pressure} hPa</li>
        </ul>
        <ul>
            <li>Humidity</li>
            <li>${humidity} %</li>
        </ul>
        <ul>
            <li>Feels like </li>
            <li>${tempFeelsLike} °C</li>
        </ul>
    </div>`;
    })