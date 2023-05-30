<template>
    <div id="box"></div>
</template>
<script>
export default {
    name: 'Graphic',
}
</script>
<style scoped>
#box {
    background-color: white;
    height: 100%;
    border: 2px solid rgba(162, 162, 162, 0.01);
    box-shadow: 4px 4px 4px rgba(79, 79, 79, 0.25);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10vh;
}
</style>
