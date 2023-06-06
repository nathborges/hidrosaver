<template>
    <div class="card-carousel-container">
        <li v-for="(input, index) in returnFilteredInputs" :key="index" class="centralize">
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
    props: {
        valueSearched: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            colors: ['#A8BFE2', ' #84c2c0', '#B7A8E2', '#FFC1CC'],
            inputs: [],
        }
    },
    computed: {
        returnFilteredInputs() {
            if (this.valueSearched == '' || this.inputs.length == 0) {
                return this.inputs
            }
            return this.inputs.filter((eachInput) => {
                return eachInput.day.includes(this.valueSearched)
            })
        },
    },
    created() {
        const metrics = localStorage.getItem('metrics')
        const parsedMetrics = JSON.parse(metrics)

        this.inputs = parsedMetrics
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

@media screen and (max-width: 574px) {
    .card-carousel-container {
        justify-content: center;
    }
};
</style>
