<template>
  <dv-border-box-11 title="目标任务" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <div style="width: 50%; height: 100%">
        <dv-border-box-12>
          <div
            style="
              width: 100%;
              height: 10%;
              font-size: 0.8rem;
              text-align: center;
              padding-top: 5%;
              font-weight: bold;
            "
            >工程项目件数</div
          >
          <dv-water-level-pond
            :config="option1"
            style="width: 60%; height: 45%; position: absolute; top: 17%; left: 17%"
          />
          <div class="card-header">
            <div
              class="card-header-left"
              style="font-size: 0.6rem; text-align: center; padding-top: 140%; font-weight: bold"
              >总件数</div
            >
            <div
              class="card-header-right"
              style="font-size: 0.6rem; text-align: center; padding-top: 140%; font-weight: bold"
              >28件</div
            >
            <div
              class="card-header-left"
              style="font-size: 0.6rem; text-align: center; padding-top: 180%; font-weight: bold"
              >完成</div
            >
            <div
              class="card-header-right"
              style="font-size: 0.6rem; text-align: center; padding-top: 180%; font-weight: bold"
              >14件</div
            >
          </div>
        </dv-border-box-12>
      </div>
      <div style="width: 50%; height: 100%">
        <dv-border-box-12>
          <div
            style="
              width: 100%;
              height: 10%;
              font-size: 0.8rem;
              text-align: center;
              padding-top: 5%;
              font-weight: bold;
            "
            >总投资额</div
          >
          <dv-percent-pond
            :config="config1"
            style="width: 60%; height: 35%; position: absolute; top: 25%; left: 18%"
          />
          <div class="card-header">
            <div
              class="card-header-left"
              style="font-size: 0.6rem; text-align: center; padding-top: 140%; font-weight: bold"
              >总投资额</div
            >
            <div
              class="card-header-right"
              style="font-size: 0.6rem; text-align: center; padding-top: 140%; font-weight: bold"
              >134.48亿元</div
            >
            <div
              class="card-header-left"
              style="font-size: 0.6rem; text-align: center; padding-top: 180%; font-weight: bold"
              >完成额</div
            >
            <div
              class="card-header-right"
              style="font-size: 0.6rem; text-align: center; padding-top: 180%; font-weight: bold"
              >25.43亿元</div
            >
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </dv-border-box-11>
</template>
<script lang="ts">
  export default {
    components: {},
    setup() {
      let data = (14 * 100) / 28;
      const option1 = {
        data: [data],
        waveNum: 2,
        waveHeight: 30,
        shape: 'round',
      };
      const config1 = {
        colors: ['#06fe86'],
        value: 25,
        borderWidth: 6,
        borderRadius: 10,
        borderGap: 5,
      };
      return { option1, config1 };
    },
  };
</script>
<style lang="less">
  @import './../../../layouts/layout.less';
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
  .card-header {
    display: flex;
    height: 20%;
    align-items: center;
    padding-bottom: -10%;
    justify-content: space-between;

    .card-header-left {
      font-size: 0.6rem;
      font-weight: bold;
      padding-left: 10px;
    }

    .card-header-right {
      padding-right: 10px;
      font-size: 0.6rem;
      color: #03d3ec;
    }
  }

  .ring-charts {
    height: 62%;
    padding-left: 1.8rem;
    padding-top: 2.3rem;
  }
</style>
