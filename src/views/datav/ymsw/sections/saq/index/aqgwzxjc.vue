<template>
  <dv-border-box-11 title="安全管网在线监测" class="datav-border-box-content">
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
        header: ['监测站点', '管压力', '管阀门','灌流量'],
  data: [
  ['1#监测点', '1.6', '0.9', '25.55'],
    ['2#监测点', '1.5', '0.5', '23.2'],
    ['3#监测点', '1', '0.2', '10.1'],
    ['4#监测点', '1.7', '1', '10.1'],
    ['5#监测点', '1.5', '1.1', '28'],
    ['6#监测点', '1.5', '1', '28'],
    ['7#监测点', '1.3', '1.1', '16.3'],
    ['8#监测点', '1.8', '1.2', '29'],
    ['9#监测点', '1.7', '1', '20.5'],
    ['10#监测点','2.3', '2', '26.6'],
    ['11#监测点','1.1', '1', '16.5'],
    ['12#监测点', '2', '1.5', '23'],
    ['13#监测点','1.9', '1.7', '15'],
    ['14#监测点','1.5', '1.2', '23'],
    ['15#监测点', '1.9', '1.2', '26.8'],
    ['16#监测点', '2', '1.7', '18'],
    ['17#监测点','1.6', '1.3', '18'],
    ['18#监测点', '0.5', '0.3', '9.2'],
    ['19#监测点', '2', '1.6', '18.1'],
    ['20#监测点','1.7', '1.2', '12.1'],
    ['21#监测点', '2', '1.5', '14']
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  rowNum:7,
  waitTime:5000,
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
