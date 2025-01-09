<script setup>
import NeoVis from 'neovis.js';
import { ref, onMounted, watch } from 'vue';

const viz1Ref = ref(null);
const isLoading = ref(true);
const searchQuery = ref('');
const selectedNode = ref(null);
let viz;

const props = defineProps({
  flag: Boolean
})

// 监听flag变化
watch(() => props.flag, () => {
  refreshGraph()
})

onMounted(() => {
  draw();
});

// 刷新函数
function refreshGraph() {
  isLoading.value = true;
  if (viz) {
    viz.clearNetwork();
    draw();
  }
}

// 节点点击处理
function handleNodeClick(node) {
  // isLoading.value = true;
  selectedNode.value = node;
  const statement = `
    MATCH p = (n)-[r]-(m) 
    WHERE id(n)= ${node.nodeId} 
    RETURN p
  `;
  viz.updateWithCypher(statement);
}

// 搜索处理
function handleSearch() {
  if (!searchQuery.value) return;
  
  const cypher = `
    MATCH (n)
    WHERE n.name CONTAINS '${searchQuery.value}'
    WITH n
    MATCH p = (n)-[r]-(m)
    RETURN p LIMIT 100
  `;
  
  viz.renderWithCypher(cypher);
}

// 创建viz知识图谱对象
function draw() {
  // 节点样式配置
  const nodeStyles = {
    Physicist: {
      caption: node => `${node.labels[0]}\n${node.properties.name}`,
      size: 25,
      color: {
        background: '#4CAF50',
        border: '#2E7D32',
        highlight: '#81C784'
      },
      font: {
        size: 16,
        color: '#333333',
        face: 'Arial'
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        size: 10
      }
    },
    // ... 其他节点样式类似更新 ...
  };

  // 关系样式配置 
  const relationshipStyles = {
    生活在: {
      thickness: 2,
      color: '#4CAF50',
      hover_color: '#81C784',
      caption: false,
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.5
        }
      },
      smooth: {
        type: 'continuous',
        roundness: 0.5
      }
    },
    // ... 其他关系样式类似更新 ...
  };

  const config = {
    container_id: 'viz',
    server_url: "neo4j://190.92.241.171:7687",
    server_user: "neo4j", 
    server_password: "123456789hh",
    
    labels: nodeStyles,
    relationships: relationshipStyles,

    // 视图配置
    physics: {
      enabled: true,
      solver: 'forceAtlas2Based',
      forceAtlas2Based: {
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springLength: 100,
        springConstant: 0.08,
        damping: 0.4
      },
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 50
      }
    },

    // 交互配置
    interaction: {
      hover: true,
      navigationButtons: true,
      keyboard: {
        enabled: true,
        speed: {x: 10, y: 10, zoom: 0.1}
      },
      zoomView: true
    },

    initial_cypher: `
      MATCH (n)-[rel]-(m)
      WITH n, rel, m, rand() as random
      ORDER BY random
      LIMIT 80
      RETURN n, rel, m
    `
  };

  viz = new NeoVis(config);
  viz._container = viz1Ref.value;

  viz.registerOnEvent("completed", () => {
    isLoading.value = false;
  });

  viz.registerOnEvent('clickNode', handleNodeClick);
  
  viz.render();
}

// 添加热门关键词数组
const hotKeywords = [
  '爱因斯坦',
  '薛定谔',
  '诺贝尔物理学奖',
  '沃尔夫物理学奖',
  '美国',
  '苏联',
  '天体',
  '气象',
  '牛津大学',
  '高等研究院'
];

// 热门搜索处理函数
function handleHotSearch(keyword) {
  searchQuery.value = keyword;
  handleSearch();
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="flex flex-col gap-4">
      <!-- 热门搜索按钮 -->
      <div class="flex flex-wrap items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm">
        <span class="font-medium text-gray-700 flex items-center">
          热门搜索
          <svg class="w-4 h-4 ml-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        
        <div class="flex flex-wrap gap-2">
          <button
            v-for="keyword in hotKeywords"
            :key="keyword"
            @click="handleHotSearch(keyword)"
            class="group px-5 py-2 text-sm bg-gradient-to-r from-white to-gray-50 hover:from-blue-50 hover:to-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-all duration-300 border border-gray-200/80 hover:border-blue-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
          >
            {{ keyword }}
            <svg class="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-0.5 transition-all duration-200 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 搜索栏 -->
      <div class="flex gap-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索节点..."
          class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="handleSearch"
        />
        <button
          @click="handleSearch"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          搜索
        </button>
        <button
          @click="refreshGraph"
          class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          重置
        </button>
      </div>

      <!-- 图谱容器 -->
      <div class="kg-container relative">
        <div v-if="isLoading" class="loading-overlay">
          <div class="loading-spinner"></div>
          <div class="loading-text">正在加载知识图谱...</div>
        </div>
        
        <div class="kg" id="viz" ref="viz1Ref"></div>

        <!-- 节点详情面板 -->
        <!-- <div v-if="selectedNode" class="node-details">
          <h3 class="text-lg font-bold mb-2">{{ selectedNode.properties.name }}</h3>
          <div class="properties">
            <div v-for="(value, key) in selectedNode.properties" :key="key" class="property">
              <span class="key">{{ key }}:</span>
              <span class="value">{{ value }}</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.kg-container {
  position: relative;
  height: 90vh;
  min-height: 600px;
  border-radius: 12px;
  background: transparent;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.kg {
  height: 100%;
  width: 100%;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: all 0.3s ease;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #1976D2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #1565C0;
  font-weight: 600;
}

.node-details {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 300px;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.property {
  display: flex;
  margin: 0.5rem 0;
}

.key {
  font-weight: 500;
  margin-right: 0.5rem;
  color: #666;
}

.value {
  color: #333;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>