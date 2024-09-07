<template>
    <div>
        <div class="header flex flex-row gap-5 m-5">
            <div>
                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                <input type="time" id="appt" name="appt" min="09:00" max="18:00" step="30" required />
            </div>
            <div class=" bg-cyan-200 rounded-full p-1">
                <PhMagnifyingGlass @click="getAllInf()" :size="32" color="#5AB4C5" />
            </div>
        </div>
        <br />
        <div>
            <div v-for="item of clinics" @click="clickClinics(item._id)" class="flex flex-row mx-2">
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
import Clinic from '@/modal/clinic';
import requests from '../axios/index'
import { ref } from 'vue';
const clinics = ref<Clinic[]>([]);

const getAllInf = async () => {
    const req = await requests.get('http://127.0.0.1:5000/getAllOLInf')
    clinics.value = []

    for (const item of req.data.result.results) {
        clinics.value.push(
            new Clinic(item._id, item.address, item.name, item.phone)
        )
    }
}
</script>

<style scoped></style>