<!--
 * @Author: liqifeng
 * @Date: 2023-01-06 14:08:15
 * @LastEditors: liqifeng Mr.undefine@protonmail.com
 * @LastEditTime: 2023-01-09 17:16:11
 * @Description: openlayers map change  
-->
<template>
  <div id="olmapchange">
    <div id="map" class="map_ol" ref="olMap" @layer_change="getLayer"></div>

    <mapselect @layer_change="getLayer"></mapselect>
    
  </div>

</template>
<script setup>
import mapselect from "../../components/MapChangeOL/MapSelect.vue"
import { ref, onMounted, defineProps } from 'vue'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
// import OSM from 'ol/source/OSM'
import 'ol/ol.css'
import XYZ from "ol/source/XYZ"
defineProps({
  // msg: String
})

var source = new XYZ({
  url: "http://t3.tianditu.com/DataServer?T=vec_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
});
var tileLayer = new Tile({
  id: "tileLayer",
  title: "天地图",
  layerName: "baseMap",
  source: source,
});

//切换图层对应方法
function getLayer(source) {
  if (map.value) {
    const baseLayer = map.value.getLayers().item(0);
    baseLayer.setSource(source)
  }
}

const map = ref() // 绑定地图实例的变量
// 初始化地图
function initMap() {
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [tileLayer],
    view: new View({
      projection: 'EPSG:4326', // 使用这个坐标系
      center: [118, 34],
      zoom: 5,
    })
  })
}

onMounted(() => {
  initMap();
})
</script>
<style scoped>
#olmapchange {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

}

.map_ol {
  width: 100%;
  height: 100%;
  border: 0px solid #eee;
}
</style>
