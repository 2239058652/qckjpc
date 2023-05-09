import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h, ref } from 'vue';
//表格显示总使用Switch显示bool状态时引入并在表格列定义中进行判断处理
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import moment from 'moment';
//引入调用后台api的定义
// import { setRoleStatus } from '/@/api/demo/system';

//定义表格的列
export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left', //表格列固定在左边
    ifShow: false, //设置在表格界面中是否显示
    width: 250,
  },
  {
    title: '站点编码',
    dataIndex: 'stcd',
    fixed: 'left', //表格列固定在左边
    width: 120,
  },
  {
    title: '数据类型',
    dataIndex: 'datatype',
    fixed: 'left', //表格列固定在左边
    width: 80,
  },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   width: 120,
  //   customRender: ({ record }) => {
  //     if (!Reflect.has(record, 'pendingStatus')) {
  //       record.pendingStatus = false;
  //     }
  //     //表格显示总使用Switch显示bool状态时引入并在表格列定义中进行判断处理
  //     // return h(Switch, {
  //     //   checked: record.status === '1',
  //     //   checkedChildren: '已启用',
  //     //   unCheckedChildren: '已禁用',
  //     //   loading: record.pendingStatus,
  //     //   onChange(checked: boolean) {
  //     //     record.pendingStatus = true;
  //     //     const newStatus = checked ? '1' : '0';
  //     //     const { createMessage } = useMessage();
  //     //     setRoleStatus(record.id, newStatus)
  //     //       .then(() => {
  //     //         record.status = newStatus;
  //     //         createMessage.success(`已成功修改角色状态`);
  //     //       })
  //     //       .catch(() => {
  //     //         createMessage.error('修改角色状态失败');
  //     //       })
  //     //       .finally(() => {
  //     //         record.pendingStatus = false;
  //     //       });
  //     //   },
  //     // });
  //   },
  // },
  {
    title: '传感器ID',
    dataIndex: 'sensorid',
    width: 80,
  },
  {
    title: '采集时间',
    dataIndex: 'tm',
    width: 120,
  },
  {
    title: '采集值',
    dataIndex: 'value',
    width: 80,
  },
  {
    title: '入库时间',
    dataIndex: 'updatetm',
    width: 120,
  },
  {
    title: '通道类型',
    dataIndex: 'chltype',
    width: 80,
  },
  {
    title: '来源类型',
    dataIndex: 'srctype',
    width: 80,
  },
  {
    title: '处理标记',
    dataIndex: 'flag',
    width: 80,
  },
  {
    title: '处理时间',
    dataIndex: 'handletm',
    width: 120,
  },
];

//定义查询表单
export const searchFormSchema: FormSchema[] = [
  {
    field: 'stcd',
    label: '站点编码',
    component: 'Input',
    colProps: { span: 3 },
  },
  {
    field: 'datatype',
    label: '数据类型',
    component: 'Input',
    colProps: { span: 3 },
  },
  {
    field: 'beginTime',
    valueField: 'beginTime',
    label: '起始时间',
    component: 'DatePicker',
    colProps: { span: 4 },
    //查询表单中有时间日期输入，设置初始值遇到的问题
    //在colProps设置组件自有属性无效  colProps: { span: 4, valueFormat: 'YYYY/MM/DD' }
    // defaultValue: moment().add(-7, 'days'), //不指定valueField使用该行可初始化默认值，但选择修改会警告“超过最大递归更新数”；指定valueField和使用该行界面中无初始值
    //设置valueField后在componentProps中设置value，界面中会有值显示，但传到后台没有该参数
    //同时设置componentProps的value和defaultValue可以在加载时显示初始值并能选择，但选择后的值不会变，一直为componentProps的value
    //设置defaultValue，不要格式化可正常进行选择设置，但界面中初始化无显示，实际传参有值
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD',
      // value: moment().add(-7, 'days').format('YYYY-MM-DD'),
    },
    defaultValue: moment().add(-7, 'days'), //'2022-11-11', //moment().add(-7, 'days').format('YYYY-MM-DD'),
  },
  {
    field: 'endTime',
    valueField: 'endTime',
    label: '截止时间',
    component: 'DatePicker',
    colProps: { span: 4 },
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD',
      // value: moment().format('YYYY-MM-DD'),
    },
    defaultValue: moment().format('YYYY-MM-DD'),
  },
  {
    field: 'flag',
    label: '处理标记',
    component: 'Select',
    componentProps: {
      options: [
        { label: '全部', value: '' },
        { label: '未处理', value: '0' },
        { label: '处理成功', value: '1' },
        { label: '处理失败', value: '2' },
      ],
    },
    colProps: { span: 3 },
    defaultValue: '', //简单类型不使用ref包裹，使用正常
    // defaultValue: ref(''),//简单类型使用ref包裹，使用正常
  },
  {
    field: 'isReceiveTm',
    label: '按接收时间查询',
    labelWidth: 150, //在此重设label的宽度，覆盖页面中的统一设定
    component: 'Switch',
    colProps: { span: 2 },
  },
];

//定义新增/修改表单
export const qzjDataFormSchema: FormSchema[] = [
  {
    field: 'stcd',
    label: '站点编码',
    component: 'Input',
    required: true,
  },
  {
    field: 'datatype',
    label: '数据类型',
    component: 'Input',
    required: true,
  },
  {
    field: 'sensorid',
    label: '传感器ID',
    component: 'Input',
    required: true,
  },
  {
    field: 'tm',
    label: '采集时间',
    component: 'DatePicker',
    required: true,
  },
  {
    field: 'value',
    label: '采集值',
    component: 'InputNumber',
    required: true,
    componentProps: {
      precision: 4,
    },
  },
  {
    field: 'chltype',
    label: '通讯通道',
    component: 'Select',
    componentProps: {
      options: [
        { label: '未定义', value: '0' },
        { label: 'GPRS', value: '1' },
        { label: '短信', value: '2' },
        { label: '北斗卫星', value: '3' },
        { label: '有线', value: '4' },
      ],
    },
    defaultValue: '1',
  },
  {
    field: 'srctype',
    label: '来源类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '未定义', value: '0' },
        { label: '自动采集', value: '1' },
        { label: '测试数据', value: '2' },
        { label: '人工置数', value: '3' },
      ],
    },
    defaultValue: '1',
  },
];

//定义重新处理数据表单
export const qzjRehandleDataFormSchema: FormSchema[] = [
  {
    field: 'beginTime',
    label: '起始时间',
    component: 'DatePicker',
    required: true,
  },
  {
    field: 'endTime',
    label: '截止时间',
    component: 'DatePicker',
    required: true,
  },
  {
    field: 'stcd',
    label: '站点编码',
    component: 'Input',
    required: false,
  },
  {
    field: 'datatype',
    label: '数据类型',
    component: 'Input',
    required: false,
  },
  {
    field: 'sensorid',
    label: '传感器ID',
    component: 'Input',
    required: false,
  },
];
