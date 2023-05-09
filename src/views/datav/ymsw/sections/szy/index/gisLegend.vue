<template>
  <div class='tl'>
    <div class="tb"><img style="height: 100%; width:100%;" src="../../../../../../../assets/images/ym/liu.png"></div>
    <div class="tbmc" style="text-align: ;center">河流</div>
    <div class="tb"><img style="height: 100%; width:100%;" src="../../../../../../../assets/images/ym/rs5.png"></div>
    <div class="tbmc">中型水库</div>
    <div class="tb"><img style="height: 100%; width:100%;" src="../../../../../../../assets/images/ym/rs1.png"></div>
    <div class="tbmc">小型水库</div>
    <div class="tb"><img style="height: 100%; width:100%;" src="../../../../../../../assets/images/ym/rs2.png"></div>
    <div class="tbmc">坝塘</div>
    <div class="tb"><img style="height: 100%; width:100%;" src="../../../../../../../assets/images/ym/r.png"></div>
    <div class="tbmc">灌区</div>
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue';

export default {
  components: {},
  setup() {
    onMounted(() => { });
    return {};
  },
};
</script>
<style lang="less">
@import './../../../layouts/layout.less';

.tl {
  height: 100%;
  width: 100%;
}

.tb {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 1%;
  float: left;
}

.tbmc {
  float: left;
  font-size: 0.8rem;
  padding-right: 1rem;
}</style>
