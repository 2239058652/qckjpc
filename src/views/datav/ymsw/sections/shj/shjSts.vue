<template>
  <dv-border-box-11 title="水环境" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12>
        <div
          style="
            width: 100%;
            height: 10%;
            font-size: 0.6rem;
            text-align: left;
            padding-top: 5%;
            padding-left: 5%;
            font-weight: bold;
          "
          >饮用水水源水质</div
        >
        <dv-active-ring-chart :config="config" style="width: 95%; height: 95%" />
      </dv-border-box-12>
      <dv-border-box-12>
        <dv-scroll-board :config="config1" style="width: 95%; height: 95%" />
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>
<script>
  export default {
    setup() {
      const config1 = {
        header: ['序号', '水库名称', '水质等级', '时间'],
        data: [
          ['1', '丙间水库', 'III类', '2022-10'],
          ['2', '麻柳水库', 'III类', '2022-11'],
          ['3', '挨小河水库', 'III类', '2022-12'],
          ['4', '面前水库', 'III类', '2023-01'],
          ['5', '储麦水库', 'III类', '2023-02'],
          ['5', '龙川河', 'II类', '2023-02'],
        ],
        index: false,
        // columnWidth: [100, 40, 20],
        align: ['center'],
        carousel: 'page',
      };
      const config = {
        color: ['#008aff', '#86b6fd', '#06f5fe', '#7cf721', '#f7ea21', '#008aff'],
        radius: '68%',
        activeRadius: '73%',
        lineWidth: 20,
        data: [
          {
            name: 'I类',
            value: 0,
          },
          {
            name: 'II类',
            value: 20,
          },
          {
            name: 'III类',
            value: 80,
          },
          {
            name: 'IV类',
            value: 0,
          },
          {
            name: 'V类',
            value: 0,
          },
          {
            name: 'VI类',
            value: 0,
          },
        ],
        digitalFlopStyle: {
          fontSize: 20,
        },
      };
      return { config1, config };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';
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
