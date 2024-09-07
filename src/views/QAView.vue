<template>
    <div class="flex flex-col mt-2">
        <div :key="item._id" class="gap-5 p-4" @click="toggle(item._id)" v-for="item in QAs">
            <div class="flex justify-between">
                <span class="text-lg font-semibold">Q: {{ item.question }}</span>
                <span>
                    <PhPlus v-if="!getIsActive(item._id)" :size="32" color="#2d2020" />
                    <PhMinus v-if="getIsActive(item._id)" :size="32" color="#2d2020" />
                </span>
            </div>
            <Transition>
                <div v-if="getIsActive(item._id)">
                    <span>A: {{ item.answer }}</span>
                </div>
            </Transition>

        </div>
    </div>
</template>

<script setup lang="ts">
import QA from '@/modal/qa';
import { ref } from 'vue';

const openItems = ref<number[]>([]);

const toggle = (id: number) => {
    if (openItems.value.includes(id)) {
        openItems.value.splice(openItems.value.indexOf(id), 1)
    } else {
        openItems.value.push(id);
    }
}

const getIsActive = (id: number): boolean => {
    if (openItems.value.includes(id)) {
        return true;
    } else {
        return false;
    }
}

const QAs: QA[] = [];
QAs.push(new QA(0, "羽毛漂亮嗎", "漂亮啊"))
QAs.push(new QA(1, "羽毛宿營明叫怎麼", "鵝毛"))
QAs.push(new QA(2, "誰踩到狗屎", "不知道"))

</script>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>