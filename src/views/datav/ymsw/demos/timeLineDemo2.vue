<template>
  <div class="vueTreeContainer">
    <vue-tree
      style="width: 100%; height: 100%; border: 1px solid gray"
      :dataset="vehicules"
      :config="treeConfig"
      direction="horizontal"
      linkStyle="straight"
    >
      <template v-slot:node="{ node, collapsed }">
        <!-- 数据中使用level定义层级关系，根据层级控制显示的样式 -->
        <div
          :class="['vue-treenode-level-' + node.level, 'vue-treenode-stage-' + node.stage]"
          :style="{ border: collapsed ? '2px solid grey' : '' }"
        >
          <span style="padding: 4px 0; font-weight: bold">{{ node.name }} {{ collapsed }}</span>
        </div>
        <!-- <div class="rich-media-node" :style="{ border: collapsed ? '2px solid grey' : '' }">
          <span style="padding: 4px 0; font-weight: bold">{{ node.name }}</span>
        </div> -->
      </template>
    </vue-tree>
  </div>
</template>
<script>
  // 使用组件：ssthouse/tree-chart
  //地址：https://ssthouse.github.io/tree-chart/#/svgTree
  //已实现功能：结构图和节点添加，不同层级节点设置不同的样式，包含大小和颜色；
  //问题：组件本身无太多属性设置（特别是节点node），无法控制每个节点是否展开；未找到有对应的事件处理；
  import VueTree from '@ssthouse/vue3-tree-chart';
  import '@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css';

  export default {
    components: { VueTree },
    data() {
      return {
        vehicules: {
          customID: 0,
          level: 1,
          stage: 0,
          name: '水务发展历程',
          children: [
            {
              customID: 51,
              level: 2,
              stage: 51,
              name: '十一五',
            },
            {
              customID: 52,
              level: 3,
              stage: 52,
              name: '十二五',
              children: [
                {
                  customID: 521,
                  level: 3,
                  stage: 52,
                  name: '2010年',
                },
                {
                  customID: 522,
                  level: 3,
                  stage: 52,
                  name: '2011年',
                },
                {
                  customID: 523,
                  level: 3,
                  stage: 52,
                  name: '2012年',
                },
                {
                  customID: 524,
                  level: 3,
                  stage: 52,
                  name: '2013年',
                },
                {
                  customID: 525,
                  level: 3,
                  stage: 52,
                  name: '2014年',
                },
              ],
            },
            {
              customID: 53,
              level: 2,
              stage: 53,
              name: '十三五',
              children: [
                {
                  customID: 531,
                  level: 3,
                  stage: 53,
                  name: '2015年',
                },
                {
                  customID: 532,
                  level: 3,
                  stage: 53,
                  name: '2016年',
                },
                {
                  customID: 533,
                  level: 3,
                  stage: 53,
                  name: '2017年',
                },
                {
                  customID: 534,
                  level: 3,
                  stage: 53,
                  name: '2018年',
                },
                {
                  customID: 535,
                  level: 3,
                  stage: 53,
                  name: '2019年',
                },
              ],
            },
            {
              customID: 54,
              level: 2,
              stage: 54,
              name: '十四五',
              children: [
                {
                  customID: 541,
                  level: 3,
                  stage: 54,
                  name: '2020年',
                },
                {
                  customID: 542,
                  level: 3,
                  stage: 54,
                  name: '2021年',
                },
                {
                  customID: 543,
                  level: 3,
                  stage: 54,
                  name: '2022年',
                },
                {
                  customID: 544,
                  level: 3,
                  stage: 54,
                  name: '2023年',
                },
                {
                  customID: 545,
                  level: 3,
                  stage: 54,
                  name: '2024年',
                },
              ],
            },
            {
              customID: 55,
              level: 2,
              stage: 55,
              name: '十五五',
              children: [
                {
                  customID: 551,
                  level: 3,
                  stage: 55,
                  name: '2025年',
                },
                {
                  customID: 552,
                  level: 3,
                  stage: 55,
                  name: '2026年',
                },
                {
                  customID: 553,
                  level: 3,
                  stage: 55,
                  name: '2027年',
                },
                {
                  customID: 554,
                  level: 3,
                  stage: 55,
                  name: '2028年',
                },
                {
                  customID: 555,
                  level: 3,
                  stage: 55,
                  name: '2029年',
                },
              ],
            },
            {
              customID: 56,
              level: 2,
              stage: 56,
              name: '十六五',
            },
          ],
          links: [
            { parent: 0, child: 51 },
            { parent: 0, child: 52 },
            { parent: 0, child: 53 },
            { parent: 0, child: 54 },
            { parent: 0, child: 55 },
            { parent: 0, child: 56 },
          ],
          identifier: 'customID',
        },
        treeConfig: { nodeWidth: 200, nodeHeight: 80, levelHeight: 200 },
      };
    },
  };
</script>

<style scoped lang="less">
  .vueTreeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  // 节点层级样式，宽度等样式
  .vue-treenode-level-1 {
    width: 250px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 4px;
  }

  .vue-treenode-level-2 {
    width: 150px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 4px;
  }

  .vue-treenode-level-3 {
    width: 120px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 4px;
  }

  //节点对应十X五样式，颜色控制
  .vue-treenode-stage-0 {
    color: white;
    background-color: #f7c616;
  }
  .vue-treenode-stage-51 {
    color: white;
    background-color: #00cc00;
  }
  .vue-treenode-stage-52 {
    color: white;
    background-color: #009999;
  }
  .vue-treenode-stage-53 {
    color: white;
    background-color: #0033cc;
  }
  .vue-treenode-stage-54 {
    color: white;
    background-color: #cc0099;
  }
  .vue-treenode-stage-55 {
    color: white;
    background-color: #ff6600;
  }
  .vue-treenode-stage-56 {
    color: white;
    background-color: #ffcc00;
  }
</style>
