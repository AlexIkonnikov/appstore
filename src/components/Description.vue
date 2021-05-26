<template>
  <div class="app-wrapper pe-3 pb-3">
    <More :text="text" />
    <div class="d-flex justify-content-between align-items-center">
      <div class="el">
        <div class="cl-blue">WhatsApp Inc.</div>
        <div class="cl-gray">Разработчик</div>
      </div>
      <div class="arrow mr-3"></div>
    </div>
  </div>
</template>

<script>
import More from "./More";
export default {
  name: "Description",
  components: {
    More,
  },
  data() {
    return {
      text: "Удобно. Надёжно. Безопасно: WhatsApp от Facebook.WhatsApp Mesenger это БЕСПЛАТНОЕ"
    }
  }
};
</script>

<style lang="scss">
</style>