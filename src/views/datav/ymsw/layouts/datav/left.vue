<template>
  <div class="datav-layout-container" style="width: 15%">
    <!-- <dv-border-box-5 style="height: 25%" :reverse="true">
      <monitorStationSts />
    </dv-border-box-5>

    <dv-border-box-6 style="height: 25%">
      <monitorDataScrollTable />
    </dv-border-box-6>
    <dv-border-box-6 style="height: 25%">
      <monitorRainIntensity />
    </dv-border-box-6>

    <dv-border-box-5 style="height: 25%">
      <monitorWaterQualitySts />
    </dv-border-box-5> -->
    <dv-border-box-8 style="height: 25%">
      <monitorStationSts />
    </dv-border-box-8>

    <dv-border-box-12 style="height: 25%">
      <monitorDataScrollTable />
    </dv-border-box-12>

    <dv-border-box-12 style="height: 25%">
      <monitorRainIntensity />
    </dv-border-box-12>

    <dv-border-box-8 style="height: 25%" :reverse="true">
      <monitorWaterQualitySts />
    </dv-border-box-8>
  </div>
</template>
<script>
  import monitorStationSts from '../../sections/monitor/monitorStationSts.vue';
  import monitorDataScrollTable from '../../sections/monitor/monitorDataScrollTable.vue';
  import monitorRainIntensity from '../../sections/monitor/monitorRainIntensity.vue';
  import monitorWaterQualitySts from '../../sections/monitor/monitorWaterQualitySts.vue';

  export default {
    name: 'DataView-left',
    components: {
      monitorStationSts,
      monitorDataScrollTable,
      monitorRainIntensity,
      monitorWaterQualitySts,
    },
    setup() {
      return {};
    },
  };
</script>
<style lang="less">
  @import './../layout.less';
</style>
