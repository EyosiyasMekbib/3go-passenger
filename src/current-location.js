var loadingIndicator = document.querySelector('#loading')
var locationText = document.querySelector('#location')
var mapImage = document.querySelector('#map-image')
var mapBaseURLSegments = ['https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd',
  '(0,0)',
  '/auto/600x600?access_token=pk.eyJ1IjoiaXNtYWVsa2QiLCJhIjoiY2pybDhheWR5MDVmbTRhcG9jcDBya3dnOCJ9.BWi-UskVOJBnCabeM4u8Yw']

async function getLocation(params) {
  console.log('finding location');

  var result = await startLocating()

  loadingIndicator.setAttribute('hidden', true)
  locationText.innerHTML = result.latitude + ', ' + result.longitude
  mapBaseURLSegments[1] = result.latitude + ',' +result.longitude
  mapImage.setAttribute('src', mapBaseURLSegments.join()
}

getLocation()

function startLocating() {
  if ('geolocation' in navigator) {
    return new Promise(resolve => {
      navigator.geolocation.watchPosition(function (position) {
        resolve(position.coords)
      })
    })
  }
}