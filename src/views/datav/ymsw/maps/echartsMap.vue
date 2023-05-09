<template>
  <div class="xsk">
    <div id="echartMapContainer"></div>
    <div id="tsk">
      <dv-border-box-12>
        <div style="color: #4adcf0; text-align: center;height: 10%;">{{ xzMessage.name }}</div>
        <div style="color: white;height: 85%; font-size:0.6rem; margin:0 1rem 1rem 1rem; overflow:scroll;">{{ xzMessage.jcxx }} <br/>{{ xzMessage.qh }} <br/>{{ xzMessage.sw }} <br/>{{ xzMessage.zrzh }} <br/>{{ xzMessage.zrzy }} <br/></div>
      </dv-border-box-12>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import fileGeoJsonData from '/@/../assets/geojson/ymgeo.json';
import { reactive } from 'vue';

export default {
  setup() {
    let xzMessage = reactive({
      name: '',
      jcxx: '',
      qh:'',
      sw:'',
      zrzh:'',
      zrzy:'',
    });

    //根据屏幕大小设置字体等大小的方法,echarts大小单位默认值为px，无法更改
    function fontSize(res) {
      const clientWidth = document.documentElement.clientWidth;
      if (!clientWidth) return;
      let fontSize = 20 * clientWidth / 1920;
      return res * fontSize;
    }

    echarts.registerMap('ym', { geoJSON: fileGeoJsonData });

    function setOption() {
      let option = {
        //初始化地图信息
        geo: {
          aspectScale: 1,
          layoutCenter: ['30%', '50%'], //位置
          layoutSize: '100%', //大小
          map: 'ym', //该属性要和echarts.registerMap（）里的一致
          // roam:true,//地图移动和缩放控制属性，默认不开启
          timeStyle: {
            areaColor: '#FF1622',
          },
          label: {
            // 文字
            show: true,
            color: '#000000',
            fontSize: fontSize(0.8),
          },
          itemStyle: {
            // 地图样式
            areaColor: '#0e0e0e', //区域颜色
            borderColor: '#FFFFFF', //边框颜色
            borderWidth: 1,
          },
          emphasis: {
            // 鼠标移入时显示的默认样式
            itemStyle: {
              areaColor: '#4adcf0',
              borderColor: '#404a59',
              borderWidth: 1,
            },
            label: {
              // 文字
              show: true,
              color: '#0D5EFF',
              fontSize: fontSize(1),
              fontWeight: 600,
            },
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
      };
      return option;
    }

    onMounted(() => {
      //获取节点，加载地图信息
      var chartDom = document.getElementById('echartMapContainer')!;
      var myChart = chartDom && echarts.init(chartDom);
      myChart.setOption(setOption());
      //根据屏幕大小调整地图
      window.addEventListener('resize', () => {
        myChart.resize();
        myChart.setOption(setOption());
      })
      
      let xzmcArr = reactive([
        {name:'元马镇', 
        jcxx:"1、基础信息：行政区域面积132.37平方千米。户籍人口为60502人。海拔1020-1790米",
        qh:"2、气候：元马镇属南亚热带季风气候。其特点是昼夜温差大，四季不分明，基本无冬、无霜。多年平均气温22.9℃。年平均降水量562毫米，极端年最大雨量906.7毫米（1966年），极端年最少雨量288毫米（1960年）。降雨集中在每年6—10月。",
        sw:"3、水文：元马镇境内河流属金沙江水系。有常流河2条、季节河5条。龙川江、勐冈河为常流河，沙地干河、大箸河、文冈河、丙戌干河、那控河为季节河。",
        zrzh:"4、自然灾害：元马镇主要自然灾害有洪灾、风灾等。",
        zrzy:"5、自然资源：有耕地面积39024亩。有林地面积96040.5亩，其中防护林28879.5亩，经济林13057.5亩，林木覆盖率28%，活立木蓄积量5.7万立方米。"
      },
        {name:'老城乡' ,
        jcxx:'1、基础信息：行政区域面积216.4平方千米，总人口27634人。海拔1020-2050米。',
        qh:'2、气候：老城乡属高原季风气候，其特点是呈立体气候。旱、雨季较为明显，日照充足。温凉高山区年均气温14℃，年均降水量900毫米；温热丘陵区年均气温20℃，年均降水量738毫米；燥热河谷平坝区年均气温23.1℃，年均降水量661毫米。',
        sw:'3、水文：老城乡境内河流属金沙江水系。有常流河2条、季节河6条。龙川江、南号河为常流河，麻柳河、观音堂河、丙令哨河、阿郎河、文冈河、元马河为季节河。',
        zrzh:'4、自然灾害：老城乡主要自然灾害有洪灾、风灾、冰雹等。',
        zrzy:'5、自然资源：有耕地面积26850亩。林木覆盖率29.2%，活立木蓄积量6.7万立方米。'},
        {name:'羊街镇' ,
        jcxx:'1、基础信息：行政区域面积263.46平方千米。户籍人口为18215人。海拔1246-2638.6米',
        qh:'2、气候：羊街镇年平均气温16℃，最热月平均气温21℃，最冷月平均气温8℃。年平均日照时数2643.2小时，年平均降水量829.6毫米。',
        sw:'3、水文：羊街镇境内河流属金沙江与红河水系。主要河流有龙川江、羊街河、木溪悟河、丙巷河、依轱噜河，龙川江、羊街河、木溪悟河、丙巷河属金沙江水系，依轱噜河属红河水系。',
        zrzy:'4、自然灾害：羊街镇主要自然灾害有冰雹、地震等。',
        zrzh:'5、自然资源：有耕地面积16320亩。有森林资源30.0万亩，森林覆盖率71.3%，林木蓄积量1.9万立方米。'},
        {name:'姜驿乡' ,
        jcxx:'1、基础信息：行政区域面积254.68平方千米，户籍人口为13729人，海拔898-2398米；',
        qh:'2、气候：姜驿乡多年平均气温18.5℃，年平均降水量724毫米。',
        sw:'3、水文：姜驿乡境内河流属金沙江水系&有常流河1条、季节河4条。常流河有金沙江，过境长52.3千米。季节河有姜驿河、太平河、糯杷拉箐河、沙沟箐河4条。',
        zrzh:'4、自然灾害：姜驿乡主要自然灾害有旱灾、冰雹、地震等。',
        zrzy:'5、自然资源：耕地面积17714亩。林地面积251292亩，其中防护林200938.5亩，经济林9亩，林木覆盖率55.1%，活立木蓄积量0.996万立方米。'},
        {name:'江边乡' ,
        jcxx:'1、基础信息：；行政区域面积254.84平方千米。户籍人口为17333人。海拔900-2835.9米；',
        qh:'2、气候：江边乡多年平均气温23.1℃。山区霜期60天左右，平坝终年无霜。年均降水量700毫米，降雨集中在每年6—8月，7月最多。',
        sw:'3、水文：江边乡境内河流属金沙江水系，有常流河4条、季节河8条。金沙江、龙川江、蜻蛉河、卡莫箐为常流河，糯把拉箐、沙沟箐、法窝箐、江头大箐、法帕箐、打腊大箐、那旧箐、启宪大箐为季节河。',
        zrzh:'4、自然灾害：江边乡主要自然灾害有滑坡、泥石流、崩塌等。',
        zrzy:'5、自然资源：有耕地面积15984亩。有林地面积29.9万亩，其中防护林28.7万亩，经济林105亩，林木覆盖率67.5%，活立木蓄积量14.5万立方米。'},
        {name:'物茂乡' ,
        jcxx:'1、基础信息：行政区域面积248.45平方千米。户籍人口为16423人。海拔997-1716米。',
        qh:'2、气候：物茂乡属亚热带季风气候。其特点是气候干燥，夏季气候短，日照充足，多南风。年平均气温22.7℃，蒸发量大于降雨量。年平均降水量646.8毫米，降雨集中在每年6—10月。',
        sw:'3、水文：物茂乡境内河流属金沙江水系；有常流河2条、季节河8条。永定河、蜻蛉河为常流河，芝麻河、丙间箐、骂额河、小河、乌峡箐、雷依河、练黄筲和摸鱼鲊河为季节河。',
        zrzh:'4、自然灾害：物茂乡主要自然灾害有旱灾、洪灾、冰雹和风灾等。',
        zrzy:'5、自然资源：有耕地面积15972亩。林木覆盖率31.2%，活立木蓄积量6.7万立方米。'},
        {name:'黄瓜园镇' ,
        jcxx:'1、基础信息：行政区域面积170.26平方千米。户籍人口为37548人。海拔1015-2696米。',
        qh:'2、气候：黄瓜园镇属亚热带季风气候。因海拔高低差异，形成山区的冷凉气候与坝区的燥热气候。山区冷凉、潮湿多雨，坝区则冬暖夏热、日照充足。年平均气温23℃。年降水量410—934毫米。',
        sw:'3、水文：黄瓜园镇境内河流属金沙江水系；有常流河1条、季节河5条。常流河有龙川江，季节河有海洛警、雷弄大箸、雷布干河、茂别河和油榨箐。',
        zrzh:'4、自然灾害：黄瓜园镇主要自然灾害有洪灾、风灾、泥石流等。',
        zrzy:'5、自然资源：有耕地面积36733亩。林地面积144460.5亩，其中防护林63702亩，经济林9523.5亩，林木覆盖率30.5%，活立木蓄积量7729立方米。'},
        {name:'新华乡' ,
        jcxx:'1、基础信息：行政区域面积200.1平方千米。户籍人口为8026人。海拔1193-1955米。',
        qh:'2、气候：新华乡属温带半干旱气候。其特点是冬无严寒、夏无酷暑、气候温和，日照充足。多年平均气温20℃，无霜期年平均320天。年平均日照时数2670小时。年平均降水量621.6毫米，降雨集中在每年6—10月。',
        sw:'3、水文：新华乡境内河流属金沙江水系，有常流河6条、季节河2条。勧冈河、龙街河、蜻蛉河、庙门河、光辉小河、灰旦小河为常流河，龙湾河、小夹警河为季节河。',
        zrzh:'4、自然灾害：新华乡主要自然灾害有洪灾、风灾、冰雹、泥石流、滑坡等。',
        zrzy:'5、自然资源：有耕地面积8926亩。有林地面积26.3万亩，其中防护林19.3万亩，经济林753亩。林木覆盖率66%，活立木蓄积量8.8万立方米。'},
        {name:'平田乡' ,
        jcxx:'1、基础信息：行政区域面积169平方千米。户籍人口为14917人。海拔1100-1835米。',
        qh:'2、气候：平田乡多年平均气温21.6℃，年平均降水量600毫米。',
        sw:'3、水文：平田乡境内河流属金沙江与龙川江水系。有常流河3条、季节河3条。勐岗河、班果河、蜻蛉河为常流河，帕郎河、万代老河、新村河为季节河。',
        zrzh:'4、自然灾害：平田乡主要自然灾害有旱灾、冰雹、风灾等。',
        zrzy:'5、自然资源：有耕地面积16333亩。林木覆盖率7.9%，活立木蓄积量0.7万立方米。'},
        {name:'凉山乡' ,
        jcxx:'1、基础信息：行政区域面积81.7平方千米。户籍人口为4201人。海拔1527-2803米。',
        qh:'2、气候：凉山乡多年平均气温14.2℃。霜冻天气出现在11月中旬—次年1月。风力强，多西北风。年均降水量800毫米，降雨集中在每年6—9月。',
        sw:'3、水文：凉山乡境内河流属金沙江水系。有常流河1条、季节河4条。大箐河为常流河，那蚌河、牛街河、那控河、冷水箐河为季节河。',
        zrzh:'4、自然灾害：凉山乡主要自然灾害有冰雹、风灾、霜冻、雪灾、暴雨、泥石流、滑坡等。',
        zrzy:'5、自然资源：有耕地面积4561亩。有林地面积96466.5亩，其中防护林82683亩，经济林520.5亩，林木覆盖率69.1%，活立木蓄积量76690立方米。'},
      ]); //乡镇名称
      var lbLenth = xzmcArr.length; //设置轮播次数，共有10个乡镇，轮播10次
      //初始轮播区域
      let xzmc = xzmcArr[0].name;
      xzMessage.name = xzmcArr[0].name;
      xzMessage.qh = xzmcArr[0].qh;
      xzMessage.sw = xzmcArr[0].sw;
      xzMessage.jcxx = xzmcArr[0].jcxx;
      xzMessage.zrzh = xzmcArr[0].zrzh;
      xzMessage.zrzy = xzmcArr[0].zrzy;
      myChart.dispatchAction({
        type: 'highlight',
        geoIndex: 0,
        name: xzmc,
      });

      //轮播区域下标
      let dataIndex = 0;
      //轮播函数
      let lb = () => {
        //前一次的轮播熄灭
        myChart.dispatchAction({
          type: 'downplay',
          geoIndex: 0,
          name: xzmc,
        });

        //轮播值+1
        dataIndex++;
        if (dataIndex >= lbLenth) {
          dataIndex = 0;
        }
        xzmc = xzmcArr[dataIndex].name;
        xzMessage.name = xzmcArr[dataIndex].name;
        xzMessage.qh = xzmcArr[dataIndex].qh;
        xzMessage.sw = xzmcArr[dataIndex].sw;
        xzMessage.jcxx = xzmcArr[dataIndex].jcxx;
        xzMessage.zrzh = xzmcArr[dataIndex].zrzh;
        xzMessage.zrzy = xzmcArr[dataIndex].zrzy;

        //将当前区域高亮显示
        myChart.dispatchAction({
          type: 'highlight',
          geoIndex: 0,
          name: xzmc,
        });
      };

      //设置时钟，轮播显示
      let lbxs = setInterval(lb, 5000);

      //鼠标移入相应区域
      myChart.on('mouseover', function (params) {
        //显示区域相关信息
        for(var i = 0; i <xzmcArr.length ; i++){
          if (params.name == xzmcArr[i].name){
            xzMessage.name = xzmcArr[i].name;
            xzMessage.qh = xzmcArr[i].qh;
            xzMessage.sw = xzmcArr[i].sw;
            xzMessage.jcxx = xzmcArr[i].jcxx;
            xzMessage.zrzh = xzmcArr[i].zrzh;
            xzMessage.zrzy = xzmcArr[i].zrzy;
          }
        }
        //轮播停止并将轮播区域熄灭
        clearInterval(lbxs);
        if (params.name != xzmcArr[dataIndex].name) {
          myChart.dispatchAction({
            type: 'downplay',
            geoIndex: 0,
            name: xzmcArr[dataIndex].name,
          });
        }
      });

      myChart.on('mouseout', () => {
        clearInterval(lbxs);
        //鼠标移出，轮播继续
        myChart.dispatchAction({
          type: 'highlight',
          geoIndex: 0,
          name: xzmcArr[dataIndex].name,
        });
        xzMessage.name = xzmcArr[dataIndex].name;
        xzMessage.qh = xzmcArr[dataIndex].qh;
        xzMessage.sw = xzmcArr[dataIndex].sw;
        xzMessage.jcxx = xzmcArr[dataIndex].jcxx;
        xzMessage.zrzh = xzmcArr[dataIndex].zrzh;
        xzMessage.zrzy = xzmcArr[dataIndex].zrzy;
        lbxs = setInterval(lb, 5000);
      });
    });

    console.log(xzMessage);
    return {
      xzMessage,
    };
  },
};
</script>
<style lang="less">
@import './../layouts/layout.less';

.xsk {
  width: 39%;
  height: 59%;
  position: fixed;
  top: 9%;
  right: 30.5%;
  // background-color: wheat;
}

#tsk {
  width: 37%;
  height: 70%;
  position: absolute;
  bottom: 15%;
  right: 5%;
  border-radius: 3%;
  background-color: rgba(0, 0, 0, 70%);
  // background-color: white;
  border-radius: 20px;
  border: 1px solid rbga(0, 0, 0, 0.2);
}

#echartMapContainer {
  width: 100%;
  height: 100%;
}

.zl-card-header {
  display: flex;
  height: 33%;
  align-items: center;
  justify-content: space-between;

  .zl-card-header-left {
    font-size: 0.8rem;
    height: 1.2rem;
    width: 40%;
    font-weight: bold;
    padding-left: 10px;
  }

  .zl-card-header-right {
    width: 70%;
    height: 2rem;
    font-size: 1rem;
    color: #03d3ec;
  }
}
</style>
