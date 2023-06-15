<template>
    <div id="MapSelect">
        <div class="optional_list">
            <div class="option" v-for="(item, index) in tilelayers" :key="item.url"
                @click="sentLayer(item), setClass(index)">
                <div class="option_img">
                    <img :class="{ active: index == isActive }" :src="item.img_url" alt="" style="">
                </div>
                <div class="option_text">{{ item.title }}</div>
            </div>
        </div>
    </div>

</template>
<script setup>
import tilelayers from "./map_Load"
import { ref, onMounted, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import 'ol/ol.css'
import XYZ from "ol/source/XYZ"

const emit = defineEmits(['layer_change']);
let isActive = ref()
function sentLayer(msg) {
    let source = new XYZ({
        url: msg.url,
        title: msg.title,
        layerName: msg.layerName,
        id: msg.id,
    })
    emit('layer_change', source);
};
function setClass(index) {
    this.isActive = index
}
onMounted(() => {
    sentLayer(tilelayers[0])
    console.log('默认底图 :>> ', tilelayers[0]);
});


const count = ref(0)
</script>
<style scoped>
#MapSelect {
    width: 292px;
    height: 350px;
    position: absolute;
    z-index: 99;
    top: 0;
    right: 10px;
    background-color: aliceblue;
    border: 1px solid #FFFF;
}

.optional_list {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.option {
    box-sizing: border-box;
    height: 118px;
    width: 76px;
    word-wrap: break-word;
    word-break: normal;
    float: left;
    margin: 0px 7px 0px 7px;
}

.option_img {
    box-sizing: content-box;
    height: 76px;
    width: 76px;
}

.opt_img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.option_text {
    box-sizing: border-box;
    height: 42px;
    width: 76px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-family: "Microsoft YaHei", sans-serif !important;
    padding: 8px 0px 16px 0px;
    display: flex;
    justify-content: center;
    flex-direction: row;
}


.active {
    box-sizing: content-box;
    border: 1px solid rgb(28, 118, 221);
}
</style>
