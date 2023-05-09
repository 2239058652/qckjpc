<template>
  <!-- <dv-border-box-12> -->
  <div class="datav-border-box-content-container">
    <dv-border-box-11 title="红榜" class="datav-border-box-content">
      <img style="height;: 100%" src="../../../../../../../assets/images/ym/ps/band1.png" />
    </dv-border-box-11>
    <dv-border-box-11 title="黄榜" class="datav-border-box-content">
      <img style="height: 100%" src="../../../../../../../assets/images/ym/ps/band2.png" />
    </dv-border-box-11>
    <dv-border-box-11 title="黑榜" class="datav-border-box-content">
      <img style="height: 100%" src="../../../../../../../assets/images/ym/ps/band3.png" />
    </dv-border-box-11>
  </div>
  <!-- </dv-border-box-12> -->
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
</style>
