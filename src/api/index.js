import {googleApiKey, weatherApiKey} from "../config";

const fetchLocation = coordinates => {
    // Construct the API url to call
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.longitude},${coordinates.latitude}&key=${googleApiKey}`;

    // Call the API, and set the state of the weather forecast
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error))
};

const fetchWeather = (city, quantity) => {
    // Construct the API url to call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=${quantity}&APPID=${weatherApiKey}`;

    // Call the API, and set the state of the weather forecast
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error))
};

export {fetchLocation, fetchWeather};