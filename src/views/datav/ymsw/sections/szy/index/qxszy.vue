<template>
  <div class="datav-border-box-content-container">
    <dv-border-box-12>
      <div class="qx-card-header">
        <div class="qx-card-header-left">河流</div>
        <div class="qx-card-header-right">85条</div>
      </div>
      <div class="qx-card-header">
        <div class="qx-card-header-left">中型水库</div>
        <div class="qx-card-header-right">7座</div>
      </div>
      <div class="qx-card-header">
        <div class="qx-card-header-left">小型水库</div>
        <div class="qx-card-header-right">92座</div>
      </div>
      <div class="qx-card-header">
        <div class="qx-card-header-left">坝塘</div>
        <div class="qx-card-header-right">55个</div>
      </div>
      <div class="qx-card-header">
        <div class="qx-card-header-left">灌区</div>
        <div class="qx-card-header-right">11.4万亩</div>
      </div>
    </dv-border-box-12>
  </div>
</template>
<script lang="ts">
  import { onMounted } from 'vue';

  export default {
    components: {},
    setup() {
      onMounted(() => {});
      return {};
    },
  };
</script>
<style lang="less">
  @import './../../../layouts/layout.less';

  // .card-item {
  //   background-color: rgba(6, 30, 93, 0.5);
  //   // border-top: 2px solid rgba(1, 153, 209, 0.5);
  //   width: 32%;
  //   display: flex;
  //   flex-direction: column;
  // }

  .qx-card-header {
    display: flex;
    height: 20%;
    align-items: center;
    justify-content: space-between;

    .qx-card-header-left {
      font-size: 0.6rem;
      font-weight: bold;
      padding-left: 10px;
    }

    .qx-card-header-right {
      padding-right: 10px;
      font-size: 1rem;
      color: #03d3ec;
    }
  }

  // .ring-charts {
  //   height: 55%;
  // }

  // .card-footer {
  //   height: 25%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-around;
  // }

  // .card-footer-item {
  //   padding: 5px 10px 0px 10px;
  //   box-sizing: border-box;
  //   width: 100%;
  //   background-color: rgba(6, 30, 93, 0.7);
  //   border-radius: 3px;

  //   .footer-title {
  //     font-size: 1rem;
  //     margin-bottom: 5px;
  //   }

  //   .footer-detail {
  //     color: #1294fb;
  //     display: flex;
  //     font-size: 0.6rem;
  //     align-items: center;

  //     .dv-digital-flop {
  //       margin-right: 5px;
  //     }
  //   }
  // }
</style>
