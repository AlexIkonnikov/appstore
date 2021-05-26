<template>
  <div class="wrapper app-wrapper">
    <div class="d-flex">
      <div class="pe-2">
        <img src="../assets/img/main-icon.png" />
      </div>
      <div class="d-flex flex-column justify-content-between py-2">
        <div>
          <p class="mb-2">WhatsApp Messenger</p>
          <span class="cl-gray">Удобно. Надежно. Безопасно.</span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <button>Обновить</button>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            class="bi bi-box-arrow-up"
            fill="#177ae4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
            />
          </svg>
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
