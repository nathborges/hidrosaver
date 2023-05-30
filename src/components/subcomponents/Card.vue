<template>
    <div class="card-container">
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
                        <h2>{{ returnMetrics.shower.quantity }}</h2>
                        <p>banhos</p>
                    </div>
                    <div class="info">
                        <h2>{{ returnMetrics.shower.liters }}</h2>
                        <p>l</p>
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
                        <h2>{{ returnMetrics.shower.quantity }}</h2>
                        <p>banhos</p>
                    </div>
                    <div class="info">
                        <h2>{{ returnMetrics.shower.liters }}</h2>
                        <p>l</p>
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
                        <h2>{{ returnMetrics.shower.quantity }}</h2>
                        <p>banhos</p>
                    </div>
                    <div class="info">
                        <h2>{{ returnMetrics.shower.liters }}l</h2>
                        <p>total</p>
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
}
</script>
<style scoped>
.card-container {
    border: 2px solid rgba(79, 79, 79, 0.09);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 90%;
}
.card-title {
    background-color: #a8bfe2;
    border-radius: 30px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    text-align: center;
    margin: 0;
    flex: 1;
    max-height: 25px;
    min-height: 25px;
}

.card-title h2 {
    flex: 1;
}
.card-list {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding-left: 1vw;
    padding-bottom: 1vh;
    padding-top: 1vh;
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
}

.info p {
    font-size: 0.7rem;
    vertical-align: baseline;
}

.info h2 {
    font-size: 2rem;
}

.info {
    display: flex;
    text-align: center;
    align-items: flex-end;
}

.image {
    flex: 0.5;
}

.icon {
    height: 90%;
}
</style>
