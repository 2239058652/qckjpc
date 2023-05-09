<template>
  <dv-border-box-11 title="组织建设" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12>
        <div class="card-header">
          <div class="card-header-left">总支部</div>
          <div class="card-header-right">90人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">预备党员</div>
          <div class="card-header-right">0人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">女党员</div>
          <div class="card-header-right">17人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">少数民族</div>
          <div class="card-header-right">29人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">大专及以上</div>
          <div class="card-header-right">68人</div>
        </div>
      </dv-border-box-12>
      <dv-border-box-12>
        <div class="card-header">
          <div class="card-header-left">机关支部</div>
          <div class="card-header-right">47人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">预备党员</div>
          <div class="card-header-right">0人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">女党员</div>
          <div class="card-header-right">8人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">少数民族</div>
          <div class="card-header-right">17人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">大专及以上</div>
          <div class="card-header-right">41人</div>
        </div>
      </dv-border-box-12>
      <dv-border-box-12>
        <div class="card-header">
          <div class="card-header-left">灌区管理局支部</div>
          <div class="card-header-right">43人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">预备党员</div>
          <div class="card-header-right">0人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">女党员</div>
          <div class="card-header-right">9人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">少数民族</div>
          <div class="card-header-right">12人</div>
        </div>
        <div class="card-header">
          <div class="card-header-left">大专及以上</div>
          <div class="card-header-right">27人</div>
        </div>
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
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

  .card-item {
    background-color: rgba(6, 30, 93, 0.5);
    // border-top: 2px solid rgba(1, 153, 209, 0.5);
    width: 32%;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    height: 20%;
    align-items: center;
    justify-content: space-between;

    .card-header-left {
      font-size: 0.6rem;
      font-weight: bold;
      padding-left: 10px;
    }

    .card-header-right {
      padding-right: 10px;
      font-size: 1rem;
      color: #03d3ec;
    }
  }

  .ring-charts {
    height: 55%;
  }

  .card-footer {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .card-footer-item {
    padding: 5px 10px 0px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: rgba(6, 30, 93, 0.7);
    border-radius: 3px;

    .footer-title {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    .footer-detail {
      color: #1294fb;
      display: flex;
      font-size: 0.6rem;
      align-items: center;

      .dv-digital-flop {
        margin-right: 5px;
      }
    }
  }
</style>
