import 

<template>
    <div class="flex flex-col content-center flex-wrap mt-4 gap-4">
        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg ">諮商必要性</span>
                <span class="text-lg" @click="goToUrl('/About')">更多 ></span>
            </div>
            <div class="card flex flex-row h-48 w-80 rounded-lg shadow-md overflow-hidden my-1">
                <div class="bg-contain h-100 flex-4 rounded-l-lg bg-black basis-1/3">
                    <img src="../../image/347620.jpg"
                    class=" ">
                </div>
                <span class="text-base basis-2/3 ps-3 pe-3 py-3 leading-6" @click="goToUrl('/About')">每個人面臨挑戰時，都有自己不同的步調，當步調跟不上期望的速度時，在生活中遇到的挫折感就會很大。這時候該怎麼穩定步調?該怎麼在困惑的生活中挪出一小片讓自己好好靜靜的空間?</span>
            </div>
        </div>

        <div>
            <div class=" font-semibold text-lg">服務列表</div>
            <div class="card flex flex-row h-24 w-80 rounded-lg shadow-md my-1">
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/IPConsultation')">
                    <PhNotePencil color="#468D9B" :size="32" />
                    <span class=" text-base py-1">實體看診</span>
                </div>
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/OLConsultation')">
                    <PhPhoneTransfer color="#468D9B" :size="32" />
                    <span class="text-base py-1">視訊看診</span>
                </div>
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/emotion')">
                    <PhHeartBreak color="#468D9B" :size="32" />
                    <span class="text-base py-1">心情版</span>
                </div>
                <div class="basis-1/4 flex justify-center items-center flex-col" @click="goToUrl('/QA')">
                    <PhQuestionMark color="#468D9B" :size="32" />
                    <span class="text-base py-1">Q&A</span>
                </div>
            </div>
        </div>

        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg">更多消息</span>
            </div>

            <div class="card flex flex-col h-52 w-80 rounded-lg shadow-md overflow-auto p-5 my-1">
                <div class="flex justify-between mb-5" v-for="item in news" @click="goToUrl(item.url)">
                    <span class=" text-base">{{ item.title }}</span>
                    <span class=" text-base">{{ item.date }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import requests from '../axios/index'
import News from "../modal/news"

const news = ref<News[]>([]);


const getAllInf = async () => {
    const res = await requests.get('http://192.168.230.130:5000/getAll');
    for (let i = 0; i < res.data.length; i++) {
        const tempNew = res.data[i]
        news.value.push(new News(tempNew['_id'],tempNew['title'],tempNew['url'],tempNew['date']))
    }
    
}
getAllInf();


const goToUrl = (url: string) => {
    window.location.href = url; // 導航到指定的URL
}
</script>

<style scoped></style>