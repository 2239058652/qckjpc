<template>
  <dv-border-box-11 title="水务职能模块" class="datav-border-box-content">
    <div
      class="datav-border-box-content-container"
      style="display: flex; flex-direction: column; flex-wrap: wrap"
    >
      <div style="width: 50%; height: 50%" @click="openTab1('http://sh.ynrw.cn')">
        <img
          src="../../../../../../../assets/images/swiper/syy/13.png"
          style="width: 100%; height: 100%"
          mode="widthFix"
          title="山洪预警"
        />
      </div>
      <div
        style="width: 50%; height: 50%"
        @click="openTab1('http://sh.ynrw.cn:8071/rwhzz/login1.jsp')"
      >
        <img
          src="../../../../../../../assets/images/swiper/syy/14.png"
          style="width: 100%; height: 100%"
          mode="widthFix"
          title="雨水情及大坝安全"
        />
      </div>
      <div style="width: 50%; height: 50%" @click="openTab1('http://36.134.74.203:8260')">
        <img
          src="../../../../../../../assets/images/swiper/syy/15.png"
          style="width: 100%; height: 100%"
          mode="widthFix"
          title="河长制"
        />
      </div>
      <div style="width: 50%; height: 50%" @click="openTab1('http://118.31.180.57:8010/login')">
        <img
          src="../../../../../../../assets/images/swiper/syy/16.png"
          style="width: 100%; height: 100%"
          mode="widthFix"
          title="灌区管理"
        />
      </div>
    </div>
  </dv-border-box-11>
</template>
<script lang="ts">
  export default {
    setup() {
      const openTab1 = (url) => {
        var open_link = window.open('', '_newtab');
        open_link.location = url; //'http://sh.ynrw.cn';
      };

      return { openTab1 };
    },
  };
</script>
<style lang="less">
  @import '../../../layouts/layout.less';
</style>
