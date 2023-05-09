<template>
  <dv-border-box-11 title="历年项目汇总" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-charts :option="option2" />
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
  export default {
    setup() {
      const option2 = {
        xAxis: {
          name: '年份',
          nameTextStyle: {
            fill: '#ffffff',
            fontSize: 10,
          },
          data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          axisLabel: {
            style: {
              fill: '#fff',
              fontSize: 14,
            },
          },
        },
        yAxis: {
          name: '件数',
          nameTextStyle: {
            fill: '#ffffff',
            fontSize: 10,
          },
          data: 'value',
          axisLabel: {
            style: {
              fill: '#fff',
              fontSize: 14,
            },
          },
        },
        series: [
          {
            data: [124, 125, 116, 119, 120, 128, 134],
            label: {
              show: true,
              formatter: '{value}亿元',
              position: 'center',
              offset: [0, 0],
              style: {
                fill: '#fff',
                fontSize: 12,
              },
            },
            type: 'bar',
            gradient: {
              color: ['rgba(0, 252, 255, .9)', 'rgba(0, 255, 234, .2)'],
            },
            barStyle: {
              stroke: '#330099',
            },
          },
        ],
      };
      return { option2 };
    },
  };
</script>
<style lang="less">
  @import '../../../layouts/layout.less';
</style>
