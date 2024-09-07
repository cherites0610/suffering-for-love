<template>
    <div class="flex flex-col content-center flex-wrap mt-4 gap-4">
        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg">誰可以做諮商?</span>
                <span class="text-lg">更多></span>
            </div>
            <div class="card flex flex-row h-52 w-80 rounded-lg shadow-xl">
                <div class="img h-100 flex-4 rounded-l-lg bg-black basis-1/3">
                    123
                </div>
                <span class="text-base basis-2/3">文字簡述</span>
            </div>
        </div>

        <div>
            <div class=" font-semibold text-lg">服務列表</div>
            <div class="card flex flex-row h-24 w-80 rounded-lg shadow-xl">
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/IPConsultation')">
                    <PhNotePencil color="#468D9B" :size="32" />
                    <span class="text-base">實體看診</span>
                </div>
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/OLConsultation')">
                    <PhPhoneTransfer color="#468D9B" :size="32" />
                    <span class="text-base">視訊看診</span>
                </div>
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/emotion')">
                    <PhHeartBreak color="#468D9B" :size="32" />
                    <span class="text-base">心情版</span>
                </div>
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/QA')">
                    <PhQuestionMark color="#468D9B" :size="32" />
                    <span class="text-base">Q&A</span>
                </div>
            </div>
        </div>

        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg">更多消息</span>
                <span class="text-lg">更多></span>
            </div>

            <div class="card flex flex-col h-52 w-80 rounded-lg shadow-xl overflow-hidden p-5">
                <div class="flex justify-between mb-5" v-for="item in news" @click="goToUrl(item.url)">
                    <span class=" text-base">{{ item.title }}</span>
                    <span class=" text-base">{{ item.date }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import News from "../modal/news"

const news: News[] = [];
for (let i = 0; i < 10; i++) {
    news.push(new News(i, "我也不知道標題是啥" + i, "http://localhost:5173/", "24/05/14"))
}

const goToUrl = (url: string) => {
    window.location.href = url; // 導航到指定的URL
}
</script>

<style scoped></style>