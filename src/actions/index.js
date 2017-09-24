import axios from 'axios';

// Weather
export const FETCH_WEATHER = 'FETCH_WEATHER';



// Weather
const WEATHER_API_KEY = '46f0d79940ce443ee80d2a76da8bcdb8';
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;





// Weather
export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},GB`;
  const request = axios.get(url);

  console.log('request ', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
