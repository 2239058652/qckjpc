<template>
  <dv-border-box-11 title="水部门" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12>
        <dv-charts :option="option1" />
      </dv-border-box-12>
      <dv-border-box-12>
        <dv-charts :option="option2" />
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        title: {
          text: '业务部门人员占比',
          style: {
            fill: '#fff',
            fontSize: 20,
          },
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '河长办', value: 8 },
              { name: '防汛办', value: 7 },
              { name: '运管站', value: 2 },
              { name: '灌区管理局', value: 12 },
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
          text: '人员在岗比例',
          style: {
            fill: '#fff',
            fontSize: 20,
          },
        },
        xAxis: {
          name: '部门',
          data: ['河长股', '防汛办', '运管站', '灌区管理局', '办公室'],
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
          min: 0,
          max: 100,
          axisLabel: {
            style: {
              fill: '#fff',
              fontSize: 14,
            },
          },
        },
        series: [
          {
            data: [100, 90, 95, 100, 95],
            label: {
              show: true,
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

      return { option1, option2 };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
