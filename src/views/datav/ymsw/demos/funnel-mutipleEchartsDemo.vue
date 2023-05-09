<template>
  <div id="funnelMultipleEchartContainer" style="height: 100%; width: 100%"> </div>
</template>
<script lang="ts">
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';

  export default {
    setup() {
      const option = {
        title: {
          text: 'Funnel',
          left: 'left',
          top: 'bottom',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%',
        },
        toolbox: {
          orient: 'vertical',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
        },
        series: [
          {
            name: 'Funnel',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '5%',
            sort: 'ascending',
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Funnel',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            label: {
              position: 'left',
            },
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            label: {
              position: 'left',
            },
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
        ],
      };
      onMounted(() => {
        var chartDom = document.getElementById('funnelMultipleEchartContainer')!;
        // console.log(chartDom);
        var myChart = echarts.init(chartDom);
        myChart.setOption(option);
        myChart.resize();
      });
      return { option };
    },
  };
</script>
<style lang="less"></style>
