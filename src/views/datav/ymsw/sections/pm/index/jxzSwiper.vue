<template>
  <dv-border-box-11 title="在建项目" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <dv-border-box-12>
        <swiper
          :modules="modules"
          :loop="true"
          :slides-per-view="1"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
        >
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/1.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/2.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/3.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/4.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/5.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/6.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/7.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../../../../../../../assets/images/swiper/pm/work/8.jpg"
              style="width: 100%; height: 100%"
          /></swiper-slide>
        </swiper>
      </dv-border-box-12>
    </div>
  </dv-border-box-11>
</template>
<script lang="ts">
  import { onMounted } from 'vue';

  // 引入swiper组件
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // 引入swiper样式（按需导入）
  import 'swiper/css';
  import 'swiper/css/pagination'; // 轮播图底面的小圆点
  import 'swiper/css/navigation'; // 轮播图两边的左右箭头
  import 'swiper/css/scrollbar'; // 轮播图的滚动条
  // 引入swiper核心和所需模块
  import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper';

  export default {
    components: { Swiper, SwiperSlide },
    setup() {
      const modules = [Autoplay, Pagination, Navigation, Scrollbar];
      onMounted(() => {});
      return { modules };
    },
  };
</script>
<style lang="less">
  @import './../../../layouts/layout.less';
</style>
