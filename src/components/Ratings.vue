<template>
  <div class="app-wrapper pe-3">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h2>Оценки и отзывы</h2>
      <p class="cl-blue">См. все</p>
    </div>
    <div class="d-flex justify-content-start">
      <div class="me-3">
        <div class="rating">4,8</div>
        <div class="cl-gray text-center">из 5</div>
      </div>
      <div class="flex-grow-1">
        <div class="mt-3">
          <div
            class="d-flex align-items-center justify-content-start h-12"
            v-for="param in params"
            :key="param.count"
          >
            <div class="text-end star-container me-2">
              <Star v-for="star in param.count" :key="star" />
            </div>
            <Progress :filling="param.filling" />
          </div>
        </div>
        <div class="cl-gray text-end mt-15px">2 110 094 оценки</div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "./Star";
import Progress from "./Progress";
export default {
  name: "Ratings",
  components: {
    Star,
    Progress,
  },
  data() {
    return {
      params: [
        { count: 5, filling: 90 },
        { count: 4, filling: 4 },
        { count: 3, filling: 3 },
        { count: 2, filling: 5 },
        { count: 1, filling: 6 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.star-container {
  min-width: 50px;
}
.rating {
  font-size: 60px;
}

.h-12 {
  height: 12px;
}

.mt-15px {
  margin-top: 15px;
}
</style>