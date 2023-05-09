<template class="treeChartDemoContainer">
  <div class="treeChartContainer">
    <!-- <TreeChart :json="nodeData" @click-node="clickNode" /> -->
    <div style="width: 100%; height: 50%">
      <TreeChart :json="stepsNodeData" @click-node="clickNode"
    /></div>
    <div style="width: 100%; height: 50%">
      <TreeChart :json="yearNodeData" @click-node="clickNode"
    /></div>
  </div>
  <div class="nodeInfoContainer">
    <!-- <dv-border-box-11
      title="投资-工程统计"
      class="datav-border-box-content"
      style="height: 100%; width: 33%"
    >
      <div class="datav-border-box-content-container">
        <echartsDemo v-if="currentNodeId < 2000" />
        <echartsPieDemo v-else />
      </div>
    </dv-border-box-11>
    <dv-border-box-11
      title="{{ currentNodeId }} "
      class="datav-border-box-content"
      style="height: 100%; width: 33%"
    >
      <div class="datav-border-box-content-container">
        <mutipleEchartsDemo v-if="currentNodeId < 2000" />
        <gradientEchartDemo v-else />
      </div>
    </dv-border-box-11>
    <dv-border-box-11
      title="文字概述"
      class="datav-border-box-content"
      style="height: 100%; width: 33%"
    >
      <div class="datav-border-box-content-container">
        <sectionsEchartDemo v-if="currentNodeId < 2000" />
        <axisEchartsDemo v-else />
      </div>
    </dv-border-box-11> -->
    <!-- 显示固定2023年信息 -->
    <dv-border-box-11
      title="2023年重点工作"
      class="datav-border-box-content"
      style="height: 100%; width: 70%"
    >
      <div
        class="datav-border-box-content-container"
        style="text-align: left; padding: 1rem; line-height: 1.3rem"
      >
        <span style="color: #6ac3f6">
          今年是贯彻党的二十大精神的开局之年，也是实施“十四五”规划承上启下的关键之年，元谋县水务局将全面落实党的二十大精神，深刻领会新时代新征程中国共产党的使命任务，抓紧每一天、干好每件事，推动党的二十大作出的重大战略部署、省委“3815”战略、县委“五个强县（色能源强县、绿色农业强县、现代种业强县、文旅康养强县、枢纽经济强县）”“四张名片（东方人类故乡、冬早蔬菜之乡、绿色康养之乡、南繁育种天堂）”目标落到实处，做出水务贡献。牢固树立项目为王的理念，大抓项目、抓大项目。2023年，重点谋划水利项目28件，总投资134.48亿元，其中：竣工项目2件，总投资2.37亿元；在建项目5件，总投资20.2亿元；新开工项目7件，总投资11.03亿元；2023年重点项目前期工作12件，总投资35.13亿元，配合州级开展重点水利项目前期工作2件，总投资65.75亿元。
          <br />（一）完成竣工项目（2件） <br />（二）推进在建项目（5件）<br />
          （三）抓实新开工项目（7件）
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一是沙地小河山洪沟治理工程，计划2023年3月开工建设；
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二是元谋县农村饮水安全工程维修养护和农村水价综合改革，2023年3月开工建设；
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三是元谋县小型水库维修养护及除险加固项目，计划2023年4月开工；
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四是虎溪小（一）型水库工程项目，计划2023年6月开工；
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五是姜驿中型灌区续建配套与节水改造项目，计划2023年7月开工建设；
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六是定远河中型水库工程，计划2023年11月开工建设；
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七是楚雄州元谋大型灌区“十四五”续建配套与现代化改造项目，计划2023年12月开工建设。
          <br />（四）抓紧重点项目前期工作（12件）
        </span>
      </div>
    </dv-border-box-11>
    <dv-border-box-11
      title="项目统计"
      class="datav-border-box-content"
      style="height: 100%; width: 30%"
    >
      <div class="datav-border-box-content-container">
        <projectStageBarDemo />
      </div>
    </dv-border-box-11>
  </div>
