<template>
  <div class="d-flex justify-content-between py-2 pe-3 bb" @click="show()">
    <div class="cl-gray">
      {{ title }}
      <tempalte v-if="isShow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio
        cumque, expedita voluptatum suscipit, ad distinctio architecto
        asperiores sunt placeat perferendis esse aliquam, maxime possimus ex at.
        Officia, dolores delectus? Iusto dignissimos provident fugit veniam,
        eligendi eos at! Magnam, saepe beatae minus dolor eos suscipit
        distinctio ipsum dignissimos molestias corrupti perspiciatis praesentium
        cumque in officia asperiores quos. Eos, eveniet voluptatum!
      </tempalte>
    </div>
    <div class="d-flex align-items-center" v-if="!isShow">
      <div class="me-2">{{ text }}</div>
      <div class="arrow mr-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInfo",
  props: {
    title: {
      require: true,
      type: String,
    },
    text: {
      require: true,
      type: String,
    },
  },
  data() {
      return {
          isShow: false,
      }
  },
  methods: {
      show() {
          this.isShow = true;
      }
  }
};
</script>

<style>
</style>