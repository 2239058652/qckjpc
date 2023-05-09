<template>
  <div class="szy-map-xsk">
    <div id="szy-echartMapContainer"></div>
    <div id="szy-tsk">
      <dv-border-box-12>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">名称：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.name }}</div>
        </div>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">当前库水位：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.nowWater }} m</div>
        </div>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">当前库容：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.nowV }} 万立方米</div>
        </div>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">总库容：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.zongV }} 万立方米</div>
        </div>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">当前蓄水比例：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.nowWaterBl }} %</div>
        </div>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">预计下月蓄水达：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.nextXs }} 万立方米</div>
        </div>
        <div class="szy-card-header">
          <div class="szy-card-header-left" style="font-size: 0.8rem;">预计下月蓄水比例：</div>
          <div class="szy-card-header-right" style="font-size: 0.8rem;">{{ slMessage.nextXsBl }} %</div>
        </div>
      </dv-border-box-12>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import fileGeoJsonData from '/@/../assets/geojson/ymgeo.json';
import { reactive } from 'vue';
import zxsk from '/@/../assets/images/ym/rs5.png';
import xxsk1 from '/@/../assets/images/ym/rs1.png';
import xxsk2 from '/@/../assets/images//ym/rs2.png';

//测试数据
const testdata = [
  {
    id: 'W2-11',
    name: '虎溪水库',
    type: 'xxsk1',
    lng: 101.730828,
    lat: 25.830367,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-12',
    name: '大河边水库',
    type: 'xxsk2',
    lng: 101.680937,
    lat: 25.783693,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-14',
    name: '舍多水库',
    type: 'xxsk2',
    lng: 101.91817,
    lat: 25.81071,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-15',
    name: '挨小河水库',
    type: 'xxsk1',
    lng: 101.913402,
    lat: 25.652286,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-16',
    name: '波哼水库',
    type: 'xxsk2',
    lng: 101.92847,
    lat: 25.549535,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-17',
    name: '中村水库',
    type: 'xxsk2',
    lng: 101.953096,
    lat: 25.938185,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-18',
    name: '已波龙水库',
    type: 'xxsk2',
    lng: 101.8675,
    lat: 25.4446,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-19',
    name: '那能水库',
    type: 'xxsk2',
    lng: 101.921619,
    lat: 25.631828,
    nowWater: '',
    nowV: '',
    nowBl: '',
    nextXs: '',
    nextBl: '',
    zongV: '',
  },
  {
    id: 'W2-1',
    name: '上你莫水库',
    type: 'xxsk2',
    lng: 101.875298,
    lat: 25.757328,
    nowWater: '',
    nowV: '',
    nowBl: '',
    nextXs: '',
    nextBl: '',
    zongV: '',
  },
  {
    id: 'W2-2',
    name: '弯腰树水库',
    type: 'xxsk1',
    lng: 101.729542,
    lat: 25.761279,
    nowWater: '',
    nowV: '',
    nowBl: '',
    nextXs: '',
    nextBl: '',
    zongV: '',
  },
  {
    id: 'W2-3',
    name: '河尾水库',
    type: 'zxsk',
    lng: 101.679,
    lat: 25.728,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-4',
    name: '鼠街水库',
    type: 'xxsk1',
    lng: 101.598533,
    lat: 25.651076,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-5',
    name: '马道地水库',
    type: 'xxsk2',
    lng: 101.776016,
    lat: 25.641679,
    nowWater: '803.25',
    nowV: '100',
    nowBl: '96',
    nextXs: '98',
    nextBl: '94',
    zongV: '150',
  },
  {
    id: 'W2-6',
    name: '新河水库',
    type: 'xxsk1',
    lng: 101.777811,
    lat: 25.932784,
    nowWater: '',
    nowV: '',
    nowBl: '',
    nextXs: '',
    nextBl: '',
    zongV: '',
  },
  {
    id: 'W2-7',
    name: '丙令水库',
    type: 'xxsk1',
    lng: 101.790989,
    lat: 25.799455,
    nowWater: '',
    nowV: '',
    nowBl: '',
    nextXs: '',
    nextBl: '',
    zongV: '',
  },
  {
    id: 'W2-9',
    name: '猛连水库',
    type: 'zxsk',
    lng: 101.659735,
    lat: 25.655524,
    nowWater: '803.25',
    nowV: '298',
    nowBl: '96',
    nextXs: '283',
    nextBl: '94',
    zongV: '310',
  },
];

