<template>
  <div class="container-custom">
    <Top/>
    <Update/>
    <Character/>
    <WhatsNew/>
  </div>
</template>

<script>
import Top from './components/Top';
import Update from './components/Update';
import Character from './components/Character';
import WhatsNew from './components/WhatsNew';
export default {
  name: 'App',
  components: {
    Top,
    Update,
    Character,
    WhatsNew
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container-custom {
  max-width: 375px;
  margin: 0 auto;
}
</style>
