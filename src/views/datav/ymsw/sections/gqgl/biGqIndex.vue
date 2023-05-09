<template>
  <div class="cell-container">
    <div class="cell-header" @click="openTab()">灌区管理模块</div>

    <div class="cell-content-container">
      <dv-charts class="cell-content" :option="option" />
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const option = {
        title: {
          text: '2022年度水源地取水量统计图',
          offset: 0,
          show: false,
          style: {
            fill: '#fff',
            fontSize: '2rem',
          },
        },
        legend: {
          data: [
            { name: '丙间', color: '#1afa29' },
            { name: '麻柳', color: '#1296db' },
          ],
          textStyle: { fill: '#fff', fontSize: '0.8rem' },
        },
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisLabel: {
            style: {
              rotate: 0,
              textAlign: 'left',
              textBaseline: 'top',
              fill: '#fff',
              fontSize: '0.8rem',
            },
          },
          axisTick: {
            show: false,
          },
          nameTextStyle: {
            fill: '#fff',
            fontSize: '0.8rem',
          },
        },
        yAxis: [
          {
            name: '可用水量(万m³)',
            data: 'value',
            splitLine: {
              style: {
                lineDash: [3, 3],
              },
            },
            axisLabel: {
              formatter: '{value}',
              style: {
                fill: '#fff',
                fontSize: '0.8rem',
              },
            },
            axisTick: {
              show: false,
            },
            nameTextStyle: {
              fill: '#fff',
              fontSize: '0.8rem',
            },
          },
        ],
        series: [
          {
            name: '丙间',
            data: [175, 125, 90, 130, 45, 65, 65, 47, 50, 52, 45, 37],
            type: 'bar',
            gradient: {
              color: ['#1afa29'],
            },
            animationCurve: 'easeOutBounce',
          },
          {
            name: '麻柳',
            data: [23, 54, 58, 66, 56, 78, 90, 123, 135, 167, 188, 180],
            type: 'bar',
            gradient: {
              color: ['#1296db'],
            },
            animationCurve: 'easeOutBounce',
          },
        ],
      };
      const openTab = () => {
        var open_link = window.open('', '_newtab');
        open_link.location = 'http://118.31.180.57:8010/login';
      };

      return { option, openTab };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
