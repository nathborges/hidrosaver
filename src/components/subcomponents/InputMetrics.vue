<template>
    <div id="box">
        <ButtonAndSearchBar/>
        <Carousel />
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
}
</script>
<style scoped>
    #box {
        background-color: white;
        height: 100%;
        border: 2px solid rgba(162, 162, 162, 0.01);
        box-shadow: 4px 4px 4px rgba(79, 79, 79, 0.25);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        padding: 30px;
    }

</style>
