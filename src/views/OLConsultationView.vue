<template>
    <div>
        <div class=" mx-5 my-3">
            <span> 選擇時段 :</span>
        </div>
        
        <div class="header flex flex-row gap-5 mx-5 my-3">
            <div>
                <input class=" focus:border-color600 focus:outline-none" v-model="date" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01"
                    max="2018-12-31" />
                <div class="grid grid-cols-2">
                    <input class="my-2  focus:border-color600 focus:outline-none" v-model="time" type="time" id="appt" name="appt" min="09:00" max="18:00" step="30" required />           
                    <PhMagnifyingGlass class="mx-3 my-1" @click="getAllInf()" :size="28" color="#5ab4c5" weight="duotone" />           
                </div>
            </div>
           
        </div>
        
        <div>
            <div style="height: 0.5px; background-color: #000; margin-top: 5px;"></div>
            <br/>
            <div v-for="item of clinics" @click="clickClinics(item._id)" class="flex flex-row mx-4">
                <PhCircle :size="12" color="#5ab4c5" weight="fill" class=" my-2" />
                <div class="grid grid-rows-4 mx-3">
                    <span>{{ item.name }}</span>
                    <span style="color: #ADB8BE;">{{ item.phone }}</span>
                </div>

                <PhGreaterThan :size="25" color="#000000" class="ml-auto my-2" />
            </div>












        </div>
    </div>

    <Transition>
        <div class="modal fixed z-10 left-0 top-0 h-full w-full overflow-auto shadow-xl"
            style="background-color: rgba(0, 0, 0, 0.4);" v-if="modalActive">
            <div class=" w-full h-full content-center flex-wrap flex justify-center">
                <div class="bg-white p-4 opacity-100 w-80 z-20 rounded-lg"
                    style="background-color: white;opacity: 1 !important;">
                    <div class=" text-xl text-center">預約資訊</div>
                    <div>預約日期:{{ date }}</div>
                    <div>預約時間:{{ time }}</div>
                    <div>
                        以下為設備檢查
                        <br />
                        O麥克風
                        <br />
                        O音響
                        <br />
                        O鏡頭
                        <br />
                        O確保可以拍到臉部及上半身
                        <br />
                        提醒:請於預約時間前十分鐘進入teams會議
                    </div>
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
import Clinic from '@/modal/clinic';
import requests from '../axios/index'
import { ref } from 'vue';
import router from '@/router';
const clinics = ref<Clinic[]>([]);

const modalActive = ref<boolean>(false);

const date = ref<string>();
const time = ref<string>();

const getAllInf = async () => {
    const req = await requests.get('http://192.168.88.180:5000/getAllOLInf')
    clinics.value = []

    for (const item of req.data.result.results) {
        clinics.value.push(
            new Clinic(item._id, item.address, item.name, item.phone)
        )
    }
}

const clickClinics = (_id: number) => {
    modalActive.value = true;
}

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