<script setup>
import * as Cesium from "cesium";
import { ref, onMounted, onUnmounted, computed } from 'vue'
import {getOsmMap,getAutonavi,getArcgismap} from '../../ulits/cesium/CesiumViewer'
import router from '../../router/index'
defineProps({
  // msg: String
})

onMounted(() => {
  radio1="OsmMap地图";
});
onUnmounted(() => {
})

let radio1 = ref('')
let key = computed(() => {
  return router.currentRoute.value.fullPath;
})

function removeBaseMap(val) {
  // window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));
}
const count = ref(0)
</script>
<template>
  <div id="mapchange">
    <el-radio-group v-model="radio1" size="large" >
      <el-radio-button label="OsmMap地图" @click="getOsmMap()" />
      <el-radio-button label="高德地图" @click="getAutonavi()"/>
      <el-radio-button label="ArcGIS地图" @click="getArcgismap()" />
      <el-radio-button label="Chicago" @click="getOsmMap()" />
    </el-radio-group>
  </div>
</template>

<style lang="less" scoped>
#mapchange {
  position: absolute;
  z-index: 99999;
  width: auto;
  height: auto;
  right: 0%;
  bottom: 0%;
  background: #ffffff00;
}
</style>
