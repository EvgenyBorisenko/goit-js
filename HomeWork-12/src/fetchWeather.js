
const url ='https://api.apixu.com/v1/current.json?key=96ccab11fe3348a696f84934190808';

export default function fetchWeather(coords) {
  return fetch(`${url}&q=${coords}`)
    .then(response => response.json())
    
}

// fetchWeather('Kiev');
