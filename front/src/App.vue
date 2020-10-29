<template>
  <div class="home">
    <Header />
    <div class = "a"></div>
  </div>

</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data: function () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  async beforeMount () {
  }
}
</script>

<style>
body{
  background-color: #c0e3ff;
  margin:0;
  padding:0;
  z-index: 10;
}
.a {
  background: url(assets/img.jpg) no-repeat ;
  width: 100%;
  background-size: cover;
  height: 100vh;
  position: absolute;
  filter: blur(5px);
  z-index: -10;
  top:0;
}
</style>
