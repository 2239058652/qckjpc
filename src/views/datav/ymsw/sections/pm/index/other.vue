<template>
  <dv-border-box-11 title="年度重点项目" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <!-- <dv-border-box-12> -->
      <dv-scroll-board
        :config="config"
        @click="onNoticeItemClick"
        style="width: 100%; height: 100%"
      />
      <!-- </dv-border-box-12> -->
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
  import { onMounted, ref } from 'vue';
  import pdfDemo from '../../../demos/pdfDemo.vue';

  export default {
    components: { pdfDemo },
    setup() {
      let pdfPreviewModalVisible = ref(false);
      let previewPdfUrl = ref('');
      let pdfIndexKey = ref(-1);

      const config = {
        header: ['分类', '名称', '责任人', '阶段', '资料'],
        data: [
          ['重点工程', '元谋县鸡冠山小（一）型水库工程项目', '吴**', '项目开工', 'xh'],
          ['重点工程', '元谋县河尾水库清淤增效工程项目', '吴**', '主体完成'],
          ['重点工程', '平田、物茂灌区 8.6 万亩灌溉工程项目', '吴**', '初设批复'],
          ['重点工程', '元谋县农村供水保障专项行动项目', '吴**', '主体完成', 'fp'],
          ['重点任务', '元谋县姜驿乡提水工程项目', '李**', '项目开工'],
          ['重点任务', '姜驿中型灌区续建配套与节水改造项目', '李**', '初设批复'],
          ['重点任务', '元谋县沙地小河山洪沟治理工程项目', '李**', '项目开工', 'sh'],
          ['重点任务', '元谋县小型水库维修养护及除险加固项目', '李**', '项目开工'],
          ['重点任务', '元谋县农村饮水安全工程维修养护和农村水价综合改革项目', '李**', '项目开工'],
          ['重点任务', '元谋县虎溪小（一）型水库工程项目', '李**', '项目开工'],
          ['重点任务', '元谋大型灌区“十四五”续建配套与现代化改造项目', '李**', '初设批复', 'wc'],
          ['通知', '2023年2月24日水务局通知', '李**', '--'],
          ['公示', '2022年度水务局公示', '张**', '--'],
          ['督查检查', '河长制工作移动巡查检查工作', '赵**', '已完成'],
          ['项目进展', '2023年春季抗旱保障', '王**', '进行中'],
        ],
        index: true,
        columnWidth: [50],
        align: ['center'],
        rowNum: 8,
        carousel: 'single',
      };

      const onNoticeItemClick = (e) => {
        console.log('onNoticeItemClick');

        let rowIndex = e.rowIndex;
        let rowData = config.data[rowIndex];
        if (rowData && Object.keys(rowData).length > 0) {
          console.log('rowData=' + rowData);
          let fileName = rowData[4];
          if (fileName && Object.keys(fileName).length > 0) {
            pdfIndexKey.value = -1;
            previewPdfUrl.value = '';

            console.log('previewPdfUrl=' + fileName);
            pdfIndexKey.value = rowIndex;
            previewPdfUrl.value = 'assets/' + fileName + '.pdf';
            pdfPreviewModalVisible.value = true;
            console.log('previewPdf.value=' + previewPdfUrl.value);
          }
        }
      };
      return { config, pdfPreviewModalVisible, pdfIndexKey, previewPdfUrl, onNoticeItemClick };
    },
  };
</script>
<style lang="less">
  @import './../../../layouts/layout.less';
  // 覆盖data-v中自带的样式，由于样式中指定的字体大小为px
  .dv-scroll-board .header {
    display: flex;
    flex-direction: row;
    font-size: 0.6rem;
    height: 1.3rem;
    line-height: 1.2rem;
  }
  .dv-scroll-board .rows .row-item {
    display: flex;
    font-size: 0.5rem;
    transition: all 0.3s;
  }
</style>
