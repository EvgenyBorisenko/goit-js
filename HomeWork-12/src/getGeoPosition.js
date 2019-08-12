


export default function getGeoPosition() {
  return showPosition().then((position) => {
    let coords = `${position.coords.latitude},${position.coords.longitude}`;
    return coords;
  })
  
}

function showPosition(position) {
  if (navigator.geolocation) {
    return new Promise((res, rej) => {
      const options = {};
      navigator.geolocation.getCurrentPosition(res, rej, options);
    }) 
  } else {
    serchForm.innerHTML = 'Geolocation is not supported by this browser.';
  }
  
}
// console.log('object');
// getGeoPosition();
