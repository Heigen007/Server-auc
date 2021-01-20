<template>
<div>
  <div class="app">Auccions</div>
  <div class="buttons" v-for="(auc, key) in auc" :key="key">
    <div class = "title but"><b>Название: </b>{{auc.title}}</div>
    <div class="text but"><b>Описание: </b>{{auc.text}}</div>
    <div class = "photos" v-for="(auc, key) in auc.photo" :key="key">
      <img v-if="`${auc}` != 'null'" :src="`http://localhost:3000/${auc}`">
    </div>
    <div class="price but"><b>Цена: </b>{{auc.price}}</div>
    <div class="step but"><b>Шаг: </b>{{auc.step}}</div>
    <div v-if="`${auc.time.second}` < 10" class="time but"><b>Время окончания: </b>{{auc.time.minut}}:0{{auc.time.second}}</div>
    <div v-else class="time but"><b>Время окончания: </b>{{auc.time.minut}}:{{auc.time.second}}</div>
    <router-link to="/auccion" class="n"> <div @click="click(key)" :id="`${key}`" class="button">Войти</div> </router-link>
  </div>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
    auc: Array,
    hour: Number,
    minut: Number,
    aucId: Number
  },
  methods: {
    click (id) {
      this.$emit('auccion', id)
    }
  }
}
</script>

<style scoped>
.app{
  text-align: center;
  font-size: 400%;
  color: #e28a61;
}
.but{
  color:#8a2101;
}
.photos {
}
.button{
    font-size: 4vh;
    background-color: #ffa377;
    outline: none;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    color: #8a2101;
    position: relative;
    left:50%;
    transform: translate(-50%, 0);
    width: 20%;
    text-align: center;
}
.button:hover{
      background-color: #ffc6ab;
}
.n{
  text-decoration: none;
}
.buttons{
  text-align: center;
  font-size: 250%;
  border: 5px solid #8a2101;
  margin-top: 2vh;
  border-radius: 10px;
  padding: 1vh;
}
img{
  width: 15vw;
}
</style>
