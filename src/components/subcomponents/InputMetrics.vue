<template>
    <div class="box">
        <ButtonAndSearchBar @searchFor="returnsValueSearched" @openModal="openModal" />
        <Carousel :valueSearched="valueToSearchFor"/>
    </div>
</template>
<script>
import ButtonAndSearchBar from './ButtonAndSearchBar.vue'
import Carousel from './Carousel.vue'
export default {
    name: 'InputMetrics',
    components: {
        ButtonAndSearchBar,
        Carousel,
    },
    data() {
        return {
            valueToSearchFor: '',
        }
    },
    methods: {
        returnsValueSearched(value) {
            this.valueToSearchFor = value;
        },
        openModal() {
            this.$emit('openModal')
        },
    },
}
</script>
<style scoped>

</style>
