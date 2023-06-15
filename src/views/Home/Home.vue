<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
defineProps({
    // msg: String
})
const router = useRouter()
const jumpTo = (e) => {
    console.log(e)
    router.push(e)
};
const CesiumExample = [
    {
        name: "刘备",
        id: "1",
        loc: "/CesiemEarth",
    },
    {
        name: "曹操",
        id: "魏国",
        loc: "/test1",
    },
    {
        name: "孙权",
        id: "吴国",
        loc: "/test2",
    },
    {
        name: "关羽",
        id: "蜀国",
        loc: "/UlitsTest",
    },
    {
        name: "刘备",
        id: "蜀国1",
        loc: "涿郡涿县（河北省涿州市）",
    },
    {
        name: "曹操",
        id: "魏国1",
        loc: "沛国谯县（安徽省亳州市）",
    },
    {
        name: "孙权",
        id: "吴国1",
        loc: "吴郡富春县（浙江省杭州市富阳区）",
    },
    {
        name: "关羽",
        id: "蜀国1",
        loc: "河东郡解县（山西省运城市盐湖区解州镇）",
    },
]
const Vue3Example = [
    {
        name: "类Hooks函数式编程",
        id: "1",
        loc: "/mixin",
    },
    {
        name: "曹操",
        id: "魏国",
        loc: "/test1",
    },
    {
        name: "孙权",
        id: "吴国",
        loc: "/test2",
    },
    {
        name: "关羽",
        id: "蜀国",
        loc: "河东郡解县（山西省运城市盐湖区解州镇）",
    },
    {
        name: "刘备",
        id: "蜀国1",
        loc: "涿郡涿县（河北省涿州市）",
    },
    {
        name: "曹操",
        id: "魏国1",
        loc: "沛国谯县（安徽省亳州市）",
    },
    {
        name: "孙权",
        id: "吴国1",
        loc: "吴郡富春县（浙江省杭州市富阳区）",
    },
    {
        name: "关羽",
        id: "蜀国1",
        loc: "河东郡解县（山西省运城市盐湖区解州镇）",
    },
]
const OpenLayersExample = [
    {
        name: "地图切换",
        id: "1",
        loc: "/olmapchange",
    },
    {
        name: " ",
        id: "魏国",
        loc: "/test1",
    },
]
onMounted(() => {
});

const count = ref(0)
</script>
<template>
    <div id="HomePage" class="common-layout">
        <div id="Header"></div>
        <div id="MainPage">
            <div id="LeftSide" class="main-part">
                <div class="category-part">
                    <div class="title">{{ "CesiumExample" }}</div>
                    <div class="optional-list">
                        <div class="option" v-for="(item) in CesiumExample" :key="item.id" @click="jumpTo(item.loc)">{{
                            item.name
                        }}</div>
                    </div>
                </div>
                <div class="category-part">
                    <div class="title">{{ "Vue3Example" }}</div>
                    <div class="optional-list">
                        <div class="option" v-for="(item) in Vue3Example" :key="item.id" @click="jumpTo(item.loc)">{{
                            item.name
                        }}</div>
                    </div>

                </div>
                <div class="category-part">
                    <div class="title">{{ "OpenLayersExample" }}</div>
                    <div class="optional-list">
                        <div class="option" v-for="(item) in OpenLayersExample" :key="item.id"
                            @click="jumpTo(item.loc)">{{ item.name }}</div>
                    </div>

                </div>
            </div>
            <div id="RightSide" class="main-part"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#HomePage {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    #Header {
        width: 100%;
        height: 10%;
        float: left;
    }

    #MainPage {
        width: 100%;
        height: 90%;
        float: left;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        #LeftSide {
            height: 100%;
            width: 50%;
            padding: 10px;
            box-sizing: border-box;

            .category-part {
                width: 100%;
                height: auto;
                background: #ffffff;
                border-radius: 15px;
                margin: 2% 0% 0% 0%;
                padding: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;

                .title {
                    height: 25px;
                    width: 100%;
                    border-bottom: 1px solid #e9e0e0;
                }

                .optional-list {
                    width: 100%;

                    .option {
                        width: calc(100% / 6);
                        text-align: center;
                        height: 25px;
                        margin-top: 5px;
                        float: left;
                        cursor: pointer;
                        color: #000000;

                        &:hover {
                            color: #116ed8;
                        }
                    }
                }
            }
        }

        #RightSide {
            height: 100%;
            width: 20%;
            padding: 10px;
            box-sizing: border-box;
        }
    }
}
</style>
