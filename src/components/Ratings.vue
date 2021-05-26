<template>
  <div class="app-wrapper pe-3">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h2>Оценки и отзывы</h2>
      <p class="cl-blue">См. все</p>
    </div>
    <div class="d-flex justify-content-start align-items-center">
        <div class="me-3">
            <div class="rating">4,8</div>
            <div class="cl-gray text-center">из 5</div>
        </div>
        <div class="flex-grow-1">
            <div class="d-flex align-items-center justify-content-start">
                <div class="text-end star-container me-2">
                    <Star v-for="el in Array(5)" :key="el"/>
                </div>
                <div class="progress">
                    <span class="progress__bar progress__bar--1"></span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-start">
                <div class="text-end star-container me-2">
                    <Star v-for="el in Array(4)" :key="el"/>
                </div>
                <div class="progress">
                    <span class="progress__bar progress__bar--2"></span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-start">
                <div class="text-end star-container me-2">
                    <Star v-for="el in Array(3)" :key="el"/>
                </div>
                <div class="progress">
                    <span class="progress__bar progress__bar--3"></span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-start">
                <div class="text-end star-container me-2">
                    <Star v-for="el in Array(2)" :key="el"/>
                </div>
                <div class="progress">
                    <span class="progress__bar progress__bar--4"></span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-start">
                <div class="text-end star-container me-2">
                    <Star v-for="el in Array(1)" :key="el"/>
                </div>
                <div class="progress">
                    <span class="progress__bar progress__bar--5"></span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Star from './Star';
export default {
  name: "Ratings",
  components: {
      Star
  }
};
</script>

<style lang="scss" scoped>
.star-container {
    min-width: 50px;
}
.rating {
    font-size: 60px;
}

.progress {
    flex-grow: 1;
    background-color: #2c2c2e;
    height: 3px;

    &__bar {
        background-color: #9e9ea6;
        &--1 {
            width: 90%;
        }

        &--2 {
            width: 7%;
        }

        &--3 {
            width: 5%;
        }

        &--4 {
            width: 4%;
        }

        &--5 {
            width: 8%;
        }
    }
}
</style>