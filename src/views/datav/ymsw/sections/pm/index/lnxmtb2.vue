<template>
  <dv-border-box-11 title="项目分类占比" class="datav-border-box-content">
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
          name: '工程',
      nameTextStyle: {
  fill: '#ffffff',
  fontSize: 10
},
          data: ['水源工程', '水库除险加固', '沟渠', '饮水安全', '河道治理', '高效节水灌区'],
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
  fontSize: 10
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
            data: [23, 26, 22.5, 26, 29, 30],
            label: {
              show: true,
              formatter: '{value}亿元',
              position: 'center',
              offset: [0, 0],
              style: {
                fill: '#fff',
                fontSize: 14,
              },
            },
            type: 'bar',
            gradient: {
              color: ['rgba(0, 255, 36, .9)', 'rgba(0, 255, 36, .2)'],
            },
            barStyle: {
              stroke: '#330099',
            },
          },
        ],
      };
      return { option2};
    },
  };
</script>
<style lang="less">
  @import '../../../layouts/layout.less';
</style>
