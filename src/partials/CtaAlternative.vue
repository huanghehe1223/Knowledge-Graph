<script setup>
// 不需要props,直接写死文案更合适
</script>

<template>
  <section class="relative">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full -z-10" aria-hidden="true">
      <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 opacity-20 blur-[160px]">
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center border-t [border-image:linear-gradient(to_right,transparent,theme(colors.purple.500/.25),transparent)1]">
        <div class="py-12 md:py-20">
          <!-- 主标题 -->
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              探索物理学的无限可能
            </span>
          </h2>

          <!-- 描述文本 -->
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            加入我们的物理学知识探索之旅,发现更多物理学家们的精彩故事与重要贡献。
            让我们一起在浩瀚的物理知识海洋中探寻真理的光芒。
          </p>

          <!-- 按钮区域 -->
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-x-4">
            <a 
              href="https://github.com/your-repo" 
              target="_blank"
              class="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-medium 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                     group"
            >
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                <span>在 GitHub 上查看项目</span>
                <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </a>

            <a 
              href="#" 
              class="inline-flex items-center px-8 py-3 rounded-lg border-2 border-purple-500 text-purple-600 font-medium
                     transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50
                     group"
            >
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>查看API文档</span>
                <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>