<template>
    <div class="box">
        <canvas id="myChart"></canvas>
        <div class="text-metrics">
            <div class="text-metrics-item">
                <h2 class="label">Média de consumo:</h2>
                <h2>{{ `${averageLiters} litros por dia`}}</h2>
            </div>

            <div class="text-metrics-item">
                <h2 class="label">Consumo total registrado:</h2>
                <h2>{{ `${allLiters} litros`}}</h2>
            </div> 
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
    name: 'Graphic',
    data() {
        return {
            days: [],
            liters: [],
            allLiters: 0,
            averageLiters: 0,
        }
    },
    mounted() {
        this.loadItems()
        const ctx = document.getElementById('myChart')
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.days,
                datasets: [
                    {
                        label: 'Consumo (em litros)',
                        data: this.liters,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        displayColors: false,
                    },
                },
            },
        })
    },
    methods: {
        loadItems() {
            const allRegisters = JSON.parse(localStorage.getItem('metrics'))
            if (!allRegisters) {
                return
            }
            if (allRegisters.length == 0) {
                return
            }
            allRegisters.forEach((eachMetric) => {
                this.days.push(eachMetric.day)
            })

            allRegisters.forEach((eachRegister) => {
                let allLitersPerDay = 0

                const allKeys = Object.keys(eachRegister.metrics)
                allKeys.forEach((eachKey) => {
                    allLitersPerDay =
                        allLitersPerDay + eachRegister.metrics[eachKey].liters
                })

                this.liters.push(allLitersPerDay)
            })

            this.allLiters = this.liters.reduce((previous, current) => {
                return previous + current;
            });

            this.averageLiters = this.allLiters / this.days.length
            this.averageLiters = this.averageLiters.toFixed(2)
        },
    },
}
</script>
<style scoped>
.text-metrics {
    color: #4a4a4a;
}

.text-metrics-item {
    display: flex;
    gap: 0.5vw;
}


.label {
    font-family: 'inter-bold';
}
</style>
