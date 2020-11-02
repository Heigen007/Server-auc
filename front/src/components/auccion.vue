<template>
<div>
  <div class="app">Auccion</div>
  <div class="buttons">
    <div class = "title but"><b>Название: </b>{{auc.title}}</div>
    <div class="text but"><b>Описание: </b>{{auc.text}}</div>
    <div class="price but"><b>Цена: </b>{{auc.price}}</div>
    <div class="step but"><b>Шаг: </b>{{auc.step}}</div>
    <div class="time but"><b>Время окончания: </b>{{hour}}:{{minut}}</div>
  </div>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
    auc: Object,
    hour: Number,
    minut: Number
  },
  data: function () {
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
  color: blue
}
.buttons{
  text-align: center;
  font-size: 250%;
}
</style>
