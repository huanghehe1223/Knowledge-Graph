<script setup>
import PageIllustration from "./PageIllustration.vue"
import { ref } from 'vue'

const props = defineProps({
  flag: Boolean
})

const emit = defineEmits(['update:flag'])
const loading = ref(false)

const handleShare = async () => {
  loading.value = true
  emit('update:flag', !props.flag)
  setTimeout(() => {
    loading.value = false
  }, 800)
}
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl mx-auto pt-24 pb-10 md:pt-32 md:pb-16">
        <div class="text-center pb-8">
          <div class="mb-12 relative">
            <div class="mb-4">
              <span class="text-sm tracking-wider text-gray-400 uppercase">Physics Knowledge Network</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold relative inline-block">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                物理学家知识图谱
              </span>
              <div class="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>
            </h1>
          </div>
          
          <div class="max-w-2xl mx-auto space-y-6">
            <p class="text-base text-gray-600">
              探索物理学巨匠们的学术足迹。本系统全面展现了物理学家们的科研成果、研究领域、重要获奖、
              求学与工作经历等关键信息，构建了一幅完整的物理学发展图景。
            </p>
            <div class="text-sm text-gray-500 space-y-2">
              <p>
                ⚡ 科研成果：重要理论突破与实验发现
              </p>
              <p>
                🎯 研究领域：主要研究方向与学术贡献
              </p>
              <p>
                🏆 获奖情况：诺贝尔奖等重要学术荣誉
              </p>
              <p>
                🌏 地理足迹：求学、工作的国家与机构
              </p>
              <p>
                🎓 学术历程：教育背景与研究生涯
              </p>
            </div>
            
            <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p class="text-sm text-gray-600">
                <span class="font-medium text-indigo-600">使用说明：</span>
                系统会随机展示数据库中的100组关联数据(包含节点与节点之间的关系)。
              </p>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                  点击任意一个节点
                </span>
                ，系统将为您展示与该节点相关的所有连接节点及其关系。
              </p>
              <p class="text-sm text-gray-600 mt-2">
                <span class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                  支持拖拽和滚轮放缩
                </span>
                操作来自由探索关系网络。
              </p>
            </div>
            
            <div class="flex justify-center pt-6">
              <button
                class="relative px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-medium 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                       disabled:opacity-70 disabled:cursor-not-allowed
                       group overflow-hidden"
                @click="handleShare"
                :disabled="loading"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span class="relative flex items-center space-x-2">
                  <svg v-if="loading" class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  <span>{{ loading ? '数据加载中...' : '开始探索物理学家网络' }}</span>
                  <svg v-if="!loading" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
