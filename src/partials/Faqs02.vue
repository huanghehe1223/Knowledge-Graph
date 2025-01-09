<script setup>
import Accordion from '../partials/Accordion.vue'
import { ref, watch } from 'vue'

const props = defineProps(['REresult'])
const data = ref(props.REresult)

const entities = ref(null)
const relations = ref(null)

watch(() => props.REresult, (newValue) => {
  // data.value = newValue
  if (newValue) {
    entities.value = newValue.entities
    relations.value = newValue.relations
    console.log("状态发生改变，不为空")
    console.log(faqs01.value[0].active)
    // 设置所有折叠面板为展开状态
    faqs01.value[0].active=true
    faqs02.value[0].active=true
  }
  else
{
  entities.value = null
  relations.value = null
  console.log("状态发生改变，为空")
  console.log(faqs01.value[0].active)
  // 设置所有折叠面板为折叠状态
  faqs01.value[0].active=false
  faqs02.value[0].active=false
  }



})



const faqs01 = ref([
  {
    question: '点击查看提取到的实体信息',
    answer: 'Simple is designed to be user-friendly and intuitive...',
    active: false
  }
])

const faqs02 = ref([
  {
    question: '点击查看提取到的关系信息',
    answer: 'Simple is designed to be user-friendly and intuitive...',
    active: false
  }
])

const faqs03 = [
  {
    question: 'How to change my password',
    answer: 'Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better suited for larger organizations and developers.'
  },
  {
    question: 'How to change my email address',
    answer: 'Yes, but you\'ll still pay the remainder of the term for the plan you signed up for.'
  },
  {
    question: 'How to change my username',
    answer: 'Yes, but you\'ll still pay the remainder of the term for the plan you signed up for.'
  },
  {
    question: 'How to change my billing information',
    answer: 'Support is available 24/7 via email, chat, and phone. We\'re here to help you with any questions or concerns you may have.'
  },
  {
    question: 'How to change my notification settings',
    answer: 'Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.'
  }
]
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto space-y-12">
          <!-- Getting started -->
          <div>
            <h2 class="text-xl font-bold mb-5">实体信息</h2>
            <div class="space-y-2">
              <template v-for="(faq, index) in faqs01">
                <Accordion :title="faq.question" :id="`faqs-01-${index}`" :active="faq.active">
                  <div class="section">
                    <h2>实体信息</h2>
                    <div class="card-container">
                      <!-- 实体提示 -->
                      <div v-if="entities === null" class="empty-message">
                        <div class="empty-message-content">
                          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 7V17M16 7V17M7 8H9M15 8H17M7 12H9M15 12H17M7 16H9M15 16H17M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>当前没有提取到实体，请输入文本进行提取</span>
                        </div>
                      </div>

                      <div
                          v-else
                          v-for="entity in entities"
                          :key="entity.content"
                          class="card"
                          :class="entity.type"
                      >
                        <div class="card-type">{{ entity.type }}</div>
                        <div class="card-content">{{ entity.content }}</div>
                      </div>
                    </div>
                  </div>

                </Accordion>
              </template>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-5">关系信息</h2>
            <div class="space-y-2">
              <template v-for="(faq, index) in faqs02">
                <Accordion :title="faq.question" :id="`faqs-02-${index}`" :active="faq.active">
                  <!-- 关系卡片 -->
                  <div class="section">
                    <h2>关系信息</h2>
                    <div class="card-container">
                      <div v-if="relations === null" class="empty-message">
                        <div class="empty-message-content">
                          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17L7 7M7 7H17M7 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>当前没有提取到关系，请输入文本进行提取</span>
                        </div>
                      </div>
                      <div
                          v-else
                          v-for="relation in relations"
                          :key="`${relation.subject}-${relation.object}`"
                          class="relation-card"
                      >
                        <div class="subject">{{ relation.subject }}</div>
                        <div class="relation-type">{{ relation.type }}</div>
                        <div class="object">{{ relation.object }}</div>
                      </div>
                    </div>
                  </div>

                </Accordion>
              </template>
            </div>
          </div>



        </div>
      </div>
    </div>
  </section>
</template>


<style  scoped >
.empty-message {
  grid-column: 1 / -1;
  padding: 2.5rem;
  text-align: center;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 16px;
  box-shadow:
      5px 5px 10px #d9d9d9,
      -5px -5px 10px #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.empty-message:hover {
  transform: translateY(-2px);
  box-shadow:
      8px 8px 15px #d9d9d9,
      -8px -8px 15px #ffffff;
}

.empty-message-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #94a3b8;
  animation: pulse 2s infinite;
}

.empty-message span {
  color: #64748b;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 80%;
  margin: 0 auto;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 添加一些悬停时的微妙颜色变化 */
.empty-message:hover .empty-icon {
  color: #64748b;
}

.empty-message:hover span {
  color: #475569;
}

@media (max-width: 640px) {
  .empty-message {
    padding: 2rem 1.5rem;
  }

  .empty-icon {
    width: 2rem;
    height: 2rem;
  }

  .empty-message span {
    font-size: 0.875rem;
  }
}


.container {
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.card {
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.card-type {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.card-content {
  font-size: 16px;
  font-weight: 500;
}

.relation-card {
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.relation-type {
  color: #666;
  font-size: 14px;
  text-align: center;
}

.subject, .object {
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
  text-align: center;
}

/* 为不同类型的实体设置不同的边框颜色 */
.物理学家 {
  border-left: 4px solid #4CAF50; /* 绿色 - 已给定 */
}

.领域 {
  border-left: 4px solid #2196F3; /* 蓝色 - 已给定 */
}

.奖项 {
  border-left: 4px solid #FFC107; /* 黄色 - 已给定 */
}

.国家 {
  border-left: 4px solid #9C27B0; /* 紫色 */
}

.科研成果 {
  border-left: 4px solid #F44336; /* 红色 */
}

.机构 {
  border-left: 4px solid #795548; /* 棕色 */
}

.学校 {
  border-left: 4px solid #FF5722; /* 深橙色 */
}


</style>