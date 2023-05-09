<template>
  <div style="position: relative">
    <div
      style="
        position: fixed;
        height: 1.2rem;
        line-height: 1rem;
        width: 100%;
        color: #fff;
        bottom: 0rem;
        left: 0px;
        font-size: 1rem;
        /* background-color: rgba(0, 0, 0, 30%); */
        color: #fff;
        z-index: 999;
      "
      >{{ imageText }}</div
    >
    <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="1"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      navigation
      :autoHeight="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @slideChangeTransitionEnd="slideChangeTransitionEnd"
    >
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/1.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/2.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/3.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/4.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/5.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/6.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/7.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../../../../../../../assets/images/swiper/szy/8.jpg"
          style="width: 100%"
          mode="widthFix"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  // 引入swiper组件
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // 引入swiper样式（按需导入）
  import 'swiper/css';
  // import 'swiper/css/pagination'; // 轮播图底面的小圆点
  import 'swiper/css/navigation'; // 轮播图两边的左右箭头
  import 'swiper/css/scrollbar'; // 轮播图的滚动条
  // 引入swiper核心和所需模块
  import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper';
  const modules = [Autoplay, Pagination, Navigation, Scrollbar];
  const swiperImageTexts = [
    '东山大沟',
    '灌区管理设施（闸房、流量监测设备）',
    '元谋大型灌区输水主管网',
    '金沙江',
    '金沙江',
    '凤凰湖',
    '凤凰湖',
    '挨小河水库小1型',
    '丙间水库',
  ];
  let slideCount = ref(0);
  let activeIndex = 1; //该值用来判断有没有点击左右箭头
  let imageText = ref(swiperImageTexts[0]);
  function slideChangeTransitionEnd(e) {
    if(activeIndex > e.activeIndex){
      //点击向左的箭头，轮播值-1
      slideCount.value --;
      if(slideCount.value <0 ) {
        slideCount.value = swiperImageTexts.length-1;
      }
    } else{
      //没有点击向左箭头或点击向右箭头，轮播值+1
      slideCount.value++;
    }
    let realIndex = slideCount.value % 8;
    console.log('e.activeIndex=' + e.activeIndex);
    //事件触发的activeIndex和realIndex均不是真实对应的，使用自己的方法记录轮播次数，再根据图片计算对应的序号
    //图片拉伸属性参考：https://blog.csdn.net/weixin_42178670/article/details/108638209
    imageText.value = swiperImageTexts[realIndex];
    activeIndex = e.activeIndex+1;
    if(activeIndex == swiperImageTexts.length){
      activeIndex = swiperImageTexts.length-1;
    }
  }
</script>
<style lang="less"></style>
