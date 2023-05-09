<template>
  <div>
    <BasicTable
      @register="registerTable"
      :can-resize="true"
      :bordered="true"
      :striped="true"
      :loading="true"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 录入数据 </a-button>
        <a-button @click="handleReHandleData"> 重新处理 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            // {
            //   icon: 'clarity:note-edit-line',
            //   onClick: handleEdit.bind(null, record),
            // },
            // {
            //   icon: 'ant-design:delete-outlined',
            //   color: 'error',
            //   popConfirm: {
            //     title: '是否确认删除',
            //     confirm: handleDelete.bind(null, record),
            //   },
            // },
            {
              icon: 'ant-design:check-circle-outlined',
              onClick: handleSetFlagSuccess.bind(null, record.id),
            },
            {
              icon: 'ant-design:close-circle-outlined',
              onClick: handleSetFlagFail.bind(null, record.id),
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <RoleDrawer @register="registerDrawer" @success="handleSuccess" /> -->
    <AddQzjDataModal @register="registerAddQzjDataModal" @success="handleSuccess" />
    <RehandleQzjDataModal @register="registerRehandleQzjDataModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  // import { defineComponent, reactive } from 'vue';
  // import moment from 'moment';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  //使用modal弹出窗口
  import { useModal } from '/@/components/Modal';
  import AddQzjDataModal from './AddDataModal.vue';
  import RehandleQzjDataModal from './RehandleDataModal.vue';
  //使用右侧弹出窗口
  // import { useDrawer } from '/@/components/Drawer';

  import { getQzjData, setDataFlag } from '/@/api/demo/qzj';
  import { QzjUpdateFlagModel } from '/@/api/demo/model/qzj';
  import { columns, searchFormSchema } from './qzj.data';

  import { useMessage } from '/@/hooks/web/useMessage';
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'QzjDataManagemenet',
    // components: { BasicTable, RoleDrawer, TableAction },
    components: { BasicTable, TableAction, AddQzjDataModal, RehandleQzjDataModal },
    setup() {
      // const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerAddQzjDataModal, { openModal: openAddQzjDataModal }] = useModal();
      const [registerRehandleQzjDataModal, { openModal: openRehandleQzjDataModal }] = useModal();

      const [registerTable, { reload }] = useTable({
        title: '前置机数据维护',
        api: getQzjData, //api中指定的为table加载数据对应的查询方法
        columns,
        formConfig: {
          labelWidth: 80, //设置查询表单中label的宽度
          schemas: searchFormSchema,
          showResetButton: false, //查询条件部分中是否显示重置按钮
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined, //表格操作列是否固定，不设置时默认固定在右侧
        },
      });

      function handleCreate() {
        // openDrawer(true, {
        //   isUpdate: false,
        // });
        openAddQzjDataModal(true, {
          isUpdate: false,
        });
      }

      function handleReHandleData() {
        //将本次操作类型作为对象传入弹出窗口中，在弹出窗口中根据传入的参数进行加载不同的处理界面
        //在此可以获取查询窗口中的输入条件作为数据传入弹出窗口
        const ps = {
          opt: 'optReHandleData',
          data: null, //可以从界面中获取参数传入弹出modal中
        };

        openRehandleQzjDataModal(true, ps);
      }

      function handleEdit(record: Recordable) {
        // openDrawer(true, {
        //   record,
        //   isUpdate: true,
        // });
        //将本次操作类型作为对象传入弹出窗口中，在弹出窗口中根据传入的参数进行加载不同的处理界面
        const ps = {
          opt: 'optEditData',
          data: record,
        };
        openAddQzjDataModal(true, {
          ps,
          isUpdate: true,
        });
      }

      async function handleSetFlagSuccess(id: string) {
        try {
          let para: QzjUpdateFlagModel = {
            flag: true,
            id: id,
          };
          //调用接口
          const result = setDataFlag(para);
          if (!result || Object.keys(result).length == 0) {
            createMessage.success('修改标记成功。', 2);
            reload();
          }
          //刷新表格数据
        } finally {
        }
      }

      function handleSetFlagFail(id: string) {
        try {
          let para: QzjUpdateFlagModel = {
            flag: false,
            id: id,
          };
          //调用接口
          const result = setDataFlag(para);
          if (!result || Object.keys(result).length == 0) {
            createMessage.success('修改标记成功。', 2);
            reload();
          }
          //刷新表格数据
        } finally {
        }
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        // registerDrawer,
        registerAddQzjDataModal,
        registerRehandleQzjDataModal,
        handleCreate,
        handleReHandleData,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSetFlagSuccess,
        handleSetFlagFail,
      };
    },
  });
</script>
