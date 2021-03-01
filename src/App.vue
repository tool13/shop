<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>

  import vMainWrapper from './components/v-main-wrapper';
  import {mapActions,mapGetters} from 'vuex';

  export default {
    name: 'App',
    components: {
      vMainWrapper
    },
    methods: {
      ...mapActions([
        'SET_MOBILE',
        'SET_DESKTOP'
      ]),
      checkDevice() {
        window.innerWidth > 767 ? this.SET_DESKTOP() : this.SET_MOBILE();
      }
    },
    computed: {
      ...mapGetters([
        'IS_MOBILE',
        'IS_DESKTOP'
      ]),
    },
    mounted() {
      this.checkDevice();
      window.addEventListener('resize', this.checkDevice.bind(this), true);
    }
  }
</script>

<style>
  #app {
    font-family: Tahoma;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
