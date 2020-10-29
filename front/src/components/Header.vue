<template>
<div class = "header">
  <div>
    <router-link to="/">
    <img class = "logo" src = "../assets/icon.png">
    </router-link>
  </div>
  <div class = "buttons">
    <router-link to="/auth" class = "but">Auth</router-link>
    <router-link to="/login" class = "but">Login</router-link>
    <router-link to="/auccion" class = "but">Auccion</router-link>
  </div>
  <router-view></router-view>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.header{
  height:50px;
  background-color: #bd7c63 ;
}
.logo{
  margin-left: 5vw;
  height: 50px;
  float: left;
}
.buttons{
  margin-left: 25vw;
  display: flex;
  flex-direction: row;
}
.but{
  font-size: 210%;
  margin-left: 11vw;
  padding:6px;
  color: #ffe588;
  text-decoration: none;
}
.but:hover{
  background-color: #ad704d;
  border-radius: 20px;
}
</style>
