<template>
  <q-page class="flex flex-center">
    <div id="map" style="width:100vw; height:70vh"></div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  mounted () {
    var DG = require('2gis-maps')
    DG.map('map', {
      center: [54.98, 82.89],
      zoom: 13
    })
  }
}
</script>
