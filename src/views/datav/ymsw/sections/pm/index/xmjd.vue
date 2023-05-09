<template>
  <dv-border-box-11 title="项目阶段" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div id="xmjdchart" class="cellChartContainer"> </div>
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
  
        color:['#00f6ff','#0090ff','#00ff9c','#e9fe00','#faf38a','#ffcc00'],    
  tooltip: {
    trigger: 'item'
  },
  title: {
    text: '各阶段工程件数',
    left: 'center',
    textStyle:{
      color:'#fff'
    },
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle:{color:'#fff'}
    
  },
  label: {
         show: false,
         color:'#fff',
         FontSize:40
        },

  series: [
    {
      name: '项目阶段',
      type: 'pie',
      radius: '68%',
      data: [
        { value: 12, name: '前期项目' },
        { value: 7, name: '新开工项目' },
        { value: 5, name: '在建项目' },
        { value: 2, name: '竣工项目' },
        { value: 2, name: '配合州级' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
      };

      onMounted(() => {
        var chartDom = document.getElementById('xmjdchart')!;
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
