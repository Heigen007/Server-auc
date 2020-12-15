<template>
<div class="container" id = "12">
  <div class="cube">
    <div :class="`side ${question.class}`" id = "Side" v-for="(question,key) in data" :key="key" >
      <div class="text">{{question.question}}</div>
      <b>{{question.first_a}}</b><input type="radio" name="try" id="1" @click = "click(1)"><br>
      <b>{{question.sec_a}}</b><input type="radio" name="try" id="2" @click = "click(2)"><br>
      <b>{{question.third_a}}</b><input type="radio" name="try" id="3" @click = "click(3)"><br>
      <b>{{question.forth_a}}</b><input type="radio" name="try" id="4" @click = "click(4)"><br>
      <button @click = "answerV(`${question.answer}`)" :id="`${key}`">Ответить</button>
    </div>
  </div>
  </div>
</template>

<script>
var json = require('.././answers.json');
export default {
  name:"A",
  data: function () {
    return {
      data: null,
      answer: 0
    }
  },
  methods: {
    click (a) {
      this.answer = a;
    },
    answerV (ans) { 

      var box = document.querySelector('.container')
      if (this.answer == ans){
        
      document.querySelectorAll('.side')
      document.querySelectorAll('.side').forEach(element => {
        element.style.backgroundColor = "#33e62c"
      });
      box.style.transform = 
    'translateY(' + -200 + 'px)';
      setTimeout(() => {
      box.style.transform = 
    'translateY(' + 300 + 'px)';
      },400);
      setTimeout(() => {
      box.style.transform = 
    'translateY(' + 0 + 'px)';
      },800);
      this.$emit('str', 1)
    } else {

      document.querySelectorAll('.side')
      document.querySelectorAll('.side').forEach(element => {
        element.style.backgroundColor = "#f52a1c"
      });
      box.style.transform = 'translateX(' + -200 + 'px)';
      setTimeout(() => {
      box.style.transform = 'translateX(' + 200 + 'px)';
      },400);
      setTimeout(() => {
      box.style.transform = 'translateX(' + 0 + 'px)';
      },800);
      this.$emit('str', 0)
    }
    }
  },
  beforeMount() {

    var rotateY = 0;
    var rotateX = 0;
    document.onkeydown = function (e) {
      if (e.keyCode === 37) rotateY -= 90
      else if (e.keyCode === 38) rotateX += 90
      else if (e.keyCode === 39) rotateY += 90
      else if (e.keyCode === 40) rotateX -= 90

  document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
  },
  mounted(){
    this.data = json.answers
    
    console.log(this.data);
    
    document.querySelector('.cube').style.transform = 
      'rotateY(' + 0 + 'deg)'+
      'rotateX(' + -20 + 'deg)';
  }
}
</script>

<style>
* {
 box-sizing: border-box;
}
body {
  overflow: hidden;
}
button{
  font-size: 10px;
}
.container {
 margin: 100px auto;
 width: 300px;
 height: 300px;
 perspective: 700px;
 bottom:2px;
  transition: 0.5s ease-out ;
}
b{
  font-size: 20px
}
.cube {
 width: inherit;
 height: inherit;
 transform-style: preserve-3d;
 top: 1;
 transition: 1s ease-out;
}
.side {
 position: absolute;
 width: inherit;
 height: inherit;
 border: 2px solid #1149ff;
 background-color: rgb(152, 152, 250);
 font: normal 40px Arial;
 text-align: center;
 color: black;
}

.front {
 transform: translateZ(150px);
}

.back {
 transform: rotateX(180deg) translateZ(150px);
}
.right {
 transform: rotateY(90deg) translateZ(150px);
}

.left {
 transform: rotateY(-90deg) translateZ(150px);
}

.top {
 transform: rotateX(90deg) translateZ(150px);
}

.bottom {
 transform: rotateX(-90deg) translateZ(150px);
}

</style>