<template>
  <!-- <dv-border-box-11 title="工程项目" class="datav-border-box-content"> -->
  <!-- <div class="datav-border-box-content-container"> -->
  <!-- <dv-border-box-12> -->
  <dv-charts :option="option2" />
  <!-- </dv-border-box-12> -->
  <!-- </div> -->
  <!-- </dv-border-box-11> -->
</template>
<script>
  export default {
    setup() {
      const option2 = {
        title: {
          text: '重点工程进展阶段',
          style: {
            fill: '#fff',
            fontSize: 20,
          },
          show: false,
        },
        xAxis: {
          name: '阶段',
          data: ['在建项目', '新开工项目', '重点前期项目', '配合州级重点项目'],
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
            data: [5, 6, 12, 2],
            label: {
              show: true,
              formatter: '{value}件',
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

      return { option2 };
    },
  };
</script>
<style lang="less">
  @import './../layouts/layout.less';
</style>
