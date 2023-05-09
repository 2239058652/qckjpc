<template>
  <div>
    <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="1"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <!-- loop可循环轮播，autoplay可自动播放 -->
      <!-- <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide> -->
      <swiper-slide
        ><img
          src="../../../../../assets/images/swiper/test/1.png"
          style="width: 100%; height: 100%"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../assets/images/swiper/test/2.jpg"
          style="width: 100%; height: 100%"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../assets/images/swiper/test/3.jpg"
          style="width: 100%; height: 100%"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts" setup>
  // 引入swiper组件
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // 引入swiper样式（按需导入）
  import 'swiper/css';
  import 'swiper/css/pagination'; // 轮播图底面的小圆点
  import 'swiper/css/navigation'; // 轮播图两边的左右箭头
  import 'swiper/css/scrollbar'; // 轮播图的滚动条
  // 引入swiper核心和所需模块
  import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper';
  const modules = [Autoplay, Pagination, Navigation, Scrollbar];
</script>
<style lang="less"></style>
