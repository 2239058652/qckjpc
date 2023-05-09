<template>
  <div class="cell-container">
    <div class="cell-header">监测站点汇总</div>
    <div class="cell-content-container">
      <dv-charts class="cell-content" :option="option1" />
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        radar: {
          polygon: true,
          indicator: [
            { name: '水位站', max: 20 },
            { name: '雨量站', max: 20 },
            { name: '视频站', max: 20 },
            { name: '水库站', max: 20 },
            { name: '水质站', max: 20 },
          ],
          axisLabel: {
            style: { fill: '#fff', fontSize: '0.8rem' },
          },
        },
        series: [
          {
            type: 'radar',
            data: [7, 15, 17, 12, 3],
            animationCurve: 'easeOutBack',
            label: {
              style: {
                fill: '#fff',
                fontSize: '1.2rem',
              },
            },
          },
        ],
      };

      return { option1 };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
