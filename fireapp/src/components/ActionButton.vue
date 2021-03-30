<template>
  <div class = 'actionButton'>Вызвать Пожарных</div>
</template>

<script>

export default {
  name: 'LeftDrower',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.actionButton{
  position: absolute;
  bottom: 15vh;
  width: 70%;
  margin: 0 auto;
  padding: 1.7vh 0 1.7vh 0;
  background:#e85537;
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
</style>
