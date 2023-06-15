<script setup>
import * as Cesium from "cesium";
import { ref, onMounted, onUnmounted, computed } from 'vue'
import router from '../../router/index'
defineProps({
  // msg: String
})
onMounted(() => {
  // console.log(window.viewer)
  window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));

  let atLayer = new Cesium.UrlTemplateImageryProvider({
    url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    minimumLevel: 3,
    maximumLevel: 18
  })
  window.viewer.imageryLayers.addImageryProvider(atLayer);
  let newImagery = window.viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      minimumLevel: 3,
      maximumLevel: 18
    })
  );
  newImagery.brightness = 1;
});
onUnmounted(() => {
})

let key = computed(() => {
  return router.currentRoute.value.fullPath;
})
const count = ref(0)
</script>
<template>
  <CesiemEarth :key="key" />
</template>

<style lang="less" scoped>
// #cesiumContainer {
//   position: absolut     e;
//   width: 100%;
//   height: 100%;
// }
</style>
