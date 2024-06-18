const axios = require('axios');

const API_KEY = '5c9daedbd58aba5803f45c9b823443a8';
const CITY_NAME = 'Gorakhpur';

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`)
    .then(response => {
        const weather = response.data;
        console.log(`Temperature in ${CITY_NAME}: ${weather.main.temp}K`);
        console.log(`Weather condition: ${weather.weather[0].description}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });