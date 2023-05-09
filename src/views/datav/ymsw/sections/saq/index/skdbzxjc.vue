<template>
  <dv-border-box-11 title="水库大坝在线监测" class="datav-border-box-content">
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
        header: ['水库名称', '库水位', '浸润线','渗流量'],
  data: [
  ['丙令水库', '1233', '正常', '1.23'],
    ['秧田箐水库', '1343.33', '正常', '1.67'],
    ['大河边','1453.23', '正常', '1.2'],
    ['弯腰树水库','1256.34', '正常', '0.67'],
    ['河尾水库', '1256.67', '正常', '1.45'],
    ['上你莫水库','1371.23', '正常', '2.58'],
    ['鸡冠山','1289', '正常', '2.03'],
    ['舍多', '1135.34', '正常', '1.35'],
    ['鼠街水库', '1124.27', '正常', '2.34'],
    ['马道地水库','1453.34', '正常', '0.57'],
    ['新河水库', '1264.36', '正常', '2.78'],
    ['储麦水库', '1342.21', '正常', '0.25'],
    ['卡莫水库','1295.23', '正常', '1.56'],
    ['丙令水库', '1142.76', '正常', '3.50'],
    ['鼠街水库', '1345.22', '正常', '1.56'],
    ['弯腰树水库', '1267.77', '正常', '0.59'],
    ['冷水箐水库', '1456.78', '正常', '0.46'],
    ['面前水库', '1378.58', '正常', '0.98'],
    ['能禹水库', '1579.11', '正常', '2.45'],
    ['致富水库', '1346.46', '正常', '1.54']

  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  rowNum:6,
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
