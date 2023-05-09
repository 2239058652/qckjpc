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
        <dv-decoration-7 style="width: 6rem; height: 2rem" @click="setShowModuleIndex(2)"
          >一张图</dv-decoration-7
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
      </div>
      <!-- <div class="userCenterContainer"></div> -->
    </div>
    <div class="mainContainer">
      <div class="gisContainer">
        <ymStationsMap />
        <!-- <ymgis /> -->
      </div>
      <!-- <div class="leftFlowContainer" style="width: 10%"> -->
      <!-- <div class="cellContentContainer" style="width: 100%; height: 28%">
          <dv-border-box-11 title="水资源" class="datav-border-box-content">
            <dv-decoration-7 style="width: 5rem; height: 1.5rem; font-size: 1rem"
              >河流</dv-decoration-7
            >
            <dv-decoration-7 style="width: 5rem; height: 1.5rem">湖泊</dv-decoration-7>
            <dv-decoration-7 style="width: 5rem; height: 1.5rem">水库</dv-decoration-7>
            <dv-decoration-11 style="width: 5rem; height: 1.5rem">坝塘</dv-decoration-11>
            <dv-decoration-11 style="width: 5rem; height: 1.5rem">沟渠</dv-decoration-11>
          </dv-border-box-11>
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 28%; margin-top: 0.5rem">
          <dv-border-box-11 title="监测站点" class="datav-border-box-content">
            <dv-decoration-7 style="width: 6rem; height: 2rem">视频站</dv-decoration-7>
            <dv-decoration-7 style="width: 6rem; height: 2rem">水位站</dv-decoration-7>
            <dv-decoration-7 style="width: 6rem; height: 2rem">雨量站</dv-decoration-7>
            <dv-decoration-7 style="width: 6rem; height: 2rem">流量站</dv-decoration-7>
            <dv-decoration-11 style="width: 6rem; height: 2rem">水质站</dv-decoration-11>
          </dv-border-box-11>
        </div>
        <div class="cellContentContainer" style="width: 100%; height: 25%; margin-top: 0.5rem">
          <dv-border-box-11 title="水部门" class="datav-border-box-content">
            <dv-decoration-7 style="width: 6rem; height: 2rem">防汛办</dv-decoration-7>
            <dv-decoration-7 style="width: 6rem; height: 2rem">河长办</dv-decoration-7>
            <dv-decoration-7 style="width: 6rem; height: 2rem">运管站</dv-decoration-7>
            <dv-decoration-11 style="width: 6rem; height: 2rem">灌区局</dv-decoration-11>
          </dv-border-box-11>
        </div> -->
      <!-- </div> -->
      <div class="rightFlowContainer" style="width: 10%"> </div>
      <div class="bottomFullWidthFlowContainer" style="height: 20%">
        <div style="width: 100%; height: 100%">
          <div style="width: 40%; height: 100%; display: flex">
            <!-- <noticeIndex /> -->
            <div class="cellContentContainer" style="width: 32%; height: 100%">
              <dv-border-box-11 title="水资源" class="datav-border-box-content">
                <div class="datav-border-box-content-container">
                  <!-- <dv-border-box-12> -->
                  <dv-scroll-board :config="config1" style="width: 100%; height: 100%" />
                  <!-- </dv-border-box-12> -->
                </div>
              </dv-border-box-11>
            </div>
            <div class="cellContentContainer" style="width: 32%; height: 100%; margin-top: 0.5rem">
              <dv-border-box-11 title="监测站点" class="datav-border-box-content">
                <div class="datav-border-box-content-container">
                  <!-- <dv-border-box-12> -->
                  <dv-scroll-board :config="config2" style="width: 100%; height: 100%" />
                  <!-- </dv-border-box-12> -->
                </div>
              </dv-border-box-11>
            </div>
            <!-- <div class="cellContentContainer" style="width: 32%; height: 100%; margin-top: 0.5rem">
              <dv-border-box-11 title="水应用" class="datav-border-box-content">
                <div class="datav-border-box-content-container">
                  <dv-border-box-12>
                  <dv-scroll-board :config="config3" style="width: 100%; height: 100%" />
                  </dv-border-box-12>
                </div>
              </dv-border-box-11>
            </div> -->
            <div class="cellContentContainer" style="width: 32%; height: 100%; margin-top: 0.5rem">
              <dv-border-box-11 title="工程灌区" class="datav-border-box-content">
                <div class="datav-border-box-content-container">
                  <!-- <dv-border-box-12> -->
                  <dv-scroll-board :config="config4" style="width: 100%; height: 100%" />
                  <!-- </dv-border-box-12> -->
                </div>
              </dv-border-box-11>
            </div>
          </div>
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
  import szyIndex from '../../sections/szy/szySts.vue';
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
      szyIndex,
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
          case 1:
            //总览
            router.push('/datav/ymsw');
            router.go(1);
            break;
          case 2:
            //一张图
            // router.push('/datav/ymmap');
            // router.go(1);
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
            //水部门
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

      const config1 = {
        header: ['类型', '数量'],
        data: [
          ['河流', '65条'],
          ['水库', '97座'],
          ['坝塘', '55个'],
          ['灌区', '11.4万亩'],
          ['渠道', '125条'],
        ],
        index: false,
        // columnWidth: [100, 40, 20],
        align: ['center'],
        carousel: 'page',
        rowNum: 5,
      };

      const config2 = {
        header: ['类型', '数量'],
        data: [
          ['视频站', '56个'],
          ['水位站', '38个'],
          ['雨量站', '27个'],
          ['水质站', '18个'],
        ],
        index: false,
        // columnWidth: [100, 40, 20],
        align: ['center'],
        carousel: 'page',
        rowNum: 4,
      };

      const config3 = {
        header: ['类型', '数量'],
        data: [
          ['防汛办', '8人'],
          ['防汛办', '7人'],
          ['运管站', '2人'],
          ['灌区管理局', '12人'],
        ],
        index: false,
        // columnWidth: [100, 40, 20],
        align: ['center'],
        carousel: 'page',
        rowNum: 4,
      };

      const config4 = {
        header: ['类型', '数量'],
        data: [
          ['水源工程', '12件'],
          ['水库除险加固工程', '93件'],
          ['沟渠工程', '2件'],
          ['饮水安全工程', '15个'],
          ['河道治理工程', '8个'],
          ['高效节水灌区项目', '1个'],
          ['其他工程', '0个'],
        ],
        index: false,
        // columnWidth: [100, 40, 20],
        align: ['center'],
        carousel: 'page',
        rowNum: 7,
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
      return { showModuleIndex, setShowModuleIndex, config1, config2, config3, config4 };
    },
  };
</script>

<style lang="less">
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
    padding-top: 1rem;
    overflow: hidden;
    // border-radius: 20px;
    // background-color: rgba(0, 0, 0, 0.3);
    // border: 1px solid rbga(0, 0, 0, 0.2);
    // box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
  }
  .rightFlowContainer {
    position: absolute;
    right: 5rem;
    // width: 10%;
    //高度为父容器mainContainer的100%减去bottomFlowContent的rem高度，加4rem为边距
    // height: calc(~'100% - @mainContainerDiffHeight');
    height: calc(~'100% - 4rem');
    padding-top: 1rem;
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
    width: 38%;
    height: 100%;
    border-radius: 20px;
    // background-color: rgba(0, 0, 0, 0.3);
    // border: 1px solid rbga(0, 0, 0, 0.2);
    overflow: hidden;
    // box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
  }
</style>
