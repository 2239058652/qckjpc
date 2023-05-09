<template>
  <div class="cell-container">
    <div class="cell-header" @click="openTab()">小型水库雨水情及安全模块</div>

    <div class="cell-content-container">
      <!-- 锥形柱图--将根据自动排序后的排名顺序使用img中的图片。 -->
      <dv-conical-column-chart class="cell-content" :config="config1" />
    </div>
  </div>
</template>
<script>
  import waterImg from '/@/../assets/images/ym/w.png';
  import rainImg from '/@/../assets/images/ym/r.png';
  import senliuImg from '/@/../assets/images/ym/liu.png';
  import senyaImg from '/@/../assets/images/ym/ya.png';
  import qiujiImg from '/@/../assets/images/ym/v1.png';
  import qiangjiImg from '/@/../assets/images/ym/v2.png';

  export default {
    setup() {
      const config1 = {
        data: [
          {
            name: '水位',
            value: 7,
          },
          {
            name: '雨量',
            value: 7,
          },
          {
            name: '渗流',
            value: 5,
          },
          {
            name: '渗压',
            value: 25,
          },
          {
            name: '球机',
            value: 8,
          },
          {
            name: '枪机',
            value: 9,
          },
        ],
        img: [senyaImg, qiangjiImg, qiujiImg, waterImg, rainImg, senliuImg],
        showValue: true,
      };

      const openTab = () => {
        var open_link = window.open('', '_newtab');
        open_link.location = 'http://36.134.74.203:8260';
      };

      return { config1, openTab };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
</style>
