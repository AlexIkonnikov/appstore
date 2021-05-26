<template>
  <div class="app-wrapper pe-3">
    <div class="d-flex justify-content-between align-items-center mb-2">
        <h2>Что нового</h2>
        <p class="cl-blue">История версий</p>
    </div>
    <div class="d-flex justify-content-between align-items-center cl-gray mb-2">
        <p>Версия 2.21.100</p>
        <p>1 день назад</p>
    </div>
    <More :text="text" />
  </div>
</template>

<script>
import More from './More';
export default {
    name: 'WhatsNew',
    components: {
        More,
    },
    data() {
        return {
            text: '* Теперь вы можете прослушивать голосовые сообщения на разной скорости, нажимая кнопку 1x/1,5x/2x во время воспроизведения',
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 22px;
}
</style>