<template>
  <div class="top-wrapper">
      <div class="top-wrapper__block">
        <img class="wc-icon" src="../assets/img/wc-icon.png" />
        <b>WhatsApp</b>
      </div>
    </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="scss" scoped>
.top-wrapper {
  display: flex;
  justify-content: center;
  min-height: 200px;
  background-image: url('../assets/img/wc-bg.jpg');
  background-size: cover;

  & .wc-icon {
    max-width: 70px;
  }

  &__block {
    display: flex;
    align-items: center;
  }

  & b {
    color: white;
    font-size: 40px;
  }
}
</style>
