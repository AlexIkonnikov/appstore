<template>
  <div class="progress">
    <span class="progress__bar" :style="returnFilling"></span>
  </div>
</template>

<script>
export default {
    name: 'Progress',
    props: {
        filling: {
            require: false,
            type: Number,
            default: 100,
        }
    },
    computed: {
        returnFilling () {
            return {
                width: this.filling + '%',
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.progress {
    flex-grow: 1;
    background-color: #2c2c2e;
    height: 3px;

    &__bar {
        background-color: #9e9ea6;
    }
}
</style>