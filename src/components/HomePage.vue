<template>
  <div id="flex-container">
    <InputMetrics class="inputComponent"/>
    <Graphic class="graphComponent" />
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
}
</script>

<style scoped>
  #flex-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    margin-right: 10vw;
    gap: 3vh;
  }

  .inputComponent {
    flex: 2;
  }

  .graphComponent {
    flex: 1;
  }
</style>