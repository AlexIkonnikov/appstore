<template>
  <div class="app-wrapper pe-3 pb-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <p>
        Удобно. Надёжно. Безопасно: WhatsApp от Facebook.
        WhatsApp Mesenger это БЕСПЛАТНОЕ
      </p>
      <p class="cl-blue align-self-end">ещё</p>
    </div>
    <div class="d-flex justify-content-between align-items-center">
        <div class="el">
            <div class="cl-blue">WhatsApp Inc.</div>
            <div class="cl-gray">Разработчик</div>
        </div>
        <div class="arrow mr-3">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Description'
};
</script>

<style lang="scss">
.arrow {
    position: relative;
    min-width: 20px;
    &::after, &::before {
        content: '';
        display: block;
        width: 15px;
        height: 2px;
        background-color: #8e8e90;
        position: absolute;
    }

    &::before {
        transform: rotate(45deg);
        top: -10px;
    }

    &::after {
        transform: rotate(-45deg);
        top: 0;
    }
}
</style>