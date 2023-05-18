<template>
  <div class="contain">
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
            <div
              style="font-size: 1px; display: flex; justify-content: space-around; margin-top: 2%"
            >
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
              <div
                >当前访客身份： {{ '游客' }}
                <a
                  target="_blank"
                  href="#/htgl/xtsz"
                  style="color: #000; text-decoration: underline"
                  >[登录]</a
                >
              </div>
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

    <div class="top_middle">
      <a-row :gutter="40">
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
        <a-col :span="6">
          <div class="lanmu_top">
            <div style="border-bottom: 1px solid #aaaaaa; height: 6vh">
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
              <div style="font-size: 1px; cursor: pointer; text-align: right; margin-top: -6%">
                更多>>
              </div>
            </div>
            <div>
              <div>
                <div class="top_title"> 张朝阳到六郎洞（大寨）分公司调研 </div>
                <div class="top_content">
                  5月3日，云南公司总经理、党委副书记张朝阳到六郎洞（大寨）分公司调研，并看望一线职工。张朝阳到该公司各电站中控室、进水口、机组检修作业现场、生产班...
                </div>
              </div>
              <div>
                <div class="top_title"> 张朝阳到新能源公司罗平西项目调研 </div>
                <div class="top_content">
                  5月2日，云南公司总经理、党委副书记张朝阳到云南新能源公司罗平西项目开展监督调研工作。检查组先后视察了九龙山项目在建升压站、洒谷升压站、在建风机平台等...
                </div>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="lanmu_top">
            <div style="border-bottom: 1px solid #aaaaaa; height: 6vh">
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
              <div style="font-size: 1px; cursor: pointer; text-align: right; margin-top: -6%">
                更多>>
              </div>
            </div>
            <div
              v-for="(item, index) in 5"
              :key="index"
              style="border-bottom: 1px solid #acaaad; padding: 5px 0"
            >
              <div>{{ item }}2023年申报提前退休人员名单公示</div>
              <div style="text-align: right">{{ `2023 - 05 - 04` }}</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

    <MiddleModel />
    <KeJiModel />

    <!-- 转到后台按钮 -->
    <div style="position: absolute; bottom: 10px; right: 10px">
      <a-button @click="linToHT" type="primary" size="small">后台</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, reactive, UnwrapRef } from 'vue';
  import { Image } from 'ant-design-vue';
  import MiddleModel from './components/MiddleModel.vue'; //  中间栏目组件
  import KeJiModel from './components/KeJiModel.vue'; //  底部

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
    // console.log('onMounted加载了', window.screen.height);
  });
</script>

<style scoped lang="less">
  .contain {
    height: 100vh;
    width: 100%;
  }
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
  .lanmu_top {
    background: #fff;
    height: 40vh;
    transform: translate(-50%, 0%);
  }
  .top_middle {
    height: 45vh;
    padding: 0 0 0 5%;
    margin-bottom: 40px;
  }
  .top_title {
    font-weight: 500;
    letter-spacing: 2px;
  }
  .top_content {
    font-weight: 300;
    font-size: 0.5em;
  }
</style>
