<template>
<div class = "reg" v-on:keyup.enter="submit">
  <div class = "text">Создание аукциона</div>
  <input type="text" id = 'title' autocomplete="off" placeholder="Заголовок:">
  <input type="text" id = 'text' autocomplete="off" placeholder="Описание:">
  <input type="text" id = 'price' autocomplete="off" placeholder="Цена:">
  <input type="text" id = 'step' autocomplete="off" placeholder="Шаг:">
  <input type="text" id = 'time' autocomplete="off" placeholder="Время:">
  <div class = "c"><button class = "but"  @click="click">Создать</button></div>
  <div class="mistake" v-if="showmi">Введите верные данные!</div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    users: Array,
    root: String
  },
  data: function () {
    return {
      showmi: false,
      er: false,
      showmiHei: false,
      NameCorrect: true
    }
  },
  methods: {
    click () {
      this.UserCorrect = false
      const title = document.getElementById('title')
      const text = document.getElementById('text')
      const price = document.getElementById('price')
      const step = document.getElementById('step')
      const time = document.getElementById('time')

      if (title.value && text.value && price.value && step.value && time.value) {
        const NA = {
          title: title.value,
          text: text.value,
          price: price.value,
          step: step.value,
          time: time.value
        }
        title.value = ''
        text.value = ''
        price.value = ''
        step.value = ''
        time.value = ''
        fetch(`${this.root}na`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(NA)
        })
        this.showmi = false
      } else {
        this.showmi = true
      }
    },
    submit () {
      this.click()
    }
  }
}
</script>

<style scoped>
input{
    border: 5px solid #981500;
    width: 20vw;
    height:7vh;
    font-size: 6vh;
    margin-top: 2%;
    border-radius: 10px;
    color: #483916;
    outline: none;
}
.input:hover{
  border-color: #ff4c4c;
}
.text{
  font-size: 10vh;
  color: #e28a61;
}
.but{
    font-size: 8vh;
    margin-top: 10%;
    background-color: #ffa377;
    outline: none;
    border: none;
    border-radius: 10px;
}
.but:hover{
      background-color: #ffc6ab;
}
.reg{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mistake{
  font-size: 30px;
  padding:10px;
  margin-left: 10px;
  color:#b11000;
}
</style>
