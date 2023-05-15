<template>
  <div class="top">
    <div class="top-left">
      <div>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
      <div class="lefts">
        <div>
          <div style="letter-spacing: 3px">国家能源集团</div>
          <div>CHN ENERGY</div>
        </div>
        <div style="margin-top: 5px">
          <div style="letter-spacing: 3px">云南电力有限公司</div>
          <div>YUNNAN POWER CO LTD</div>
        </div>
      </div>
    </div>
    <div class="top-right">
      <div>
        <h3>设为首页</h3>
      </div>
      <div>
        <a-form layout="inline" :model="formState">
          <a-form-item>
            <a-input v-model:value="formState.user" placeholder="Username">
              <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" danger> 搜索 </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
  <div class="top-tabs">
    <div class="font-class" v-for="(i, index) in tabsList" :key="index">{{ i }}</div>
  </div>
  <!-- <div>
    <a-button @click="linToHT">后台</a-button>
  </div> -->
</template>

<script setup lang="ts">
  import { UserOutlined } from '@ant-design/icons-vue';
  import { onMounted, ref, reactive, UnwrapRef } from 'vue';
  interface FormState {
    user: string;
    password: string;
  }
  const tabsList = ref(['首页', '公司概况', '新闻', '专题', '一周咨询', '员工艺苑', '业务系统']); // 首页菜单列表
  const formState: UnwrapRef<FormState> = reactive({
    user: '',
    password: '',
  });
  const linToHT = () => {
    // 跳转到后台管理页面
    window.open('#/htgl/xtsz');
  };
  onMounted(() => {
    console.log('onMounted加载了');
  });
</script>

<style scoped lang="scss">
  .top {
    display: flex;
    justify-content: space-around;
  }
  .top-left {
    width: 50%;
    height: 5vh;
    margin-left: 0%;
    display: flex;
    .lefts {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      font-size: 1px;
      text-indent: 5px;
    }
  }
  .top-right {
  }
  .top-tabs {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin: 5%;
    width: 90%;
    height: 7vh;
    background-color: #dd0000;
    .font-class {
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
    .font-class:hover {
      color: black;
    }
  }
</style>
