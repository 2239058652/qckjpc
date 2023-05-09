<template>
  <dv-border-box-11 title="河库长巡查" class="datav-border-box-content">
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
        header: ['乡镇', '河长姓名', '巡河情况','时间'],
  data: [
    ['黄瓜园镇','张三', '正常', '2023/2/11'],
    ['平田乡','王晓东', '正常', '2023/2/12'],
    ['新华乡', '李鑫一', '正常', '2023/2/13'],
    ['老城乡', '孙武', '正常', '2023/2/14'],
    ['物茂乡','杜威', '正常', '2023/2/15'],
    ['黄瓜园-', '张三方', '正常', '2023/2/16'],
    ['江边乡', '尹骑威0', '正常', '2023/2/17'],
    ['羊街镇', '黄强', '正常', '2023/2/18'],
    ['姜驿乡', '李四', '正常', '2023/2/19'],
    ['贡茶村', '万从会', '正常', '2023/2/20']
    
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  rowNum:7,
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
