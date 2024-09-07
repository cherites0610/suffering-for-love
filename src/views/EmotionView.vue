<template>
    <div class="flex flex-col content-center flex-wrap mt-4 gap-4">
        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg flex">
                    <PhPersonArmsSpread :size="28" />
                    <div class=" mx-2 py-1">
                        情緒共享
                    </div>
                </span>
            </div>

            <div class="card flex flex-col h-64 w-80 rounded-lg shadow-md p-5 gap-2 overflow-hidden">
                <div v-for="item in emotions" class="flex gap-3 my-1">
                    <span>
                        <img class="h-6" :src="getImgUrl(item.category+1,5)">
                    </span>
                    <span :style="{ color: color[item.category] }">{{ item.title }}</span>
                </div>
            </div>
        </div>

        <div>
            <div class="header flex flex-row justify-between">
                <span class="font-semibold text-lg flex">
                    <PhUserCircle :size="28" color="#2d2020" />
                    <div class=" mx-2 py-1">
                        情緒獨享
                    </div>
                </span>
            </div>
            <div class="card flex flex-col max-h-64 w-80 rounded-lg shadow-md p-5 gap-2 overflow-hidden">
                <div v-for="item in emotions" class="flex gap-3 my-1">
                    <span>
                        <img class="h-6" :src="getImgUrl(item.category+1,5)">
                    </span>
                    <span :style="{ color: color[item.category] }">{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="absolute bottom-3 right-5 rounded-full p-2 shadow-md" style="background-color: #5AB4C5;"
        @click="modalActive = (!modalActive)">
        <PhPlus :size="40" color=white  />
    </div>

    <!-- The Modal -->
    <Transition>
        <div class="modal fixed z-10 left-0 top-0 h-full w-full overflow-auto shadow-xl" style="background-color: rgba(0, 0, 0, 0.4);"
            v-if="modalActive">
            <div class=" w-full h-full content-center flex-wrap flex justify-center" >
                <div class="bg-white p-4 opacity-100 w-80 z-20 rounded-lg" style="background-color: white;opacity: 1 !important;">
                    <div class="flex space-x-4 text-xl justify-center">
                        <div class=" flex-ju">
                            增加心情
                        </div>

                        <PhX @click="modalActive = (!modalActive)" :size="32" color="#2d2020"
                            class="absolute right-12" />
                    </div>
                    <div class=" my-1">
                        <span class="text-lg ">今日心情:</span>
                        <div class="  gap-3 justify-between p-6 w-full flex">
                            <img @click="emotionSelect = 1" class="h-9" :src="getImgUrl(1,emotionSelect)">
                            <img @click="emotionSelect = 2" class="h-9" :src="getImgUrl(2,emotionSelect)">
                            <img @click="emotionSelect = 3" class="h-9" :src="getImgUrl(3,emotionSelect)">
                            <img @click="emotionSelect = 4" class="h-9" :src="getImgUrl(4,emotionSelect)">
                        </div>

                    </div>

                    <div class="flex flex-col">
                        <span class="text-lg">留言:</span>
                        <textarea v-model="say" class="h-24 my-2 border  focus:border-color600 focus:outline-none" style="border-radius:10px"></textarea>
                    </div>

                    <div class="flex flex-col my-3">
                        <span class="text-lg">狀態:</span>
                        <div class="flex my-2">
                            <div class="mx-3">
                                <input v-model="isPublic" type="radio" id="huey" name="drone" value=true checked />
                                <label for="huey" class="mx-2">公開</label>
                            </div>
                            <div>
                                <input v-model="isPublic" type="radio" id="huey" name="drone" value=false checked />
                                <label for="huey" class="mx-2">不公開</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button @click="confirm()" class=" h-10 w-24 rounded-md" style="background: #5AB4C5; color: #ffffff !important;">提交</button>
                    </div>
                    
                </div>


            </div>
            <!-- Modal content -->


        </div>
    </Transition>

</template>

<script setup lang="ts">
import { ref } from "vue";
import Emotion from "../modal/emotion";

const emotionSelect = ref<number>(0);
const modalActive = ref<boolean>(false);
const say = ref<string>("");
const isPublic = ref<boolean>(false)

const confirm = () => {
    if(emotionSelect.value!=0 && say.value.length!=0){
        modalActive.value=false;
        say.value=""
        emotionSelect.value=0;
    }
} 

const getImgUrl = (id: number,emotionSelect:number): string => {
    if (id === 1) {
        if (emotionSelect === id) {
            return '../../image/nowHappy.png'
        } else {
            return '../../image/happy.png'
        }

    } else if (id === 2) {
        if (emotionSelect === id) {
            return '../../image/nowAngry.png'
        } else {
            return '../../image/angry.png'
        }

    } else if (id === 3) {
        if (emotionSelect === id) {
            return '../../image/nowQQ.png'
        } else {
            return '../../image/QQ.png'
        }

    } else {
        if (emotionSelect === id) {
            return '../../image/nowQuite.png'
            
        } else {
            return '../../image/quite.png'
            
        }

    }
}

const color: string[] = ['#76A732', '#D45251', '#169CCC', '#F5BA4B']

const emotions: Emotion[] = [];
emotions.push(new Emotion(0, "加薪好開心", 0, "2024/09/07"))
emotions.push(new Emotion(1, "jerry買晚餐不幫我帶好生氣", 1, "2024/09/07"))
emotions.push(new Emotion(2, "忘記帶充電線哭哭", 2, "2024/09/07"))
emotions.push(new Emotion(3, "思考晚餐吃甚麼好平靜", 3, "2024/09/07"))
emotions.push(new Emotion(2, "思考晚餐不幫我帶", 2, "2024/09/07"))

</script>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>