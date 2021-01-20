<template>
<div class="container" id = "12">
  <box />
  <strick />
  </div>
</template>

<script>
import strick from "@/components/Strick.vue"
import box from "@/components/Box.vue"
export default {
  name:"A",
  components: {
    strick,
    box
  }
}
</script>

<style>

</style>