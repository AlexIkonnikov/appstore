<template>
  <div class="container-custom">
    <Top/>
    <Update/>
    <Character/>
    <WhatsNew/>
    <Preview/>
    <Description/>
    <Ratings/>
    <Reviews/>
    <Info/>
    <Panel/>
  </div>
</template>

<script>
import Top from './components/Top';
import Update from './components/Update';
import Character from './components/Character';
import WhatsNew from './components/WhatsNew';
import Preview from './components/Preview';
import Description from './components/Description';
import Ratings from './components/Ratings';
import Reviews from './components/Reviews';
import Info from './components/Info';
import Panel from './components/Panel';
export default {
  name: 'App',
  components: {
    Top,
    Update,
    Character,
    WhatsNew,
    Preview,
    Description,
    Ratings,
    Reviews,
    Info,
    Panel
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
  margin-bottom: 50px;
}
</style>
