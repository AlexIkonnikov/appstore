<template>
  <div class="app-wrapper mb-3">
    <div class="d-flex justify-content-start align-items-center mb-2">
      <p class="cl-gray">Оценка касанием:</p>
      <div class="d-flex justify-content-between flex-grow-1 px-3">
        <Star
          :count="5"
          :width="20"
          :height="20"
          :fill="'none'"
          :stroke="'#177ae4'"
        />
      </div>
    </div>
    <div class="d-flex cards">
      <div class="card-review me-2">
        <div class="d-flex justify-content-between">
          <p>Ну и зачем ограничили коли...</p>
          <span class="cl-gray">2 года назад</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>
            <Star
              :count="5"
              :width="15"
              :height="15"
              :fill="'#fa8108'"
              :stroke="'#fa8108'"
            />
          </div>
          <span class="cl-gray">уходим на вайбер</span>
        </div>
        <div class="card-review__text">
          <p>
            Ну и зачем ограничили количество контактов, которым одновременно
            можно было пересылать сообщения. Зачем создавать эти неудобства? Как
            вернуть прежнюю версию?
          </p>
        </div>
      </div>

      <div class="card-review me-2">
        <div class="d-flex justify-content-between">
          <p>Ну и зачем ограничили коли...</p>
          <span class="cl-gray">2 года назад</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>
            <Star
              :count="5"
              :width="15"
              :height="15"
              :fill="'#fa8108'"
              :stroke="'#fa8108'"
            />
          </div>
          <span class="cl-gray">уходим на вайбер</span>
        </div>
        <div class="card-review__text">
          <p>
            Ну и зачем ограничили количество контактов, которым одновременно
            можно было пересылать сообщения. Зачем создавать эти неудобства? Как
            вернуть прежнюю версию?
          </p>
        </div>
      </div>

      <div class="card-review me-2">
        <div class="d-flex justify-content-between">
          <p>Ну и зачем ограничили коли...</p>
          <span class="cl-gray">2 года назад</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>
            <Star
              :count="5"
              :width="15"
              :height="15"
              :fill="'#fa8108'"
              :stroke="'#fa8108'"
            />
          </div>
          <span class="cl-gray">уходим на вайбер</span>
        </div>
        <div class="card-review__text">
          <p>
            Ну и зачем ограничили количество контактов, которым одновременно
            можно было пересылать сообщения. Зачем создавать эти неудобства? Как
            вернуть прежнюю версию?
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <div class="cl-blue">
        <SvgSprite
          symbol="reviews"
          size="0 0 20 20"
        />
        Написать отзыв
      </div>
      <div class="cl-blue pe-3">
        <SvgSprite
          symbol="question"
          size="0 0 20 20"
        />
        Поддержка ПО
      </div>
    </div>
  </div>
</template>

<script>
import Star from "./Star";
export default {
  name: "Reviews",
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.card-review {
  min-width: 95%;
  padding: 10px 10px 20px 10px;
  background-color: #1c1c1e;
  border-radius: 10px;
}
</style>