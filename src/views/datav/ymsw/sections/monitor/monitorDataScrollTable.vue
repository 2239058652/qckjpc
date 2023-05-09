<template>
  <div class="cell-container">
    <div class="cell-header">最新水位流量</div>
    <div class="cell-content-container">
      <div class="cell-content">
        <dv-scroll-board :config="config" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const config = {
        header: ['名称', '水位', '雨量'],
        data: [
          ['上你莫水库站', '1064.25', '2.5'],
          ['弯腰树水库', '1064.25', '1.5'],
          ['河尾水库', '1064.25', '0'],
          ['鼠街水库站', '1064.25', '3.5'],
          ['马道地水库', '1064.25', '5.5'],
          ['新河水库', '1064.25', '-'],
          ['丙令水库站', '975.35', '10'],
          ['物茂乡-河外', '-', '5.5'],
          ['新华乡-猛连', '-', '0'],
          ['黄瓜园-领庄', '-', '0.5'],
        ],
        index: false,
        // columnWidth: [100, 40, 20],
        align: ['center'],
        carousel: 'page',
      };
      return { config };
    },
  };
</script>

<style lang="less">
  @import './../../layouts/layout.less';

  // 覆盖data-v中自带的样式，由于样式中指定的字体大小为px
  .dv-scroll-board .header {
    display: flex;
    flex-direction: row;
    font-size: 0.6rem;
    height: 1.3rem;
    line-height: 1.2rem;
  }
  .dv-scroll-board .rows .row-item {
    display: flex;
    font-size: 0.5rem;
    transition: all 0.3s;
  }
</style>
