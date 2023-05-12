import { func } from 'vue-types';
import {
  QzjQueryConditionModel,
  QzjDataListModel,
  QzjRehandleModel,
  QzjNewDataModel,
  QzjUpdateFlagModel,
} from './model/qzj';

import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  Query = '/qzj/query',
  Save = '/qzj/save',
  Rehandle = '/qzj/rehandle',
  SetFlag = '/qzj/setflag',
}

/**
 * @description: 查询前置机数据，使用body传入查询条件
 */
export function getQzjData(params: QzjQueryConditionModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<QzjDataListModel>(
    {
      url: Api.Query,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/*
 * 重新处理指定时间数据
 */
export function reHandleData(params: QzjRehandleModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.Rehandle,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/*
 * 新增前置机数据
 */
export function saveData(params: QzjNewDataModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.Save,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/*
 * 根据ID修改处理标记
 */
export function setDataFlag(params: QzjUpdateFlagModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.SetFlag,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
