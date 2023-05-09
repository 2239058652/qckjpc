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
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(0)"
          >历程</dv-decoration-11
        >
        <dv-decoration-7 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(1)"
          >总览</dv-decoration-7
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(2)"
          >一张图</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(3)"
          >水资源</dv-decoration-11
        >
        <dv-decoration-11 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(4)"
          >水安全</dv-decoration-11
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
        <!-- <a-button type="text" @click="setShowModuleIndex(1)">总览</a-button>
        <a-button type="text" @click="setShowModuleIndex(2)">一张图</a-button>
        <a-button type="text" @click="setShowModuleIndex(3)">水资源</a-button>
        <a-button type="text" @click="setShowModuleIndex(4)">水安全</a-button>
        <a-button type="text" @click="setShowModuleIndex(5)">水环境</a-button>
        <a-button type="text" @click="setShowModuleIndex(6)">水应用</a-button>
        <a-button type="text" @click="setShowModuleIndex(7)">党务管理</a-button>
        <a-button type="text" @click="setShowModuleIndex(8)">工程项目</a-button>
        <a-button type="text" @click="setShowModuleIndex(9)">后台管理</a-button> -->
      </div>
      <!-- <div class="userCenterContainer"></div> -->
    </div>
    <div class="mainContainer">
      <div class="gisContainer">
        <!-- <ymadmap v-if="showModuleIndex == 1" /> -->
        <!-- <ymStationsMap v-else-if="showModuleIndex == 2" /> -->
        <!-- <ymgis /> -->
        <!-- <cesiumTest /> -->
        <echartsMap />
      </div>
      <div class="leftFlowContainer" style="width: 30%">
        <div class="cellContentContainer" style="width: 100%; height: 32%">
          <!-- <monitorDataScrollTable /> -->
          <szySts />
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 42%">
          <saqIndex />
        </div>
        <!-- <div
          style="
            width: 100%;
            height: 33%;
            margin-top: 1rem;
            display: flex;
          "
        >
          <div class="cellContentContainer" style="width: 50%; height: 100%">
            <monitorStationSts
          /></div>
          <div class="cellContentContainer" style="width: 50%; height: 100%">
            <monitorWaterQualitySts
          /></div>
        </div> -->
        <div class="cellContentContainer" style="width: 100%; height: 22%">
          <!-- <monitorRainIntensity /> -->
          <shjIndex />
        </div>
      </div>
      <div class="rightFlowContainer" style="width: 30%">
        <!-- <div
          style="
            width: 100%;
            height: 33%;
            padding-bottom: 0.5rem;
            padding-top: 0.5rem;
            display: flex;
          "
        >
          <div class="cellContentContainer" style="width: 50%; height: 100%"> <biHzz /></div>
          <div class="cellContentContainer" style="width: 50%; height: 100%"> <biShyj /></div>
        </div> -->
        <div class="cellContentContainer" style="width: 100%; height: 32%">
          <djIndex />
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 32%">
          <deptIndex />
        </div>
        <!-- <div
          style="
            width: 100%;
            height: 33%;
            padding-bottom: 0.5rem;
            padding-top: 0.5rem;
            display: flex;
          "
        >
          <div class="cellContentContainer" style="width: 50%; height: 100%">
            <echartsPieDemo
          /></div>
          <div class="cellContentContainer" style="width: 50%; height: 100%"> <biXxsk /></div>
        </div> -->
        <div class="cellContentContainer" style="width: 100%; height: 32%">
          <pmIndex />
        </div>
      </div>
      <!-- <div class="bottomFlowContainer">
        <div class="bottomFlowContent">
          <digitalFlop />
        </div>
      </div> -->
      <div class="bottomFullWidthFlowContainer" style="height: 30%">
        <div class="bottomCenterFlowContent" style="width: 38%">
          <noticeIndex />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import { router } from '/@/router';

  import topHeader from '../datav/topHeader.vue';
  import headerMenu from './headerMenu.vue';
  import cellTemplate from './cellTemplate.vue';
  import ymgis from '../../maps/ymgis.vue';
  import ymadmap from '../../maps/ymadmap.vue';
  import ymStationsMap from '../../maps/ymStationsMap.vue';
  import cesiumTest from '../../maps/cesiumTest.vue';
  import echartsMap from '../../maps/echartsMap.vue';
  import monitorStationSts from '../../sections/monitor/monitorStationSts.vue';
  import monitorDataScrollTable from '../../sections/monitor/monitorDataScrollTable.vue';
  import monitorRainIntensity from '../../sections/monitor/monitorRainIntensity.vue';
  import monitorWaterQualitySts from '../../sections/monitor/monitorWaterQualitySts.vue';
  import biHzz from '../../sections/hzz/biHzzIndex.vue';
  import biShyj from '../../sections/shyj/biShyjIndex.vue';
  import biGqgl from '../../sections/gqgl/biGqIndex.vue';
  import biXxsk from '../../sections/xxsk/biXxskIndex.vue';
  import echartsDemo from '../../demos/echartsDemo.vue';
  import echartsPieDemo from '../../demos/echartsPieDemo.vue';
  import digitalFlop from '../../sections/static/digitalFlop.vue';
  import szySts from '../../sections/szy/szySts.vue';
  import saqIndex from '../../sections/saq/saqSts.vue';
  import shjIndex from '../../sections/shj/shjSts.vue';
  import djIndex from '../../sections/dj/djSts.vue';
  import deptIndex from '../../sections/dept/deptSts.vue';
  import pmIndex from '../../sections/pm/pmSts.vue';
  import noticeIndex from '../../sections/notice/noticeIndex.vue';

  export default {
    name: 'DataView',
    components: {
      topHeader,
      headerMenu,
      cellTemplate,
      ymgis,
      ymadmap,
      ymStationsMap,
      cesiumTest,
      echartsMap,
      monitorStationSts,
      monitorDataScrollTable,
      monitorRainIntensity,
      monitorWaterQualitySts,
      biHzz,
      biShyj,
      biGqgl,
      biXxsk,
      echartsDemo,
      echartsPieDemo,
      digitalFlop,
      szySts,
      saqIndex,
      shjIndex,
      djIndex,
      deptIndex,
      pmIndex,
      noticeIndex,
    },
    setup() {
      //控制显示的模块
      let showModuleIndex = ref(1);
      //演示操作，传入参数演示不通的效果
      const setShowModuleIndex = (op) => {
        showModuleIndex.value = op;
        switch (op) {
          case 0:
            //水务历程
            router.push('/datav/swlc');
            router.go(1);
            break;
          case 1:
            //总览
            // router.push('/datav/ymsw');
            // router.go(1);
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
            router.push('/datav/saq');
            router.go(1);
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
      return { showModuleIndex, setShowModuleIndex };
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

      // span {
      //   background-color: aqua;
      // }
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
    // width: 30%;
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
    // width: 30%;
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
    bottom: 0.7rem;
    width: 100%;
    //高度使用父容器.mainContainer的百分比，与左右浮动的高度一致
    height: 30%;
    display: flex;
    justify-content: center;
  }
  .bottomCenterFlowContent {
    //左右2侧浮动宽度各为30%
    // width: 38%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
  }
</style>
