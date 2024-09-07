<template>
    <div>
        <div class="header flex flex-row gap-5">
            <span>台北市</span>
            <select v-model="selectPlace" class="border">
                <option v-for="item in place" :value="item">{{ item }}</option>
            </select>
            <div class=" bg-cyan-200 rounded-full p-1">
                <PhMagnifyingGlass @click="getAllInf(selectPlace)" :size="32" color="#e8e3e3" />
            </div>
        </div>
        <br />
        <div>
            <div v-for="item of clinics" class="flex flex-row mx-2">
                <PhCircle :size="12" color="#5ab4c5" weight="fill" class=" my-1" />
                <div class="grid grid-rows-4">
                    <span>{{ item.name }}</span>
                    <span>{{ item.address }}</span>
                </div>

                <PhGreaterThan :size="32" color="#000000" class="ml-auto" />
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import requests from '../axios/index'
import Clinic from '@/modal/clinic';
const selectPlace = ref<string>('北投區');
const place: string[] = ['北投區', '士林區', '中山區', '內湖區', '大同區', '松山區', '萬華區', '中正區', '大安區', '信義區', '南港區', '文山區']
const clinics = ref<Clinic[]>([]);

const getAllInf = async (place: string) => {
    const req = await requests.get('http://192.168.88.180:5000/getAllIPInf')
    const temp = req.data.result.results.filter((item) => new String(item['address']).includes(place))
    clinics.value = []
    console.log(temp);
    
    for (const item of temp) {
        clinics.value.push(
            new Clinic(item._id,item.address,item.name,item.phone)
        )
    }


}
</script>

<style scoped></style>