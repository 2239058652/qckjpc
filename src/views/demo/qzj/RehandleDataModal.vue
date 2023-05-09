<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="重新处理数据" @ok="handleSubmit">
    <BasicForm @register="registerRehandleQzjDataForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { qzjRehandleDataFormSchema } from './qzj.data';
  import { reHandleData } from '/@/api/demo/qzj';
  import { useMessage } from '/@/hooks/web/useMessage';
  // const { createMessage, createErrorModal } = useMessage();
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'RehandleQzjDataModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerRehandleQzjDataForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: qzjRehandleDataFormSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        console.log('data=' + data);
        resetFields();
        setModalProps({ confirmLoading: false });

        // if (unref(isInsertOrUpdate) && unref(isUpdate)) {
        //   //修改时获取传递过来的数据，注意参数名称的匹配
        //   setFieldsValue({
        //     ...data.ps.data,
        //   });
        // }
      });

      async function handleSubmit() {
        //重新处理数据提交
        try {
          const values = await validate();
          console.log('values=' + values);
          setModalProps({ confirmLoading: true });
          //调用接口进行保存
          const rehandleDataResult = reHandleData(values);
          if (!rehandleDataResult || Object.keys(rehandleDataResult).length == 0) {
            createMessage.success('重新处理数据成功。', 2);
          }
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        registerModal,
        registerRehandleQzjDataForm,
        handleSubmit,
      };
    },
  });
</script>
