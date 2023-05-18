<template>
  <div class="contain">
    <div
      style="
        border-bottom: 1px solid #aaaaaa;
        height: 6vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      "
    >
      <div style="width: 5px; height: 30px; background: red"></div>
      <div style="font-weight: 800; margin-left: 3px">图片新闻 </div>
    </div>
    <!-- 下面是图片滚动 -->
    <div style="margin-top: 10px">
      <div class="index-roll">
        <!--step: 0.5, // 数值越大速度滚动越快
            limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
            hoverStop: true, // 是否开启鼠标悬停stop
            direction: 2, // 0向下 1向上 2向左 3向右
            openWatch: true, // 开启数据实时监控刷新dom
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
            waitTime: 1000, // 单步运动停止的时间(默认值1000ms) -->
        <vue3-seamless-scroll
          :list="partnerList"
          :step="0.5"
          direction="left"
          hoverStop
          openWatch
          :limitMoveNum="1"
        >
          <ul :style="{ width: '100vw' }">
            <li
              v-for="(item, index) in partnerList"
              :key="index"
              @click="viewWebPartner(item.imgUrl)"
            >
              <img :src="item.imgUrl" />
              <span>香格里拉公司完成业绩...</span>
            </li>
          </ul>
        </vue3-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { message } from 'ant-design-vue';
  import { reactive } from 'vue';
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

  const partnerList = reactive([
    {
      imgUrl: '../../../../../assets/images/lanmu01.png',
      url: '1',
    },
    {
      imgUrl: '../../../../../assets/images/lanmu.png',
      url: '2',
    },
    {
      imgUrl: '../../../../../assets/images/lanmu01.png',
      url: '3',
    },
    {
      imgUrl: '../../../../../assets/images/lanmu01.png',
      url: '4',
    },
    {
      imgUrl: '../../../../../assets/images/lanmu01.png',
      url: '5',
    },
  ]);

  const viewWebPartner = (url) => {
    console.log(url, '=====================');
    message.info(url);
  };
</script>

<style lang="scss" scoped>
  .contain {
    padding: 0 7%;
  }
  .index-roll {
    overflow: hidden;
    height: 230px;
    width: 1140px;
    margin: 0 auto 60px auto;
    ul {
      display: flex;
      li {
        width: 360px;
        margin: 0 10px;
        // padding: 30px 0;
        background-color: #f8f8f8;
        border-radius: 4px;
      }
      li:hover {
        cursor: pointer;
        border-bottom: 2px solid #43aaed;
      }
      img {
        width: auto;
        height: 160px;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
