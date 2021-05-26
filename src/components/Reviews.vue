<template>
  <div class="app-wrapper">
      <div class="d-flex justify-content-start align-items-center mb-2">
        <p class="cl-gray">Оценка касанием: </p>
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
  </div>
</template>

<script>
import Star from './Star';
export default {
    name: 'Reviews',
    components: {
        Star
    }
}
</script>

<style lang="scss" scoped>
</style>