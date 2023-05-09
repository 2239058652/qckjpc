<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header />

      <div class="main-content">
        <digital-flop />

        <div class="block-left-right-content">
          <left />

          <div class="block-top-bottom-content">
            <div class="block-top-content">
              <center />
            </div>
          </div>

          <right />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
  import { onMounted } from 'vue';

  import topHeader from './topHeader.vue';
  import digitalFlop from '../../sections/static/digitalFlop.vue';
  import left from './left.vue';
  import center from './center.vue';
  import right from './right.vue';
  // import rankingBoard from './rankingBoard.vue';
  // import roseChart from './roseChart.vue';
  // import waterLevelChart from './waterLevelChart.vue';
  // import scrollBoard from './scrollBoard.vue';
  // import cards from './cards.vue';

  export default {
    name: 'DataView',
    components: {
      topHeader,
      digitalFlop,
      left,
      center,
      right,
    },
    setup() {
      const setRootFontSize = () => {
        /* 获取布局视口的宽度，也就是浏览器宽度*/
        let width = document.documentElement.clientWidth;
        /* 经过换算，动态计算不同设备的font-size值 1080p计算为11.25 */
        let size = (width / 1920) * 20;
        /* 设置 html的font-size属性*/
        document.documentElement.style.fontSize = size + 'px';
        /* 必须设置在body上，设置在html中无效*/
        document.getElementsByTagName('body')[0].style.fontSize = size + 'px';
        // 调试获取设置值并输出
        let getBodyFontSize = document.getElementsByTagName('body')[0].style.fontSize;
        console.log(
          'body width=' + width + ' font_size=' + size + ' getBodyFontSize=' + getBodyFontSize,
        );
      };
      onMounted(() => {
        //当加载页面的时候设置生效
        setRootFontSize();
        window.onresize = () => {
          //当页面尺寸改变的时候生效
          setRootFontSize();
        };
      });
      return {};
    },
  };
</script>

<style lang="less">
  @import './../layout.less';
</style>
