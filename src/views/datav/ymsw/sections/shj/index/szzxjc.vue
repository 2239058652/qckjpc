<template>
  <dv-border-box-11 title="水质在线监测" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="szzxjcchart" class="cellChartContainer" style="padding-left: -3%"> </div>
    </div>
    <div style="position: absolute; bottom: 0.5rem; right: 0.5rem">
      <dv-border-box-12 style="padding: 0.5rem 0.5rem">
        <div style="text-align: center; font-size: 0.6rem">丙令水库</div>
        <div style="text-align: center; font-size: 0.6rem">卡莫水库</div>
        <div style="text-align: center; font-size: 0.6rem">致富水库</div>
        <div style="text-align: center; font-size: 0.6rem">面前水库</div>
        <div style="text-align: center; font-size: 0.6rem">新河水库</div>
      </dv-border-box-12>
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
        color: ['#00f6ff', '#0090ff', '#00ff9c', '#e9fe00', '#faf38a', '#ffcc00'],
        tooltip: {
          trigger: 'item',
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          textStyle: { color: '#fff' },
        },
        label: {
          show: false,
          color: '#fff',
          FontSize: 40,
        },

        series: [
          {
            name: '水质类别',
            type: 'pie',
            radius: '80%',
            data: [
              { value: 0, name: 'I类' },
              { value: 12, name: 'II类' },
              { value: 25, name: 'III类' },
              { value: 0, name: 'IV类' },
              { value: 0, name: 'V类' },
              { value: 0, name: 'VI类' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };

      onMounted(() => {
        var chartDom = document.getElementById('szzxjcchart')!;
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
