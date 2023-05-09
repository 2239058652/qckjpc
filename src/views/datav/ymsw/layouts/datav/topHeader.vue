<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" :dur="3" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">元谋县智慧水务大数据中心平台</div>
    <div style="position: fixed; right: 3%; margin-top: 1.8rem">
      <a-space
        ><a-button type="primary">预报</a-button>
        <a-button type="primary">预警</a-button>
        <a-button type="primary">预案</a-button>
        <a-button type="primary">预演</a-button>
        <a-button type="link" @click="goto('/demo/qzj')">管理后台</a-button>
      </a-space>
    </div>
  </div>
</template>

<script>
  import { router } from '/@/router';

  export default {
    name: 'TopHeader',
    setup() {
      const goto = (r) => {
        console.log('executed goto' + r);
        router.push(r);
        router.go(1);
      };
      return { goto };
    },
  };
</script>

<style lang="less">
  @import './../layout.less';
</style>
