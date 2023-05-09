<template>
  <div class="saq-map-xsk">
    <div id="saq-echartMapContainer"></div>
    <div id="saq-tsk">
      <dv-border-box-12>
        <div class="saq-card-header">
          <div class="saq-card-header-left">名称：</div>
          <div class="saq-card-header-right">{{ czhMessage.name }}</div>
        </div>
        <div class="saq-card-header" v-if="czhMessage.type == '--' || czhMessage.type == null || czhMessage.type == ''">
          <div class="saq-card-header-left">最新数据：</div>
          <div class="saq-card-header-right">--</div>
        </div>
        <div class="saq-card-header" v-if="czhMessage.type == 'rain'">
          <div class="saq-card-header-left">最新雨量：</div>
          <div class="saq-card-header-right">{{ czhMessage.data }} mm</div>
        </div>
        <div class="saq-card-header" v-if="czhMessage.type == 'water'">
          <div class="saq-card-header-left">最新水位：</div>
          <div class="saq-card-header-right">{{ czhMessage.data }} m</div>
        </div>
        <div class="saq-card-header" v-if="czhMessage.type == 'video'">
          <div class="saq-card-header-left">视频地址：</div>
          <div class="saq-card-header-right" style="font-size: 0.7rem;">{{ czhMessage.data }} </div>
        </div>
        <div class="saq-card-header" v-if="czhMessage.type == 'zaihai'">
          <div class="saq-card-header-left">位置：</div>
          <div class="saq-card-header-right">{{ czhMessage.data }} </div>
        </div>
        <div class="saq-card-header">
          <div class="saq-card-header-left">时间：</div>
          <div class="saq-card-header-right">{{ czhMessage.time }} </div>
        </div>
      </dv-border-box-12>
    </div>
    <div style="height: 20%; width: 20%; position: absolute; bottom: 10%; left: 5%;">
      <dv-border-box-12>
        <div class="yj-card-header">
          <div class="yj-card-header-left">水位超限:</div>
          <div class="yj-card-header-right">1个</div>
        </div>
        <div class="yj-card-header">
          <div class="yj-card-header-left">降雨超限:</div>
          <div class="yj-card-header-right">0个</div>
        </div>
        <div class="yj-card-header">
          <div class="yj-card-header-left">大坝安全预警:</div>
          <div class="yj-card-header-right">2个</div>
        </div>
      </dv-border-box-12>
    </div>
    <div  class="tlk">
      <div class="saq-tl">
        <div class="saq-tb"><img style="height: 100%; width: 100%;" src="../../../../../../assets/images/ym/rain.png" />
        </div>
        <div class="saq-tbmc">雨量站</div>
        <div class="saq-tb"><img style="height: 100%; width: 100%;" src="../../../../../../assets/images/ym/video.png" />
        </div>
        <div class="saq-tbmc">视频站</div>
        <div class="saq-tb"><img style="height: 100%; width: 100%;" src="../../../../../../assets/images/ym/water.png" />
        </div>
        <div class="saq-tbmc">水位站</div>
        <div class="saq-tb"><img style="height: 100%; width: 100%;" src="../../../../../../assets/images/ym/zaihai.png" />
        </div>
        <div class="saq-tbmc">灾害警告</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import fileGeoJsonData from '/@/../assets/geojson/ymgeo.json';
import { reactive } from 'vue';

import video from "/@/../assets/images/ym/video.png";
import rain from "/@/../assets/images/ym/rain.png";
import water from "/@/../assets/images//ym/water.png";
import video_bj from "/@/../assets/images/ym/video_bj.png";
import rain_bj from "/@/../assets/images/ym/rain_bj.png";
import water_bj from "/@/../assets/images//ym/water_bj.png";
import zaihai from "/@/../assets/images//ym/zaihai.png";

