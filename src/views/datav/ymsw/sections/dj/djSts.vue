<template>
  <!-- 显示在左上角小图标 -->
  <div style="position: fixed; z-index: 999">
    <img style="height: 4rem; object-fit: contain" src="../../../../../../assets/images/hq.png" />
  </div>
  <dv-border-box-11 title="党建引领" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <!-- 显示为背景底图，底图中放置内容 -->
      <!--<div style="position: fixed">
        <img
          style="height: 100%;width: 100%; object-fit: contain"
          src="../../../../../../assets/images/ym/djbg.png"
        />
      </div>-->
      <!-- 分为红榜、黄榜和黑榜3个显示 -->
      <dv-charts :option="option2" />
      <dv-charts :option="option1" />
    </div>
  </dv-border-box-11>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        color: ['#ff0000', '#c8ce17','#bbbbaf'],
        title: {
          text: '作风革命 效能革命 红黄黑磅',
          style: {
            fill: '#fff',
            fontSize: 20,
            textAlign: 'center',
          },
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '红磅', value: 7 },
              { name: '黄磅', value: 6 },
              { name: '黑磅', value: 5 },
            ],
            insideLabel: {
              show: true,
              style: {
                fill: '#fff',
                fontSize: 14,
              },
            },
            outsideLabel: {
              style: {
                fontSize: 14,
              },
            },
            roseType: true,
          },
        ],
      };

      const option2 = {
        title: {
          text: '党组织活动',
          style: {
            fill: '#fff',
            fontSize: 20,
          },
        },
        xAxis: {
          name: '阶段',
          data: ['主题党日', '党员大会', '支委会议', '党课'],
          axisLabel: {
            style: {
              fill: '#fff',
              fontSize: 14,
            },
          },
        },
        yAxis: {
          name: '%',
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
            data: [4, 2, 6, 5],
            label: {
              show: true,
              formatter: '{value}个',
              position: 'center',
              offset: [0, 0],
              style: {
                fill: '#fff',
                fontSize: 16,
              },
            },
            type: 'bar',
            gradient: {
              color: ['rgba(51, 255, 204, .9)', 'rgba(51, 255, 204, .2)'],
            },
            barStyle: {
              stroke: '#330099',
            },
          },
        ],
      };

      const option3 = {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 25,
            // data: [{ name: '黑榜', value: 2, gradient: ['#c3c3c3', '#878787', '#0f0f0f'] }],
            data: [{ name: '黑榜', value: 2, gradient: ['#0f0f0f'] }],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: 'round',
            },
            details: {
              show: true,
              formatter: '黑榜 {value}%',
              style: {
                fill: '#fff',
                fontSize: 25,
              },
            },
          },
        ],
      };

      return { option1, option2 };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
