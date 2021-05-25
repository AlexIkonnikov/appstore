<template>
  <div class="app-wrapper">
    <div class="d-flex">
      <div class="col mini-card d-flex flex-column align-items-center">
        <p class="mini-card__number">2,1 млн оценки</p>
        <b>4,8</b>
        <div class="mini-card__footer">
          <Star v-for="el in Array(5)" :key="el" />
        </div>
      </div>
      <div class="col mini-card d-flex flex-column align-items-center">
        <p class="mini-card__number">Возраст</p>
        <b>12 +</b>
      </div>
      <div class="col mini-card d-flex flex-column align-items-center">
        <p class="mini-card__number">Рейтинг</p>
        <b>#2</b>
        <div class="mini-card__footer">
          Социальные сети
        </div>
      </div>
      <div class="col">4</div>
    </div>
  </div>
</template>

<script>
import Star from './Star';
export default {
  name: 'Character',
  components: {
    Star
  }
}
</script>

<style lang="scss" scoped>
.mini-card {
  color: #8e8e90;
  font-size: 10px;
  text-transform: uppercase;

  &__number {
    font-weight: bold;
    font-weight: 15px;
  }
}
</style>
