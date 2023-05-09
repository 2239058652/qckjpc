<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="modalTitle" @ok="handleSubmit">
    <BasicForm @register="registerAddQzjDataForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { qzjDataFormSchema } from './qzj.data';
  import { saveData } from '/@/api/demo/qzj';
  import { useMessage } from '/@/hooks/web/useMessage';
  // const { createMessage, createErrorModal } = useMessage();
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'AddNewQzjDataModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      //弹出窗口界面是新增数据、修改数据还是重新处理数据；根据传递过来的参数进行判断
      const isInsertOrUpdate = ref(true);
      const isUpdate = ref(false);
      const modalTitle = ref('');
      const rowId = ref('');

      const [registerAddQzjDataForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: qzjDataFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        //根据传递过来的参数获取对应的操作，操作不同所对应的界面不同
        // console.log('data=' + JSON.stringify(data));
        // console.log('data.isUpdate=' + data.isUpdate);
        // if (data.isUpdate) {
        //   console.log(' data.ps.opt=' + data.ps.opt);
        // }

        if (data?.isUpdate) {
          //可能为修改或重新处理
          if (data?.ps) {
            if (data.ps.opt == 'optReHandleData') {
              isInsertOrUpdate.value = false;
              isUpdate.value = false;
              modalTitle.value = '重新处理数据';
            } else if (data.ps.opt == 'optEditData') {
              isInsertOrUpdate.value = true;
              isUpdate.value = true;
              modalTitle.value = '修改前置机数据';
            }
          } else {
            //如果设置isUpdate为true，但参数ps为空，判定参数错误
            console.log('操作类型错误，或传入的参数不匹配');
          }
        } else {
          isInsertOrUpdate.value = true;
          isUpdate.value = false;
          modalTitle.value = '新增前置机数据';
        }
        // console.log('isInsertOrUpdate=' + isInsertOrUpdate.value + ' isUpdate=' + isUpdate.value);

        resetFields();
        setModalProps({ confirmLoading: false });
        // isUpdate.value = !!data?.isUpdate;

        if (unref(isInsertOrUpdate) && unref(isUpdate)) {
          //修改时获取传递过来的数据，注意参数名称的匹配
          rowId.value = data.ps.data.id;
          setFieldsValue({
            ...data.ps.data,
          });
        }
      });

      async function handleSubmit() {
        if (isInsertOrUpdate.value) {
          if (isUpdate.value) {
            createMessage.info('当前仅为测试操作', 2);
            closeModal();
          } else {
            try {
              const values = await validate();
              setModalProps({ confirmLoading: true });
              //调用接口进行保存
              const saveDataResult = saveData(values);
              // console.log('saveDataResult=' + JSON.stringify(saveDataResult));
              //实测得到的字符串为{}
              if (!saveDataResult || Object.keys(saveDataResult).length == 0) {
                console.log('保存完成，返回结果为空');
                createMessage.success('保存成功。', 2);
              }
              closeModal();
              emit('success', {
                isUpdate: unref(isUpdate),
                values: { ...values, id: rowId.value },
              });
            } finally {
              setModalProps({ confirmLoading: false });
            }
          }
        } else {
          //重新处理数据提交
        }
      }

      return {
        isInsertOrUpdate,
        modalTitle,
        registerModal,
        registerAddQzjDataForm,
        handleSubmit,
      };
    },
  });
</script>
