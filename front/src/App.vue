<template>
  <div class="home">
    <Header :user="user"/>
    <div class = "a"></div>
    <router-view :aucId="aucId" :auc="auc" :user="user" :root="root" :users="UsersList" @clickBTN="auth" @auccion="myauc"></router-view>
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
      auc: [],
      aucId: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    auth (a) {
      this.user = a
    },
    myauc (id) {
      this.aucId = id
    }
  },
  async beforeMount () {
    setInterval(async () => {
      const response = await fetch(this.root)
      if (response.ok) {
        const data = await response.json()
        this.UsersList = data.users
        this.MessagesList = data.messages
        this.auc = data.auc
        console.log(data.auc)
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
  background: url(assets/img.jpg);
  width: 100%;
  background-size: cover;
  height: 100vh;
  position: fixed;
  filter: blur(5px);
  z-index: -10;
  top:0;
}
</style>
