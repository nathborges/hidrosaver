<!-- eslint-disable vue/valid-attribute-name -->
<template>
    <div>
        <Modal :show-modal="showModal" @onClose="onClose" />
        <HomePage @openModal="openModal" />
    </div>
</template>

<script>
import Modal from './components/modal/Modal'
import HomePage from './components/HomePage'

export default {
    name: 'App',
    components: {
        Modal,
        HomePage,
    },
    data() {
        return {
            showModal: false,
        }
    },
    created() {
        const dummyData = `[
    {
        "day": "04/06/23",
        "metrics": {
            "banho": { "quantity": 10, "liters": 50 },
            "torneira": { "quantity": 30, "liters":70 },
            "descarga": { "quantity": 0, "liters": 0 }
        }
    },
    {
        "day": "03/06/23",
        "metrics": {
            "banho": { "quantity": 100, "liters": 300 },
            "torneira": { "quantity": 10, "liters": 40 },
            "descarga": { "quantity": 20, "liters": 30 }
        }
    },
        {
        "day": "02/06/23",
        "metrics": {
            "banho": { "quantity": 50, "liters": 150 },
            "torneira": { "quantity": 10, "liters": 40 },
            "descarga": { "quantity": 20, "liters": 30 }
        }
    }
]`
        const metricas = localStorage.getItem('metrics')
        const metricsArray = JSON.parse(metricas)

        if (metricsArray) {
            if (metricsArray.length !== 0) {
                return
            }

            return
        }

        const dummyDataString = JSON.parse(JSON.stringify(dummyData))
        localStorage.setItem('metrics', dummyDataString)
    },
    methods: {
        onClose() {
            this.showModal = false
            location.reload()
        },
        openModal() {
            this.showModal = true
        },
    },
}
</script>

<style>
@font-face {
    font-family: 'inter-regular';
    src: url('./assets/fonts/static/Inter-Regular.ttf');
}

@font-face {
    font-family: 'inter-bold';
    src: url('./assets/fonts/static/Inter-Bold.ttf');
}

body {
    background-color: rgba(123, 197, 251, 0.74);
    background: no-repeat center
        linear-gradient(
            180.06deg,
            rgba(123, 197, 251, 0.74) -38.23%,
            rgba(254, 254, 254, 0.81) 139.89%
        );
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center top;
    background-attachment: fixed;
    font-family: 'inter-regular';
    font-size: 10px;
    color: white;
}

input {
    background: rgba(217, 217, 217, 0.08);
    border: 2px solid rgba(79, 79, 79, 0.09);
    border-radius: 20px;
}

h2 {
    margin: 0;
}

.centralize {
    display: flex;
    align-items: center;
    justify-items: center;
}

p {
    margin: 0;
}

:root {
    --scrollbar-color: rgb(255, 0, 0); /* red */
}
</style>
