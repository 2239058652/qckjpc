<template>
  <dv-border-box-11 title="节水优先" class="datav-border-box-content">
   
<div class="datav-border-box-content-container">
      <div style="width: 100%;height: 100%;">
        <img
            src="../../../../../../../assets/images/swiper/syy/1.png"
            style="width: 100%;height: 100%;"
            mode="widthFix"
            v-on:click="onNoticeItemClick"
        />
      </div>
    </div>
  </dv-border-box-11>
  <a-modal
    v-model:visible="pdfPreviewModalVisible"
    title="文件查看"
    width="80vw"
    height="80vh"
    centered
    okText="关闭预览"
    @ok="pdfPreviewModalVisible = false"
  >
    <pdfDemo :key="pdfIndexKey" :pdf-url="previewPdfUrl" />
    <!-- <pdfDemo :key="new Date().getTime()" :pdf-url="previewPdfUrl" /> -->
  </a-modal>
</template>
<script lang="ts">
  import {ref } from 'vue';
  import pdfDemo from '../../../demos/pdfDemo.vue';
  export default {
    components: {pdfDemo},
    setup() {
      let pdfPreviewModalVisible = ref(false);
      let previewPdfUrl = ref('');
      let pdfIndexKey = ref(-1);
      const onNoticeItemClick = (e) => {
        console.log('onNoticeItemClick');

        pdfIndexKey.value = 1;
            previewPdfUrl.value = 'assets/js.pdf';
            pdfPreviewModalVisible.value = true;
            console.log('previewPdf.value=' + previewPdfUrl.value);
      };
      return { pdfPreviewModalVisible, pdfIndexKey, previewPdfUrl, onNoticeItemClick };
    },
  };
</script>
<style lang="less">
  @import './../../../layouts/layout.less';
</style>
