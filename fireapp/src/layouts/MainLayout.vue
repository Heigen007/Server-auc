<template>
    <LeftDrower />
</template>

<script>
import LeftDrower from 'components/LeftDrower.vue'

export default {
  name: 'MainLayout',
  components: { LeftDrower },
  mounted () {
    // this.$q.localStorage.set('key', 'KeyValue')
  },
  computed: {
    Id () {
      return this.$q.localStorage.getItem('key')
    }
  }
}
</script>
