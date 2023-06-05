<template>
    <div id="flex-container">
        <img class="logo" src=".././assets/logo.svg" />
        <InputMetrics class="inputComponent" @openModal="emitOpenModal" />
        <Graphic id="graphicComponent"/>
    </div>
</template>

<script>
import InputMetrics from './subcomponents/InputMetrics.vue'
import Graphic from './subcomponents/Graphic.vue'
export default {
    name: 'HomePage',
    components: {
        InputMetrics,
        Graphic,
    },
    data() {
        return {
            days: [],
        }
    },
    methods: {
        emitOpenModal() {
            this.$emit('openModal')
        },
    },
}
</script>

<style scoped>
.logo {
    height: 14vh;
}
#flex-container {
    display: flex;
    flex-direction: column;
    margin-left: 12vw;
    margin-right: 12vw;
    gap: 3vh;
}

.inputComponent {
    flex: 2;
}

.graphComponent {
    flex: 1;
}

.box {
    background-color: white;
    height: 100%;
    border: 2px solid rgba(162, 162, 162, 0.01);
    box-shadow: 4px 4px 4px rgba(79, 79, 79, 0.25);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 3vh;
}
</style>
