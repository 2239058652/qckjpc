<template>
  <div class="datav-layout-container" style="width: 100%">
    <a-layout>
      <a-layout-content>
        <div id="sceneViewer" class="scene-viewer"></div>
      </a-layout-content>
      <!-- 地图中鼠标移至显示信息容器 -->
      <div id="toolTipElement" style="position: fixed; margin-left: 200px; margin-top: 100px">
        <a-space>
          <!--使用antd中的tooltip显示html-->
          <a-tooltip
            placement="left"
            :get-popup-container="getPopupContainer"
            v-model:title="toolTipTitle"
            color="green"
          >
            <template slot="title">
              <span v-html="toolTipTitle"></span>
            </template>
            <a-button></a-button>
          </a-tooltip>
        </a-space>
      </div>
      <!-- 经纬度显示 -->
      <div id="latlng_show">
        <div class="font_span">
          <div color="white">
            经度：<span>{{ currentMousePosition.longitude }}</span
            >°&nbsp;&nbsp;
          </div>
        </div>
        <div class="font_span">
          <div color="white">
            纬度：<span>{{ currentMousePosition.latitude }}</span
            >°&nbsp;&nbsp;
          </div>
        </div>
        <div class="font_span">
          <div color="white">
            相机高度：<span>{{ currentMousePosition.altitude }}</span
            >km
          </div>
        </div>
      </div>
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

  //导入图片
  import CentralImg from '/@/../assets/images/gis/center.png';
  import RainStationImg from '/@/../assets/images/gis/rainstation.png';
  import RainStationRedImg from '/@/../assets/images/gis/rainstation-red.png';
  import RainStationBlackImg from '/@/../assets/images/gis/rainstation-black.png';
  import WaterStationImg from '/@/../assets/images/gis/waterstation.png';
  import WaterStationRedImg from '/@/../assets/images/gis/waterstation-red.png';
  import WaterStationRedSvg from '/@/../assets/images/gis/waterstation-red.svg';
  import Video1StationImg from '/@/../assets/images/gis/videoguding.png';
  import Video2StationImg from '/@/../assets/images/gis/videoqiuji.png';
  import PersonImg from '/@/../assets/images/gis/person.png';
  import AlarmBlueImg from '/@/../assets/images/gis/warn-blue.png';
  import AlarmOrangeImg from '/@/../assets/images/gis/warn-orange.png';
  import AlarmYellowImg from '/@/../assets/images/gis/warn-yellow.png';
  import AlarmRedImg from '/@/../assets/images/gis/warn-red.png';
  import RiverFlowImg from '/@/../assets/images/gis/riverflow.png';
  import AlarmGifImg from '/@/../assets/images/gis/alram.gif';
  import AlarmWaterGifImg from '/@/../assets/images/gis/alram-water.gif';
  import AlarmRainGifImg from '/@/../assets/images/gis/alram-rain.gif';

  //导入json
  import fileGeoJsonData from '/@/../assets/geojson/ym.json';

  //元谋项目测试使用临时数据
  //定义测试json数据
  const allStationLocations = [
    { id: 'W2-11', name: '物茂乡-虎溪', type: 'rain', lng: 101.730828, lat: 25.830367 },
    { id: 'W2-12', name: '新华乡-大河边', type: 'rain', lng: 101.680937, lat: 25.783693 },
    { id: 'W2-13', name: '黄瓜园镇-鸡冠山', type: 'rain', lng: 101.909068, lat: 25.85887 },
    { id: 'W2-14', name: '黄瓜园镇-舍多', type: 'rain', lng: 101.91817, lat: 25.81071 },
    { id: 'W2-15', name: '老城乡-挨小', type: 'rain', lng: 101.913402, lat: 25.652286 },
    { id: 'W2-16', name: '老城乡-波哼', type: 'rain', lng: 101.92847, lat: 25.549535 },
    { id: 'W2-17', name: '江边乡-中村', type: 'rain', lng: 101.953096, lat: 25.938185 },
    { id: 'W2-18', name: '羊街镇-已波龙', type: 'rain', lng: 101.8675, lat: 25.4446 },
    { id: 'W2-19', name: '老城乡-那能', type: 'rain', lng: 101.921619, lat: 25.631828 },
    { id: 'W2-20', name: '姜驿乡', type: 'rain', lng: 101.909392, lat: 26.068255 },
    { id: 'W2-21', name: '贡茶村', type: 'rain', lng: 102.017391, lat: 26.044932 },
    { id: 'W2-22', name: '江边乡-龙街村委会', type: 'rain', lng: 101.87383, lat: 25.901292 },
    { id: 'W2-1', name: '黄瓜园镇-上你莫水库站', type: 'water', lng: 101.875298, lat: 25.757328 },
    { id: 'W2-2', name: '平田乡-弯腰树水库', type: 'water', lng: 101.729542, lat: 25.761279 },
    { id: 'W2-3', name: '新华乡-河尾水库', type: 'water', lng: 101.679, lat: 25.728 },
    { id: 'W2-4', name: '新华乡-鼠街水库站', type: 'water', lng: 101.598533, lat: 25.651076 },
    { id: 'W2-5', name: '老城乡-马道地水库', type: 'water', lng: 101.776016, lat: 25.641679 },
    { id: 'W2-6', name: '物茂乡-新河水库', type: 'water', lng: 101.777811, lat: 25.932784 },
    { id: 'W2-7', name: '平田乡-丙令水库站', type: 'water', lng: 101.790989, lat: 25.799455 },
    { id: 'W2-8', name: '物茂乡-河外', type: 'water', lng: 101.7628, lat: 25.942791 },
    { id: 'W2-9', name: '新华乡-猛连', type: 'water', lng: 101.659735, lat: 25.655524 },
    { id: 'W2-10', name: '黄瓜园-领庄', type: 'water', lng: 101.866896, lat: 25.767393 },
  ];
  const rainStationLocations = [
    { id: 'W2-11', name: '物茂乡-虎溪', type: 'rain', lng: 101.730828, lat: 25.830367 },
    { id: 'W2-12', name: '新华乡-大河边', type: 'rain', lng: 101.680937, lat: 25.783693 },
    { id: 'W2-13', name: '黄瓜园镇-鸡冠山', type: 'rain', lng: 101.909068, lat: 25.85887 },
    { id: 'W2-14', name: '黄瓜园镇-舍多', type: 'rain', lng: 101.91817, lat: 25.81071 },
    { id: 'W2-15', name: '老城乡-挨小', type: 'rain', lng: 101.913402, lat: 25.652286 },
    { id: 'W2-16', name: '老城乡-波哼', type: 'rain', lng: 101.92847, lat: 25.549535 },
    { id: 'W2-17', name: '江边乡-中村', type: 'rain', lng: 101.953096, lat: 25.938185 },
    { id: 'W2-18', name: '羊街镇-已波龙', type: 'rain', lng: 101.8675, lat: 25.4446 },
    { id: 'W2-19', name: '老城乡-那能', type: 'rain', lng: 101.921619, lat: 25.631828 },
    { id: 'W2-20', name: '姜驿乡', type: 'rain', lng: 101.909392, lat: 26.068255 },
    { id: 'W2-21', name: '贡茶村', type: 'rain', lng: 102.017391, lat: 26.044932 },
    { id: 'W2-22', name: '江边乡-龙街村委会', type: 'rain', lng: 101.87383, lat: 25.901292 },
  ];
  const waterStationLocations = [
    { id: 'W2-1', name: '黄瓜园镇-上你莫水库站', type: 'water', lng: 101.875298, lat: 25.757328 },
    { id: 'W2-2', name: '平田乡-弯腰树水库', type: 'water', lng: 101.729542, lat: 25.761279 },
    { id: 'W2-3', name: '新华乡-河尾水库', type: 'water', lng: 101.679, lat: 25.728 },
    { id: 'W2-4', name: '新华乡-鼠街水库站', type: 'water', lng: 101.598533, lat: 25.651076 },
    { id: 'W2-5', name: '老城乡-马道地水库', type: 'water', lng: 101.776016, lat: 25.641679 },
    { id: 'W2-6', name: '物茂乡-新河水库', type: 'water', lng: 101.777811, lat: 25.932784 },
    { id: 'W2-7', name: '平田乡-丙令水库站', type: 'water', lng: 101.790989, lat: 25.799455 },
    { id: 'W2-8', name: '物茂乡-河外', type: 'water', lng: 101.7628, lat: 25.942791 },
    { id: 'W2-9', name: '新华乡-猛连', type: 'water', lng: 101.659735, lat: 25.655524 },
    { id: 'W2-10', name: '黄瓜园-领庄', type: 'water', lng: 101.866896, lat: 25.767393 },
  ];
  const videoStationLocations = [
    { id: 'Vym001', name: '丙巷河水库', type: 'video', lng: 101.847778, lat: 25.554167 },
    { id: 'Vym002', name: '新河水库', type: 'video', lng: 101.728333, lat: 25.893056 },
    { id: 'V001', name: '视频站3-1', type: 'video', lng: 101.6692, lat: 25.8411 },
    { id: 'V002', name: '视频站3-2', type: 'video', lng: 101.7117, lat: 25.7762 },
    { id: 'V003', name: '视频站3-3', type: 'video', lng: 101.7759, lat: 25.9531 },
    { id: 'V004', name: '视频站3-4', type: 'video', lng: 101.721, lat: 25.84 },
    { id: 'V005', name: '视频站3-5', type: 'video', lng: 101.9119, lat: 25.7974 },
    { id: 'V006', name: '视频站3-6', type: 'video', lng: 101.688, lat: 25.7009 },
  ];

  //图层名称--数据源name静态定义
  const XZQH_XJ = 'layer-xzqh-xj';
  const XZQH_XZJ = 'layer-xzqh-xzj';
  const XZQH_XZM = 'layer-xzqh-xzm';
  const HHKQ_HL = 'layer-hhkq-hl';
  const HHKQ_HP = 'layer-hhkq-hp';
  const HHKQ_SK = 'layer-hhkq-sk';
  const HHKQ_GQ = 'layer-hhkq-gq';
  const HHKQ_QD = 'layer-hhkq-qd';
  const HHKQ_BT = 'layer-hhkq-bt';
  const SSSS_QSK = 'layer-ssss-qsk';
  const SSSS_PWK = 'layer-ssss-pwk';
  const XCGH_XCRY = 'layer-xcgh-xcry';
  const XCGH_ZRHD = 'layer-xcgh-zrhd';
  const JCXX_SWZ = 'layer-jcxx-swz';
  const JCXX_YLZ = 'layer-jcxx-ylz';
  const JCXX_SPZ = 'layer-jcxx-spz';
  const JCXX_LLZ = 'layer-jcxx-llz';
  const JCXX_SZZ = 'layer-jcxx-szz';
  const JCXX_HQZ = 'layer-jcxx-hqz';
  const JCXX_GSZ = 'layer-jcxx-gsz';

  const CENTRAL_POINT = 'layer-central-point';

  const HL_DYNAMIC = 'layer-hl-dynamic';

  const DZM_RAIN = 'layer-dzm-rain';
  const DZM_HQT = 'layer-dzm-hqt';
  //显示entity标记信息的datasource名称
  const DATASOURCE_LABLE = 'label';

  //图层控制树
  const treeData: TreeProps['treeData'] = [
    // const treeData = [
    {
      title: '图层控制',
      key: 'layer-all',
      children: [
        // {
        //   title: '底图',
        //   key: 'layer-bg',
        //   disabled: true,
        //   children: [
        //     { title: '影像-天地图', key: 'layer-bg-tdt', disableCheckbox: true },
        //     { title: '影像-谷歌', key: 'layer-bg-gg', disableCheckbox: true },
        //   ],
        // },
        {
          title: '行政区划',
          key: 'layer-xzqh',
          children: [
            { key: CENTRAL_POINT, title: '水务局中心点', disableCheckbox: false },
            { key: XZQH_XJ, title: '县界', disableCheckbox: false },
            { key: XZQH_XZJ, title: '乡镇界', disableCheckbox: false },
            { key: XZQH_XZM, title: '乡镇名称', disableCheckbox: false },
          ],
        },
        {
          title: '河湖库渠',
          key: 'layer-hhkq',
          children: [
            { key: HHKQ_HL, title: '河流', disableCheckbox: true },
            { key: HHKQ_HP, title: '湖泊', disableCheckbox: true },
            { key: HHKQ_SK, title: '水库', disableCheckbox: true },
            { key: HHKQ_GQ, title: '灌区', disableCheckbox: true },
            // { key: HHKQ_QD, title: '渠道', disableCheckbox: true },
            { key: HHKQ_BT, title: '坝塘', disableCheckbox: true },
          ],
        },
        {
          title: '涉水设施',
          key: 'layer-ssss',
          children: [
            { key: SSSS_QSK, title: '取水口', disableCheckbox: true },
            { key: SSSS_PWK, title: '排污口', disableCheckbox: true },
          ],
        },
        {
          title: '巡查管护',
          key: 'layer-xcgh',
          children: [
            { key: XCGH_XCRY, title: '巡查人员', disableCheckbox: false },
            { key: XCGH_ZRHD, title: '责任河段', disableCheckbox: true },
          ],
        },
        {
          title: '监测信息',
          key: 'layer-jcxx',
          children: [
            { key: JCXX_SWZ, title: '水位站', disableCheckbox: false },
            { key: JCXX_YLZ, title: '雨量站', disableCheckbox: false },
            { key: JCXX_SPZ, title: '视频站', disableCheckbox: false },
            { key: JCXX_LLZ, title: '流量站', disableCheckbox: true },
            { key: JCXX_SZZ, title: '水质站', disableCheckbox: true },
            { key: JCXX_HQZ, title: '旱情站', disableCheckbox: true },
            { key: JCXX_GSZ, title: '供水站', disableCheckbox: true },
          ],
        },
      ],
    },
  ];

  export default {
    setup() {
      //在官网申请的token
      Cesium.Ion.defaultAccessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZGNkNDc4My05MDRjLTQ0MmEtYjRhZi1hNzc0M2U4YWY0MzciLCJpZCI6MTE2MDY0LCJpYXQiOjE2NjkzNTY0Mzh9.TNizU1rvb4QXwgjNP70_2qaIddgV6MC1Tijwdn8Y0fs';

      //动态线材质，用于显示河流流向动画
      /*
流动纹理线
 color 颜色
 duration 持续时间 毫秒
*/
      function PolylineTrailLinkMaterialProperty(color, duration) {
        this._definitionChanged = new Cesium.Event();
        this._color = undefined;
        this._colorSubscription = undefined;
        this.color = color;
        this.duration = duration;
        this._time = new Date().getTime();
      }
      //在vue3中原有的方法不可用
      //Cesium.defineProperties   Uncaught TypeError: Cesium.defineProperties is not a function
      //proxy.Cesium.defineProperties   Uncaught TypeError: Cannot read properties of undefined (reading 'defineProperties')
      //Object.defineProperties    Uncaught TypeError: Cannot add property PolylineTrailLinkMaterialProperty, object is not extensible
      Object.defineProperties(PolylineTrailLinkMaterialProperty.prototype, {
        isConstant: {
          get: function () {
            return false;
          },
        },
        definitionChanged: {
          get: function () {
            return this._definitionChanged;
          },
        },
        color: Cesium.createPropertyDescriptor('color'),
      });
      PolylineTrailLinkMaterialProperty.prototype.getType = function (time) {
        return 'PolylineTrailLink';
      };
      PolylineTrailLinkMaterialProperty.prototype.getValue = function (time, result) {
        // debugger
        if (!Cesium.defined(result)) {
          result = {};
        }
        result.color = Cesium.Property.getValueOrClonedDefault(
          this._color,
          time,
          Cesium.Color.WHITE,
          result.color,
        );
        result.image = Cesium.Material.PolylineTrailLinkImage;
        result.time = ((new Date().getTime() - this._time) % this.duration) / this.duration;
        return result;
      };
      PolylineTrailLinkMaterialProperty.prototype.equals = function (other) {
        return (
          this === other ||
          (other instanceof PolylineTrailLinkMaterialProperty &&
            Property.equals(this._color, other._color))
        );
      };
      //不将自定义的属性添加到Cesium，直接使用即可
      // Cesium.PolylineTrailLinkMaterialProperty = PolylineTrailLinkMaterialProperty;
      Cesium.Material.PolylineTrailLinkType = 'PolylineTrailLink';
      Cesium.Material.PolylineTrailLinkImage = RiverFlowImg;
      Cesium.Material.PolylineTrailLinkSource =
        'czm_material czm_getMaterial(czm_materialInput materialInput)\n\
                                            {\n\
                                                 czm_material material = czm_getDefaultMaterial(materialInput);\n\
                                                 vec2 st = materialInput.st;\n\
                                                 vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
                                                 material.alpha = colorImage.a * color.a;\n\
                                                 material.diffuse = (colorImage.rgb+color.rgb)/2.0;\n\
                                                 return material;\n\
                                             }';
      Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType, {
        fabric: {
          type: Cesium.Material.PolylineTrailLinkType,
          uniforms: {
            color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),
            image: Cesium.Material.PolylineTrailLinkImage,
            time: 0,
          },
          source: Cesium.Material.PolylineTrailLinkSource,
        },
        translucent: function (material) {
          return true;
        },
      });

      //viewer定义在外面，方便后面使用
      let viewer = null;

      //ref需要使用.value,reactive不需要使用.value
      let toolTipTitle = ref('默认显示的提示信息');
      let setToolTipTitle = (title) => {
        // toolTipTitle.value =
        // '<a-space direction="vertical"><a-typography-text>Ant Design Vue (default)</a-typography-text><a-typography-text type="secondary">Ant Design Vue (secondary)</a-typography-text><a-typography-text type="success">Ant Design Vue (success)</a-typography-text><a-typography-text type="warning">Ant Design Vue (warning)</a-typography-text><a-typography-text type="danger">Ant Design Vue (danger)</a-typography-text></a-space>';
        toolTipTitle.value = title;
      };
      const getPopupContainer = (trigger: HTMLElement) => {
        return trigger.parentElement;
      };

      //当前鼠标所在位置的经纬度及相机高度
      let currentMousePosition = reactive({
        longitude: '--',
        latitude: '--',
        altitude: '--',
      });
      let setCurrentMousePosition = (position) => {
        // currentMousePosition = position;//此方法调用后界面不更新
        currentMousePosition.longitude = position.longitude;
        currentMousePosition.latitude = position.latitude;
        currentMousePosition.altitude = position.altitude;
        // console.log('currentMousePosition ' + JSON.stringify(currentMousePosition));
      };

      // 图层树;
      const expandedKeys = ref<string[]>([
        'layer-all',
        'layer-xzqh',
        'layer-hhkq',
        'layer-ssss',
        'layer-xcgh',
        'layer-xcgh',
        'layer-jcxx',
      ]);
      const selectedKeys = ref<string[]>([XZQH_XJ, XZQH_XZJ]);
      const checkedKeys = ref<string[]>([
        XZQH_XJ,
        XZQH_XZJ,
        XZQH_XZM,
        HHKQ_HL,
        XCGH_XCRY,
        JCXX_SWZ,
        JCXX_YLZ,
        JCXX_SPZ,
        JCXX_SZZ,
        JCXX_HQZ,
      ]);

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

      //加载区域,显示边界及填充
      const loadAreaEntity = () => {
        loadAreaYuanMouXianEntity();
        loadAreaXiangZhengEntity();
      };
      //加载元谋县边界
      const loadAreaYuanMouXianEntity = () => {
        console.log('加载元谋县边界');
        var data = [];
        //从定义的变量中读取并赋值
        // for (let item of projectAreaLocations) {
        //   data.push(...item);
        // }
        //可以读取json文件内容
        // console.log('fileGeoJsonData 元谋县边界坐标' + fileGeoJsonData['ym-border']);
        var ynBorderString = fileGeoJsonData['ym-border'];
        var arr = ynBorderString.split(' ');
        if (arr != null && arr.length > 0) {
          for (let str of arr) {
            var pArr = str.split(',');
            if (pArr != null && pArr.length > 0) {
              data.push(pArr[0], pArr[1]);
            }
          }
        }

        let entities = {
          show: true,
          polygon: {
            outlineWidth: 2,
            fill: true,
            outline: false,
            material: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),
            show: true,
            clampToGround: false,
          },
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(data),
            width: 3.0,
            material: new Cesium.PolylineGlowMaterialProperty({
              glowPower: 0.3,
              color: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.9),
            }),
          },
        };
        console.log(
          '元谋县边界 添加到dataSources前 dataSources name=' +
            XZQH_XJ +
            ' index = ' +
            getDataSourceIndexByName(XZQH_XJ),
        );
        var dataSource = new Cesium.CustomDataSource(XZQH_XJ);
        var entity = dataSource.entities.add(entities);
        viewer.dataSources.add(dataSource);
        console.log('dataSource=' + viewer.dataSources);

        console.log(
          '元谋县边界 添加到dataSources后 dataSources name=' +
            XZQH_XJ +
            ' index = ' +
            getDataSourceIndexByName(XZQH_XJ),
        );
        //添加数据到viewer
        // viewer.entities.add(entities);
      };
      //加载元谋县乡镇边界
      const loadAreaXiangZhengEntity = () => {
        //地图区域着色使用的颜色集合
        const mapFillColors = [
          '#FBFBBD',
          '#DDD3EC',
          '#AFC4D7',
          '#F1C3C8',
          '#97DBF2',
          '#F8D7B9',
          '#D9B1BE',
        ];
        var xzArr = fileGeoJsonData['ym-xz'];
        if (xzArr != null && xzArr.length > 0) {
          let xzIndex = 0;
          for (let xz of xzArr) {
            var arr = xz.border.split(' ');
            if (arr != null && arr.length > 0) {
              var data = [];
              for (let str of arr) {
                var pArr = str.split(',');
                if (pArr != null && pArr.length > 0) {
                  data.push(pArr[0], pArr[1]);
                }
              }
              xzIndex++;

              let entities = {
                show: true,
                polygon: {
                  //绘制面，充填颜色需设置hierarchy和material分别表示区域经纬度和填充材质
                  hierarchy: Cesium.Cartesian3.fromDegreesArray(data),
                  outlineWidth: 1,
                  fill: true,
                  outline: false,
                  // material: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),
                  // material: Cesium.Color.fromCssColorString('#FF0000').withAlpha(0.9),
                  // material: Cesium.Color.CYAN.withAlpha(0.5),
                  material: Cesium.Color.fromCssColorString(mapFillColors[xzIndex % 5]).withAlpha(
                    0.9,
                  ),
                  show: true,
                  clampToGround: false,
                },
                polyline: {
                  positions: Cesium.Cartesian3.fromDegreesArray(data),
                  width: 1.0,
                  material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.2,
                    color: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.5),
                  }),
                },
              };

              var dataSource = new Cesium.CustomDataSource(XZQH_XZJ);
              var entity = dataSource.entities.add(entities);
              viewer.dataSources.add(dataSource);
            }
          }
        }
      };

      //加载线，河流流向效果
      const loadLineEntity = () => {
        // loadRiverJSJLineEntity();
        // loadRiverLCJLineEntity();
        // loadRiverDynamicFlowEntity();
        loadRiverLCJDynamicFlowEntity();
        loadRiverJSJDynamicFlowEntity();
      };
      //加载金沙江-元谋县段
      const loadRiverJSJLineEntity = () => {
        //金沙江
        var data = [];
        var riverLcjString = fileGeoJsonData['river-jsj'];
        var arr = riverLcjString.split(' ');
        if (arr != null && arr.length > 0) {
          for (let str of arr) {
            var pArr = str.split(',');
            if (pArr != null && pArr.length > 0) {
              data.push(pArr[0], pArr[1]);
            }
          }
        }

        let entities = {
          show: true,
          polygon: {
            outlineWidth: 1,
            fill: true,
            outline: false,
            material: Cesium.Color.fromCssColorString('#3F48CC').withAlpha(0.9),
            show: true,
            clampToGround: false,
          },
          // 线标注添加时加了polyline后颜色为默认的白色，原因未知
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(data),
            width: 10.0,
            // eyeOffset: new Cesium.Cartesian3(0, 0, -10000),
            // clampToGround: true,
            material: new Cesium.PolylineGlowMaterialProperty({
              glowPower: 0.3,
              color: Cesium.Color.BLUE, //Cesium.Color.fromCssColorString('#3F48CC').withAlpha(0.9),
            }),
          },
        };
        var dataSource = new Cesium.CustomDataSource(HHKQ_HL);
        var entity = dataSource.entities.add(entities);
        viewer.dataSources.add(dataSource);
      };
      //加载龙川江
      const loadRiverLCJLineEntity = () => {
        var data = [];
        //从变量中读取数据
        // for (let item of riverLineLocations) {
        //   data.push(...item);
        // }
        //龙川江
        var riverLcjString = fileGeoJsonData['river-lcj'];
        var arr = riverLcjString.split(' ');
        if (arr != null && arr.length > 0) {
          for (let str of arr) {
            var pArr = str.split(',');
            if (pArr != null && pArr.length > 0) {
              data.push(pArr[0], pArr[1]);
            }
          }
        }
        let entities = {
          show: true,
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(data),
            width: 3.0,
            // eyeOffset: new Cesium.Cartesian3(0, 0, -10000),
            // clampToGround: true,
            //测试加载出来的颜色不是设定的颜色
            material: new Cesium.PolylineGlowMaterialProperty({
              glowPower: 0.3,
              color: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.9),
            }),
          },
        };
        var dataSource = new Cesium.CustomDataSource(HHKQ_HL);
        var entity = dataSource.entities.add(entities);
        viewer.dataSources.add(dataSource);
      };
      //加载河流流向效果
      const loadRiverDynamicFlowEntity = () => {
        var data = [];
        //从变量中读取数据
        // for (let item of riverLineLocations) {
        //   data.push(...item);
        // }
        //龙川江
        // var riverString = fileGeoJsonData['river-lcj'];
        // var riverString = fileGeoJsonData['river-jsj'];
        var riverString = fileGeoJsonData['river-dynamic'];
        var arr = riverString.split(' ');
        if (arr != null && arr.length > 0) {
          for (let str of arr) {
            var pArr = str.split(',');
            if (pArr != null && pArr.length > 0) {
              data.push(pArr[0], pArr[1]);
            }
          }
        }
        //2条河无法连接，暂时只展示1条河流动效果
        // //金沙江
        // var riverLcjString = fileGeoJsonData['river-jsj'];
        // var arr = riverLcjString.split(' ');
        // if (arr != null && arr.length > 0) {
        //   for (let str of arr) {
        //     var pArr = str.split(',');
        //     if (pArr != null && pArr.length > 0) {
        //       data.push(pArr[0], pArr[1]);
        //     }
        //   }
        // }
        // viewer.entities.add({
        //   show: true,
        //   polyline: {
        //     positions: Cesium.Cartesian3.fromDegreesArray(data),
        //     width: 6.0,
        //     // material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.fromCssColorString("#3F48CC"), 10000),//设置自定义纹路
        //     material: new PolylineTrailLinkMaterialProperty(Cesium.Color.fromCssColorString('#3F48CC'), 10000), //设置自定义纹路
        //   },
        // });
        var dataSource = new Cesium.CustomDataSource(HL_DYNAMIC);
        dataSource.entities.add({
          show: true,
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(data),
            width: 6.0,
            // material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.fromCssColorString("#3F48CC"), 10000),//设置自定义纹路
            material: new PolylineTrailLinkMaterialProperty(
              Cesium.Color.fromCssColorString('#3F48CC'),
              10000,
            ), //设置自定义纹路
          },
        });
        viewer.dataSources.add(dataSource);
      };
      //加载河流动态流动效果-龙川江
      const loadRiverLCJDynamicFlowEntity = () => {
        var data = [];
        //从变量中读取数据
        //龙川江
        var riverString = fileGeoJsonData['river-lcj'];
        var arr = riverString.split(' ');
        if (arr != null && arr.length > 0) {
          for (let str of arr) {
            var pArr = str.split(',');
            if (pArr != null && pArr.length > 0) {
              data.push(pArr[0], pArr[1]);
            }
          }
        }
        var dataSource = new Cesium.CustomDataSource(HL_DYNAMIC);
        dataSource.entities.add({
          show: true,
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(data),
            width: 6.0,
            // material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.fromCssColorString("#3F48CC"), 10000),//设置自定义纹路
            material: new PolylineTrailLinkMaterialProperty(
              Cesium.Color.fromCssColorString('#3F48CC'),
              10000,
            ), //设置自定义纹路
          },
        });
        viewer.dataSources.add(dataSource);
      };
      //加载河流动态流动效果-金沙江
      const loadRiverJSJDynamicFlowEntity = () => {
        var data = [];
        //从变量中读取数据
        //龙川江
        var riverString = fileGeoJsonData['river-jsj'];
        var arr = riverString.split(' ');
        if (arr != null && arr.length > 0) {
          for (let str of arr) {
            var pArr = str.split(',');
            if (pArr != null && pArr.length > 0) {
              data.push(pArr[0], pArr[1]);
            }
          }
        }
        var dataSource = new Cesium.CustomDataSource(HL_DYNAMIC);
        dataSource.entities.add({
          show: true,
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(data),
            width: 6.0,
            // material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.fromCssColorString("#3F48CC"), 10000),//设置自定义纹路
            material: new PolylineTrailLinkMaterialProperty(
              Cesium.Color.fromCssColorString('#3F48CC'),
              10000,
            ), //设置自定义纹路
          },
        });
        viewer.dataSources.add(dataSource);
      };
      //加载点，显示图例
      const loadPointEntity = () => {
        loadYuanMouCenterPointEntity();
        loadYuanMouXZPointEntity();
      };
      //加载水务局位置
      const loadYuanMouCenterPointEntity = () => {
        console.log('加载元谋县水务局标注');
        var dataSource = new Cesium.CustomDataSource(CENTRAL_POINT);
        dataSource.entities.add({
          id: 'pointEntity1',
          name: '元谋县水务局',
          content: '元谋县水务局地址：发祥路122',
          state: 'normal',
          type: 'type1',
          show: true,
          position: Cesium.Cartesian3.fromDegrees(101.87169, 25.711779, 0),
          billboard: {
            image: CentralImg,
            // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(550000, 1, 800000, 0), //设置距离方位内，Billboard或Label的缩放比例
            scale: 0.2,
          },
          label: {
            // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            // text: '元谋县水务局',
            font: '11pt Source Han Sans CN', //字体样式
            // fillColor:Cesium.Color.BLACK,        //字体颜色
            // backgroundColor:Cesium.Color.WHITE,    //背景颜色
            // showBackground:true,                //是否显示背景颜色
            // backgroundColor: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),   //背景颜色
            style: Cesium.LabelStyle.FILL, //label样式
            outlineWidth: 2,
            verticalOrigin: Cesium.VerticalOrigin.CENTER, //垂直位置
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT, //水平位置
            // eyeOffset: new Cesium.Cartesian3(0, 0, 1),
            pixelOffset: new Cesium.Cartesian2(10, 10, 1), //偏移
            scaleByDistance: new Cesium.NearFarScalar(300000, 1, 300000, 0), //设置距离方位内，Billboard或Label的缩放比例
          },
        });
        viewer.dataSources.add(dataSource);

        console.log(
          '加载元谋县水务局标注 dataSources name=' +
            CENTRAL_POINT +
            ' index = ' +
            getDataSourceIndexByName(CENTRAL_POINT),
        );
      };
      //加载元谋县乡镇标注
      const loadYuanMouXZPointEntity = () => {
        var xzArr = fileGeoJsonData['ym-xz'];
        if (xzArr != null && xzArr.length > 0) {
          var dataSource = new Cesium.CustomDataSource(XZQH_XZM);
          for (let xz of xzArr) {
            dataSource.entities.add({
              id: xz.name,
              name: xz.name,
              content: xz.name,
              state: 'normal',
              type: 'city-xz',
              show: true,
              position: Cesium.Cartesian3.fromDegrees(xz.lng, xz.lat, 0),
              billboard: {
                // image: PersonImg,
                // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                scaleByDistance: new Cesium.NearFarScalar(550000, 1, 800000, 0), //设置距离方位内，Billboard或Label的缩放比例
                scale: 0.1,
              },
              label: {
                // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                text: xz.name,
                font: '14pt Source Han Sans CN', //字体样式
                // fillColor:Cesium.Color.BLACK,        //字体颜色
                // backgroundColor:Cesium.Color.WHITE,    //背景颜色
                // showBackground:true,                //是否显示背景颜色
                // backgroundColor: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),   //背景颜色
                style: Cesium.LabelStyle.FILL, //label样式
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.CENTER, //垂直位置
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT, //水平位置
                // eyeOffset: new Cesium.Cartesian3(0, 0, 1),
                pixelOffset: new Cesium.Cartesian2(0, 0, 1), //偏移
                scaleByDistance: new Cesium.NearFarScalar(300000, 1, 300000, 0), //设置距离方位内，Billboard或Label的缩放比例
              },
            });
          }
          viewer.dataSources.add(dataSource);
        }
      };
      //演示数据加载
      const loadYmDemoPointEntity = () => {
        loadYmDemoRainStationsPointEntity();
        loadYmDemoWaterStationsPointEntity();
        loadYmDemoVedioStationsPointEntity();
        loadYmDemoOtherPointEntity();
      };
      //加载雨量站, 'id': 'R001', 'name': '站点1', 'type': 'video', 'lng': 101.9435, 'lat': 26.0692
      const loadYmDemoRainStationsPointEntity = () => {
        var dataSource = new Cesium.CustomDataSource(JCXX_YLZ);
        for (var i = 0; i < rainStationLocations.length; i++) {
          dataSource.entities.add({
            id: rainStationLocations[i].id,
            name: rainStationLocations[i].name,
            content: rainStationLocations[i].name,
            state: 'normal',
            type: rainStationLocations[i].type,
            show: true,
            position: Cesium.Cartesian3.fromDegrees(
              rainStationLocations[i].lng,
              rainStationLocations[i].lat,
              0,
            ),
            billboard: {
              image: i == 3 ? RainStationImg : RainStationRedImg,
              // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              scaleByDistance: new Cesium.NearFarScalar(550000, 1, 800000, 0), //设置距离方位内，Billboard或Label的缩放比例
              scale: 0.1,
            },
            label: {
              // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
              // text: rainStationLocations[i].name,
              font: '11pt Source Han Sans CN', //字体样式
              // fillColor:Cesium.Color.BLACK,        //字体颜色
              // backgroundColor:Cesium.Color.WHITE,    //背景颜色
              // showBackground:true,                //是否显示背景颜色
              // backgroundColor: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),   //背景颜色
              style: Cesium.LabelStyle.FILL, //label样式
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.CENTER, //垂直位置
              horizontalOrigin: Cesium.HorizontalOrigin.LEFT, //水平位置
              // eyeOffset: new Cesium.Cartesian3(0, 0, 1),
              pixelOffset: new Cesium.Cartesian2(0, 0, 1), //偏移
              scaleByDistance: new Cesium.NearFarScalar(300000, 1, 300000, 0), //设置距离方位内，Billboard或Label的缩放比例
            },
          });
        }
        viewer.dataSources.add(dataSource);
      };
      //加载水位站, 'id': 'R001', 'name': '站点1', 'type': 'video', 'lng': 101.9435, 'lat': 26.0692
      const loadYmDemoWaterStationsPointEntity = () => {
        var dataSource = new Cesium.CustomDataSource(JCXX_SWZ);
        for (var i = 0; i < waterStationLocations.length; i++) {
          dataSource.entities.add({
            id: waterStationLocations[i].id,
            name: waterStationLocations[i].name,
            content: waterStationLocations[i].name,
            state: 'normal',
            type: waterStationLocations[i].type,
            show: true,
            position: Cesium.Cartesian3.fromDegrees(
              waterStationLocations[i].lng,
              waterStationLocations[i].lat,
              0,
            ),
            billboard: {
              image: i == 2 ? WaterStationImg : WaterStationRedSvg,
              // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              scaleByDistance: new Cesium.NearFarScalar(550000, 1, 800000, 0), //设置距离方位内，Billboard或Label的缩放比例
              scale: 0.1,
            },
            label: {
              // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
              // text: waterStationLocations[i].name,
              font: '11pt Source Han Sans CN', //字体样式
              // fillColor:Cesium.Color.BLACK,        //字体颜色
              // backgroundColor:Cesium.Color.WHITE,    //背景颜色
              // showBackground:true,                //是否显示背景颜色
              // backgroundColor: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),   //背景颜色
              style: Cesium.LabelStyle.FILL, //label样式
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.CENTER, //垂直位置
              horizontalOrigin: Cesium.HorizontalOrigin.LEFT, //水平位置
              // eyeOffset: new Cesium.Cartesian3(0, 0, 1),
              pixelOffset: new Cesium.Cartesian2(0, 0, 1), //偏移
              scaleByDistance: new Cesium.NearFarScalar(300000, 1, 300000, 0), //设置距离方位内，Billboard或Label的缩放比例
            },
          });
        }
        viewer.dataSources.add(dataSource);
      };
      //加载视频站, 'id': 'R001', 'name': '站点1', 'type': 'video', 'lng': 101.9435, 'lat': 26.0692
      const loadYmDemoVedioStationsPointEntity = () => {
        var dataSource = new Cesium.CustomDataSource(JCXX_SPZ);
        for (var i = 0; i < videoStationLocations.length; i++) {
          dataSource.entities.add({
            id: videoStationLocations[i].id,
            name: videoStationLocations[i].name,
            content: videoStationLocations[i].name,
            state: 'normal',
            type: videoStationLocations[i].type,
            show: true,
            position: Cesium.Cartesian3.fromDegrees(
              videoStationLocations[i].lng,
              videoStationLocations[i].lat,
              0,
            ),
            billboard: {
              image: i % 3 == 1 ? Video1StationImg : Video2StationImg,
              // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              scaleByDistance: new Cesium.NearFarScalar(550000, 1, 800000, 0), //设置距离方位内，Billboard或Label的缩放比例
              scale: 0.1,
            },
            label: {
              show: false,
              // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
              text: videoStationLocations[i].name,
              font: '11pt Source Han Sans CN', //字体样式
              // fillColor:Cesium.Color.BLACK,        //字体颜色
              // backgroundColor:Cesium.Color.WHITE,    //背景颜色
              // showBackground:true,                //是否显示背景颜色
              // backgroundColor: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),   //背景颜色
              style: Cesium.LabelStyle.FILL, //label样式
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.CENTER, //垂直位置
              horizontalOrigin: Cesium.HorizontalOrigin.LEFT, //水平位置
              // eyeOffset: new Cesium.Cartesian3(0, 0, 1),
              pixelOffset: new Cesium.Cartesian2(10.0, 10.0, 1), //偏移
              scaleByDistance: new Cesium.NearFarScalar(300000, 1, 300000, 0), //设置距离方位内，Billboard或Label的缩放比例
            },
          });
        }
        viewer.dataSources.add(dataSource);
      };
      //加载演示站点点标注，用于显示巡查人员分布、站点报警
      const loadYmDemoOtherPointEntity = () => {
        //演示使用的gif图
        const img = new Image();
        img.src = AlarmWaterGifImg; //AlarmGifImg;
        // const alarmWaterGif = new SuperGif({ gif: img });
        // alarmWaterGif.load();

        const imgRain = new Image();
        imgRain.src = AlarmRainGifImg;
        // const alarmRainGif = new SuperGif({ gif: imgRain });
        // alarmRainGif.load();

        AlarmWaterGifImg;
        //演示在每个乡镇显示1名巡查人员
        var xzArr = fileGeoJsonData['ym-xz'];
        if (xzArr != null && xzArr.length > 0) {
          var dataSource = new Cesium.CustomDataSource(XCGH_XCRY);
          for (var i = 0; i < xzArr.length; i++) {
            dataSource.entities.add({
              id: 'demo-person' + xzArr[i].name,
              name: xzArr[i].name,
              content: xzArr[i].name,
              state: 'normal',
              type: 'city-xz',
              show: true,
              position: Cesium.Cartesian3.fromDegrees(xzArr[i].lng - 0.02, xzArr[i].lat - 0.02, 0),
              billboard: {
                image:
                  i % 2 == 0
                    ? PersonImg
                    : i % 3 == 0
                    ? new Cesium.CallbackProperty(() => {
                        // return alarmRainGif.get_canvas().toDataURL('img/png');
                      })
                    : new Cesium.CallbackProperty(() => {
                        // return alarmWaterGif.get_canvas().toDataURL('img/png');
                      }), //演示使用一半的乡镇显示巡查人员,用于显示演示的站点报警
                // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                scaleByDistance: new Cesium.NearFarScalar(550000, 1, 800000, 0), //设置距离方位内，Billboard或Label的缩放比例
                scale: 0.1,
              },
              label: {
                // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                // text: xzArr[i].name,
                font: '8pt Source Han Sans CN', //字体样式
                // fillColor:Cesium.Color.BLACK,        //字体颜色
                // backgroundColor:Cesium.Color.WHITE,    //背景颜色
                // showBackground:true,                //是否显示背景颜色
                // backgroundColor: Cesium.Color.fromCssColorString('#67ADDF').withAlpha(0.2),   //背景颜色
                style: Cesium.LabelStyle.FILL, //label样式
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.CENTER, //垂直位置
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT, //水平位置
                // eyeOffset: new Cesium.Cartesian3(0, 0, 1),
                pixelOffset: new Cesium.Cartesian2(0, 0, 1), //偏移
                scaleByDistance: new Cesium.NearFarScalar(300000, 1, 300000, 0), //设置距离方位内，Billboard或Label的缩放比例
              },
            });
          }
          viewer.dataSources.add(dataSource);
        }
      };

      //地图事件定义及处理
      const onMoveEndMap = () => {
        console.log('onMoveEndMap');
        //获取相机高度
        let height = Math.ceil(viewer.camera.positionCartographic.height);
        //根据相机高度计算层级
        let zoom = heightToZoom(height);
        console.log('onMoveEndMap height=' + height + ' zoom=' + zoom);
      };

      const heightToZoom = (height) => {
        var A = 40487.57;
        var B = 0.00007096758;
        var C = 91610.74;
        var D = -40467.74;
        return Math.round(D + (A - D) / (1 + Math.pow(height / C, B)));
      };

      //隐藏指定name的数据源，用于控制对应图层隐藏
      let hideViewerDataSource = (name) => {
        //设置dataSource的属性控制
        //无法获取dataSources[0]下的所有属性，包括entities和show
        // 三、使用自定义属性时报错：Cannot read properties of undefined
        // 解决办法：在引入js文件时（用到了cesium），注意在cesium渲染之后在调用，不然会导致属性未定义或在cesium上找不到该属性。
        // console.log('dataSources =' + viewer.dataSources.length + ' entities =' + viewer.dataSources[0].entities.length);
        // viewer.dataSources[0].show = false;
        //指定数据源进行移除，通过下标或名称获取到的对象为undefined，只能使用get方法获取
        // var removeDS = viewer.dataSources[0];
        // var removeDS = viewer.dataSources[name];
        var idx = getDataSourceIndexByName(name);
        console.log('remove DataSource name=' + name + ' index =' + idx);
        if (idx >= 0) {
          var removeDS = viewer.dataSources.get(idx);
          viewer.dataSources.remove(removeDS, true);
        }
      };
      //显示指定name的数据源，用于控制对应图层显示
      let showViewerDataSource = (name) => {
        //先隐藏，再显示
        hideViewerDataSource(name);
        console.log('add layer name=' + name);
        switch (name) {
          case CENTRAL_POINT:
            loadYuanMouCenterPointEntity();
            break;
          case XZQH_XJ:
            loadAreaYuanMouXianEntity();
            break;
          case XZQH_XZJ:
            loadAreaXiangZhengEntity();
            break;
          case XZQH_XZM:
            loadYuanMouXZPointEntity();
            break;
          case HHKQ_HL:
            loadRiverLCJLineEntity();
            loadRiverJSJLineEntity();
            // loadRiverLCJDynamicFlowEntity();
            loadRiverDynamicFlowEntity();
            break;
          case HHKQ_HP:
            break;
          case HHKQ_SK:
            break;
          case HHKQ_GQ:
            break;
          case HHKQ_QD:
            break;
          case HHKQ_BT:
            break;
          case SSSS_QSK:
            break;
          case SSSS_PWK:
            break;
          case XCGH_XCRY:
            // loadDemoStationPointEntity();
            break;
          case XCGH_ZRHD:
            break;
          case JCXX_SWZ:
            // loadWaterStationsPointEntity();
            break;
          case JCXX_YLZ:
            // loadRainStationsPointEntity();
            break;
          case JCXX_SPZ:
            // loadVedioStationsPointEntity;
            break;
          case JCXX_LLZ:
            break;
          case JCXX_SWZ:
            break;
          case JCXX_HQZ:
            break;
          case JCXX_GSZ:
            break;
          default:
            break;
        }
      };

      //根据数据源name获取对应的序号，找不到对应时返回-1
      const getDataSourceIndexByName = (name) => {
        var dataSource = viewer.dataSources;
        if (dataSource != null && dataSource.length > 0) {
          var dataSourceCount = viewer.dataSources.length;
          for (var i = 0; i < dataSourceCount; i++) {
            var ds = viewer.dataSources.get(i) as Cesium.DataSource;
            console.log(
              'viewer.dataSource index= ' + i + ' name= ' + ds.name + ' show= ' + ds.show,
            );
            if (ds.name == name) return i;
          }
        } else {
          console.log('viewer.dataSource is null.');
        }

        return -1;
      };

      //图层Tree中的操作，选中和取消勾选控制对应图层的显隐
      let onLayerTreeCheck = (key, e) => {
        var checkNodeKey = e.node.key; //获取对应操作的TreeNode节点的key
        //在记录变量中判断是否选中
        var isNodeChecked = checkedKeys.value.includes(checkNodeKey);
        console.log(
          'check =' +
            key +
            'e.node =' +
            e.node +
            ' e.node.key =' +
            e.node.key +
            ' checked=' +
            isNodeChecked,
        );
        if (isNodeChecked) {
          showViewerDataSource(checkNodeKey);
        } else {
          hideViewerDataSource(checkNodeKey);
        }
      };

      //地图功能测试操作，传入参数演示不通的效果
      const cesiumFunctionTest = (op) => {
        switch (op) {
          case 1:
            console.log(
              '测试获取元谋县水务局标注 dataSources name=' +
                CENTRAL_POINT +
                ' index = ' +
                getDataSourceIndexByName(CENTRAL_POINT),
            );
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          default:
            break;
        }
      };

      onMounted(() => {
        initCesiumViewer();

        //设置地图事件处理--ScreenSpaceEventHandler
        var screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
        //鼠标移动事件
        var mouseMoveEvent = Cesium.ScreenSpaceEventType.MOUSE_MOVE;
        screenSpaceEventHandler.setInputAction(function (movement) {
          //------------基本信息显示---------------
          //movement.endPosition为屏幕中的xy，单位为px
          const toolTipElement = document.getElementById('toolTipElement');
          toolTipElement.style.display = 'none';

          let ray = viewer.camera.getPickRay(movement.endPosition);
          var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
          if (cartesian) {
            //将笛卡尔三维坐标转为地图坐标（弧度）
            var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
            //将地图坐标（弧度）转为十进制的度数
            var position = {};
            position.longitude = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4); //经度
            position.latitude = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4); //纬度
            position.altitude = (viewer.camera.positionCartographic.height / 1000.0).toFixed(0); //视角高
            // var elec_String = viewer.scene.globe.getHeight(cartographic).toFixed(4);//海拔
            // console.log(
            //   'mouseMoveEvent endPosition=' +
            //     JSON.stringify(movement.endPosition) +
            //     ' position=' +
            //     JSON.stringify(position),
            // );

            setCurrentMousePosition(position);
          }
          //------------标注信息显示---------------
          var foundEntityInPosition = false; //是否是否在当前点找到entity

          var scene = viewer.scene;
          if (scene.mode !== Cesium.SceneMode.MORPHING) {
            var pickedObject = scene.pick(movement.endPosition);
            //判断是否选中对象
            if (
              scene.pickPositionSupported &&
              Cesium.defined(pickedObject) &&
              pickedObject.id != '' &&
              pickedObject.id._name != undefined &&
              pickedObject.id._name != ' '
            ) {
              var cartesian = viewer.scene.pickPosition(movement.endPosition);
              if (Cesium.defined(cartesian)) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                console.log(
                  'mouseMoveEvent pick id=' +
                    pickedObject.id._id +
                    ' name:' +
                    pickedObject.id._name +
                    ' content=' +
                    pickedObject.id._content,
                );
                var entityId = pickedObject.id._id;
                //label.text不支持html，最简单的都不支持
                // var title =
                //   '1.显示第一行文字；<br />2.显示第二行文字；<div style="background-color:#FF0000;">自定义div内容和样式</div>' +
                //   '<div>站点ID：' +
                //   pickedObject.id._id +
                //   '<br \/>站点名称：' +
                //   pickedObject.id._name +
                //   '<br \/>数据值：' +
                //   pickedObject.id._content +
                //   '</div>' +
                //   ' Get entitiesDisplayInfo value=' +
                //   entitiesDisplayInfo[entityId];
                // setToolTipTitle(title);

                // toolTipElement.style.display = 'block';
                // toolTipElement.style.marginLeft = movement.endPosition.x + 'px';
                // toolTipElement.style.marginTop = movement.endPosition.y + 'px';

                foundEntityInPosition = true;
              }
            }
          }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        //鼠标左键点击事件
        let leftMouseClickEvent = Cesium.ScreenSpaceEventType.LEFT_CLICK;
        //注册事件
        screenSpaceEventHandler.setInputAction((event) => {
          //判断点击位置是否有entity
          var pickedObject = viewer.scene.pick(event.position);
          if (Cesium.defined(pickedObject)) {
            console.log(
              'leftMouseClickEvent=' + JSON.stringify(event) + ' pickedObject=' + pickedObject,
            );
            if (pickedObject.id && pickedObject.id instanceof Cesium.Entity) {
              //获取点击选中Entity的id
              var entityId = pickedObject.id._id;
              console.log('LEFT_CLICK选中了Entity pickedObject.id._id=' + entityId);
              var newUrl = 'https://www.baidu.com/s?wd=' + entityId;
              window.open(newUrl, '_blank');
            }
            if (pickedObject.primitive instanceof Cesium.Primitive) {
              console.log('选中了Primitive-');
            }
            if (pickedObject.primitive instanceof Cesium.Model) {
              console.log('选中了Model-');
            }
            if (pickedObject.primitive instanceof Cesium.Cesium3DTileFeature) {
              console.log('选中了Cesium3DTileFeature-');
            }
          }
        }, leftMouseClickEvent);
        //注销事件
        // handler.removeInputAction(eventType);

        //监听地图移动完成事件
        viewer.camera.moveEnd.addEventListener(onMoveEndMap);

        //通过Entity方式添加的几何图形，可以使用该时间获取选中的Entity，无需编写鼠标事件
        viewer.selectedEntityChanged.addEventListener(function (entity) {
          console.log('选中entity-' + entity.id);
        });

        //todo--图层控制
        //每个entity添加时有id
        // viewer.entities.getById('testId1').show = false; //设置属性控制显隐
        // viewer.entities.removeAll(); //移除所有
        // viewer.entities.remove('testId1'); //移除指定id的entity
        //按图层控制方法
        //方法一、viewer.dataSources["_dataSources"][2].show = false;
        //方法二、将添加的entity进行记录，遍历并判断类型进行设置属性；if(sites[index].type != "1")

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
        flyTo(101.8476, 25.55, 282500, 5);

        //一张图首页
        //清除所有DataSource再加载所需的图层进行显示
        // viewer.dataSources.removeAll();
        //添加流域边界标注
        loadAreaEntity();
        //添加河流标注
        loadLineEntity();
        //添加水务局标注
        loadPointEntity();
        //元谋演示数据标注加载
        // loadYmDemoPointEntity();

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
        currentMousePosition,
        treeData,
        expandedKeys,
        selectedKeys,
        checkedKeys,
        toolTipTitle,
        flyTo,
        onLayerTreeCheck,
        setCurrentMousePosition,
        showViewerDataSource,
        hideViewerDataSource,
        setToolTipTitle,
        getPopupContainer,
        cesiumFunctionTest,
        loadYmDemoPointEntity,
        loadYmDemoRainStationsPointEntity,
        loadYmDemoWaterStationsPointEntity,
        loadYmDemoVedioStationsPointEntity,
        loadYmDemoOtherPointEntity,
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
