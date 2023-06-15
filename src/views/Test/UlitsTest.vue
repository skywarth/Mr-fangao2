<script setup>
import * as Cesium from "cesium";
import CesiemEarth from "../../components/CesiemEarth.vue";
// import { generateCurve } from "../../ulits/cesium/addFlyLine";
// import { LineFlowMaterialProperty } from "../../ulits/cesium/LineFlowMaterialProperty"
import { ref, onMounted, onUnmounted, computed } from 'vue'
let material1 = new Cesium.CheckerboardMaterialProperty({
    evenColor: Cesium.Color.RED,
    oddColor: Cesium.Color.YELLOW,
    repeat: new Cesium.Cartesian2(2, 2),
});

defineProps({
    // msg: String
})
onMounted(() => {
    // console.log(Cesium)
    //添加实体
    // addEntity();
    addMeterialEntity(material1)

});
onUnmounted(() => {
    // window.viewer.destroy();
})
function addEntity() {
    var entity = window.viewer.entities.add({
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray([-77, 35, -77.1, 39]),
            width: 50,
            material: Cesium.Color.RED
        }
    });
    window.viewer.zoomTo(window.viewer.entities);
}
function addMeterialEntity(material) {
    // 使用entity创建矩形
    var rectangle = window.viewer.entities.add({
        id: "entityRect",
        rectangle: {
            coordinates: Cesium.Rectangle.fromDegrees(
                // 西边的经度
                90,
                // 南边维度
                20,
                // 东边经度
                110,
                // 北边维度
                30
            ),
            // 设置entity材质，MaterialProperty
            // material: Cesium.Color.RED.withAlpha(0.5),
            material: material,//获取自定义的材质meterial
        },
    });
    window.viewer.zoomTo(rectangle);
    window.viewer.zoomTo(rectangle);

}
</script>
<template>
    <CesiemEarth />
</template>

<style lang="less" scoped>
// #cesiumContainer {
//   position: absolute;
//   width: 100%;
//   height: 100%;
// }
</style>
