<template>
    <div>
        <div class="header flex flex-row gap-5 mx-5 my-3">
            <span class=" text-lg my-2">區域</span>
            <span class="text-lg my-2">台北市</span>
            <select v-model="selectPlace" class="border focus:border-color600 focus:outline-none"
                style="background-color: transparent; border-radius: 8px;">
                <option v-for="item in place" :value="item">{{ item }}</option>
            </select>



            <div class=" bg-cyan-200 rounded-full p-1">
                <PhMagnifyingGlass @click="getAllInf(selectPlace)" :size="28" color="#5ab4c5" weight="duotone" />
            </div>
        </div>

        <div style="height: 0.5px; background-color: #000; margin-top: 5px;"></div>

        <br />
        <div>
            <div v-for="item of clinics" @click="clickClinics(item._id)" class="flex flex-row mx-4">
                <PhCircle :size="12" color="#5ab4c5" weight="fill" class=" my-2" />
                <div class="grid grid-rows-4 mx-3">
                    <span>{{ item.name }}</span>
                    <span style="color: #ADB8BE;">{{ item.address }}</span>
                </div>

                <PhGreaterThan :size="25" color="#000000" class="ml-auto my-2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import requests from '../axios/index'
import Clinic from '@/modal/clinic';
import router from '@/router';
const selectPlace = ref<string>('北投區');
const place: string[] = ['北投區', '士林區', '中山區', '內湖區', '大同區', '松山區', '萬華區', '中正區', '大安區', '信義區', '南港區', '文山區']
const clinics = ref<Clinic[]>([]);

const clickClinics = (_id: number) => {
    router.push("/IPF/" + _id)
}

const getAllInf = async (place: string) => {
    const req = await requests.get('http://192.168.88.182:5000/getAllIPInf')
    const temp = req.data.result.results.filter((item) => new String(item['address']).includes(place))
    clinics.value = []

    for (const item of temp) {
        if (!item.name.includes("治療所")) {
            clinics.value.push(
                new Clinic(item._id, item.address, item.name, item.phone)
            )
        }

    }


}
</script>

<style scoped></style>