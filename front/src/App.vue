<template>
  <div class="home">
    <Header :user="user"/>
    <div class = "a"></div>
    <router-view :minut="minut" :hour="hour" :auc="auc" :user="user" :root="root" :users="UsersList" @clickBTN="auth"></router-view>
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
      root: 'http://localhost:3000/',
      user: '',
      MessagesList: null,
      UsersList: [],
      auc: {},
      hour: null,
      minut: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    auth (a) {
      this.user = a
    }
  },
  async beforeMount () {
    setInterval(async () => {
      const response = await fetch(this.root)
      if (response.ok) {
        const data = await response.json()
        this.UsersList = data.users
        this.MessagesList = data.messages
        this.auc = data.auc[0]
        this.hour = data.auc[0].time.hour
        this.minut = data.auc[0].time.minut
      }
    }, 1000)
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
