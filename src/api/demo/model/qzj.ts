export type QzjQueryConditionModel = {
  stcd?: string;
  datatype?: string;
  beginTime: string;
  endTime: string;
  flag?: bigint;
  isReceiveTm: boolean;
};

export type QzjDataListModel = QzjDataModel[];

export type QzjDataModel = {
  id: string;
  stcd: string;
  datatype: string;
  sensorid: string;
  tm: string;
  value: number;
  updatetm?: string;
  chltype?: string;
  srctype?: string;
  flag: string;
  handletm?: string;
};

/**
 * QzjNewData
 */
export type QzjNewDataModel = {
  chltype: number;
  datatype: string;
  sensorid: string;
  srctype: number;
  stcd: string;
  tm: Date;
  value: number;
};

/**
 * QzjRehandle
 */
export type QzjRehandleModel = {
  beginTime: Date;
  endTime: Date;
  stcd?: string;
  datatype?: string;
  sensorId?: string;
};

/**
 * QzjUpdateFlag
 */
export type QzjUpdateFlagModel = {
  flag: boolean;
  id: string;
};
