<template>
  <div style="width: 100%; height: 15vh">
    <a-row>
      <a-col :span="12" style="margin-top: 2vh">
        <a-row>
          <a-col :span="1" :offset="3">
            <div>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
          </a-col>
          <a-col :span="12" style="font-size: 1px; font-weight: 600">
            <div>
              <div style="letter-spacing: 3px">国家能源集团</div>
              <div>CHN ENERGY</div>
            </div>
            <div style="margin-top: 5px">
              <div style="letter-spacing: 3px">云南电力有限公司</div>
              <div>YUNNAN POWER CO LTD</div>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="10" :offset="2">
        <a-row>
          <div style="font-size: 1px; display: flex; justify-content: space-around; margin-top: 2%">
            <div :style="topMouseList" @mousemove="setSYMove" @mouseleave="setSYMoveLeave"
              >设为首页</div
            >
            <a-divider type="vertical" style="border-color: black; margin-top: 3px" />
            <div style="cursor: pointer; color: red">集团公司首页</div>
            <a-divider type="vertical" style="border-color: black; margin-top: 3px" />
            <div style="cursor: pointer">加入收藏</div>
            <a-divider type="vertical" style="border-color: black; margin-top: 3px" />
            <div style="cursor: pointer; color: red">联系我们</div>
            <a-divider type="vertical" style="border-color: black; margin-top: 3px" />
            <div style="cursor: pointer">信息公开</div>
            <a-divider type="vertical" style="border-color: black; margin-top: 3px" />
            <div>当前访客身份： {{ '游客' }} <span style="cursor: pointer">[登录]</span></div>
          </div>
        </a-row>

        <!-- 搜索框和搜索按钮 -->
        <div style="margin-top: 5%; margin-right: 15%">
          <a-input-search
            v-model:value="value"
            placeholder=""
            enter-button="搜索"
            size="default"
            @search="onSearch"
          />
        </div>
      </a-col>
    </a-row>
  </div>
  <div style="width: 100; height: 5vh">
    <a-row>
      <a-col :span="24">
        <div class="top-tabs">
          <div
            class="font-class"
            v-for="(i, index) in tabsList"
            :key="index"
            @click="tabsClick(i)"
            >{{ i }}</div
          >
        </div>
      </a-col>
    </a-row>
  </div>

  <!-- 导航栏下面文字部分 -->
  <div style="height: 10vh; width: 90%; margin: 3% 5% 0 5%">
    <a-row>
      <a-col :span="4" :offset="2">
        <img :width="50" :height="50" src="../../../../assets/images/gjny.png" />
      </a-col>
      <a-col :span="18">
        <p style="text-align: center; line-height: 10vh; font-weight: 700; letter-spacing: 2px">{{
          msg
        }}</p>
      </a-col>
    </a-row>
  </div>

  <a-row>
    <a-col :span="12">
      <!-- 轮播图部分 -->
      <div class="lunboLeft">
        <Image width="30vw" height="40vh" src="../../../../assets/images/gjny.png" />
        <p
          style="
            position: absolute;
            bottom: -12px;
            left: 2px;
            z-index: 1;
            color: #fff;
            font-weight: 700;
          "
          >云南公司党委举办主题教育专题读书班</p
        >
      </div>
    </a-col>
    <a-col
      :span="6"
      style="border-bottom: 1px solid black; padding-bottom: 5px; transform: translate(-50%, 0%)"
    >
      <div class="lanMuTop">
        <div style="width: 5px; height: 30px; background: red"></div>
        <div
          style="
            font-weight: 800;
            position: absolute;
            z-index: 111;
            top: 5px;
            left: 10px;
            text-align: center;
          "
          >要闻聚焦
        </div>
        <div
          style="
            font-size: 1px;
            line-height: 10px;
            margin-bottom: 20px;
            position: absolute;
            bottom: -10px;
            right: 10px;
            cursor: pointer;
          "
        >
          更多>>
        </div>
      </div>
    </a-col>
    <a-col
      :span="6"
      style="border-bottom: 1px solid black; padding-bottom: 5px; transform: translate(-25%, 0%)"
    >
      <div class="lanMuTop">
        <div style="width: 5px; height: 30px; background: red"></div>
        <div
          style="
            font-weight: 800;
            position: absolute;
            z-index: 111;
            top: 5px;
            left: 10px;
            text-align: center;
          "
          >通知公告
        </div>
        <div
          style="
            font-size: 1px;
            line-height: 10px;
            margin-bottom: 20px;
            position: absolute;
            bottom: -10px;
            right: 10px;
            cursor: pointer;
          "
        >
          更多>>
        </div>
      </div>
    </a-col>
  </a-row>

  <!-- 转到后台按钮 -->
  <div style="position: absolute; bottom: 10px; right: 10px">
    <a-button @click="linToHT" type="primary" size="small">后台</a-button>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, reactive, UnwrapRef } from 'vue';
  import { Image } from 'ant-design-vue';

  interface ITopMouse {
    cursor: string;
    color?: string;
  }
  const tabsList = ref(['首页', '公司概况', '新闻', '专题', '一周咨询', '员工艺苑', '业务系统']); // 首页菜单列表
  const topMouseList: UnwrapRef<ITopMouse> = reactive({
    cursor: 'pointer',
  });
  const value = ref<string>('');

  const msg = ref(' ');
  // 点击搜索按钮触发
  const onSearch = (searchValue: string) => {
    console.log('use valueor use this.value value.value', searchValue);
  };
  const linToHT = () => {
    // 跳转到后台管理页面
    window.open('#/htgl/xtsz');
  };

  // 点击导航栏函数,给msg赋值
  function tabsClick(val: string): void {
    msg.value = val;
    msg.value = '云南公司党委举报主题教育专题读书班';
  }
  // 鼠标移动更改字体颜色
  function setSYMove() {
    topMouseList.color = 'red';
  }
  function setSYMoveLeave() {
    topMouseList.color = '';
  }
  onMounted(() => {
    // console.log('onMounted加载了');
  });
</script>

<style scoped lang="less">
  .top-tabs {
    display: flex;
    justify-content: space-around;
    padding: 1%;
    margin: 0 5%;
    width: 90%;
    background-color: #dd0000;
    .font-class {
      font-size: 16px;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
    .font-class:hover {
      color: black;
    }
  }
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 35vh;
    line-height: 35vh;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }
  .lunboLeft {
    width: 30vw;
    height: 40vh;
    background: rgb(163, 206, 83);
    margin-left: 5%;
    position: absolute;
    z-index: -1;
  }
  .lanMuTop {
    background: #fff;
  }
</style>