//测试数据
const testdata = [
  { id: 'V001', name: '视频站3-1', type: 'video', lng: 101.6692, lat: 25.8411, add: 'https://123.125.3.4?werdgds23sfssfdg', data: '', zt: 'unusual',xs:true },
  { id: 'V002', name: '视频站3-2', type: 'video', lng: 101.7117, lat: 25.7762, add: 'https://123.125.3.5?werdgds23sfssfdg', data: '', zt: 'normal' ,xs:true },
  { id: 'V003', name: '视频站3-3', type: 'video', lng: 101.7759, lat: 25.9531, add: 'https://123.125.35.6?wxvcggds23sfssfdg', data: '', zt: 'normal',xs:true },
  { id: 'V004', name: '视频站3-4', type: 'video', lng: 101.721, lat: 25.84, add: 'https://123.125.3.7?werdgds23sfssfdg', data: '', zt: 'normal' ,xs:true},
  { id: 'V005', name: '视频站3-5', type: 'video', lng: 101.9119, lat: 25.7974, add: 'https://1.12.3.9?werdgsdasxxc23sfssfdg', data: '', zt: 'normal' ,xs:true},
  { id: 'V006', name: '视频站3-6', type: 'video', lng: 101.688, lat: 25.7009, add: 'https://12.1.35.46?wsffsdsd3sfssfdg', data: '', zt: 'normal' ,xs:true},
  { id: 'W2-11', name: '虎溪', type: 'rain', lng: 101.730828, lat: 25.830367, add: '', data: '0.5', zt: 'normal' ,xs:true},
  { id: 'W2-12', name: '大河边', type: 'rain', lng: 101.680937, lat: 25.783693, add: '', data: '0', zt: 'normal' ,xs:true},
  { id: 'W2-13', name: '鸡冠山', type: 'rain', lng: 101.909068, lat: 25.85887, add: '', data: '0', zt: 'normal' ,xs:true},
  { id: 'W2-14', name: '舍多', type: 'rain', lng: 101.91817, lat: 25.81071, add: '', data: '0', zt: 'unusual' ,xs:true},
  { id: 'W2-15', name: '挨小', type: 'rain', lng: 101.913402, lat: 25.652286, add: '', data: '2.5', zt: 'normal' ,xs:true},
  { id: 'W2-3', name: '河尾水库', type: 'water', lng: 101.679, lat: 25.728, add: '', data: '234.23', zt: 'normal' ,xs:true},
  { id: 'W2-4', name: '鼠街水库站', type: 'water', lng: 101.598533, lat: 25.651076, add: '', data: '134.26', zt: 'normal' ,xs:true},
  { id: 'W2-5', name: '马道地水库', type: 'water', lng: 101.776016, lat: 25.641679, add: '', data: '74.36', zt: 'normal' ,xs:true},
  { id: 'W2-6', name: '新河水库', type: 'water', lng: 101.777811, lat: 25.932784, add: '', data: '96.67', zt: 'normal' ,xs:true},
  { id: 'W2-7', name: '丙令水库站', type: 'water', lng: 101.790989, lat: 25.799455, add: '', data: '78.23', zt: 'normal' ,xs:true},
  { id: 'W2-8', name: '河外', type: 'water', lng: 101.7628, lat: 25.942791, add: '', data: '176.26', zt: 'unusual' ,xs:true},
  { id: 'W2-9', name: '猛连', type: 'water', lng: 101.659735, lat: 25.655524, add: '', data: '235.20', zt: 'normal' ,xs:true},
  { id: 'W2-10', name: '领庄', type: 'water', lng: 101.866896, lat: 25.767393, add: '', data: '124.00', zt: 'normal' ,xs:true},
];
const zhtest = [
  // {name:'山体滑坡',lng: 101.7692, lat: 25.8511,type:'zaihai',xs:true,wz:'物茂乡'},
  {name:'坍塌事故',lng: 101.9972, lat: 25.4911,type:'zaihai',xs:true,wz:'羊街镇'}
  // {name:'泥石流',lng: 101.8692, lat: 25.942791,type:'zaihai',xs:true,wz:'江边乡'},
  // {name:'暴雨',lng: 101.9692, lat: 25.767393,type:'zaihai',xs:true,wz:'凉山乡'}
]

