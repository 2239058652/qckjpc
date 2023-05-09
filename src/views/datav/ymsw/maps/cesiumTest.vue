<template>
  <div class="datav-layout-container" style="width: 100%">
    <!-- 测试字号大小使用 -->
    <!-- <span style="font-size: 20px">20px 文字内容</span>
    <span style="font-size: 18px">18px 文字内容</span>
    <span style="font-size: 16px">16px 文字内容</span>
    <span style="font-size: 14px">14px 文字内容</span>
    <span style="font-size: 12px">12px 文字内容</span>
    <span style="font-size: 1em">1em 文字内容</span>
    <span style="font-size: 0.8em">0.8em 文字内容</span>
    <span style="font-size: 0.6em">0.6em 文字内容</span>
    <span style="font-size: 0.4em"> 0.4em 文字内容</span>
    <span style="font-size: 0.2em"> 0.2em 文字内容</span> -->
    <a-layout>
      <a-layout-content>
        <div id="sceneViewer" class="scene-viewer"></div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script lang="ts">
  /* eslint-disable */ //忽略eslint监测代码
  import { onMounted, ref, reactive } from 'vue';

  import * as TreeProps from 'ant-design-vue';

  // 引用cesium
  import 'cesium/Build/Cesium/Widgets/widgets.css';
  import * as Cesium from 'cesium/Build/Cesium';

  export default {
    setup() {
      //在官网申请的token
      Cesium.Ion.defaultAccessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZGNkNDc4My05MDRjLTQ0MmEtYjRhZi1hNzc0M2U4YWY0MzciLCJpZCI6MTE2MDY0LCJpYXQiOjE2NjkzNTY0Mzh9.TNizU1rvb4QXwgjNP70_2qaIddgV6MC1Tijwdn8Y0fs';

      //viewer定义在外面，方便后面使用
      let viewer = null;

      //在setup中定义方法，在外部调用的方法在setup的return方法中导出
      const initCesiumViewer = () => {
        //初始化viewer，不在onMounted事件中无法获取html元素，会有“Uncaught (in promise) TypeError: Cannot read properties of null (reading 'appendChild')”报错
        viewer = new Cesium.Viewer('sceneViewer', {
          animation: false, //是否显示动画控件
          homeButton: true, //是否显示home键
          vrButton: false, // VR模式
          geocoder: false, //是否显示地名查找控件        如果设置为true，则无法查询
          baseLayerPicker: false, //是否显示图层选择控件
          timeline: false, //是否显示时间线控件
          fullscreenButton: false, //是否全屏显示
          scene3DOnly: false, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
          infoBox: false, //是否显示点击要素之后显示的信息
          sceneModePicker: false, //是否显示投影方式控件  三维/二维// 场景模式，切换2D、3D 和 Columbus View (CV) 模式。设置为false为2D，设置为true为3D
          sceneMode: 2, //初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
          navigationInstructionsInitiallyVisible: true,
          navigationHelpButton: false, //是否显示帮助信息控件，如何操作数字地球。
          selectionIndicator: false, //是否显示指示器组件
          // 加载地形图层
          // //createWorldTerrain图层由Cesium ion提供; 实际测试看不出地形
          // terrainProvider: new Cesium.createWorldTerrain({
          //   requestVertexNormals: true,
          //   requestWaterMask: true,
          // }),
          // //在线SKT
          // terrainProvider: new Cesium.CesiumTerrainProvider({
          //   // url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',//地址无法访问
          //   url: Cesium.IonResource.fromAssetId(3956),
          //   requestWaterMask: true,// 请求水体效果所需要的海岸线数据
          //   requestVertexNormals: true,// 请求地形照明数据
          // }),
        });
      };

      //加载图层，包括影像图层和标注图层
      //console中会有个404报错，但地图能加载；提示信息：http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/19/0/0 404 (Not Found)
      const loadArcGisImageLayer = () => {
        viewer.imageryLayers.addImageryProvider(
          new Cesium.ArcGisMapServerImageryProvider({
            url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
          }),
        );
      };

      //飞行到指定位置，用于加载时或点击时跳转到指定位置
      const flyTo = (x, y, z, duration) => {
        //将三维球定位到指定位置，camera是相机，是当前视野范围相机
        //destination是相机的目标位置，参数是经度、纬度、高度
        //orientation是相机朝向
        //    heading-代表镜头左右方向,正值为右,负值为左
        //    pitch-代表镜头上下方向,正值为上,负值为下.
        //    roll-代表镜头左右倾斜,正值,向右倾斜,负值向左倾斜
        var helper = new Cesium.EventHelper();
        helper.add(viewer.scene.globe.tileLoadProgressEvent, function (event) {
          if (event == 0) {
            setTimeout(function () {
              viewer.camera.flyTo({
                //开始默认加载 位置
                //元谋县经纬度
                // destination: Cesium.Cartesian3.fromDegrees(101.8476, 25.7604, 130000), //经纬度和高度
                destination: Cesium.Cartesian3.fromDegrees(x, y, z), //经纬度和高度
                // orientation: {
                //   heading: 0,
                //   pitch: Cesium.Math.toRadians(-60.5 || -Cesium.Math.PI_OVER_FOUR),
                //   roll: Cesium.Math.toRadians(360 || 0)
                // },
                // orientation: {
                //   heading: Cesium.Math.toRadians(348.4202942851978),
                //   pitch: Cesium.Math.tsoRadians(-89.74026687972041),
                //   roll: Cesium.Math.toRadians(0)
                // },
                duration: duration,
              });
              setTimeout(function () {
                viewer.scene.mode = Cesium.SceneMode.SCENE2D; //2维模式
                // viewer.scene.mode = Cesium.SceneMode.SCENE3D//3维模式
              }, 6000);
              helper.removeAll();
            }, 1000);
          }
        });
      };

      onMounted(() => {
        initCesiumViewer();

        //加载图层
        //加载ArcGis底图图层
        loadArcGisImageLayer();
        //加载天地图电子地图图层
        // loadTianDiTuEImageLayer();
        //加载天地图影像图层
        // loadTianDiTuImageLayer();
        // //调用影响中文注记服务，标注信息太多，建议最好不要显示
        // loadTianDiTuMarkerLayer();

        // 隐藏版权
        viewer._cesiumWidget._creditContainer.style.display = 'none';

        //指南针和放大缩小按钮组件配置
        //需要引入和使用cesium-navigation插件
        var options = {};
        // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和Cesium.Rectangle.
        // options.defaultResetView = Cesium.Cartographic.fromDegrees(102.2888,21.346494,450000);
        // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
        options.enableCompass = true;
        // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件 将不会添加到地图中。
        options.enableZoomControls = true;
        // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
        options.enableDistanceLegend = true;
        // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
        options.enableCompassOuterRing = true;
        //设置时会有报错，提示信息：Uncaught (in promise) TypeError: Cannot set properties of undefined (setting 'terria')
        // CesiumNavigation(viewer, options);

        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
          Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
        ); //取消双击选中实体
        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
          Cesium.ScreenSpaceEventType.LEFT_CLICK,
        ); //取消点击出现窗口

        //去cesium logo水印 或 css
        viewer.cesiumWidget.creditContainer.style.display = 'none'; //去cesium logo水印
        viewer.scene.skyBox.show = false;
        viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
        // 设置后当相机高度达到设置的最大和最小高度时将不再放大和缩小
        viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50000; //相机的高度的最小值
        viewer.scene.screenSpaceCameraController.maximumZoomDistance = 300000; //相机高度的最大值

        //设置为三维场景
        viewer.scene.mode = Cesium.SceneMode.SCENE3D; //3维模式

        //加载地形图层后需要需要更多的线条来使得地形数据背后的objects能够正确地显示，只有最前面、最上面的objects才能是可见的
        //地形遮挡效果开关，打开后地形会遮挡看不到的区域
        viewer.scene.globe.depthTestAgainstTerrain = true;
        //对大气和雾启用动态照明效果
        viewer.scene.globe.enableLighting = true;

        //飞行到指定位置
        //飞行到元谋县
        // flyTo(101.8476, 25.7604, 130000, 5);
        //gis作为底图时飞行目标点
        flyTo(101.8476, 25.7, 207000, 5);

        //设置home按钮的位置
        var extend = Cesium.Rectangle.fromDegrees(101.55, 25.34, 102.14, 26.13); //定义home的位置,四个值代表最西、最南、最东、最北
        // 101.602773636283, 25.369930101426
        // 102.114465286254,26.113869506124
        Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extend;
        Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

        // 修改home按钮功能
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener((e) => {
          e.cancel = true;
          //飞行到元谋县
          flyTo(101.8476, 25.7604, 130000, 5);
          // viewer.camera.flyTo({
          //   //元谋县经纬度
          //   destination: Cesium.Cartesian3.fromDegrees(101.8476, 25.7604, 130000), //经纬度和高度
          // });
        });
      });

      return {
        flyTo,
      };
    },
  };
</script>
<style lang="less">
  @import './../layouts/layout.less';
  .scene-viewer {
    height: 100%;
  }
  #latlng_show {
    width: 100%;
    height: 0.295rem;
    // position: absolute;
    bottom: 1rem;
    float: left;
    margin-left: 0px;
    z-index: 1;
    font-size: 0.15rem;
    background-color: rgba(15, 19, 37, 0.9);
  }
  .font_span {
    margin-left: 0.1rem;
    margin-top: 0.08rem;
    height: 0.375rem;
    float: left;
    text-align: center;
  }
</style>
