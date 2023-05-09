<template>
  <dv-border-box-11 title="大型灌区高效节水" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="dxgqchart" class="cellChartContainer"> </div>
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        color: ['#00fff6', '#67f471'],
        legend: { textStyle: { color: '#fff' } },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
              '2023',
              '2024',
              '2025',
              '2026',
              '2027',
              '2028',
              '2029',
              '2030',
              '2031',
              '2030',
              '2031',
              '2032',
              '2033',
              '2034',
              '2035',
              '2036',
              '2037',
            ],
          },
        ],
        yAxis: [
          {
            min: 3400,
            max: 3600,
            interval: 50,
            type: 'value',
          },
        ],
        series: [
          {
            name: '年度用水量(万m³)',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [
              3487, 3492, 3501, 3509, 3518, 3524, 3528, 3535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0,
            ],
          },
          {
            name: '年度节水量（万m³）',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [30, 78, 89, 56, 69, 76, 98, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      };

      onMounted(() => {
        var chartDom = document.getElementById('dxgqchart')!;
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
