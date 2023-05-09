<template>
  <dv-border-box-11 title="视频在线监测" class="datav-border-box-content">
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
        header: [ '行政区划', '监测位置','在线情况','观看视频'],
  data: [
    ['黄瓜园镇','1#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['平田乡','2#监测点东', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['新华乡', '3#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['老城乡', '4#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['物茂乡','5#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['黄瓜园', '6#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['江边乡', '7#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['羊街镇', '8#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['姜驿乡', '9#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>'],
    ['贡茶村', '10#监测点', '在线', '<span style="color:#00fcff;border: 1px solid #fff">视频</span>']
    
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
