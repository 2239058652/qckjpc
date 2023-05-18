<template>
  <div>
    <div style="padding: 0 7%">
      <img src="../../../../../assets/images/lanmu.png" />
    </div>
    <div style="display: flex; justify-content: space-around; margin: 0 6%; padding-top: 2vh">
      <div style="width: 30%; height: 40vh" v-for="(item, index) in 3" :key="index">
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
          <div style="font-weight: 800; margin-left: 3px">科技环保 </div>
          <div style="font-size: 1px; cursor: pointer; margin-left: 17vw"> 更多>> </div>
        </div>
        <div style="height: 34vh; padding-top: 2vh">
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
        </div>
      </div>
    </div>
    <div style="padding: 0 7%">
      <img src="../../../../../assets/images/lanmu01.png" />
    </div>
    <div style="display: flex; justify-content: space-around; margin: 0 6%; padding-top: 2vh">
      <div style="width: 30%; height: 40vh" v-for="(item, index) in 3" :key="index">
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
          <div style="font-weight: 800; margin-left: 3px">社会责任 </div>
          <div style="font-size: 1px; cursor: pointer; margin-left: 17vw"> 更多>> </div>
        </div>
        <div style="height: 34vh; padding-top: 2vh">
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
          <div> · 我是主要内容我是主要内容 </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs, onMounted } from 'vue';

  export default {
    setup() {
      const state = reactive({
        count: 0,
      });
      onMounted(() => {
        // console.log('我加载了，我是中间的栏目组件部分');
      });

      return {
        ...toRefs(state),
      };
    },
  };
</script>

<style lang="scss" scoped></style>
