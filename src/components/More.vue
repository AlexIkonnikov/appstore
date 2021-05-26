<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <p>
      {{ text }}
      <template v-if="isShow">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        officiis, dolores nesciunt facilis ab minima quisquam nostrum quas
        delectus neque deleniti rem eveniet sint, esse eligendi doloribus quo
        provident vel? Cumque nihil, cupiditate repudiandae enim amet
        exercitationem obcaecati quod similique aliquam dolore dolor
        voluptatibus fugit facere suscipit architecto aspernatur et nesciunt
        accusantium corrupti aperiam tenetur quasi neque veniam. Corporis,
        numquam.
      </template>
    </p>

    <p class="cl-blue align-self-end" v-if="!isShow" @click="show">ещё</p>
  </div>
</template>

<script>
export default {
  name: "More",
  props: {
    text: {
      require: true,
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
  },
};
</script>

<style>
</style>