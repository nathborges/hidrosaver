<template>
    <div id="flex-container">
        <div id="flex-img">
            <img class="logo" src=".././assets/logo.svg" />
            <img class="kraft-logo" src=".././assets/kraft.png" />
        </div>
        <InputMetrics class="inputComponent" @openModal="emitOpenModal" />
        <Graphic id="graphicComponent"/>
        <div class="flex-horizontal">
            <p @click="emitTermosModal" class="termos-de-uso">Clique pra acessar termos de uso</p>
        </div>
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
        emitTermosModal() {
            this.$emit('openModalTermos')
        },
    },
}
</script>

<style scoped>
.logo {
    height: 14vh;
}

#flex-img {
    display: flex;
    align-content: center;
    justify-content: center;
}

.logo {
    flex: 1;
    padding-left: 11.5%;
}

.kraft-logo {
    flex: 0.1;
    height: 15px;
    display: inline-block;
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

.flex-horizontal {
    display: flex;
    align-items: center;
    padding-bottom: 2vh;
}

.termos-de-uso {
    color: grey;
    flex: 1;
    text-align: center;
    cursor: pointer;
}

.logo-rodape {
    height: 10%;
}

@media screen and (max-width: 574px) {
    #flex-container {
        margin-left: 2vw;
        margin-right: 2vw;
    }

    .logo[data-v-df02a584] {
    padding-left: 30%;
    }
}
</style>
