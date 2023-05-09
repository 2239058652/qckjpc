<template>
  <!-- <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button> -->
  <a-button type="text">总览</a-button>
  <a-button type="text">一张图</a-button>
  <!-- <a-button type="link">农村供水网</a-button> -->
  <!-- <a-button type="text">农业供水网</a-button> -->
  <a-button type="text">水资源</a-button>
  <a-button type="text">水安全</a-button>
  <a-button type="text">水环境</a-button>
  <!-- <a-button type="text">协同共治</a-button> -->
  <a-button type="text">水应用</a-button>
  <a-button type="text">党务管理</a-button>
  <a-button type="text">工程项目</a-button>
  <a-button type="text" @click="goto('/demo/qzj')">后台管理</a-button>
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

<style lang="less"></style>
