<template>
  <q-layout view="lHh Lpr lFf">
    <q-btn
      style="position: absolute; z-index: 3000"
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="leftDrawerOpen = !leftDrawerOpen"
    />

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          v-if="isLoggedIn"
          header
          class="text-grey-8"
          style="display: flex; align-items: center; flex-direction: column"
        >
          <q-img
          src="../assets/a.jpg"
          spinner-color="white"
          style="height: 140px; width: 140px; border-radius: 50%"
          />

          <span class = "userName">{{userName}}</span>

        </q-item-label>
        <EssentialLink
          v-else
          :key="LoginData.title"
          v-bind="LoginData"
        />
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapGetters } from 'vuex'
const linksData = [
  {
    title: '2GIS',
    caption: '2gis maps',
    icon: 'public',
    link: '/#/'
  },
  {
    title: 'Settings',
    caption: 'Settings',
    icon: 'settings',
    link: '/#/settings'
  }
]
const LoginData = {
    title: 'Login',
    caption: 'login',
    icon: 'public',
    link: '/#/login'
}

export default {
  name: 'LeftDrower',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      LoginData
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
    userName () {
      return this.$store.state.name
    }
  }
}
</script>

<style scoped>
.userName{
  margin: 1vw;
}
</style>
