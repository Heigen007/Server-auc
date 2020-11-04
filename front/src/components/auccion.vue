<template>
<div>
  <div class="app">Auccion</div>
  <div class="buttons">
    <div class = "title but"><b>Название: </b>{{auc[aucId].title}}</div>
    <div class="text but"><b>Описание: </b>{{auc[aucId].text}}</div>
    <div class="price but"><b>Цена: </b>{{auc[aucId].price}}</div>
    <div class="step but"><b>Шаг: </b>{{auc[aucId].step}}</div>
    <div class="time but"><b>Время окончания: </b>{{auc[aucId].time.minut}}:{{auc[aucId].time.second}}</div>
    <div class="visit"><button class = "button">Войти</button></div>
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
.button{
    font-size: 4vh;
    background-color: #ffa377;
    outline: none;
    border: none;
    border-radius: 10px;
}
.buttons{
  text-align: center;
  font-size: 250%;
  border: 5px solid #8a2101;
  margin-top: 2vh;
  border-radius: 10px;
  padding: 1vh;
}
</style>
