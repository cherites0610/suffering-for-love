<template>
    <div>
        <div class="header flex flex-row gap-5">
            <span>台北市</span>
            <select class="border">
                <option v-for="item in 10" :value="item">{{ item }}</option>
            </select>
            <div class=" bg-cyan-200 rounded-full p-1">
                <PhMagnifyingGlass :size="32" color="#e8e3e3" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import request from "../axios/index"

request.get('https://data.taipei/api/v1/dataset/9267a378-744e-4a46-ac6c-aacc277402b4?scope=resourceAquire');
</script>

<style scoped></style>