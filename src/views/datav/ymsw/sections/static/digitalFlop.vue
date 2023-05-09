<template>
  <div id="digital-flop">
    <div class="digital-flop-item" v-for="item in digitalFlopData" :key="item.title">
      <div class="digital-flop-title">{{ item.title }}</div>
      <div class="digital-flop">
        <dv-digital-flop :config="item.number" style="width: 100px; height: 50px" />
        <div class="unit">{{ item.unit }}</div>
      </div>
    </div>

    <dv-decoration-10 />
  </div>
</template>

<script lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  import { getProjectCode } from '/@/utils/auth';

  import { queryGroupConfigs } from '/@/api/platform/config';
  import { ConfigQueryConditionDto } from '/@/api/platform/model/configModel';

  export default {
    name: 'DigitalFlop',
    setup() {
      const digitalFlopData = ref([]);
      //30秒刷新一次数据，大屏首页定时器
      var datavInterval = setInterval(function () {
        getStaticInfos();
      }, 30000);

      //获取静态统计信息
      async function getStaticInfos() {
        let para: ConfigQueryConditionDto = {
          project: getProjectCode(),
          group: 'dis-static',
        };
        //调用接口
        const result = await queryGroupConfigs(para);
        //判断返回数据不为空，集合数量大于0
        if (result && Object.keys(result).length > 0) {
          let data = [];
          result.forEach((element) => {
            let obj = {
              title: element.name,
              number: {
                number: [Number(element.value)],
                content: '{nt}',
                textAlign: 'right',
                style: {
                  fill: '#4d99fc',
                  fontWeight: 'bold',
                },
              },
              unit: element.unit,
            };
            data.push(obj);
          });

          digitalFlopData.value = data;
        }
      }
      onMounted(() => {
        getStaticInfos();
      });
      onUnmounted(() => {
        //如果页面跳转了，需要清除定时器，否则还会不断执行
        clearInterval(datavInterval);
      });
      return {
        digitalFlopData,
        getStaticInfos,
      };
    },
  };
</script>

<style lang="less">
  #digital-flop {
    position: relative;
    // height: 8%;
    //在gis地图中外面有容器，高度为父容器的100%
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(6, 30, 93, 0.5);

    .dv-decoration-10 {
      position: absolute;
      width: 95%;
      left: 2.5%;
      height: 5px;
      bottom: 0px;
    }

    .digital-flop-item {
      width: 11%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 3px solid rgb(6, 30, 93);
      border-right: 3px solid rgb(6, 30, 93);
    }

    .digital-flop-title {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    .digital-flop {
      font-size: 1.4rem;
      display: flex;
    }

    .unit {
      font-size: 0.8rem;
      margin-left: 10px;
      display: flex;
      align-items: flex-end;
      box-sizing: border-box;
      padding-bottom: 10px;
    }
  }
</style>
