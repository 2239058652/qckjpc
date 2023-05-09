/**
 * ConfigQueryConditionDto
 */
export interface ConfigQueryConditionDto {
  /**
   * 分组编码
   */
  group?: string;
  /**
   * 键编码
   */
  key?: string;
  /**
   * 项目编码
   */
  project: string;
}

/**
 * 配置信息
 */
export interface ConfigDto {
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 分组编码
   */
  groupcode: string;
  /**
   * 键编码
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 排序号
   */
  order?: number;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 键值
   */
  value: string;
}

/**
 * 配置信息集合Model
 */
export interface ConfigDataListModel {
  items: ConfigDto[];
}
// export type ConfigDataListModel = ConfigDto[];
