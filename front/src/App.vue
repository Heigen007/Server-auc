<template>
<div class="container" id = "12">
  <!-- <strick :str = "strV"/> -->
  <!-- <box @str = "str"/> -->
  <menger-sponge :size="300" :iteration="2" color="hsl(100, 0%, 50%)"/>
  </div>
</template>

<script>
// import strick from "@/components/Strick.vue"
// import box from "@/components/Box.vue"
import { MengerSponge } from 'vue-fractals'
export default {
  name:"A",
  components: {
    // strick,
    // box,
    MengerSponge
  },
  data: function () {
    return {
      strV: 0
    }
  },
  methods: {
    str(str2){
      if (str2 == 1){
        this.strV += 1
      }else{
        this.strV = 0      
      }
    }
  }
}
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  left:0;
}
</style>