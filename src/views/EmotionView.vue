<template>
    <div class="flex flex-col content-center flex-wrap mt-4 gap-4">
        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg flex">
                    <PhPerson :size="32" color="#2d2020" />情緒共享
                </span>
            </div>

            <div class="card flex flex-col h-64 w-80 rounded-lg shadow-xl p-5 gap-2 overflow-hidden">
                <div v-for="item in emotions" class="flex gap-3">
                    <span>
                        <PhHeartBreak :size="32" :color='color[item.category]' />
                    </span>
                    <span :style="{ color: color[item.category] }">{{ item.title }}</span>
                </div>
            </div>
        </div>

        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg flex">
                    <PhUserCircle :size="32" color="#2d2020" />情緒獨享
                </span>
            </div>
            <div class="card flex flex-col max-h-64 w-80 rounded-lg shadow-xl p-5 gap-2 overflow-hidden">
                <div v-for="item in emotions" class="flex gap-3">
                    <span>
                        <PhHeartBreak :size="32" :color='color[item.category]' />
                    </span>
                    <span :style="{ color: color[item.category] }">{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="absolute bottom-3 right-2 rounded-full p-2" style="background-color: #5AB4C5;"
        @click="modalActive = (!modalActive)">
        <PhPlus :size="32" color="#2d2020" />
    </div>

    <!-- The Modal -->
    <div class="modal fixed z-10 left-0 top-0 h-full w-full overflow-auto bg-black bg-opacity-40" v-if="modalActive">
        <div class=" w-full h-full content-center flex-wrap flex justify-center">
            <div class="bg-white p-4 opacity-100 w-80 z-20">
                <div class="flex justify-center text-xl">增加心情
                    <PhX @click="modalActive = (!modalActive)" :size="32" color="#2d2020" />
                </div>
                <div>
                    <span class="text-lg">今日心情:</span>
                    <div class="  gap-3 justify-between p-4 w-full flex">
                        <img @click="emotionSelect = 1" class="h-14" :src="getImgUrl(1)">
                        <img @click="emotionSelect = 2" class="h-14" :src="getImgUrl(2)">
                        <img @click="emotionSelect = 3" class="h-14" :src="getImgUrl(3)">
                        <img @click="emotionSelect = 4" class="h-14" :src="getImgUrl(4)">
                    </div>

                </div>

                <div class="flex flex-col">
                    <span class="text-lg">留言:</span>
                    <input class="h-24 border-solid border-2" type="text">
                </div>

                <div class="flex flex-col">
                    <span class="text-lg">狀態:</span>

                </div>
                <button class="" style="background: #5AB4C5;">提交</button>
            </div>


        </div>
        <!-- Modal content -->


    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Emotion from "../modal/emotion";

const emotionSelect = ref<number>(0);
const modalActive = ref<boolean>(false);

const getImgUrl = (id: number): string => {
    if (id === 1) {
        if (emotionSelect.value === id) {
            return '../../image/nowHappy.png'
        } else {
            return '../../image/happy.png'
        }

    } else if (id === 2) {
        if (emotionSelect.value === id) {
            return '../../image/nowAngry.png'
        } else {
            return '../../image/angry.png'
        }

    } else if (id === 3) {
        if (emotionSelect.value === id) {
            return '../../image/nowQuite.png'
        } else {
            return '../../image/quite.png'
        }

    } else {
        if (emotionSelect.value === id) {
            return '../../image/nowQQ.png'
        } else {
            return '../../image/QQ.png'
        }

    }
}

const color: string[] = ['#76A732', '#D45251', '#F5BA4B', '169CCC']

const emotions: Emotion[] = [];
emotions.push(new Emotion(1, "加薪好開心", 0, "2024/09/07"))
emotions.push(new Emotion(1, "jerry買晚餐不幫我帶好生氣", 1, "2024/09/07"))
emotions.push(new Emotion(1, "忘記帶充電線哭哭", 2, "2024/09/07"))
emotions.push(new Emotion(1, "思考晚餐吃甚麼好平靜", 3, "2024/09/07"))
emotions.push(new Emotion(1, "加薪好開心", 0, "2024/09/07"))
emotions.push(new Emotion(1, "加薪好開心", 0, "2024/09/07"))
emotions.push(new Emotion(1, "加薪好開心", 0, "2024/09/07"))
emotions.push(new Emotion(1, "加薪好開心", 0, "2024/09/07"))
</script>

<style scoped></style>