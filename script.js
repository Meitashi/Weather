const weatherNow = document.querySelector(".weather-now");
const weatherState = document.querySelector(".weather-state");
const tempDay = document.querySelector(".temp-day");
const tempNight = document.querySelector(".temp-night");
const aqiState = document.querySelector(".aqi-state");
const yesterdayTemperature = document.querySelector(".yesterday-temperature");
const todayTemperature = document.querySelector(".today-temperature");
const tomorrowTemperature = document.querySelector(".tomorrow-temperature");
const nameCity = document.querySelector(".name-city");
const yesTempDay = document.querySelector(".yes-temp-day");
const yesTempNight = document.querySelector(".yes-temp-night");
const todayTempDay = document.querySelector(".today-temp-day");
const todayTempNight = document.querySelector(".today-temp-night");
const tomTempDay = document.querySelector(".tom-temp-day");
const tomTempNight = document.querySelector(".tom-temp-night");

function weatherData(){
    let weather = fetch("https://api.open-meteo.com/v1/forecast?latitude=42.87&longitude=74.59&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m&hourly=temperature_2m&daily=weather_code&timezone=auto&past_days=1");
    weather
        .then(data => data.json())
        .then(weather => changer(weather));
};
function changer(weatherCode){
    weatherNow.innerHTML = weatherCode.current.temperature_2m + "°C";;
    weatherState.innerHTML = "Облачность: " + weatherCode.current.cloud_cover + "%";
    nameCity.innerHTML = weatherCode.timezone;
    tempDay.innerHTML = weatherCode.hourly.temperature_2m[35] + "°C";
    tempNight.innerHTML = weatherCode.hourly.temperature_2m[46] + "°C";
    aqiState.innerHTML = weatherCode.current.pressure_msl;
    yesTempDay.innerHTML = weatherCode.hourly.temperature_2m[10] + "°C";
    yesTempNight.innerHTML = weatherCode.hourly.temperature_2m[0] + "°C";
    todayTempDay.innerHTML = weatherCode.hourly.temperature_2m[35] + "°C";
    todayTempNight.innerHTML = weatherCode.hourly.temperature_2m[46] + "°C";
    tomTempDay.innerHTML = weatherCode.hourly.temperature_2m[58] + "°C";
    tomTempNight.innerHTML = weatherCode.hourly.temperature_2m[47] + "°C";
};
weatherData();