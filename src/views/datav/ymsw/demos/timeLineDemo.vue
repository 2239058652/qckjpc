<!-- 横线时间轴参考 -->
<!-- 我会用<Steps>组件，而不是，它看起来类似，但支持垂直/水平。 -->
<!-- https://09x.ant.design/components/steps/ -->
<!-- http://cn.voidcc.com/question/p-nvogwhgf-gx.html -->
<!-- https://www.mianshigee.com/tutorial/ant.design-v3.18-zh/13ec68073e23ca87.md/ -->
<!-- https://blog.csdn.net/weixin_45851208/article/details/124022550 -->
<!-- https://blog.csdn.net/weixin_45670926/article/details/124289327 -->
<!-- https://www.jb51.net/article/238987.htm https://www.cnblogs.com/lpp-11-15/p/13685705.html -->
<template>
  <div style="color: #fff">
    <!-- 偶数年份 -->
    <div style="line-height: 4rem; padding-top: 2rem; padding-bottom: 2rem">
      <a-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
        <a-step status="stage11" title="2010年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step status="stage11" title="2012年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step status="stage11" title="2014年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step status="stage12" title="2016年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step status="stage12" title="2018年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step status="stage13" title="2020年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step status="stage13" title="2022年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        <a-step
          status="stage13"
          title="2024年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          disabled
        />
        <a-step
          status="stage14"
          title="2026年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          disabled
        />
        <a-step
          status="stage14"
          title="2028年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          disabled
        />
        <a-step
          status="stage15"
          title="2030年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          disabled
        />
        <a-step
          status="stage15"
          title="2032年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          disabled
        />
        <a-step
          status="stage15"
          title="2034年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          disabled
        />
      </a-steps>
    </div>
    <!-- 十X五规划Steps -->
    <div style="line-height: 4rem; padding-top: 2rem; padding-bottom: 2rem">
      <a-steps v-model:current="current" type="navigation" :style="stepStyle">
        <a-step status="stage11" title="十一五规划" />
        <a-step status="stage12" title="十二五规划" />
        <a-step status="stage13" title="十三五规划" />
        <a-step status="stage14" icon="rise-outlined" title="十四五规划" />
        <a-step status="stage15" title="十五五规划" />
        <a-step status="stage16" title="十六五规划" />
      </a-steps>
    </div>
    <!-- 奇数年份 -->
    <div style="line-height: 4rem; padding-top: 2rem; padding-bottom: 2rem; padding-left: 2rem">
      <a-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
        <a-step status="stage11" title="2011年" />
        <a-step status="stage11" title="2013年" />
        <a-step status="stage12" title="2015年" />
        <a-step status="stage12" title="2017年" />
        <a-step status="stage12" title="2019年" />
        <a-step status="stage13" title="2021年" />
        <a-step status="stage13" title="2023年"
          ><a-button type="primary" shape="circle">2023年</a-button></a-step
        >
        <a-step status="stage14" title="2025年" disabled />
        <a-step status="stage14" title="2027年" disabled />
        <a-step status="stage14" title="2029年" disabled />
        <a-step status="stage15" title="2031年" disabled />
        <a-step status="stage15" title="2033年" disabled />
        <a-step status="stage16" title="2035年" disabled />
      </a-steps>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const current = ref<number>(0);

      return {
        current,
        stepStyle: {
          marginBottom: '60px',
          boxShadow: '0px -1px 0 0 #e8e8e8 inset',
        },
      };
    },
  });
</script>
<style lang="less">
  /* 覆盖antd中step的样式，修改文字颜色和字号 */
  // .ant-steps-item-finish
  //   > .ant-steps-item-container
  //   > .ant-steps-item-content
  //   > .ant-steps-item-title {
  //   color: #fff;
  //   font-size: 1rem;
  // }

  // .ant-steps-item-process
  //   > .ant-steps-item-container
  //   > .ant-steps-item-content
  //   > .ant-steps-item-title {
  //   color: #fff;
  //   font-size: 1rem;
  // }

  // .ant-steps-item-wait
  //   > .ant-steps-item-container
  //   > .ant-steps-item-content
  //   > .ant-steps-item-title {
  //   color: #fff;
  //   font-size: 1rem;
  // }

  // 十一五样式
  .ant-steps-item-stage11
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #00cc00;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ant-steps-item-stage11-year
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #00cc00;
    line-height: 1rem;
    font-size: 0.8rem;
  }

  // 十二五样式
  .ant-steps-item-stage12
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #009999;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ant-steps-item-stage12-year
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #009999;
    line-height: 1rem;
    font-size: 0.8rem;
  }

  // 十三五样式
  .ant-steps-item-stage13
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #0033cc;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ant-steps-item-stage13-year
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #0033cc;
    line-height: 1rem;
    font-size: 0.8rem;
  }

  // 十四五样式
  .ant-steps-item-stage14
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #cc0099;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ant-steps-item-stage14-year
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #cc0099;
    line-height: 1rem;
    font-size: 0.8rem;
  }

  // 十五五样式
  .ant-steps-item-stage15
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #ff6600;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ant-steps-item-stage15-year
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #ff6600;
    line-height: 1rem;
    font-size: 0.8rem;
  }

  // 十六五样式
  .ant-steps-item-stage16
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #ffcc00;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ant-steps-item-stage16-year
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #ffcc00;
    line-height: 1rem;
    font-size: 0.8rem;
  }
</style>
