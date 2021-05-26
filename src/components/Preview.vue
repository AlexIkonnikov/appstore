<template>
  <div class="app-wrapper">
    <h2 class="mb-2">Предпросмотр</h2>
    <swiper  :slides-per-view="1.5">
      <swiper-slide><img src="../assets/img/sliders/first.png" alt="first" /></swiper-slide>
      <swiper-slide><img src="../assets/img/sliders/second.png" alt="second" /></swiper-slide>
      <swiper-slide><img src="../assets/img/sliders/third.png" alt="third" /></swiper-slide>
    </swiper>
    <div class="mt-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        width="10px"
        height="20px"
        fill="#8e8e90"
      >
        <g>
          <g>
            <path
              d="M384,0H128c-17.632,0-32,14.368-32,32v448c0,17.664,14.368,32,32,32h256c17.664,0,32-14.336,32-32V32
        C416,14.368,401.664,0,384,0z M256,480c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S273.664,480,256,480z M384,384
        H128V64h256V384z"
            />
          </g>
        </g>
      </svg>
      <span class="cl-gray ms-2">iphone</span>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

export default {
  name: "Preview",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>

  img {
    border-radius: 5px;
    min-width: 95%;
  }

</style>