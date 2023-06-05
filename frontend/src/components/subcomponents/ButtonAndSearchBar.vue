<template>
    <div id="button-search-container">
        <a id="button" @mousedown="openModal">
            <font-awesome-icon
                icon="fa-solid fa-plus"
                size="xl"
                style="color: #ffff"
            />
        </a>
        <input v-model="parameter" @keydown="searchForAValue"/>
    </div>
</template>
<script>
export default {
    name: 'ButtonAndSearchBar',
    data() {
        return {
            parameter: '',
        }
    },
    methods: {
        openModal() {
            this.$emit('openModal')
        },
        searchForAValue() {
            this.$emit('searchFor', this.parameter);
        }
    },
}
</script>
<style scoped>
#button-search-container {
    display: flex;
    flex-direction: row;
    gap: 5vw;
}

#button-search-container button {
    flex: 1;
}

#button-search-container input {
    flex: 2;
}

#button {
    background: #004c90;
    border: 2px solid #004c90;
    border-radius: 20px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
}
</style>
