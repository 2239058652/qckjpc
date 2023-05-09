<template>
  <!-- 左边统计值，右边显示内容 -->
  <div class="cell-container">
    <div class="cell-header">标题</div>

    <div class="cell-content-container">
      <div class="cell-chart-summary">
        <div class="number">267</div>
        <div>设备运行总数</div>
      </div>

      <!-- <dv-charts class="cell-content" /> -->
      <div class="cell-content" style="background-color: aquamarine"> 显示内容</div>
    </div>
  </div>
  <!-- 锥形柱图 -->
  <div class="cell-container">
    <div class="cell-header">锥形柱图</div>

    <div class="cell-content-container">
      <!-- 锥形柱图--将根据自动排序后的排名顺序使用img中的图片。 -->
      <dv-conical-column-chart class="cell-content" :config="config1" />
    </div>
  </div>
  <!-- 水位图 -->
  <div class="cell-container">
    <div class="cell-header">山洪预警业务版块</div>

    <div class="cell-content-container">
      <div class="cell-content"> <dv-water-level-pond :config="config2" /></div>
    </div>
  </div>
  <!-- 仪表盘 -->
  <div class="cell-container">
    <div class="cell-header">小型水库业务版块</div>

    <div class="cell-content-container">
      <dv-charts class="cell-content" :option="config3" />
    </div>
  </div>
  <!-- 动态环图 -->
  <div class="cell-container">
    <div class="cell-header">监测站点汇总</div>
    <div class="cell-content-container">
      <dv-active-ring-chart class="cell-content" :config="config5" />
    </div>
  </div>
</template>
<script>
  import p1Img from '/@/../assets/images/ym/p1.png';
  import p2Img from '/@/../assets/images/ym/p2.png';
  import p3Img from '/@/../assets/images/ym/p3.png';

  export default {
    setup() {
      const config1 = {
        data: [
          {
            name: '县级河长',
            value: 14,
          },
          {
            name: '乡级河长',
            value: 104,
          },
          {
            name: '村级河长',
            value: 101,
          },
        ],
        img: [p1Img, p2Img, p3Img],
        showValue: true,
      };
      const config2 = {
        data: [66, 45],
        shape: 'roundRect',
      };
      const config3 = {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            data: [
              // { name: 'A', value: 25, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] },
              // { name: 'B', value: 45, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '53%' },
              {
                name: '小一型',
                value: 35,
                gradient: ['#03c2fd', '#1ed3e5', '#2fded6'],
                radius: '35%',
              },
              // { name: 'D', value: 35, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '39%' },
              {
                name: '小二型',
                value: 65,
                gradient: ['#03c2fd', '#1ed3e5', '#2fded6'],
                radius: '65%',
              },
            ],
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
            backgroundArc: {
              show: false,
            },
            details: {
              show: true,
              formatter: '{name}占比{value}%',
              position: 'start',
              offset: [-10, 0],
              style: {
                fill: '#1ed3e5',
                fontSize: 13,
                textAlign: 'right',
              },
            },
          },
        ],
      };

      const config4 = {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            data: [
              { name: 'A', value: 32, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] },
              { name: 'B', value: 78, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '53%' },
              { name: 'C', value: 55, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '46%' },
              { name: 'D', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '39%' },
              { name: 'E', value: 45, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '32%' },
            ],
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
            backgroundArc: {
              show: false,
            },
            details: {
              show: true,
              formatter: '{name}占比{value}%',
              position: 'start',
              offset: [-10, 0],
              style: {
                fill: '#1ed3e5',
                fontSize: 13,
                textAlign: 'right',
              },
            },
          },
        ],
      };
      const config5 = {
        radius: '70%',
        activeRadius: '75%',
        data: [
          {
            name: '水位站',
            value: 7,
          },
          {
            name: '雨量站',
            value: 15,
          },
          {
            name: '视频站',
            value: 17,
          },
          {
            name: '水库站',
            value: 12,
          },
          {
            name: '水质站',
            value: 3,
          },
        ],
      };

      return { config1, config2, config3, config4, config5 };
    },
  };
</script>
<style lang="less">
  @import './../layouts/layout.less';
</style>
