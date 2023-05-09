<template>
  <dv-border-box-11 title="工作成果展示" class="datav-border-box-content">
    <div class="datav-border-box-content-container" style="position: relative;width: 100%; height: 95%;">
      <!-- <dv-border-box-12> </dv-border-box-12> -->
      <div
      style="
        position: absolute;
        height: 1.2rem;
        line-height: 1rem;
        width: 100%;
        color: #fff;
        bottom: 1.2rem;
        left: 0px;
        font-size: 0.8rem;
        text-align: center;
        /* background-color: white; */
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
            src="../../../../../../../assets/images/swiper/saq/1.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/2.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/3.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/4.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/5.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/6.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/7.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../../../../../../assets/images/swiper/saq/8.jpg"
            style="width: 100%"
            mode="widthFix"
        /></swiper-slide>
      </swiper>
    </div>
  </dv-border-box-11>
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
    '“云森·2022”抗洪抢险实兵演练（检验能力）',
    '“云森·2022”抗洪抢险实兵演练（检验能力）',
    '“云森·2022”抗洪抢险实兵演练（检验能力）',
    '挨小河水厂水质抽检',
    '农村饮水安全1',
    '农村饮水安全2',
    '新华乡河道清四乱',
    '羊街镇河道清四乱',
  ];
  let slideCount = ref(0);
  let imageText = ref(swiperImageTexts[0]);
  let activeIndex = 1; //该值用来判断有没有点击左右箭头
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
    let realIndex = slideCount.value % (swiperImageTexts.length);
    //事件触发的activeIndex和realIndex均不是真实对应的，使用自己的方法记录轮播次数，再根据图片计算对应的序号
    //图片拉伸属性参考：https://blog.csdn.net/weixin_42178670/article/details/108638209
    imageText.value = swiperImageTexts[realIndex];
    
    //e.activeIndex取值范围为[0,swiperImageTexts.length-1]，当值达到最大值将不在变化，除非点击了向左的箭头，会使其减小，当其减小到0，该值也不在变化
    activeIndex = e.activeIndex+1;
    if(activeIndex == swiperImageTexts.length ){
      activeIndex = swiperImageTexts.length-1;
    }
  }
</script>
<style lang="less"></style>