export default {
  setup() {
    let slMessage = reactive({
      name: '猛连水库 中型水库',
      nowWater: '803.25',
      nowV: '298',
      nowWaterBl: '96',
      nextXs: '283',
      nextXsBl: '94',
      zongV: '310',
    }); //水库灌区数据

    //根据屏幕大小设置字体等大小的方法，echarts大小单位默认值为px，无法更改
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
          layoutCenter: ['35%', '47%'], //位置
          layoutSize: '93%', //大小
          map: 'ymbg', //该属性要和echarts.registerMap（）里的一致
          timeStyle: {
            areaColor: '#FF1622',
          },
          label: {
            // 文字
            show: true,
            color: '#334000',
            fontSize: fontSize(0.6),
          },
          itemStyle: {
            // 地图样式
            areaColor: '#0e0e0e', //区域颜色
            borderColor: '#FFFFFF', //边框颜色
            borderWidth: 1,
          },
          //设置各乡镇区域颜色
          regions: [
            {
              name: '黄瓜园镇',
              itemStyle: {
                areaColor: '#C7C1D9',
              },
            },
            {
              name: '元马镇',
              itemStyle: {
                areaColor: '#E2E5AF',
              },
            },
            {
              name: '老城乡',
              itemStyle: {
                areaColor: '#A0AFA0',
              },
            },
            {
              name: '凉山乡',
              itemStyle: {
                areaColor: '#E1A555',
              },
            },
            {
              name: '江边乡',
              itemStyle: {
                areaColor: '#AFC4D7',
              },
            },
            {
              name: '物茂乡',
              itemStyle: {
                areaColor: '#FF9A79',
              },
            },
            {
              name: '姜驿乡',
              itemStyle: {
                areaColor: '#F8D7B9',
              },
            },
            {
              name: '平田乡',
              itemStyle: {
                areaColor: '#D9B1BE',
              },
            },
            {
              name: '新华乡',
              itemStyle: {
                areaColor: '#9EB3C6',
              },
            },
            {
              name: '羊街镇',
              itemStyle: {
                areaColor: '#C8C1D9',
              },
            },
          ],
        },
        //根据经纬度配置相应的图标
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: testdata.map((item) => {
              var tb = item.type == 'zxsk' ? zxsk : item.type == 'xxsk1' ? xxsk1 : xxsk2;
              return {
                name: item.name,
                value: [item.lng, item.lat],

                //设置图标和大小
                label: {
                  width: fontSize(0.8),
                  height: fontSize(0.8),
                  show: true,
                  formatter: '',
                  //图标使用backgroundColor属性设置
                  backgroundColor: {
                    image: tb,
                  },
                },
              };
            }),
            itemStyle: {
              color: 'transparent',
              shadowBlur: 10,
              shadowColor: '#333',
            },
          },
        ],
      };
      return option;
    }

    onMounted(() => {
      //获取节点，加载地图信息
      var chartDom = document.getElementById('szy-echartMapContainer')!;
      var myChart = chartDom && echarts.init(chartDom);
      myChart.setOption(setOption());
      //根据屏幕大小调整地图
      window.addEventListener('resize', () => {
        myChart.resize();
        myChart.setOption(setOption());
      })

      myChart.on('mouseover', function (params) {
        //鼠标移入乡镇区域不展示高亮效果
        myChart.dispatchAction({
          type: 'downplay',
          geoIndex: 0,
          name: params.name,
        });

        //鼠标移入图标位置，在信息框显示该点信息
        if (params.componentType == 'series') {
          for (var i = 0; i < testdata.length; i++) {
            if (params.name == testdata[i].name) {
              let sklx = testdata[i].type == 'zxsk' ? '中型水库' : (testdata[i].type == 'xxsk1' ?  '小(1)型水库' : '小(2)型水库');
              slMessage.name = params.name + '  ' + sklx;
              slMessage.nowWater =  (testdata[i].nowWater == '' || testdata[i].nowWater == null) ? '--' : testdata[i].nowWater;
              slMessage.nowV = (testdata[i].nowV == '' || testdata[i].nowV == null) ? '--' : testdata[i].nowV;
              slMessage.nowWaterBl = (testdata[i].nowBl == '' || testdata[i].nowBl == null) ? '--' : testdata[i].nowBl;
              slMessage.nextXs = (testdata[i].nextXs == '' || testdata[i].nextXs == null) ? '--' : testdata[i].nextXs;
              slMessage.nextXsBl = (testdata[i].nextBl == '' || testdata[i].nextBl == null) ? '--' : testdata[i].nextBl;
              slMessage.zongV = (testdata[i].zongV == '' || testdata[i].zongV == null) ? '--' : testdata[i].zongV;
            }
          }
        }
      });
    });

    return {
      slMessage,
    };
  },
};
</script>
<style lang="less">
@import './../layouts/layout.less';

.szy-map-xsk {
  width: 39%;
  height: 52%;
  position: fixed;
  top: 9%;
  right: 30.5%;
  // background-color: wheat;
}

#szy-tsk {
  color: #fff;
  text-align: left;
  width: 16rem;
  height: 10.5rem;
  position: absolute;
  bottom: 35%;
  right: 5%;
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 20px;
  border: 1px solid rbga(0, 0, 0, 0.2);
}

#szy-echartMapContainer {
  width: 100%;
  height: 100%;
}

.szy-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .szy-card-header-left {
    padding-top: 0.2rem;
    font-size: 0.8rem;
    font-weight: bold;
    padding-left: 10px;
  }

  .szy-card-header-right {
    padding-top: 0.2rem;
    padding-right: 10px;
    font-size: 0.8rem;
    color: #03d3ec;
  }
}
</style>
