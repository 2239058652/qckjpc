<template>
  <dv-border-box-11 title="水资源总量同比" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="szyzlchart" class="cellChartContainer"> </div>
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
        color: ['#60f996', '#ffe400'],

        legend: {
          data: ['水资源总量（亿m³）', '同比增长(%)'],
          textStyle: { color: '#fff' },
        },
        xAxis: [
          {
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2022', '2023'],
            nameTextStyle: {
              color: '#ffffff',
            },
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 2,
            interval: 0.5,

            axisLabel: {
              formatter: '{value} 亿m³',
            },
          },
          {
            type: 'value',
            min: 0,
            max: 25,
            interval: 5,
            symbolSizez: 30,
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ],
        series: [
          {
            name: '水资源总量（亿m³）',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              },
            },
            data: [1.05, 1.11, 1.13, 1.15, 1.26, 1.23, 1.41, 1.55],
          },
          {
            name: '同比增长(%)',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %';
              },
            },
            data: [5, 6, 7, 10, 8, 11, 9, 13.4, 23.0, 16.5, 12.0, 6.2],
          },
        ],
      };

      onMounted(() => {
        var chartDom = document.getElementById('szyzlchart')!;
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
