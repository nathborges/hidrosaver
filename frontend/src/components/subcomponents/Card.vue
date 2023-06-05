<template>
    <div class="card-container" @click="remove">
        <div class="card-title centralize" :style="{ backgroundColor: color }">
            <h2>{{ title }}</h2>
        </div>
        <div class="card-list">
            <div id="banho" class="item">
                <div class="image">
                    <font-awesome-icon
                        class="icon"
                        icon="fa-solid fa-shower"
                        size="2xl"
                    />
                </div>
                <div class="text">
                    <div class="info">
                        <h2>{{ returnMetrics.banho.quantity }}</h2>
                        <p>minutos</p>
                    </div>
                    <div class="info">
                        <h2>{{ returnMetrics.banho.liters }}</h2>
                        <p>litros</p>
                    </div>
                </div>
            </div>
            <div id="toilet" class="item">
                <div class="image">
                    <font-awesome-icon
                        class="icon"
                        icon="fa-solid fa-toilet"
                        size="2xl"
                    />
                </div>
                <div class="text">
                    <div class="info">
                        <h2>{{ returnMetrics.descarga.quantity }}</h2>
                        <p>descargas</p>
                    </div>
                    <div class="info">
                        <h2>
                            {{ returnMetrics.descarga.liters }}
                        </h2>
                        <p>litros</p>
                    </div>
                </div>
            </div>
            <div id="sink" class="item">
                <div class="image">
                    <font-awesome-icon
                        class="icon"
                        icon="fa-solid fa-sink"
                        size="2xl"
                    />
                </div>
                <div class="text">
                    <div class="info">
                        <h2>{{ returnMetrics.torneira.quantity }}</h2>
                        <p>minutos</p>
                    </div>
                    <div class="info">
                        <h2>
                            {{ returnMetrics.torneira.liters }}
                        </h2>
                        <p>litros</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        metrics: {
            type: Object,
            required: true,
        },
    },
    computed: {
        returnMetrics() {
            if (!this.metrics) {
                return ''
            }
            return this.metrics
        },
    },
    methods: {
        remove() {
            let metrics = localStorage.getItem('metrics')
            if (!metrics || metrics.length == 0) {
                return
            }

            console.log(this.title)
            metrics = JSON.parse(metrics)

            let newMetrics = metrics.filter((eachMetric) => {
               return eachMetric.day !== this.title
            })

            console.log(newMetrics)

            if (!newMetrics) {
                localStorage.removeItem('metric')
            }

            localStorage.setItem('metrics', JSON.stringify(newMetrics))
            location.reload()
        },
    },
}
</script>
<style scoped>
.card-container {
    border: 2px solid rgba(79, 79, 79, 0.09);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: fit-content;
}
.card-title {
    background-color: #a8bfe2;
    border-radius: 30px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    text-align: center;
    margin: 0;
    flex: 1;
    max-height: 30px;
    min-height: 30px;
}

.card-title h2 {
    flex: 1;
}
.card-list {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding-left: 1vw;
    padding-bottom: 4vh;
    padding-top: 4vh;
    padding-right: 1vw;
    flex: 2;
}

.item {
    background: rgba(52, 52, 78, 0.51);
    border: 2px solid rgba(79, 79, 79, 0.09);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    max-height: 50px;
    min-height: 50px;
    padding: 4px;
}
.text {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    flex: 1.5;
}

.info p {
    font-size: 0.7rem;
    vertical-align: baseline;
}

.info h2 {
    font-size: 1.2rem;
}

.info {
    display: flex;
    text-align: center;
    align-items: flex-end;
}

.image {
    flex: 0.5;
    display: flex;
    justify-content: center;
}

.icon {
    height: 90%;
}
</style>
