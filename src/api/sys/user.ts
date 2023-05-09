import { defHttp } from '/@/utils/http/axios';
import { LoginDto, LoginResultDto, UacUserInfoDto } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  // Login = '/login',
  // Login = '/qc-user/login',
  Login = '/qc/uac/login',
  // Logout = '/logout',
  Logout = '/qc/uac/logout',
  // GetUserInfo = '/getUserInfo',
  // GetUserInfo = '/qc-user/userInfo',
  GetUserInfo = '/qc/uac/userinfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginDto, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultDto>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<UacUserInfoDto>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get<string>({ url: Api.Logout });
}
