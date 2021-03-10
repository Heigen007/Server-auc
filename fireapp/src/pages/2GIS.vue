<template>
  <q-page class="flex flex-center">
    <div id="location">Your position:</div>
    <div id="map" style="width:100vw; min-height: 105vh"></div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  mounted () {
    var map, marker
    var locationInfo = document.getElementById('location')
    var DG = require('2gis-maps')
    map = DG.map('map', {
      center: [54.98, 82.89],
      zoom: 13,
      draggable: true,
      zoomControl: false,
      fullscreenControl: false
    })
    map.locate({ setView: true, watch: true })
      .on('locationfound', function (e) {
        if (!marker) {
          console.log(1)
          var myIcon = DG.icon({
            iconUrl: 'https://cdn.icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png',
            iconSize: [45, 45]
          })

          marker = DG.marker([e.latitude, e.longitude], {
            draggable: false,
            icon: myIcon
          }).addTo(map)

          map.on('move', function (e) {
            marker.setLatLng([map.getCenter().lat, map.getCenter().lng])
            locationInfo.innerHTML = marker._latlng.lat + ', ' + marker._latlng.lng
          })
          // marker.on('drag', function (e) {
          //   console.log(e)
          //   var lat = e.target._latlng.lat.toFixed(3),
          //     lng = e.target._latlng.lng.toFixed(3)
          //   locationInfo.innerHTML = lat + ', ' + lng
          // })
        }
      })
      .on('locationerror', function (e) {
        DG.popup()
          .setLatLng(map.getCenter())
          .setContent('Доступ к определению местоположения отключён')
          .openOn(map)
      })
  }
}
</script>
