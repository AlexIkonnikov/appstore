<template>
  <div class="app-wrapper">
    <div class="d-flex cards cl-gray">
      <div class="mini-card d-flex flex-column align-items-center">
        <p>2,1 млн оценки</p>
        <b class="mini-card__number">4,8</b>
        <div class="mini-card__footer">
          <Star :count="5" />
        </div>
      </div>
      <div class="mini-card d-flex flex-column align-items-center">
        <p>Возраст</p>
        <b class="mini-card__number">12 +</b>
      </div>
      <div class="mini-card d-flex flex-column align-items-center">
        <p>Рейтинг</p>
        <b class="mini-card__number">#2</b>
        <div class="mini-card__footer">Социальные сети</div>
      </div>
      <div class="mini-card d-flex flex-column align-items-center">
        <p>Разработчик</p>
        <b class="mini-card__number">
          <SvgSprite
            symbol="wc-icon"
            size="0 0 24 24"
          />
        </b>
        <div class="mini-card__footer">WhatsApp</div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "./Star";
export default {
  name: "Character",
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.mini-card {
  font-size: 10px;
  text-transform: uppercase;
  flex-shrink: 0;
  min-width: 28%;

  &__number {
    font-weight: bold;
    font-size: 15px;
    padding: 5px 0px;
    width: 100%;
    text-align: center;
    border-right: 0.5px solid #8e8e90;
  }

  &__footer {
    text-transform: none;
  }
}
</style>
