<template>
  <dv-border-box-11 title="党员先锋" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12>
        <div class="card-header">
          <div class="card-header-left">先锋个人</div>
        </div>
        <div class="ring-charts"
          ><img style="height: 100%" src="../../../../../../../assets/images/person.png"
        /></div>
        <div class="card-header">
          <div class="card-header-left">数量</div>
          <div class="card-header-right">3人</div>
        </div>
      </dv-border-box-12>
      <dv-border-box-12>
        <div class="card-header">
          <div class="card-header-left">先锋股室</div>
        </div>
        <div class="ring-charts"
          ><img style="height: 100%" src="../../../../../../../assets/images/dept.png"
        /></div>
        <div class="card-header">
          <div class="card-header-left">数量</div>
          <div class="card-header-right">1个</div>
        </div>
      </dv-border-box-12>
      <dv-border-box-12>
        <div class="card-header">
          <div class="card-header-left">先锋项目</div>
        </div>
        <div class="ring-charts"
          ><img style="height: 100%" src="../../../../../../../assets/images/project.png"
        /></div>
        <div class="card-header">
          <div class="card-header-left">数量</div>
          <div class="card-header-right">2个</div>
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
    padding-left: 1rem;
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
    width: 40%;
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
