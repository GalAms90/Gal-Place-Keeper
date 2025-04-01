'use strict'

function initMap(lat, lng) {
  if (!lat) lat = 32.0749831
  if (!lng) lng = 34.9120554
  var elMap = document.querySelector('.map')
  var options = {
    center: { lat, lng },
    zoom: 8
  }

  var map = new google.maps.Map(
    elMap,
    options
  )

  var marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title: 'Hello World!'
  })
}