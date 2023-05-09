<template>
  <dv-border-box-11 title="人均水量同比" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="rjslchart" class="cellChartContainer"> </div>
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
        legend: {
          data: ['人均水资源量（m³/人）', '同比增长（%）'],
          textStyle: { color: '#fff' },
        },
        xAxis: [
          {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            min: 370,
            max: 480,
            interval: 30,
            axisLabel: {
              formatter: '{value}',
            },
          },
          {
            type: 'value',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ],
        series: [
          {
            name: '人均水资源量（m³/人）',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '';
              },
            },
            data: [380, 394, 400, 410, 420, 430, 432, 433, 235, 440, 443, 450],
          },
          {
            name: '同比增长（%）',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %';
              },
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          },
        ],
      };

      onMounted(() => {
        var chartDom = document.getElementById('rjslchart')!;
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
