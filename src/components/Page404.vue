<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
defineProps({
    // msg: String
})
onMounted(() => {
    GoIndex();
    Isshow = true;
});

function GoIndex() {
    let _t = 9
    time_end = setInterval(() => {
        if (_t !== 0) {
            time = _t--;
        } else {
            router.replace('/')
            clearTimeout(time_end)
            time_end = null
        }
    }, 1000)
}
let Isshow = ref(false)
const router = useRouter()
let time_end = ref(null)
let time = ref('')
</script>
<template>
    <div class="not_found" >
        <p>
            页面将在<span>{{ time }}</span>秒后自动跳转首页，<br>
            您也可以点击这里跳转<a href="/">首页</a>
        </p>
    </div>
</template>


<style scoped lang='less'>
.not_found {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../../public/404page.png') no-repeat;
    background-position: center;
    background-size: cover;

    p {
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translate(-50%, 0);
        color: #fff;

        span {
            color: orange;
            font-family: '仿宋';
            font-size: 25px;
        }

        a {
            font-size: 30px;
            color: aqua;
            text-decoration: underline;
        }
    }
}
</style>

