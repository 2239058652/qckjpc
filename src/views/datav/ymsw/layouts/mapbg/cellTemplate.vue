<template>
  <!-- 单元格cell模板 -->
  <div class="cellContentContainer"> </div>
</template>
<script>
  export default {
    setup() {
      return {};
    },
  };
</script>
<style lang="less">
  .cellContentContainer {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    // background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);

    .cell-header {
      font-size: 1rem;
      font-weight: bold;
      height: 1.5rem;
      line-height: 1.2rem;
      padding-left: 0.8rem;
      padding-top: 0.5rem;
    }

    .cell-content-container {
      width: 100%;
      height: calc(~'100% - 2.5rem');
      font-size: 0.8rem;
      flex: 1;
      box-sizing: border-box;
      display: flex;
      padding: 0.4rem 0.4rem 0.4rem 0.4rem;
      // overflow: hidden;
    }

    .cell-chart-summary {
      width: 30%;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .number {
        font-size: 1.2rem;
        color: #096dd9;
        font-weight: bold;
        margin-bottom: 0.8rem;
      }
    }

    .cell-content {
      font-size: 0.8rem;
      flex: 1;
      box-sizing: border-box;
      // overflow: hidden;
    }
  }
</style>
