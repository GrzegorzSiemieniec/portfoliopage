<template>
  <div id="app">
    <PortfolioList/>
    
  </div>
</template>

<script>
import PortfolioList from './components/PortfolioList.vue'

export default {
  name: 'App',
  components: {
    PortfolioList
  }
}
</script>

<style>
#app {
  height: inherit;
  width: inherit;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
