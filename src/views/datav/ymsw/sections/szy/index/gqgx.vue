<template>
  <dv-border-box-11 title="供求关系同比" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="gqgxchart" class="cellChartContainer"> </div>
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
        color: ['#0066fe', '#f1d90b'],
        legend: { textStyle: { color: '#fff' } },
        tooltip: {},
        dataset: {
          source: [
            ['product', '水资源量', '需求水量'],
            ['2018', 1.1, 1.3],
            ['2019', 1.12, 1.32],
            ['2020', 1.15, 1.35],
            ['2021', 1.18, 1.38],
            ['2022', 1.21, 1.41],
            ['2023', 1.24, 1.44],
          ],
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }],
      };

      onMounted(() => {
        var chartDom = document.getElementById('gqgxchart')!;
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
