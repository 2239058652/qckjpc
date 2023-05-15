<template>
  <div
    style="
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 30px;
      border: 1px solid rbga(0, 0, 0, 0.2);
      overflow: hidden;
      box-shadow: 0px 0px 13px 13px rgba(0, 0, 0, 0.5);
    "
  >
    <LoginFormTitle v-show="getShow" class="enter-x" />
    <Form
      class="p-4 enter-x"
      :model="formData"
      :rules="getFormRules"
      ref="formRef"
      v-show="getShow"
      @keypress.enter="handleLogin"
    >
      <FormItem name="account" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.account"
          :placeholder="t('sys.login.userName')"
          class="fix-auto-fill"
        />
      </FormItem>

      <!-- 必须使用v-model:value，不然无法实现双向绑定 -->
      <FormItem name="password" class="enter-x">
        <InputPassword
          size="large"
          visibilityToggle
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </FormItem>

      <ARow class="enter-x">
        <ACol :span="12">
          <FormItem>
            <!-- No logic, you need to deal with it yourself -->
            <Checkbox v-model:checked="rememberMe" size="small">
              {{ t('sys.login.rememberMe') }}
            </Checkbox>
          </FormItem>
        </ACol>
        <ACol :span="12">
          <FormItem :style="{ 'text-align': 'right' }">
            <!-- No logic, you need to deal with it yourself -->
            <!-- <Button type="link" size="small" @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">
            {{ t('sys.login.forgetPassword') }}
          </Button> -->
          </FormItem>
        </ACol>
      </ARow>

      <!-- 登录按钮 -->
      <FormItem class="enter-x">
        <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
          {{ t('sys.login.loginButton') }}
        </Button>
        <!-- <Button size="large" class="mt-4 enter-x" block @click="handleRegister">
        {{ t('sys.login.registerButton') }}
      </Button> -->
      </FormItem>
      <!-- <ARow class="enter-x">
      <ACol :md="8" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.MOBILE)">
          {{ t('sys.login.mobileSignInFormTitle') }}
        </Button>
      </ACol>
      <ACol :md="8" :xs="24" class="!my-2 !md:my-0 xs:mx-0 md:mx-2">
        <Button block @click="setLoginState(LoginStateEnum.QR_CODE)">
          {{ t('sys.login.qrSignInFormTitle') }}
        </Button>
      </ACol>
      <ACol :md="7" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.REGISTER)">
          {{ t('sys.login.registerButton') }}
        </Button>
      </ACol>
    </ARow> -->

      <!-- <Divider class="enter-x">{{ t('sys.login.otherSignIn') }}</Divider> -->
      <!-- <Divider class="enter-x" style="font-size: 0.6rem">{{ t('sys.support') }}</Divider> -->
      <Divider class="enter-x" style="font-size: 0.6rem; color: #fff">元谋县水务局</Divider>

      <!-- <div class="flex justify-evenly enter-x" :class="`${prefixCls}-sign-in-way`">
      <GithubFilled />
      <WechatFilled />
      <AlipayCircleFilled />
      <GoogleCircleFilled />
      <TwitterCircleFilled />
    </div> -->
    </Form>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref, unref, computed } from 'vue';

  import { Checkbox, Form, Input, Row, Col, Button, Divider } from 'ant-design-vue';
  // import {
  //   GithubFilled,
  //   WechatFilled,
  //   AlipayCircleFilled,
  //   GoogleCircleFilled,
  //   TwitterCircleFilled,
  // } from '@ant-design/icons-vue';
  import LoginFormTitle from './LoginFormTitle.vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { useUserStore } from '/@/store/modules/user';
  import { LoginStateEnum, useLoginState, useFormRules, useFormValid } from './useLogin';
  import { useDesign } from '/@/hooks/web/useDesign';
  //import { onKeyStroke } from '@vueuse/core';

  import { qcLoginPasswordEncrypt } from '/@/utils/cipher';

  const ACol = Col;
  const ARow = Row;
  const FormItem = Form.Item;
  const InputPassword = Input.Password; // ant-design-vue的密码输入框
  const { t } = useI18n();
  const { notification, createErrorModal } = useMessage();
  const { prefixCls } = useDesign('login');
  const userStore = useUserStore();

  // const { setLoginState, getLoginState } = useLoginState();
  const { getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);
  const rememberMe = ref(false);

  const formData = reactive({
    account: 'qckj',
    password: '123456',
  });

  const { validForm } = useFormValid(formRef);

  //onKeyStroke('Enter', handleLogin);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

  // 登录按钮方法
  async function handleLogin() {
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      //获取客户端类型
      const ua = navigator.userAgent;
      const isIPhone = /(iPhone|iPad|iPod|iOS)/i.test(ua);
      const isAndroid = /(Android)/i.test(ua);
      let ctype = 10;
      if (isIPhone || isAndroid) ctype = 20;

      const loginResult = await userStore.qclogin({
        vtype: 1,
        ctype: ctype,
        // cinfo: ua,//客户端信息在api中从request的header中获取
        code: data.account,
        pwd: qcLoginPasswordEncrypt(data.password),
        project: '',
        mode: 'none', //不要默认的错误提示
      });
      if (loginResult.sucess == true) {
        //登录成功，设置token
        if (loginResult.token) {
          userStore.setToken(loginResult.token);
        }
        if (loginResult.projectcode) {
          userStore.setProjectCode(loginResult.projectcode);
        }

        //如果有提示信息（可能为修改密码或系统通知），显示提示信息
        if (loginResult.prompt) {
          notification.info({
            message: t('sys.login.loginSuccessTitle'),
            description: `${t('sys.login.loginSuccessDesc')}: ${loginResult.name},${
              loginResult.prompt
            }`,
            duration: 3,
          });
        } else {
          notification.success({
            message: t('sys.login.loginSuccessTitle'),
            description: `${t('sys.login.loginSuccessDesc')}: ${loginResult.name}`,
            duration: 3,
          });
        }
        //登录成功后页面跳转
        const goHome = true;
        userStore.afterLoginAction(goHome);
      } else {
        createErrorModal({
          title: t('sys.api.errorTip'),
          content: t('sys.login.loginFailTitle') + loginResult.prompt,
          getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
        });
      }
    } catch (error) {
      createErrorModal({
        title: t('sys.api.errorTip'),
        content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
        getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
      });
    } finally {
      loading.value = false;
    }
  }
</script>
