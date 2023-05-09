<template>
  <dv-border-box-11 title="地表地下水总量同比" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="oieEchartContainer" class="cellChartContainer"> </div>
    </div>
  </dv-border-box-11>
  <!-- 使用echarts大小无法自适应，暂时修改为使用datav中的动态环图显示 -->
  <!-- <div class="cell-container">
    <div class="cell-header">水利工程</div>
    <div class="cell-content-container" id="echartPieContainer"> </div>
  </div> -->
  <!-- 动态环图 -->
  <!-- <div class="cell-container">
    <div class="cell-header">水利工程进度</div>
    <div class="cell-content-container">
      <dv-active-ring-chart class="cell-content" :config="config5" />
    </div>
  </div> -->
</template>
<script lang="ts">
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';

  export default {
    setup() {
      const option = {
        color: ['#0012ff', '#009dee', '#00fffc'],
        legend: {
          data: [
            '地下水资源量（亿m³）',
            '地表水与地下水资源重复量（亿m³）',
            '地表水资源量（亿m³）',
          ],
          textStyle: { color: '#fff' },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '地下水资源量（亿m³）',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [3.11, 3.22, 3.33, 3.44, 3.55, 3.55, 3.66],
          },

          {
            name: '地表水与地下水资源重复量（亿m³）',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66],
          },
          {
            name: '地表水资源量（亿m³）',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [1.12, 1.16, 1.21, 1.23, 1.25, 1.27, 1.3],
          },
        ],
      };

      onMounted(() => {
        var chartDom = document.getElementById('oieEchartContainer')!;
        // console.log(chartDom);
        var myChart = echarts.init(chartDom);
        myChart.setOption(option);
        myChart.resize();
      });
      return { option };
    },
  };
</script>
<style lang="less">
  @import '../../../layouts/layout.less';
</style>
