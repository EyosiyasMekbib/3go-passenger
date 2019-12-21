let userLocation = {
  latitude: 0,
  longitude: 0
}

if (!navigator.geolocation) {
  console.error('Geolocation is not supported by your browser')
} else {
  console.log('Locating…')
  
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  userLocation.latitude  = position.coords.latitude;
  userLocation.longitude = position.coords.longitude;

  if (userLocation.latitude && userLocation.longitude) {
    console.log(`https://www.openstreetmap.org/#map=18/${userLocation.latitude}/${userLocation.longitude}`)
  }
}

function error() {
  console.log('Unable to retrieve your location')
}