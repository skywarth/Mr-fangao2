<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
defineProps({
    // msg: String
})
onMounted(() => {

    // Isshow = true;
});
function goBack(){

};

</script>
<template>
    <div id="backbutton" @click="goBack()">
    </div>
</template>


<style scoped lang='less'>
#backbutton {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 1%;
    background: #FFFFFF;
}
</style>

