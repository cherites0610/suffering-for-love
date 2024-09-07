<template>
    <div class="mx-5 my-5">
        <div>
            <span class="text-lg">診所名稱 : </span>
            <span>{{ clinic?.name }}</span>
        </div>
        <div class="my-2">
            <span class="text-lg">連絡電話 : </span>
            <span>{{ clinic?.phone }}</span>
        </div>

    </div>
    <span class="m-5">時段選擇 :</span>
    <div class=" mx-5 my-1">

        <input v-model="date" class="focus:border-color600 focus:outline-none" type="date" id="start" name="trip-start"
            value="2018-07-22" min="2018-01-01" max="2018-12-31" />
        <input v-model="time" class="mx-2 focus:border-color600 focus:outline-none" type="time" id="appt" name="appt" min="09:00"
            max="18:00" required />
            {{ time }}
    </div>
    <button @click="modalActive = true" class=" h-10 w-24 rounded-md"
        style="background: #5AB4C5;color: #ffffff !important;">預約</button>

    <!-- The Modal -->
    <Transition>
        <div class="modal fixed z-10 left-0 top-0 h-full w-full overflow-auto shadow-xl"
            style="background-color: rgba(0, 0, 0, 0.4);" v-if="modalActive">
            <div class=" w-full h-full content-center flex-wrap flex justify-center">
                <div class="bg-white p-4 opacity-100 w-80 z-20 rounded-lg"
                    style="background-color: white;opacity: 1 !important;">
                    <div class=" text-xl text-center">預約資訊</div>
                    <div>預約日期:{{ date }}</div>
                    <div>預約時間:{{ time }}</div>
                    <div class="flex space-x-4 text-xl justify-center">
                        <button class=" h-10 w-24 rounded-md" @click="confirm()"
                            style="background: #5AB4C5; color: #ffffff !important;">提交</button>
                        <button class=" h-10 w-24 rounded-md" @click="modalActive = false"
                            style="background: #5AB4C5; color: #ffffff !important;">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import requests from '../axios/index'
import Clinic from '@/modal/clinic';
import router from '@/router';

const modalActive = ref<boolean>(false);

const date = ref<string>();
const time = ref<string>();

const props = defineProps(['id'])
const clinic = ref<Clinic>();

const getAllInf = async () => {
    const req = await requests.get('http://192.168.88.180:5000/getAllIPInf')
    const temp = req.data.result.results.filter((item) => item._id == props.id);
    clinic.value = new Clinic(temp[0]._id, temp[0].address, temp[0].name, temp[0].phone)
}

onMounted(() => {
    getAllInf()
})

const confirm = () => {
    router.push('/')
}
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