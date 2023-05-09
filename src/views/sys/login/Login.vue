<template>
  <!-- 登录页背景图片，设置为拉伸填充 -->
  <!-- <div class="w-full h-full ymLoginBg"></div> -->
  <!-- 登录页背景动画特效 -->
  <div class="w-full h-full animateBg" ref="vantaArea"></div>
  <!-- 直接在style中使用图片,不写url属性设置无效 dev和build均无效，使用url('./../../../../assets/images/ymbg2.jpg')和 url(/@/../assets/images/ymbg2.jpg)在build后图片路径缺少VITE_PUBLIC_PATH -->
  <div class="relative w-full h-full px-4">
    <!-- 多国语言切换 -->
    <!-- <AppLocalePicker
      class="absolute text-white top-4 right-4 enter-x xl:text-gray-600"
      :showText="false"
      v-if="!sessionTimeout && showLocale"
    /> -->
    <!-- 主题切换 -->
    <!-- <AppDarkModeToggle class="absolute top-3 right-7 enter-x" v-if="!sessionTimeout" /> -->

    <span class="-enter-x xl:hidden">
      <AppLogo :alwaysShowTitle="true" />
    </span>
    <!-- 如果界面中显示了多国语言切换或主题切换，占用高高度26px，需要设置container的高度中减去26px，否则会出现页面内容有滚动条 -->
    <div class="container relative h-full mx-auto sm:px-10" style="height: calc(100% - 26px)">
      <!-- <div class="container relative h-full py-2 mx-auto sm:px-10"> -->
      <div class="flex h-full">
        <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
          <!-- 登录界面中显示的logo和系统标题 -->
          <!-- <AppLogo class="-enter-x" /> -->
          <!-- font-size不同单位和大小测试效果 -->
          <!-- <span style="font-size: 20px">20px 文字内容</span>
          <span style="font-size: 18px">18px 文字内容</span>
          <span style="font-size: 16px">16px 文字内容</span>
          <span style="font-size: 14px">14px 文字内容</span>
          <span style="font-size: 12px">12px 文字内容</span>
          <span style="font-size: 1rem">1rem 文字内容</span>
          <span style="font-size: 0.8rem">0.8rem 文字内容</span>
          <span style="font-size: 0.6rem">0.6rem 文字内容</span>
          <span style="font-size: 0.4rem"> 0.4rem 文字内容</span>
          <span style="font-size: 0.2rem"> 0.2rem 文字内容</span>
          <span class="text-xl">text-xl 文字内容</span>
          <span class="text-2xl">text-2xl 文字内容</span>
          <span class="text-3xl">text-3xl 文字内容</span>
          <span class="text-4xl">text-4xl 文字内容</span>
          <span class="text-5xl">text-5xl 文字内容</span>
          <span class="text-lg">text-lg 文字内容</span>
          <span class="text-2lg">text-2lg 文字内容</span>
          <span class="text-4lg">text-4lg 文字内容</span>
          <span class="text-md">text-md 文字内容</span>
          <span class="text-sm">text-sm 文字内容</span>
          <span class="text-xs">text-xs 文字内容</span> -->
          <div class="my-auto">
            <!-- <img
              :alt="title"
              src="/@/../assets/svg/login-box-bg.svg"
              class="w-1/2 -mt-16 -enter-x"
            /> -->
            <!-- <div class="mt-10 font-medium text-white -enter-x">
              <span class="inline-block mt-4 text-3xl"> {{ t('sys.login.signInTitle') }}</span>
            </div> -->
            <!-- <div class="mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x">
              {{ t('sys.login.signInDesc') }}
            </div> -->
          </div>
        </div>
        <div class="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
          <div
            :class="`${prefixCls}-form`"
            class="relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"
          >
            <LoginForm />
            <!-- <ForgetPasswordForm /> -->
            <!-- <RegisterForm /> -->
            <!-- <MobileForm /> -->
            <!-- <QrCodeForm /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { AppLogo } from '/@/components/Application';
  import { AppLocalePicker, AppDarkModeToggle } from '/@/components/Application';
  import LoginForm from './LoginForm.vue';
  // import ForgetPasswordForm from './ForgetPasswordForm.vue';
  // import RegisterForm from './RegisterForm.vue';
  // import MobileForm from './MobileForm.vue';
  // import QrCodeForm from './QrCodeForm.vue';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLocaleStore } from '/@/store/modules/locale';

  //vantajs特效
  //导入vanta.js和three.js，以及ref等hooks
  import * as THREE from 'three';
  // import animateEffect from 'vanta/src/vanta.waves';
  //有效果的：cells、clouds、clouds2、fog、globe、halo、net、rings、ripple、waves
  //无效果的：birds、dots、topology、trunk
  import animateEffect from 'vanta/src/vanta.waves';
  // import animateEffect from 'vanta/src/vanta.birds';
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  //使用ref引用挂载区域
  const vantaArea = ref(null);
  //创建一个全局的变量来使用vanta.js
  /**
   *因为在vue2中，是使用this.vantaEffect来创建指定的3d动画模板的
   *但是vue3 setup中是没有this，所以要另外创建一个
   **/
  let vantaEffect = null;

  defineProps({
    sessionTimeout: {
      type: Boolean,
    },
  });

  const globSetting = useGlobSetting();
  const { prefixCls } = useDesign('login');
  const { t } = useI18n();
  const localeStore = useLocaleStore();
  const showLocale = localeStore.getShowPicker;
  const title = computed(() => globSetting?.title ?? '');

  const setRootFontSize = () => {
    /* 获取布局视口的宽度，也就是浏览器宽度*/
    let width = document.documentElement.clientWidth;
    /* 经过换算，动态计算不同设备的font-size值 1080p计算为11.25 */
    let size = (width / 1920) * 20;
    /* 设置 html的font-size属性*/
    document.documentElement.style.fontSize = size + 'px';
    /* 必须设置在body上，设置在html中无效*/
    document.getElementsByTagName('body')[0].style.fontSize = size + 'px';
    // 调试获取设置值并输出
    let getBodyFontSize = document.getElementsByTagName('body')[0].style.fontSize;
    console.log(
      'body width=' + width + ' font_size=' + size + ' getBodyFontSize=' + getBodyFontSize,
    );
  };
  setRootFontSize();
  window.onresize = () => {
    setRootFontSize();
  };

  //在两个生命周期钩子内创建vantaEffect
  onMounted(() => {
    vantaEffect = animateEffect({
      el: vantaArea.value,
      THREE: THREE,
      //如果需要改变样式，要写在这里
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      //waves独有属性
      shininess: 98.0,
      waveHeight: 17.5,
      waveSpeed: 0.85,
      zoom: 0.79,
      //因为这里vantaEffect是没有setOptions这个方法的
      // color: 0x16212a,
    });
  });

  onBeforeUnmount(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-login';
  @logo-prefix-cls: ~'@{namespace}-app-logo';
  @countdown-prefix-cls: ~'@{namespace}-countdown-input';
  @dark-bg: #293146;

  html[data-theme='dark'] {
    .@{prefix-cls} {
      background-color: @dark-bg;

      &::before {
        background-image: url(/@/../assets/svg/login-bg-dark.svg);
      }

      .ant-input,
      .ant-input-password {
        background-color: #232a3b;
      }

      .ant-btn:not(.ant-btn-link):not(.ant-btn-primary) {
        border: 1px solid #4a5569;
      }

      &-form {
        background: transparent !important;
      }

      .app-iconify {
        color: #fff;
      }
    }

    input.fix-auto-fill,
    .fix-auto-fill input {
      -webkit-text-fill-color: #c9d1d9 !important;
      box-shadow: inherit !important;
    }
  }

  .@{prefix-cls} {
    min-height: 100%;
    overflow: hidden;
    @media (max-width: @screen-xl) {
      background-color: #293146;

      .@{prefix-cls}-form {
        background-color: #fff;
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-left: -48%;
      background-image: url(/@/../assets/svg/login-bg.svg);
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: '';
      @media (max-width: @screen-xl) {
        display: none;
      }
    }

    .@{logo-prefix-cls} {
      position: absolute;
      top: 12px;
      height: 30px;

      &__title {
        font-size: 16px;
        color: #fff;
      }

      img {
        width: 32px;
      }
    }

    .container {
      .@{logo-prefix-cls} {
        display: flex;
        width: 60%;
        height: 80px;

        &__title {
          font-size: 24px;
          color: #fff;
        }

        img {
          width: 48px;
        }
      }
    }

    &-sign-in-way {
      .anticon {
        font-size: 22px;
        color: #888;
        cursor: pointer;

        &:hover {
          color: @primary-color;
        }
      }
    }

    input:not([type='checkbox']) {
      min-width: 360px;

      @media (max-width: @screen-xl) {
        min-width: 320px;
      }

      @media (max-width: @screen-lg) {
        min-width: 260px;
      }

      @media (max-width: @screen-md) {
        min-width: 240px;
      }

      @media (max-width: @screen-sm) {
        min-width: 160px;
      }
    }

    .@{countdown-prefix-cls} input {
      min-width: unset;
    }

    .ant-divider-inner-text {
      font-size: 12px;
      color: @text-color-secondary;
    }
  }

  .ymLoginBg {
    position: fixed;
    margin: 0px 0px 0px 0px;
    background: url(/@/../assets/images/ymbg3.jpg) no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .animateBg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    margin: 0px 0px 0px 0px;
    overflow: hidden;
  }
</style>
