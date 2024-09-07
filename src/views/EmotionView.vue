<template>
    <div class="flex flex-col content-center flex-wrap mt-4 gap-4">

        <div>
            <div class="header flex flex-row justify-between">

                <span class="font-semibold text-lg flex">
                    <PhPerson :size="32" color="#2d2020" />情緒共享
                </span>
                <span class="text-lg">更多></span>
            </div>

            <div class="card flex flex-col h-64 w-80 rounded-lg shadow-xl p-5 gap-2">
                <div v-for="item in emotions" class="flex gap-3">
                    <span>
                        <PhHeartBreak :size="32" :color='color[item.category]' />
                    </span>
                    <span :style="{ color: color[item.category] }">{{ item.title }}</span>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import Emotion from "../modal/emotion";

const color: string[] = ['#76A732', '#D45251', '#F5BA4B', '169CCC']

const emotions: Emotion[] = [];
emotions.push(new Emotion(1, "加薪好開心", 0, "2024/09/07"))
emotions.push(new Emotion(1, "jerry買晚餐不幫我帶好生氣", 1, "2024/09/07"))
emotions.push(new Emotion(1, "忘記帶充電線哭哭", 2, "2024/09/07"))
emotions.push(new Emotion(1, "思考晚餐吃甚麼好平靜", 3, "2024/09/07"))
</script>

<style scoped></style>