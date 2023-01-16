// Variables Initialisation

let cityName = document.getElementById("cityName");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Fetch Weather details from 'API' and display them

function getWeather() {    
    let city = cityName.value;

    if(city.length == 0) {
        result.innerHTML = `<h3 class="msg">Please Enter a City Name</h3>`;
    } else {
        // Clear The Input Field
        cityName.value = "";

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        fetch(url).then((resp) => resp.json())        
        // If City Name is Valid
        .then(data => {
            // console.log(data);
            // console.log(data.weather[0].icon);
            // console.log(data.weather[0].main);
            // console.log(data.weather[0].description);
            // console.log(data.name);
            // console.log(data.main.temp_min);
            // console.log(data.main.temp_max);
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min} &#176</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max} &#176</h4>
                </div>
            </div>
            `
        })

        // if City Name is not Valid
        .catch(() => {
            result.innerHTML = `<h3 class="msg">City Not Found</h3>`;
        })

    }
}

window.addEventListener('load', getWeather);
searchBtn.addEventListener('click', getWeather);


let test = 5;
console.log(test);

test=15

{
    let test = 10;
    console.log(test);
}
console.log(test);