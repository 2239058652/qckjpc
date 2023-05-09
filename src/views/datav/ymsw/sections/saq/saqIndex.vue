<template>
  <div class="pageContainer">
    <div class="topContainer">
      <div class="titleContainer">
        <div class="title-logo">
          <img
            style="height: 100%; object-fit: contain"
            src="../../../../../../assets/images/sllogo-blue.png"
          />
        </div>
        <div class="title-text">元谋县智慧水务大数据中心平台</div>
      </div>
      <div class="menuContainer">
        <!-- <headerMenu /> -->
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(1)"
          >总览</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(2)"
          >一张图</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(3)"
          >水资源</dv-decoration-11
        >
        <dv-decoration-7 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(4)"
          >水安全</dv-decoration-7
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(5)"
          >水环境</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(6)"
          >水应用</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(7)"
          >党建引领</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(8)"
          >工程项目</dv-decoration-11
        ><img
          style="height: 1rem; object-fit: contain"
          src="../../../../../../assets/images/menu.png"
          @click="setShowModuleIndex(9)"
        />
        <!-- <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(9)"
          >后台管理</dv-decoration-11
        > -->
      </div>
      <!-- <div class="userCenterContainer"></div> -->
    </div>
    <div class="mainContainer">
      <div class="bottomFullWidthFlowContainer">
        <div class="bottomCenterFlowContent" style="width: 48%">
          <div class="cellContentContainer" style="width: 100%; height: 56%">
            <div style="width: 100%; height: 100%; position: relative">
              <div style="position: absolute; top: 2%; left: 2%; color: rgba(255,255,255,0.5); font-size: 0.8rem; z-index: 1;">
                <!-- <button style="margin-right: 1rem;" @click=" xz(0)">站点分布图</button>
                <button @click=" xz(1)">降雨等值面图</button> -->
                <input v-model="xs" type="radio" value="1" checked />站点分布图
                <input v-model="xs" type="radio" value="2" style="margin-left: 1rem;" />降雨强度图
              </div>
              <!-- 站点分布图 -->
              <div v-if="xs == 1" style="width: 100%; height: 100%; position: absolute; bottom: 0; right: 0">
                <saqEchartsMap />
              </div>
              <!-- 降雨等值面图 -->
              <div v-if="xs == 2" style="width: 100%; height: 100%; position: absolute; bottom: 0; right: 0">
                <div style="width: 100%; height: 100%;">
                  <img style="height: auto; width: auto; max-width: 100%;  max-height: 100%; margin: 0 auto;" src="../../../../../../../assets/images/ym/jvdzm.png">
                </div>
                <!-- 降雨等值面图例 -->
                <div style="width: 15%; height: 8rem;position: absolute; bottom: 2%; right: 3%; font-size: 0.8rem;">
                  <div style="width: 100%; height: 1rem;text-align: left;">单位:mm</div>
                  <div style="width: 20%; height: 0.6rem; background-color: #A6F28E; float: left; margin-top: 0.4rem; text-align: left;"></div><div style="height: 1.2rem;width: 70%;">0-10</div>
                  <div style="width: 20%; height: 0.6rem; background-color: #3DB93D; float: left; margin-top: 0.4rem; text-align: left;"></div><div style="height: 1.2rem;width: 70%;">10-25</div>
                  <div style="width: 20%; height: 0.6rem; background-color: #61B8FF; float: left; margin-top: 0.4rem; text-align: left;"></div><div style="height: 1.2rem;width: 70%;">25-50</div>
                  <div style="width: 20%; height: 0.6rem; background-color: #0000FE; float: left; margin-top: 0.4rem; text-align: left;"></div><div style="height: 1.2rem;width: 70%;">50-100</div>
                  <div style="width: 20%; height: 0.6rem; background-color: #FA00FA; float: left; margin-top: 0.4rem; text-align: left;"></div><div style="height: 1.2rem;width: 70%;">100-200</div>
                  <div style="width: 20%; height: 0.6rem; background-color: #7F013E; float: left; margin-top: 0.4rem; text-align: left;"></div><div style="height: 1.2rem;width: 70%;">>=200</div>
                </div>
              </div>
            </div>
          </div>
          <div class="cellContentContainer" style="width: 100%; height: 40%">
            <gzdt />
          </div>
        </div>
      </div>
      <div class="leftFlowContainer" style="width: 25%">
        <div class="cellContentContainer" style="width: 100%; height: 40%">
          <zthd />
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 28%">
          <jylzxjc />
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 28%">
          <aqgwzxjc />
        </div>
      </div>
      <div class="rightFlowContainer" style="width: 25%">
        <div class="cellContentContainer" style="width: 100%; height: 40%">
          <gzcg />
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 28%">
          <skdbzxjc />
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 28%">
          <shzhtj />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import { router } from '/@/router';

  import videoDemo from '../../demos/videoDemo.vue';

  import zthd from './index/zthd.vue';
  import jylzxjc from './index/jylzxjc.vue';
  import aqgwzxjc from './index/aqgwzxjc.vue';
  import gzdt from './index/gzdt.vue';
  import gzcg from './index/gzcg.vue';
  import skdbzxjc from './index/skdbzxjc.vue';
  import shzhtj from './index/shzhtj.vue';
  import saqEchartsMap from '../../maps/saqEchartsMap.vue';

  export default {
    name: 'saqIndex',
    components: { videoDemo, zthd, jylzxjc, aqgwzxjc, gzdt, gzcg, skdbzxjc, shzhtj, saqEchartsMap  },
    setup() {
      //控制显示的模块
      let showModuleIndex = ref(1);
      //控制显示是站点分布图或者降雨强度图，1：站点分布图；2：降雨强度图
      let xs = ref(1);
      //演示操作，传入参数演示不通的效果
      const setShowModuleIndex = (op) => {
        showModuleIndex.value = op;
        switch (op) {
          case 1:
            //总览
            router.push('/datav/ymsw');
            router.go(1);
            break;
          case 2:
            //一张图
            router.push('/datav/ymmap');
            router.go(1);
            break;
          case 3:
            //水资源
            router.push('/datav/szy');
            router.go(1);
            break;
          case 4:
            //水安全
            // router.push('/datav/saq');
            // router.go(1);
            break;
          case 5:
            //水环境
            router.push('/datav/shj');
            router.go(1);
            break;
          case 6:
            //水应用
            router.push('/datav/sbm');
            router.go(1);
            break;
          case 7:
            //党建引领
            router.push('/datav/dj');
            router.go(1);
            break;
          case 8:
            //工程项目
            router.push('/datav/gcxm');
            router.go(1);
            break;
          case 9:
            router.push('/demo/qzj');
            router.go(1);
            break;
          default:
            break;
        }
      };

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
      return { showModuleIndex, setShowModuleIndex , xs };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
  //定义
  @topContainerHeight: 4rem;
  @bottomContainerHeight: 4rem;
  @mainContainerDiffHeight: 8rem;

  .pageContainer {
    width: 100%;
    height: 100%;
  }

  .topContainer {
    height: @topContainerHeight;
    width: 100%;
    // background-color: rgba(16, 122, 220, 0.8);
    // background-color: rgba(59, 130, 246, 0.5);
    // background-color: #030409;
    // background-color: rgba(0, 25, 46, 0.9);
    background-color: rgba(17, 30, 100, 0.9);
    color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .titleContainer {
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .menuContainer {
    height: 100%;
    width: 60%;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 1.2rem;
      color: aliceblue;
    }
  }

  .userCenterContainer {
    height: 100%;
    width: 10%;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: nowrap;
    // justify-content: center;
    // align-items: center;
  }

  .title-logo {
    width: 5rem;
    height: 100%;
    text-align: center;
    padding: 0 0.5rem;
  }

  .title-text {
    width: 100%;
    // height: 100%;
    line-height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
  }

  .mainContainer {
    //高度为父容器的100%减去titleContainer的rem高度
    // height: calc(~'100% - @topContainerHeight');
    height: calc(~'100% - 4rem');
    width: 100%;
    display: flex;
    //与gis中的背景色相同rgb(0,25,46)
    background-color: rgba(0, 25, 46, 1);
    //悬浮块背景色
    // background-color: rgba(0, 0, 0, 0.3);
  }

  .gisContainer {
    height: 100%;
    width: 100%;
  }

  .leftFlowContainer {
    position: absolute;
    left: 0.5rem;
    // width: 10%;
    //高度为父容器mainContainer的100%减去bottomFlowContent的rem高度，加4rem为边距
    // height: calc(~'100% - @mainContainerDiffHeight');
    height: calc(~'100% - 4rem');
    // padding-top: 1rem;
    overflow: hidden;
    // border-radius: 20px;
    // background-color: rgba(0, 0, 0, 0.3);
    // border: 1px solid rbga(0, 0, 0, 0.2);
    // box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .rightFlowContainer {
    position: absolute;
    right: 0.5rem;
    // width: 10%;
    //高度为父容器mainContainer的100%减去bottomFlowContent的rem高度，加4rem为边距
    // height: calc(~'100% - @mainContainerDiffHeight');
    height: calc(~'100% - 4rem');
    // padding-top: 1rem;
    overflow: hidden;
    // border-radius: 20px;
    // background-color: rgba(0, 0, 0, 0.3);
    // border: 1px solid rbga(0, 0, 0, 0.2);
    // box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .bottomFlowContainer {
    position: absolute;
    text-align: center;
    bottom: 0.5rem;
    width: 100%;
    height: @bottomContainerHeight;
    display: flex;
    justify-content: center;
  }

  .bottomFlowContent {
    // width: calc(~'100% - 2rem');
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 5px 0px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .bottomFullWidthFlowContainer {
    position: absolute;
    text-align: center;
    bottom: 0rem;
    width: 100%;
    //高度使用父容器.mainContainer的百分比，与左右浮动的高度一致
    height: calc(~'100% - 4rem');
    display: flex;
    justify-content: center;
  }

  .bottomCenterFlowContent {
    //左右2侧浮动宽度各为30%
    width: 38%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .centerFlowContainer {
    //左右2侧浮动宽度各为30%
    width: 38%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  //单元格内容容器样式，圆角边框，半透明背景
  .cellContentContainer {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .card-item {
    background-color: rgba(6, 30, 93, 0.5);
    // border-top: 2px solid rgba(1, 153, 209, 0.5);
    width: 32%;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    // height: 20%;
    align-items: center;
    justify-content: space-between;

    .card-header-left {
      font-size: 0.6rem;
      font-weight: bold;
      padding-left: 10px;
    }

    .card-header-right {
      padding-right: 10px;
      font-size: 1rem;
      color: #03d3ec;
    }
  }

  .ring-charts {
    height: 55%;
  }

  .card-footer {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .card-footer-item {
    padding: 5px 10px 0px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: rgba(6, 30, 93, 0.7);
    border-radius: 3px;

    .footer-title {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    .footer-detail {
      color: #1294fb;
      display: flex;
      font-size: 0.6rem;
      align-items: center;

      .dv-digital-flop {
        margin-right: 5px;
      }
    }
  }
</style>
