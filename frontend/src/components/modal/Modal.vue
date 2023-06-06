<template>
    <div
        v-show="showModal"
        id="modal-container"
        class="modal-container"
        @mousedown="clickBG"
    >
        <div id="modal-content">
            <div id="options">
                <div class="options-row">
                    <p>Nova ação</p>
                </div>
                <div class="options-row">
                    <Dropdown
                        v-model="selectedAction"
                        :options="actions"
                        option-label="name"
                        placeholder="Ação"
                        class="w-full md:w-14rem"
                    />
                    <div class="options-text">
                        <InputNumber
                            v-model="times"
                            class="times"
                            input-id="times"
                        />
                        <p
                            v-show="
                                (selectedAction.code == 'banho') |
                                    (selectedAction.code == 'torneira')
                            "
                            class="minutos"
                        >
                            minutos
                        </p>
                        <p
                            v-show="selectedAction.code == 'descarga'"
                            class="minutos"
                        >
                            vezes
                        </p>
                    </div>
                </div>
            </div>
            <div id="actions">
                <a id="button" @click.prevent="submitAndClose">
                    <p>Confirmar</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import moment from 'moment'

export default {
    components: {
        Dropdown,
        InputNumber,
    },
    props: {
        showModal: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            actions: [
                { name: 'Banho', code: 'banho' },
                { name: 'Torneira', code: 'torneira' },
                { name: 'Descarga', code: 'descarga' },
            ],
            selectedAction: { name: 'Banho', code: 'banho' },
            times: 0,
        }
    },
    watch: {
        times(newValue) {
            this.times = Number(newValue)
        },
    },
    methods: {
        clickBG(e) {
            const { id } = e.target
            if (id === 'modal-container') {
                this.$emit('onClose')
            }
        },
        setNewSelectedOption(selectedOption) {
            this.config.placeholder = selectedOption.value
        },
        formatDate(date) {
            return moment(date).format('DD/MM/YY')
        },
        submitAndClose() {
            const literPorQuantity = {
                banho: 7,
                torneira: 20,
                descarga: 12,
            }

            const targetLiter = literPorQuantity[this.selectedAction.code]

            let newItem = {
                day: this.formatDate(new Date()),
                metrics: {
                    banho: {
                        quantity: 0,
                        liters: 0,
                    },
                    torneira: {
                        quantity: 0,
                        liters: 0,
                    },
                    descarga: {
                        quantity: 0,
                        liters: 0,
                    },
                },
            }

            newItem.metrics[this.selectedAction.code].quantity = this.times
            let metrics = localStorage.getItem('metrics')

            if (!metrics) {
                metrics = []
                newItem.metrics[this.selectedAction.code].liters =
                    this.times * targetLiter
                metrics.unshift(newItem)
                localStorage.setItem('metrics', JSON.stringify(metrics))
                return
            }

            metrics = JSON.parse(metrics)
            const todayMetric = metrics.filter((eachMetric) => {
                return eachMetric.day === newItem.day
            })

            if (todayMetric.length == 0) {
                newItem.metrics[this.selectedAction.code].liters =
                    this.times * targetLiter
                metrics.unshift(newItem)
            } else {
                const targetMetric = todayMetric[0]
                const quantityAlreadyLoaded =
                    targetMetric.metrics[this.selectedAction.code].quantity

                targetMetric.metrics[this.selectedAction.code].quantity =
                    quantityAlreadyLoaded + this.times

                targetMetric.metrics[this.selectedAction.code].liters =
                    targetMetric.metrics[this.selectedAction.code].quantity *
                    targetLiter

                metrics = metrics.filter((eachMetric) => {
                    return eachMetric.day !== targetMetric.day
                })

                metrics.unshift(targetMetric)
            }

            localStorage.setItem('metrics', JSON.stringify(metrics))
            this.$emit('onClose')
        },
    },
}
</script>
<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.38);
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

#modal-content {
    position: relative;
    top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 50%;
    height: min-content;
    border-radius: 30px;
    background-color: white;
    box-shadow: 4px 4px 4px rgba(79, 79, 79, 0.25);
    gap: 3vh;
}

#button {
    background: #004c90;
    border: 2px solid #004c90;
    border-radius: 20px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
    font-size: 15px;
}

#actions {
    flex: 1;
    display: flex;
    align-items: flex-end;
}

#options {
    display: flex;
    flex-direction: column;
    flex: 2;
    align-content: center;
    justify-content: space-around;
    gap: 3vh;
}

.options-row {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    color: black;
    font-size: 20px;
}
.options-text {
    display: flex;
    gap: 1vw;
    flex-direction: row;
}

.p-inputtext {
    width: 10px !important;
}

.minutos {
    align-self: center;
    font-size: 1rem;
    color: #6c757d;
}

/* min-width */
@media screen and (min-width: 100px) {
    #modal-content {
        min-width: min-content;
    }

    .options-row {
        flex-direction: column;
    }
}
</style>
