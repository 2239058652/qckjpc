<template>
  <dv-border-box-11 title="水安全" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12 style="width: 95%; height: 95%">
        <dv-scroll-board :config="config1" />
      </dv-border-box-12>
      <dv-border-box-12>
        <dv-capsule-chart style=" height: 35%" :config="config2" />
        <dv-charts style=" height: 65%" :option="option3" />
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>
<script>
  export default {
    setup() {
      const config1 = {
        header: ['名称', '水位', '汛限水位'],
  data: [
    ['上你莫水库','<span style="color:#fb7293;">1202.12</span>', '1202.10'],
    ['弯腰树水库', '1356.34', '1356.35'],
    ['河尾水库', '1345.11', '1345.12'],
    ['鼠街水库', '1057.69', '1057.70'],
    ['马道地水库', '1453.78', '1453.79'],
    ['新河水库', '1400.66', '1400.68'],
    ['丙令水库', '986.67', '986.67'],
    ['河外', '<span style="color:#fb7293;">1235.67</span>', '1235.65'],
    ['猛连', '1345.79', '1345.80'],
    ['领庄', '1302.45', '1302.46'],
    ['挨小', '1545.81', '1545.83'],
    ['波哼', '987.67', '987.68'],
    ['已波龙', '1353.68', '1353.69'],
    ['那能', '1468.66', '1468.68'],
    ['秧田箐水库', '996.67', '996.68'],
    ['储麦水库', '<span style="color:#fb7293;">1105.67</span>', '1105.65'],
    ['卡莫水库', '1346.79', '1346.81'],
    ['丙令水库', '1352.45', '1352.47'],
    ['鼠街水库', '1255.79', '1255.80'],
    ['弯腰树水库', '1402.45', '1402.47'],
    ['冷水箐水库', '1545.81', '1545.82'],
    ['面前水库', '997.67', '997.68'],
    ['能禹水库', '1303.68', '1303.69'],
    ['致富水库', '1438.66', '1438.68']
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  rowNum:10
      };

      const config2 = {
        data: [
          {
            name: '无雨',
            value: 60,
          },
          {
            name: '小雨',
            value: 5,
          },
          {
            name: '中雨',
            value: 2,
          },
          {
            name: '大雨',
            value: 0,
          },
          {
            name: '暴雨',
            value: 0,
          },
          {
            name: '大暴雨',
            value: 0,
          },
          {
            name: '特大暴雨',
            value: 0,
          },
        ],
        // colors: ['#F0F8FF', '#6495ED', '#0000FF', '#FFFACD', '#FFA500', '#FF4500', '#800000'],
        colors: ['#FFFACD', '#FFA500', '#FF4500', '#800000'],
        unit: '站点数',
        showValue: true,
      };

      const option3 = {

       color: ['#aeeff0', '#ff0000'],
  legend: {
    data: [
      {
        name: '降雨量',
        color: '#aeeff0'
      },
      {
        name: '警戒红线',
        color: '#ff0000'
      }
    ],
   
    textStyle: {
  fontFamily: 'Arial',
  fontSize: 12,
  fill: '#fff',
},
    bottom: 10
  },
  xAxis: {
    data: [
    '物茂乡', '新华乡', '黄瓜园', '老城乡', '江边乡', '姜驿乡',
    '贡茶乡', '羊街镇'
    ],
    nameTextStyle: {
  fill: '#fff',
  fontSize: 10
},
    axisLabel: {
      style: {
        rotate: 20,
        textAlign: 'left',
        textBaseline: 'top',
        fill: '#fff',
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [
    {
      name: '降雨量',
      nameTextStyle: {
  fill: '#ffffff',
  fontSize: 10
},
      data: 'value',
      min: 0,
      max: 27,
      interval: 5,
      
      splitLine: {
        style: {
          lineDash: [3,3]
        }
      },
      axisLabel: {
        formatter: '{value} ',
        style:{fill: '#ffffff'}
      },
      axisTick: {
        show: false
      }
    },
    {
      data: 'value',
      position: 'right',
      min: 0,
      max: 30,
      interval: 30,
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value} ',
        fill: '#ffffff'
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '降雨量',
      data: [
        16,26, 23, 13, 19, 26.5,
        22,11
      ],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#67e0e3']
      },
      animationCurve: 'easeOutBounce'
    },
    {
      name: '警戒红线',
      linePoint:{
        show:false
      },
      lineStyle: {
  lineWidth: 2
},
      data: [
      25, 25, 25, 25, 25, 25,
      25, 25
      ],
      type: 'line',
      yAxisIndex: 1,
      animationCurve: 'easeOutBounce'
    }
  ]
};

      return { config1, config2,option3};
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';

  // 覆盖data-v中自带的样式，由于样式中指定的字体大小为px
  .dv-scroll-board .header {
    display: flex;
    flex-direction: row;
    font-size: 0.6rem;
    height: 1.3rem;
    line-height: 1.2rem;
  }
  .dv-scroll-board .rows .row-item {
    display: flex;
    font-size: 0.5rem;
    transition: all 0.3s;
  }
</style>
