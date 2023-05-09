import { defHttp } from '/@/utils/http/axios';
import { ConfigQueryConditionDto, ConfigDataListModel } from './model/configModel';

import { ErrorMessageMode } from '/#/axios';
import { List } from 'echarts';

enum Api {
  GetProject = '/qc/cfg/project',
  QueryGroupConfigs = '/qc/cfg/groupconfigs',
  GetConfig = '/qc/cfg/config',
}

/**
 * @description: user login api
 */
// export function loginApi(params: LoginDto, mode: ErrorMessageMode = 'modal') {
//   return defHttp.post<LoginResultDto>(
//     {
//       url: Api.Login,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//     },
//   );
// }

/**
 * @description: 根据条件查询配置信息，必须指定项目编码，分组编码和键编码可以为空
 */
export function queryGroupConfigs(
  params: ConfigQueryConditionDto,
  mode: ErrorMessageMode = 'modal',
) {
  //使用get方法时，指定data参数未在地址或body中，不指定时参数在地址中
  return defHttp.post<ConfigDataListModel>(
    { url: Api.QueryGroupConfigs, params },
    { errorMessageMode: 'none' },
  );
}
