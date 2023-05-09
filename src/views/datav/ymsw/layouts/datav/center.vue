<template>
  <!-- 使用datav-layout-container包裹后会出现高度少一截的情况 -->
  <!-- <div class="datav-layout-container" style="width: 100%"> -->
  <!-- </div> -->
  <div style="position: fixed; margin-left: 10px; margin-top: 5px; z-index: 999">
    <a-space>
      <!-- <a-button type="primary" @click="setShowDivIndex(1)">水务一张图</a-button> -->
      <!-- <a-button type="default" @click="setShowDivIndex(2)">站点通讯图</a-button> -->
      <a-radio-group v-model:value="showDivIndex" name="radioGroup">
        <a-radio value="1" style="color: #fff">水务一张图</a-radio>
        <a-radio value="2" style="color: #fff">站点通讯图</a-radio>
      </a-radio-group>
      <!-- <a-button type="default" @click="setShowDivIndex(3)">旱情监测图</a-button> -->
      <!-- <a-button type="primary">预报</a-button>
      <a-button type="primary">预警</a-button>
      <a-button type="primary">预案</a-button>
      <a-button type="primary">预演</a-button> -->
    </a-space>
  </div>
  <flylineChart v-if="showDivIndex == 2" />
  <ymgis v-else />
</template>
<script>
  import { ref } from 'vue';

  import ymgis from '../../maps/ymgis.vue';
  import flylineChart from '../../maps/flyLineChartYm.vue';

  export default {
    name: 'DataView-CenterGis',
    components: {
      ymgis,
      flylineChart,
    },
    setup() {
      //控制显示的div
      let showDivIndex = ref(2);
      //演示操作，传入参数演示不通的效果
      const setShowDivIndex = (op) => {
        showDivIndex.value = op;
        switch (op) {
          case 1:
            //一张图首页
            break;
          case 2:
            //降雨等值面
            break;
          case 3:
            break;
          case 4:
            //飞行图
            break;
          default:
            break;
        }
      };
      return {
        showDivIndex,
        setShowDivIndex,
      };
    },
  };
</script>
<style lang="less">
  @import './../layout.less';
</style>
