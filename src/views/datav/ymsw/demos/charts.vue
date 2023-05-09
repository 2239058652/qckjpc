<template>
  <div class="cell-container">
    <div class="cell-header">孙七收费站</div>

    <div class="cell-content-container">
      <div class="cell-chart-summary">
        <div class="number">267</div>
        <div>设备运行总数</div>
      </div>

      <dv-charts class="cell-content" :option="option1" />
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        title: {
          text: '畅销饮料占比饼状图',
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '可口可乐', value: 93 },
              { name: '百事可乐', value: 32 },
              { name: '哇哈哈', value: 65 },
              { name: '康师傅', value: 44 },
              { name: '统一', value: 52 },
            ],
            insideLabel: {
              show: true,
            },
          },
        ],
      };

      const option2 = {
        title: {
          text: '畅销饮料占比饼状图',
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '可口可乐', value: 93 },
              { name: '百事可乐', value: 32 },
              { name: '哇哈哈', value: 65 },
              { name: '康师傅', value: 44 },
            ],
            insideLabel: {
              show: true,
            },
          },
        ],
      };
      return { option1, option2 };
    },
  };
</script>
<style lang="less">
  @import './../layouts/layout.less';
</style>
