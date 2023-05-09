<template>
  <div class="cell-container">
    <div class="cell-header" @click="openTab()">河长制模块</div>

    <div class="cell-content-container">
      <div class="cell-chart-summary">
        <div style="padding-top: 0.6rem"
          ><img src="./../../../../../../assets/images/ym/p1.png" style="width: 2rem; height: 2rem"
        /></div>
        <div class="number" style="color: #f4ea2a">14</div>
        <div>县级河长</div>
      </div>
      <div class="cell-chart-summary">
        <div style="padding-top: 0.6rem"
          ><img src="./../../../../../../assets/images/ym/p2.png" style="width: 2rem; height: 2rem"
        /></div>
        <div class="number" style="color: #1296db">104</div>
        <div>乡级河长</div>
      </div>
      <div class="cell-chart-summary">
        <div style="padding-top: 0.6rem"
          ><img src="./../../../../../../assets/images/ym/p3.png" style="width: 2rem; height: 2rem"
        /></div>
        <div class="number" style="color: #1afa29">101</div>
        <div>村级河长</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    setup() {
      const openTab = () => {
        var open_link = window.open('', '_newtab');
        open_link.location = 'http://zy.ynrw.cn:8071/rwhzz/login1.jsp';
      };
      return { openTab };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
