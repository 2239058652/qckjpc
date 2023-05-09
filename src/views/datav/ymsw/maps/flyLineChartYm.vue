<template>
  <div class="datav-layout-container" style="width: 100%">
    <dv-flyline-chart :config="config" style="width: 100%; height: 100%" />
  </div>
</template>
<script>
  import bgImg from '/@/../assets/images/flylineChart/ymmap1.jpg';
  import centerpointImg from '/@/../assets/images/flylineChart/mapCenterPoint.png';
  import pointImg from '/@/../assets/images/flylineChart/mapPoint.png';

  export default {
    setup() {
      const config = {
        centerPoint: [0.51, 0.55],
        points: [
          {
            position: [0.556, 0.231],
            text: '江边乡',
          },
          {
            position: [0.5, 0.375],
            text: '黄瓜园镇',
          },
          {
            position: [0.378, 0.513],
            text: '平田乡',
          },
          {
            position: [0.505, 0.545],
            text: '元马镇',
          },
          {
            position: [0.563, 0.87],
            text: '羊街镇',
          },
          {
            position: [0.519, 0.697],
            text: '老城乡',
          },
          {
            position: [0.384, 0.284],
            text: '物茂乡',
          },
          {
            position: [0.282, 0.51],
            text: '新华乡',
          },
          {
            position: [0.603, 0.528],
            text: '凉山乡',
          },
          {
            position: [0.612, 0.114],
            text: '姜驿乡',
          },
        ],
        k: 0.8,
        curvature: 2,
        bgImgUrl: bgImg,
        centerPointImg: {
          url: centerpointImg,
        },
        pointsImg: {
          url: pointImg,
        },
        line: {
          width: 10,
          color: '#0000ff',
          // orbitColor: rgba(103, 224, 227, 0.7),
          duration: 30,
        },
        halo: {
          color: '#0000ff',
        },
      };
      return { config };
    },
  };
</script>
<style lang="less">
  @import './../layouts/layout.less';
</style>