</template>
<script lang="ts">
  import { reactive, ref } from 'vue';
  // 使用组件：tower1229/Vue-Tree-Chart
  //地址：https://github.com/tower1229/Vue-Tree-Chart/blob/vue3/README_CN.md
  // import TreeChart from 'vue-tree-chart-3';
  //使用自定义组件
  import TreeChart from './TreeChart.vue';

  import projectStageBarDemo from './projectStageBarDemo.vue';

  //显示详情组件
  import echartsDemo from './echartsDemo.vue';
  import echartsPieDemo from './echartsPieDemo.vue';
  import mutipleEchartsDemo from './funnel-mutipleEchartsDemo.vue';
  import gradientEchartDemo from './line-gradientEchartDemo.vue';
  import sectionsEchartDemo from './line-sectionsEchartDemo.vue';
  import axisEchartsDemo from './multiple-y-axisEchartsDemo.vue';

  import CentralImg1 from '/@/../assets/images/gis/sew.png';
  import CentralImg2 from '/@/../assets/images/gis/sew1.png';
  import CentralImg3 from '/@/../assets/images/gis/ssw.png';
  import CentralImg4 from '/@/../assets/images/gis/ssw1.png';
  import CentralImg5 from '/@/../assets/images/gis/sww.png';
  import CentralImg6 from '/@/../assets/images/gis/slw.png';

  import CentralImg2020 from '/@/../assets/images/gis/2020.png';
  import CentralImg2021 from '/@/../assets/images/gis/2021.png';
  import CentralImg2022 from '/@/../assets/images/gis/2022.png';
  import CentralImg2023 from '/@/../assets/images/gis/2023.png';
  import CentralImg2024 from '/@/../assets/images/gis/2024.png';

  const stepsNodeData = {
    name: '十一五',
    id: 11,
    image_url: CentralImg1,
    class: ['nodeFive'],
    mate: [
      {
        name: '十二五',
        id: 12,
        image_url: CentralImg2,
        class: ['nodeFive'],
      },
      {
        name: '十三五',
        id: 13,
        image_url: CentralImg3,
        class: ['nodeFive'],
      },
      {
        name: '十四五',
        id: 14,
        image_url: CentralImg4,
        class: ['nodeFive'],
      },
      {
        name: '十五五',
        id: 15,
        image_url: CentralImg5,
        class: ['nodeFive'],
      },
      {
        name: '2035远景目标',
        id: 16,
        image_url: CentralImg6,
        class: ['nodeFive'],
      },
    ],
  };

  const yearNodeData = {
    name: '2020年',
    id: 2020,
    image_url: CentralImg2020,
    class: ['nodeYear'],
    mate: [
      {
        name: '2021年',
        id: 2021,
        image_url: CentralImg2021,
        class: ['nodeYear'],
      },
      {
        name: '2022年',
        id: 2022,
        image_url: CentralImg2022,
        class: ['nodeYear'],
      },
      {
        name: '2023年',
        id: 2023,
        image_url: CentralImg2023,
        class: ['nodeYear'],
      },
      {
        name: '2024年',
        id: 2024,
        image_url: CentralImg2024,
        class: ['nodeYear'],
      },
    ],
  };

  export default {
    components: {
      TreeChart,
      echartsDemo,
      echartsPieDemo,
      mutipleEchartsDemo,
      gradientEchartDemo,
      sectionsEchartDemo,
      axisEchartsDemo,
      projectStageBarDemo,
    },
    setup() {
      const currentNodeId = ref(0);
      let nodeData = ref(generateNodeData(14));

      //节点属性
      // - name[String] 节点名称
      // - image_url[String] 节点图片
      // - children[Array] 节点后代
      // - mate[Array] 节点配偶
      // - class[Array] 节点自定义class，字符串数组
      // - extend[Boolean] 展开/收起节点后代，默认展开
      function generateNodeData(e) {
        let beginYear = (e - 12) * 5 + 2010;

        return {
          name: '十一五',
          id: 11,
          image_url: CentralImg1,
          class: ['nodeFive'],
          mate: [
            {
              name: '十二五',
              id: 12,
              image_url: CentralImg2,
              class: ['nodeFive'],
            },
            {
              name: '十三五',
              id: 13,
              image_url: CentralImg3,
              class: ['nodeFive'],
            },
            {
              name: '十四五',
              id: 14,
              image_url: CentralImg4,
              class: ['nodeFive'],
            },
            {
              name: '十五五',
              id: 15,
              image_url: CentralImg5,
              class: ['nodeFive'],
            },
            {
              name: '2035远景目标',
              id: 16,
              image_url: CentralImg6,
              class: ['nodeFive'],
            },
          ],
          children: [
            {
              name: beginYear + '年',
              id: beginYear,
              image_url: CentralImg2020,
              class: ['nodeYear'],
              mate: [
                {
                  name: beginYear + 1 + '年',
                  id: beginYear + 1,
                  // image_url: 'https://static.refined-x.com/static/avatar.jpg',
                  image_url: CentralImg2021,
                  class: ['nodeYear'],
                },
                {
                  name: beginYear + 2 + '年',
                  id: beginYear + 2,
                  image_url: CentralImg2022,
                  class: ['nodeYear'],
                },
                {
                  name: beginYear + 3 + '年',
                  id: beginYear + 3,
                  image_url: CentralImg2023,
                  class: ['nodeYear'],
                },
                {
                  name: beginYear + 4 + '年',
                  id: beginYear + 4,
                  image_url: CentralImg2024,
                  class: ['nodeYear'],
                },
              ],
            },
          ],
        };
      }

      function clickNode(node) {
        currentNodeId.value = node.id;
        //加载5年二级节点
        if (node.id >= 12 && node.id <= 15) {
          nodeData.value = generateNodeData(node.id);
        }
        //点击5年计划显示详情
        if (node.id >= 11 && node.id <= 16) {
        }
        //点击年份显示详情
        if (node.id >= 2010 && node.id <= 2029) {
        }
      }

      return {
        stepsNodeData,
        yearNodeData,
        currentNodeId,
        nodeData,
        clickNode,
      };
    },
  };
</script>

<style lang="less">
  @import './../layouts/layout.less';
  .treeChartDemoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .treeChartContainer {
    width: 100%;
    height: 30%;
    text-align: center;
    padding-top: 1rem;
  }

  .nodeInfoContainer {
    width: 100%;
    height: 70%;
    display: flex;
  }

  .nodeFive {
    font-size: 1rem;
  }

  .nodeYear {
    font-size: 0.8rem;
  }
</style>
