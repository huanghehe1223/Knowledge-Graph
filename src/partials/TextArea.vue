<script setup>
import {ref, onMounted, nextTick, watch} from 'vue'
import ModalSearch from './ModalSearch.vue'
import PageIllustration from "./PageIllustration.vue"
import axios from "axios";
import { ElMessage } from 'element-plus';

const searchModalOpen = ref(false)
const textareaRef = ref(null)
const content = ref('')

const props = defineProps(['REresult'])
const emit = defineEmits(['update:REresult'])

const formData = ref({
  text: '',
  // model: 'gpt-4o'
})
const result = ref(null)

// 添加新的响应式状态
const loading = ref(false)
const loadingText = ref('')

// 当内部的REresult变化时,触发更新事件
watch(() => props.REresult, (newValue) => {
  emit('update:REresult', newValue)
})



const autoResize = async () => {
  await nextTick()
  const textarea = textareaRef.value
  if (textarea) {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }
}

watch(content, async () => {
  await autoResize()
})
const fetchPhysicistText = async () => {
  try {
    loading.value = true
    loadingText.value = '正在爬取示例文本... 预计花费25s'
    const response = await axios.get('http://localhost:8000/getPhysicistText');
    content.value = response.data;
    ElMessage({
      message: '数据获取成功',
      type: 'success',
      showClose: true,
      duration:  5000,
    });
  } catch (error) {
    ElMessage({
      message: '数据获取失败',
      type: 'error',
      showClose: true,
      duration:  5000,
    });
    console.error('获取数据失败:', error);
  }finally {
    loading.value = false
    loadingText.value = ''
  }
};



const handleSubmit = async () => {
  emit('update:REresult', null)
  console.log('Submitted message:', content.value)
  if (content.value.trim() === '') {
    ElMessage({
      message: '请输入内容',
      type: 'warning',
    });
    return
  }
  loading.value = true
  loadingText.value = '正在提取实体和关系... 预计花费35s'

  formData.value.text = content.value
  try {
    const response = await axios.post('http://localhost:8000/extract', formData.value)
    result.value = response.data
    console.log('提取结果:', result.value)
    // 检查提取结果是否为空
    if (result.value.entities.length === 0 && result.value.relations.length === 0) {
      ElMessage({
        message: '未能提取到任何实体或关系,请检查输入内容是否合适',
        type: 'warning',
        showClose: true,
        duration: 7000,
      });
      return
    }

    ElMessage({
      message: '提取成功',
      type: 'success',
    });
    emit('update:REresult', result.value)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 429) {
        ElMessage({
          message: "未能提取到任何实体或关系,请检查输入内容是否合适",
          type: 'warning',
          showClose: true,
          duration: 7000,
        });
        return
      }

      // ElMessage.error(error.response?.data?.detail || '提取失败')
      ElMessage({
        dangerouslyUseHTMLString: true,
        message: `
    <div style="
      display: flex;
      align-items: center;
      padding: 5px;
      min-width: 280px;
      /*animation: shake 0.5s ease-in-out;*/
    ">
      <i class="el-icon-error" style="
        font-size: 20px;
        color: #f56c6c;
        margin-right: 12px;
      "></i>
      <div>
        <strong style="
          display: block;
          margin-bottom: 6px;
          font-size: 16px;
          color: #f56c6c;
          line-height: 1.4;
        ">
          ${error.response?.data?.detail || '提取失败'}
        </strong>
        <span style="
          font-size: 13px;
          color: #909399;
          line-height: 1.4;
        ">
          后端服务器出现未知错误，请联系作者或者管理员
        </span>
      </div>
    </div>
  `,
        type: 'error',
        showClose: true,
        duration: 5000,
        customClass: 'custom-error-message'
      });

// 添加CSS动画
      const style = document.createElement('style');
      style.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}`;
      document.head.appendChild(style);
    } else {
      ElMessage({
        message: '发生未知错误',
        showClose: true,
        type: 'error',
      });
    }
    console.error('提取失败:', error)
  } finally {
    loading.value = false
    loadingText.value = ''
    console.log('提取结束')
  }


  // emit('update:REresult', content.value)
}

onMounted(() => {
  autoResize()
})
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="text-center pb-10">
          <h1
              class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
            How can we help?</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700 mb-8">Need support or have a question about Simple? We're here to help.</p>
          </div>
        </div>

        <!-- Chat input area -->
        <div class="w-full max-w-2xl mx-auto">
          <div class="relative">
            <textarea
                ref="textareaRef"
                v-model="content"
                rows="3"
                placeholder="Type your message here..."
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200/50
                     outline-none transition-all duration-200
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                     hover:border-gray-300
                     text-gray-700
                     resize-none scrollbar-hide"
                @input="autoResize"
            ></textarea>
            <!-- 添加遮罩层 -->
            <div v-if="loading"
                 class="absolute inset-0 bg-white/80 flex items-center justify-center rounded-lg">
              <div class="flex flex-col items-center">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
                <span class="text-gray-600">{{ loadingText }}</span>
              </div>
            </div>

            <div class="absolute bottom-2 right-2 text-sm text-gray-500">
              {{ content.length }} characters
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <button
                @click="fetchPhysicistText"
                :disabled="loading"
                class="px-6 py-2 bg-blue-500 text-white rounded-lg
               hover:bg-blue-600 transition-colors duration-200
               focus:outline-none focus:ring-2 focus:ring-blue-300
              disabled:opacity-50 disabled:cursor-not-allowed">
              获得示例文本
            </button>

            <button
                @click="handleSubmit"
                :disabled="loading"
                class="px-6 py-2 bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-300
                     disabled:opacity-50 disabled:cursor-not-allowed">
              实体关系提取
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style  scoped>
textarea {
  min-height: 100px;
  transition: height 0.2s ease;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* 添加禁用状态的样式 */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}



</style>