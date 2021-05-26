<template>
  <Star 
    v-for="(star, index) in stars"
    :key="star"
    :width="20"
    :height="20"
    :fill="star.fill"
    :stroke="stroke"
    @click="marked(index)"
  />
</template>

<script>
import Star from './Star';
export default {
    name: 'Mark',
    components: {
        Star
    },
    data() {
        return {
            stars: [
                {fill: 'none'},
                {fill: 'none'},
                {fill: 'none'},
                {fill: 'none'},
                {fill: 'none'},
            ],
            stroke: '#177ae4',
        }
    },
    methods: {
        marked(idx) {
            this.stars.forEach((it, index) => {
                if (idx < index) {
                    it.fill = 'none';
                    return;
                }
                it.fill = this.stroke;
            });
        }
    }
}
</script>

<style>

</style>