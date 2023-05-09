<template>
  <div class="cell-container">
    <div class="cell-header">水质情况分布图</div>

    <div class="cell-content-container">
      <dv-charts class="cell-content" :option="option1" />
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const option1 = {
        // title: {
        //   text: '水质情况分布图',
        // },
        series: [
          {
            type: 'pie',
            data: [
              { name: 'Ⅰ类', value: 1 },
              { name: 'Ⅱ类', value: 2 },
              { name: 'Ⅲ类', value: 3 },
              { name: 'Ⅳ类', value: 4 },
              { name: 'Ⅴ类', value: 1 },
              { name: '劣Ⅴ类', value: 1 },
            ],
            insideLabel: {
              show: true,
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
