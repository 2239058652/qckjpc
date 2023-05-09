/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: 渠成用户登录输入参数，原定义为LoginParams
 */
export interface LoginDto {
  /**
   * 客户端信息
   */
  cinfo?: string;
  /**
   * 用户名
   */
  code: string;
  /**
   * 客户端类型
   */
  ctype?: number;
  /**
   * 项目编码，所登录的项目编码
   */
  project?: string;
  /**
   * 密码，加密后的密码
   */
  pwd: string;
  /**
   * 验证方式，账号密码、手机号或其他
   */
  vtype: number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: 渠成用户登录结果，原定义为LoginResultModel
 */
export interface LoginResultDto {
  /**
   * 用户名，用于前端显示
   */
  name?: string;
  /**
   * 默认项目编码
   */
  projectcode?: string;
  /**
   * 项目列表，如未指定项目返回有权限的项目列表以供选择
   */
  projects?: ProjectDto[];
  /**
   * 提示信息，如需要修改密码等
   */
  prompt?: string;
  /**
   * 是否成功
   */
  sucess: boolean;
  /**
   * TOKEN
   */
  token?: string;
}

/**
 * ProjectDto
 */
export interface ProjectDto {
  /**
   * 项目编码
   */
  code: string;
  /**
   * 版权
   */
  copyright: string;
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * LOGO
   */
  logo: string;
  /**
   * 项目名称
   */
  name: string;
  /**
   * 标题
   */
  title: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

/**
 * @description: 渠成用户信息
 */
export interface UacUserInfoDto {
  /**
   * 登录用户名
   */
  code: string;
  /**
   * 用户ID
   */
  id: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 手机号，需做脱敏处理
   */
  phone: string;
}
