<template>
    <div class="flex flex-col mt-2">
        <div :key="item._id" class="gap-5 p-4 px-6 mt-3" @click="toggle(item._id)" v-for="item in QAs">
            <div class="flex justify-between">
                <span  class="text-lg font-semibold ">Q : {{ item.question }}</span>
                <span>
                    <PhPlus  v-if="!getIsActive(item._id)" :size="25" color="#2d2020" />
                    <PhMinus v-if="getIsActive(item._id)" :size="25" color="#2d2020" />
                </span>
            </div>
            <Transition>
                <div class="flex flex-row m-7" v-if="getIsActive(item._id)">
                    <span>A</span>
                    <span class="mx-2">:</span>
                    <span>{{ item.answer }}</span>
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
QAs.push(new QA(0, "為甚麼要預約？", "一是保障心理師的個人需求，避免心理師因無法照顧自己需求而難維持給案主好品質的服務，二是提供當事人一個空間去涵容自己的狀態。心理師通常都是預約時間到來，很少整天在所內駐點，因此一旦約定好時間，來談者請準時到來，心理師已預留時間，也無法安排其他來談者，若有臨時更動須提早告知更改。"))
QAs.push(new QA(1, "第一次心理諮商會是什麼樣的體驗？", "第一次諮商通常是一個讓心理師了解情況的過程，會被問到一些背景資料、當前的困擾以及希望從諮商中獲得什麼。第一次諮商的目標是建立信任關係，讓心理師了解，並為後續諮商設定方向。"))
QAs.push(new QA(2, "心理諮商和心理治療有什麼不同？", "心理諮商通常針對短期問題或特定生活困境，並側重在問題解決和情緒管理。心理治療則往往是較長期的，並深入探討潛在心理問題如創傷或人格發展，以進行較深入的情感處理。"))
QAs.push(new QA(3, "諮商是否適合所有人？","心理諮商適合所有希望改善心理健康、處理壓力或情感困擾的人。即使沒有重大心理問題，諮商仍可以幫助我們更好地理解自己和應對生活挑戰。"))
QAs.push(new QA(4, "進行心理諮商需要多長時間才能見效？","每個人不同，但通常在幾次諮商後您會開始看到一些變化。心理諮商是一個漸進的過程，效果取決於問題的複雜程度以及您在諮商中的參與程度。"))
QAs.push(new QA(5, "心理師會在諮商中給我建議嗎？","心理師主要的角色是引導您去理解和處理自己的問題，而非直接給予建議。他們會幫助我們探索不同的視角，並透過提問和回饋，讓自己找到合適的解決方案。"))
QAs.push(new QA(6," 如果我不喜歡我的心理師該怎麼辦？"," 建立信任的關係對諮商成功非常重要。如果感覺與心理師不合，可以嘗試與心理師討論自己的感受，或尋找另一位心理師。這是非常常見的，心理師會理解並尊重任何選擇。"))
QAs.push(new QA(7, "諮商中的所有內容都保密嗎？","心理諮商是基於保密原則進行的，除了特殊情況（如處於危險中），心理師不會將分享的內容透露給他人。這是法律規定的倫理標準。"))
QAs.push(new QA(8, "諮商是否可以線上進行？","是的，許多心理諮商師提供線上視訊諮商，特別是在行動不便或地理距離的情況下。線上諮商同樣遵循保密規範，並且與面對面的效果相當。"))
QAs.push(new QA(9, "心理諮商是否只針對有心理疾病的人？","不一定。心理諮商適合處理各種情緒困擾和生活挑戰，不僅僅是針對心理疾病。壓力、焦慮、關係問題等都可以透過心理諮商得到幫助。"))
QAs.push(new QA(10,"諮商會讓我感覺好起來嗎？","諮商不會立即解決所有問題，但可以幫助我們更好地理解自己，學習有效的應對策略，並逐漸改善情緒和心理狀態。持續的參與和努力是達到效果的關鍵。"))

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