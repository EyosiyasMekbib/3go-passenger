var window = window

document.querySelector('#quit-btn').addEventListener('click', function(){
  document.close()
})

document.querySelector('#get-current-location-btn').addEventListener('click', function(){
  window.location = '/current-location.html'
})