<template>
  <dv-border-box-11 title="工程项目" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12>
        <dv-charts :option="option2" />
      </dv-border-box-12>
      <dv-border-box-12>
        <dv-charts :option="option1" />
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        title: {
          text: '重点工程进展阶段比例',
          style: {
            fill: '#fff',
            fontSize: 20,
          },
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '前期项目', value: 2 },
              { name: '在建项目', value: 3 },
              { name: '完成项目', value: 3 },
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
                fontSize: 12,
              },
            },
            roseType: true,
          },
        ],
      };

      const option2 = {
        title: {
          text: '重点工程进展阶段',
          style: {
            fill: '#fff',
            fontSize: 20,
          },
        },
        xAxis: {
          name: '阶段',
          data: ['前期项目', '在建项目', '完成项目'],
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
            data: [2, 3, 3],
            label: {
              show: true,
              formatter: '{value}项',
              position: 'center',
              offset: [0, 0],
              style: {
                fill: '#fff',
                fontSize: 14,
              },
            },
            type: 'bar',
            gradient: {
              color: ['rgba(0, 240, 255, .9)', 'rgba(0, 59, 251, .2)'],
            },
            barStyle: {
              stroke: '#330099',
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
