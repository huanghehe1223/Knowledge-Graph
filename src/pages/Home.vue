<script setup>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Hero Section -->
      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Hero content -->
            <div class="text-center">
              <div class="mb-12 relative">
                <h1 class="text-5xl md:text-6xl font-bold mb-8">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                    物理学家知识图谱系统
                  </span>
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  探索物理学巨匠们的学术足迹,发现知识的无限连接
                </p>
                <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <router-link to="/customers" class="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:mr-4">
                    开始探索知识图谱
                  </router-link>
                  <router-link to="/support" class="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto">
                    体验实体关系提取
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="relative bg-gray-50 py-12 md:py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2 mb-4">系统核心功能</h2>
            <p class="text-xl text-gray-600">提供知识图谱可视化与实体关系提取两大核心功能</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 md:gap-12">
            <!-- Feature 1 -->
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100">
                <svg class="w-8 h-8 text-indigo-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 28C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
                </svg>
              </div>
              <h4 class="h4 mb-2">知识图谱可视化</h4>
              <p class="text-gray-600 text-center">
                - 展示物理学家之间的关联网络<br>
                - 支持节点拖拽和缩放操作<br>
                - 点击节点查看详细信息<br>
                - 支持关键词搜索定位
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100">
                <svg class="w-8 h-8 text-indigo-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" d="M31 16l-7-7v4H8V3l-7 7 7 7v-4h16v10l7-7z"/>
                </svg>
              </div>
              <h4 class="h4 mb-2">实体关系提取</h4>
              <p class="text-gray-600 text-center">
                - 自动识别文本中的实体信息<br>
                - 提取实体之间的关系<br>
                - 支持多种实体类型识别<br>
                - 实时展示提取结果
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Features -->
      <section class="relative py-12 md:py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2 mb-4">技术特色</h2>
            <p class="text-xl text-gray-600">采用先进的技术栈,提供流畅的用户体验</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Tech 1 -->
            <div class="flex flex-col items-center p-4">
              <div class="w-16 h-16 mb-4">
                <svg class="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M3 12H8M16 12H21" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h4 class="h4 mb-2">Neo4j图数据库</h4>
              <p class="text-gray-600 text-center">
                采用Neo4j存储知识图谱数据,支持高效的图查询
              </p>
            </div>

            <!-- Tech 2 -->
            <div class="flex flex-col items-center p-4">
              <div class="w-16 h-16 mb-4">
                <svg class="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H15M3 9V15M21 9V15M9 21H15" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h4 class="h4 mb-2">Vue 3 + Vite</h4>
              <p class="text-gray-600 text-center">
                使用Vue 3构建响应式界面,Vite提供快速的开发体验
              </p>
            </div>

            <!-- Tech 3 -->
            <div class="flex flex-col items-center p-4">
              <div class="w-16 h-16 mb-4">
                <svg class="w-16 h-16 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h4 class="h4 mb-2">FastAPI后端</h4>
              <p class="text-gray-600 text-center">
                FastAPI提供高性能的后端服务,支持异步处理
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="relative bg-gray-50 py-12 md:py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2 mb-4">使用流程</h2>
            <p class="text-xl text-gray-600">简单三步,开启知识探索之旅</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Step 1 -->
            <div class="relative flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h4 class="h4 mb-2">选择功能</h4>
              <p class="text-gray-600 text-center">
                选择知识图谱展示或实体关系提取功能
              </p>
            </div>

            <!-- Step 2 -->
            <div class="relative flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h4 class="h4 mb-2">输入/交互</h4>
              <p class="text-gray-600 text-center">
                输入文本或与知识图谱进行交互
              </p>
            </div>

            <!-- Step 3 -->
            <div class="relative flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h4 class="h4 mb-2">查看结果</h4>
              <p class="text-gray-600 text-center">
                实时查看分析结果和可视化效果
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="relative py-12 md:py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden">
            <div class="relative flex flex-col lg:flex-row justify-between items-center">
              <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 class="text-2xl font-bold text-white mb-2">准备好开始了吗?</h3>
                <p class="text-blue-200">立即体验知识图谱系统的强大功能</p>
              </div>
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <router-link to="/customers" class="btn text-blue-600 bg-white hover:bg-blue-50 shadow">
                  开始探索
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
