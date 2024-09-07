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
        
        <input class="focus:border-color600 focus:outline-none" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
        <input class="mx-2 focus:border-color600 focus:outline-none" type="time" id="appt" name="appt" min="09:00" max="18:00" step="30" required />
    </div>
    <button class=" h-10 w-24 rounded-md" style="background: #5AB4C5;color: #ffffff !important;">預約</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import requests from '../axios/index'
import Clinic from '@/modal/clinic';


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
</script>

<style scoped></style>