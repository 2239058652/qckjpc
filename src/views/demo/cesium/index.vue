<template>
  <PageWrapper>
    <template #headerContent>
      <div class="flex justify-between items-center" id="cesiumContainer"> </div>
    </template>
  </PageWrapper>
</template>
<script setup>
  import { PageWrapper } from '/@/components/Page';
  // import * as Cesium from 'cesium/Source/Cesium';
  // import 'cesium/Source/Widgets/widgets.css';

  // setTimeout(() => {
  //   const viewer = new Cesium.Viewer('cesiumContainer');
  //   console.log(viewer);
  // }, 5000);
</script>
<style scoped lang="scss">
  #cesiumContainer {
    width: 100%;
    height: 100%;
  }
</style>
