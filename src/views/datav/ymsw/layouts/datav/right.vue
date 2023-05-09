<template>
  <div class="datav-layout-container" style="width: 15%">
    <dv-border-box-8 style="height: 25%">
      <biHzz />
    </dv-border-box-8>

    <dv-border-box-12 style="height: 25%">
      <biShyj />
    </dv-border-box-12>

    <dv-border-box-12 style="height: 25%">
      <!-- <biGqgl /> -->
      <echartsDemo />
    </dv-border-box-12>

    <dv-border-box-8 style="height: 25%" :reverse="true">
      <biXxsk />
    </dv-border-box-8>
  </div>
</template>
<script>
  import biHzz from '../../sections/hzz/biHzzIndex.vue';
  import biShyj from '../../sections/shyj/biShyjIndex.vue';
  import biGqgl from '../../sections/gqgl/biGqIndex.vue';
  import biXxsk from '../../sections/xxsk/biXxskIndex.vue';
  import echartsDemo from '../../demos/echartsDemo.vue';

  export default {
    name: 'DataView-CenterGis',
    components: {
      biHzz,
      biShyj,
      biGqgl,
      biXxsk,
      echartsDemo,
    },
    setup() {
      return {};
    },
  };
</script>
<style lang="less">
  @import './../layout.less';
</style>
