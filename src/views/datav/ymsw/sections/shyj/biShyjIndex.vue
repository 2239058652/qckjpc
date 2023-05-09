<template>
  <div class="cell-container">
    <div class="cell-header" @click="openTab()">山洪灾害监测预警模块</div>

    <div class="cell-content-container">
      <div class="cell-chart-summary">
        <div style="padding-top: 0.6rem"
          ><img src="./../../../../../../assets/images/ym/w1.png" style="width: 2rem; height: 2rem"
        /></div>
        <div class="number" style="color: #d81e06">0</div>
        <div>一级预警</div>
      </div>
      <div class="cell-chart-summary">
        <div style="padding-top: 0.6rem"
          ><img src="./../../../../../../assets/images/ym/w2.png" style="width: 2rem; height: 2rem"
        /></div>
        <div class="number" style="color: #f4ea2a">0</div>
        <div>二级预警</div>
      </div>
      <div class="cell-chart-summary">
        <div style="padding-top: 0.6rem"
          ><img src="./../../../../../../assets/images/ym/w3.png" style="width: 2rem; height: 2rem"
        /></div>
        <div class="number" style="color: #1296db">1</div>
        <div>三级预警</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const openTab = () => {
        var open_link = window.open('', '_newtab');
        open_link.location = 'http://sh.ynrw.cn';
      };
      return { openTab };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
