<template>
  <div class="cell-container">
    <div class="cell-header">降雨强度统计</div>
    <!-- 小雨指日降雨量在10毫米以上；中雨日降雨量为10—24.9毫米；大雨降雨量为25—49.9毫米；
暴雨降雨量为50—99.9毫米；大暴雨降雨量为100—199.9毫米；特大暴雨降雨量在200毫米以上。 -->
    <div class="cell-content-container">
      <!-- <dv-charts class="cell-content" :option="option1" /> -->
      <dv-capsule-chart class="cell-content" :config="config" />
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        grid: {
          left: 20,
          right: 20,
          top: '5%',
          bottom: '5%',
        },
        xAxis: {
          data: ['无雨', '小雨', '中雨', '大雨', '暴雨', '大暴雨', '特大暴雨'],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: {
          data: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: 'bar',
            data: [12, 6, 3, 1, 0, 0, 0],
            label: {
              show: true,
              position: 'center',
              offset: [0, 0],
              style: {
                fill: '#fff',
              },
            },
            backgroundBar: {
              show: true,
            },
            animationCurve: 'easeOutBounce',
          },
        ],
      };
      const config = {
        data: [
          // {
          //   name: '无雨',
          //   value: 55,
          // },
          // {
          //   name: '小雨',
          //   value: 123,
          // },
          // {
          //   name: '中雨',
          //   value: 98,
          // },
          {
            name: '大雨',
            value: 75,
          },
          {
            name: '暴雨',
            value: 66,
          },
          {
            name: '大暴雨',
            value: 66,
          },
          {
            name: '特大暴雨',
            value: 11,
          },
        ],
        // colors: ['#F0F8FF', '#6495ED', '#0000FF', '#FFFACD', '#FFA500', '#FF4500', '#800000'],
        colors: ['#FFFACD', '#FFA500', '#FF4500', '#800000'],
        unit: '站点数',
        showValue: true,
      };
      return { option1, config };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
