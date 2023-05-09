<template>
  <dv-border-box-11 title="降雨量在线监测" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12> 
        <dv-scroll-board :config="config1" />
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>
<script lang="ts">
  import { onMounted } from 'vue';

  export default {
    components: {},
    setup() {
      const config1 = {
        header: ['雨量站', '实时降雨', '8小时累计','日雨量'],
  data: [
    ['上你莫水库','0.5', '2', '5.5'],
    ['弯腰树水库','0', '0', '0'],
    ['河尾水库', '1.5', '3.5', '6.5'],
    ['鼠街水库', '1', '8', '10'],
    ['马道地水库','0', '0', '0'],
    ['新河水库', '0.5', '1', '3.5'],
    ['丙令水库', '0', '0.5', '4'],
    ['河外', '0', '0', '0'],
    ['猛连', '1', '1.5', '3.5'],
    ['领庄', '0', '0', '0'],
    ['挨小', '0.5', '2', '5.5'],
    ['波哼', '0.5', '2', '4.5'],
    ['已波龙', '0', '0', '1'],
    ['那能', '0.5', '2', '3.5'],
    ['秧田箐水库', '1.5', '3', '4.5'],
    ['储麦水库', '0', '0', '0'],
    ['卡莫水库','0.5', '1', '3.5'],
    ['丙令水库', '2', '2.5', '5.5'],
    ['鼠街水库', '1.5', '2', '6.5'],
    ['弯腰树水库', '0.5', '3', '8.5'],
    ['冷水箐水库', '2.5', '3', '7.5'],
    ['面前水库', '0.5', '2', '6.5'],
    ['能禹水库', '1', '2', '3'],
    ['致富水库', '0.5', '2', '5.5']
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  rowNum:6,
  waitTime:3000,
  //oddRowBGC:	['#c2e6f2']
      };
      onMounted(() => {});
      return { config1};
    },
  };
</script>
<style lang="less">
  @import './../../../layouts/layout.less';
</style>
