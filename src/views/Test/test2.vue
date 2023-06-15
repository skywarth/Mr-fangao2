<script setup>
import * as Cesium from "cesium";
import CesiemEarth from "../../components/CesiemEarth.vue";
import { ref, onMounted, onUnmounted } from 'vue'
defineProps({
  // msg: String
})
onMounted(() => {
    
});
onUnmounted(() => {
//   window.viewer.destroy();
})
//添加天空盒

const count = ref(0)
</script>
<template>
    <CesiemEarth/>
</template>

<style lang="less" scoped>
// #cesiumContainer {
//   position: absolute;
//   width: 100%;
//   height: 100%;
// }
</style>