export default {

  setup() {
    //测站信息
    let czhMessage = reactive({
      name: '鼠街水库站(水位站)',
      type: 'water',
      data: '134.26',
      time: '--'
    });

    //图标是否显示
    let lableShow = true;

    //根据屏幕大小设置字体等大小的方法,echarts大小单位默认值为px，无法更改
    function fontSize(res) {
      const clientWidth = document.documentElement.clientWidth;
      if (!clientWidth) return;
      let fontSize = 20 * clientWidth / 1920;
      return res * fontSize;
    }
    echarts.registerMap('ymbg', { geoJSON: fileGeoJsonData });

    function setOption() {
      let option = {
        //初始化地图信息
        geo: {
          aspectScale: 1,
          layoutCenter: ['40%', '50%'],//位置
          layoutSize: '100%',//大小
          map: 'ymbg', //该属性要和echarts.registerMap（）里的一致
          timeStyle: {
            areaColor: '#FF1622'
          },
          label: { // 文字
            show: true,
            color: '#334000',
            fontSize: fontSize(0.6)
          },
          itemStyle: { // 地图样式
            areaColor: '#0e0e0e',  //区域颜色
            borderColor: '#FFFFFF',  //边框颜色
            borderWidth: 1
          },
          //设置各乡镇区域颜色
          regions: [
            {
              name: '黄瓜园镇',
              itemStyle: {
                areaColor: '#C7C1D9'
              },
            }, {
              name: '元马镇',
              itemStyle: {
                areaColor: '#E2E5AF'
              },
            }, {
              name: '老城乡',
              itemStyle: {
                areaColor: '#A0AFA0'
              },
            }, {
              name: '凉山乡',
              itemStyle: {
                areaColor: '#E1A555'
              },
            }, {
              name: '江边乡',
              itemStyle: {
                areaColor: '#AFC4D7'
              },
            }, {
              name: '物茂乡',
              itemStyle: {
                areaColor: '#FF9A79'
              },
            }, {
              name: '姜驿乡',
              itemStyle: {
                areaColor: '#F8D7B9'
              },
            }, {
              name: '平田乡',
              itemStyle: {
                areaColor: '#D9B1BE'
              },
            }, {
              name: '新华乡',
              itemStyle: {
                areaColor: '#9EB3C6'
              },
            }, {
              name: '羊街镇',
              itemStyle: {
                areaColor: '#C8C1D9'
              },
            }
          ],
        },
        //根据经纬度配置相应的图标
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: testdata.map(item => {
              var tb = item.type == "video" ? (item.zt == 'normal' ? video : video_bj) : (item.type == "rain" ? (item.zt == 'normal' ? rain : rain_bj) : (item.zt == 'normal' ? water : water_bj));
              return {
                name: item.name,
                value: [item.lng, item.lat],

                //设置图标和大小
                label: {
                  width: fontSize(0.8),
                  height: fontSize(0.8),
                  show: item.xs,
                  formatter: '',
                  //图标使用backgroundColor属性设置
                  backgroundColor: {
                    image: tb
                  }
                },
              }
            }),
            itemStyle: {
              color: 'transparent',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: zhtest.map(item => {
              return {
                name: item.name,
                value: [item.lng, item.lat],
                //设置图标和大小
                label: {
                  width: fontSize(0.8),
                  height: fontSize(0.8),
                  show: lableShow,
                  formatter: '',
                  //图标使用backgroundColor属性设置
                  backgroundColor: {
                    image: zaihai
                  }
                },
              }
            }),
            itemStyle: {
              color: 'transparent',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
        ],
      };
      return option;
    }

    onMounted(() => {

      //获取节点，加载地图信息
      var chartDom = document.getElementById('saq-echartMapContainer')!;
      var myChart = chartDom && echarts.init(chartDom);
      myChart.setOption(setOption());
      //根据屏幕大小调整地图
      window.addEventListener('resize', () => {
        myChart.resize();
        myChart.setOption(setOption());
      })
      
      //故障测站点位图标闪烁显示
      setInterval(() => {
        lableShow = !lableShow;
        for(var i = 0; i < testdata.length ; i++){
          if(testdata[i].zt == "unusual"){
            testdata[i].xs = lableShow
          }
        }
        myChart.setOption(setOption());
      },1000)

      let time = new Date();
      czhMessage.time = "" + time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + "  " + time.getHours() + ":" + time.getMinutes();
      myChart.on('mouseover', function (params) {
        //鼠标移入乡镇区域不展示高亮效果
        if (params.componentType == 'geo') {
          myChart.dispatchAction({
            type: 'downplay',
            geoIndex: 0,
            name: params.name
          })
        }
        //鼠标移入图标位置，在信息框显示该点信息
        if (params.componentType == "series") { //站点坐标在option的series里面
          if(params.componentIndex == 0){
            for (var i = 0; i < testdata.length; i++) {
              if (params.name == testdata[i].name) {
                let czlx = testdata[i].type == "rain" ? "雨量站" : (testdata[i].type == "video" ? "视频站" : "水位站");
                czhMessage.name = params.name + "(" + czlx + ")";
                czhMessage.type = testdata[i].type;
                if(testdata[i].zt == 'normal'){
                  czhMessage.data = testdata[i].type == 'video' ? testdata[i].add : testdata[i].data;
                  czhMessage.time = "" + time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + "  " + time.getHours() + ":" + time.getMinutes();
                }else{
                  czhMessage.data = '--';
                  czhMessage.time = "--"; 
                }
              }
            }
          }
          if(params.componentIndex == 1){
            for(var i=0; i<zhtest.length ;i ++){
              if(params.name == zhtest[i].name){
                czhMessage.name = params.name
                czhMessage.type = zhtest[i].type
                czhMessage.data = zhtest[i].wz
              }
            }
          }
        }
      })
    });

    return {
      czhMessage
    }
  },
};
</script>
<style lang="less">
@import './../layouts/layout.less';

.saq-map-xsk {
  width: 48%;
  height: 52%;
  position: fixed;
  top: 9%;
  right: 26%;
  // background-color: wheat;
}

#saq-tsk {
  color: #fff;
  text-align: left;
  width: 18rem;
  height: 5rem;
  // background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 35%;
  right: 3%;
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 20px;
  border: 1px solid rbga(0, 0, 0, 0.2);
}

#saq-echartMapContainer {
  width: 100%;
  height: 95%;
}

.saq-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .saq-card-header-left {
    font-size: 0.8rem;
    font-weight: bold;
    width: 27%;
    padding-top: 0.2rem;
    padding-left: 10px;
  }

  .saq-card-header-right {
    // padding-right: 10px;
    padding-top: 0.2rem;
    text-align: center;
    width: 73%;
    font-size: 0.8rem;
    color: #03d3ec;
  }
}


.yj-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .yj-card-header-left {
    font-size: 0.8rem;
    font-weight: bold;
    width: 70%;
    padding-left: 10px;
    padding: 0.2rem;
  }

  .yj-card-header-right {
    // padding-right: 10px;
    padding-top: 0.2rem;
    text-align: center;
    width: 30%;
    font-size: 0.8rem;
    padding: 0.2rem;
    color: #03d3ec;
  }
}

.tlk {
  position: absolute;
  bottom: 0;
  right: 25%;
  height: 5%;
  width: 40%;
}

.saq-tl {
  height: 100%;
  width: 100%;
}

.saq-tb {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 1%;
  float: left;
}

.saq-tbmc {
  float: left;
  font-size: 0.8rem;
  padding-right: 1rem;
}
</style>
