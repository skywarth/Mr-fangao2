<template>
    <div class="analysis-progress">
        <div class="img-box"></div>
        <div class="progress-box">
            <div class="progress-title">分析进度：
                <span class="progress-value">{{ progressValue.toFixed(0) }}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-done" :style="{ transform: 'translate(' + panX + 'px' }"></div>
            </div>
            <div class="progress-button" :style="{ transform: 'translate(' + panX + 'px' }">
                <div class="button-inner"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted ,watch} from 'vue'
// import { popupStore } from '@/stores/popupStore'
// const popupStores = popupStore();

// 进度值与平移值
const progressValue = ref<number>(0)
const panX = ref<number>(0)
const interval = setInterval(() => {
    progressValue.value += 0.5
    panX.value += 1.5
}, 30)

watch(progressValue, (newV) => {
    if (newV == 100) {
        progressValue.value = 100
        panX.value = 300
        clearInterval(interval)
    }
})

</script>

<style lang="less" scoped>
.analysis-progress {
    width: 360px;
    height: 160px;
    position: absolute;
    top: calc(50% - 120px);
    left: calc(50% - 180px);
    z-index: 9;
    background: #FFFFFF;
    box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 2px 2px 2px 2px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .img-box {
        margin-top: 24px;
        width: 90px;
        height: 70px;
        // background-image: url('@/assets/images/portal/img-fxz.png');
        background-size: 100% 100%;
    }

    .progress-box {
        width: 100%;
        height: calc(100% - 70px - 24px);
        position: relative;

        .progress-title {
            width: calc(100% - 48px);
            height: 20px;
            margin-top: 16px;
            margin-left: 24px;
            line-height: 20px;

            .progress-value {
                color: #1A73E8;
            }
        }

        .progress-bar {
            width: calc(100% - 48px);
            height: 10px;
            margin-top: 5px;
            margin-left: 24px;
            background-color: #E4EBF5;
            border-radius: 5px;
            overflow: hidden;

            .progress-done {
                width: 312px;
                height: 10px;
                margin-left: -312px;
                background-color: #d51616;
                background: linear-gradient(90deg, #00b3ff 50%, #15A0F9 50%);
                background-size: 20px 20px;
            }
        }


        .progress-button {
            width: 18px;
            height: 18px;
            position: absolute;
            top: 37px;
            left: 18px;
            background-color: #337FF2;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .button-inner {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #fff;
            }
        }
    }

}
</style>