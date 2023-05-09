<template>
  <dv-border-box-11 title="水旱灾害统计同比" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="shzhtjchart" class="cellChartContainer"> </div>
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
        legend: {textStyle:{color:'#fff'},
      },
  tooltip: {},
  dataset: {
    source: [
      ['product', '洪灾', '旱灾', '其它灾害'],
      ['2019', 2,5, 8],
      ['2020', 3,2, 5],
      ['2021', 4, 1, 4],
      ['2022', 5, 8, 2],
      ['2023', 4, 6, 9]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      };

      onMounted(() => {
        var chartDom = document.getElementById('shzhtjchart')!;
        // console.log(chartDom);
        var myChart = echarts.init(chartDom);
        myChart.setOption(option);
        myChart.resize();
      });
      return { option};
    },
  };
</script>
<style lang="less">
  @import '../../../layouts/layout.less';
</style>
