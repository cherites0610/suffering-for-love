<template>
    <div>
        <div class=" mx-5 my-3">
            <span> 選擇時段 :</span>
        </div>
        
        <div class="header flex flex-row gap-5 mx-5 my-3">
            <div>
                <input class=" focus:border-color600 focus:outline-none" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                <div class="grid grid-cols-2">
                    <input class="my-2  focus:border-color600 focus:outline-none" type="time" id="appt" name="appt" min="09:00" max="18:00" step="30" required />           
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
</template>

<script setup lang="ts">
import Clinic from '@/modal/clinic';
import requests from '../axios/index'
import { ref } from 'vue';
import router from '@/router';
const clinics = ref<Clinic[]>([]);

const getAllInf = async () => {
    const req = await requests.get('http://192.168.88.180:5000/getAllOLInf')
    clinics.value = []

    for (const item of req.data.result.results) {
        clinics.value.push(
            new Clinic(item._id, item.address, item.name, item.phone)
        )
    }
}

const clickClinics = (_id:number) => {
    router.push("/OLF/"+_id)
}
</script>

<style scoped></style>