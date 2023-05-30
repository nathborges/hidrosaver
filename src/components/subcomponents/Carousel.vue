<template>
    <div class="card-carousel-container">
        <li v-for="(input, index) in inputs" :key="index" class="centralize">
            <Card
                :title="input.day"
                :metrics="input.metrics"
                :color="returnRandomColor(index)"
            />
        </li>
    </div>
</template>
<script>
import Card from './Card.vue'

export default {
    name: 'Carousel',
    components: {
        Card,
    },
    data() {
        return {
            colors: ['#A8BFE2', ' #A8DFE2', '#B7A8E2'],
            inputs: [
                {
                    day: '20/03/2023',
                    metrics: {
                        shower: {
                            quantity: 10,
                            liters: 100,
                        },
                        toilet: {
                            quantity: 4,
                            liters: 20,
                        },
                        sink: {
                            quantity: 4,
                            liters: 20,
                        },
                    },
                },
                {
                    day: '22/03/2023',
                    metrics: {
                        shower: {
                            quantity: 4,
                            liters: 20,
                        },
                        toilet: {
                            quantity: 4,
                            liters: 20,
                        },
                        sink: {
                            quantity: 4,
                            liters: 20,
                        },
                    },
                },
            ],
        }
    },
    methods: {
        returnRandomColor(index) {
            if (!index) {
                return this.colors[0]
            }
            const realIndex = index + 1
            const numberOfColors = this.colors.length + 1
            const item = realIndex % numberOfColors
            return this.colors[item - 1]
        },
    },
}
</script>
<style scoped>
.card-carousel-container {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    height: 100%;
    width: 100%;
    overflow-x: scroll;
}


</style>
