<template>
    <div>
        {{ props.id }}
        {{ clinic }}
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import requests from '../axios/index'
import Clinic from '@/modal/clinic';


const props = defineProps(['id'])
const clinic = ref<Clinic>();


const getAllInf = async () => {
    const req = await requests.get('http://192.168.88.180:5000/getAllIPInf')
    const temp = req.data.result.results.filter((item) => item._id === props.id);

    clinic.value = new Clinic(temp[0]._id, temp[0].address, temp[0].name, temp[0].phone)
}

onMounted(async () => {
    console.log();
    
}),
</script>

<style scoped></style>