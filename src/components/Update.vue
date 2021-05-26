<template>
  <div class="wrapper app-wrapper">
    <div class="d-flex">
      <div class="pe-2">
        <img src="../assets/img/s.png" />
      </div>
      <div class="d-flex flex-column justify-content-between">
        <div>
          <p class="mb-2">WhatsApp Messenger</p>
          <span class="cl-gray">Удобно. Надежно. Безопасно.</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <button>Обновить</button>
          <SvgSprite
            symbol="update-icon"
            size="0 0 24 24"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Update',
};
</script>

<style lang="scss" scoped>
.app-wrapper {

  & p {
    font-size: 20px;
    line-height: 20px;
  }

  & span {
    font-size: 12px;
  }

  & img {
    max-width: 110px;
    border-radius: 22.5%;
  }

  & button {
    align-self: start;
    border-radius: 20px;
    padding: 3px 10px;
    color: white;
    border: none;
    background-color: #0984fe;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
