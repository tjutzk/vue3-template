import { statusList, runStatusList, switchStatusList, getNameByValue } from '@/utils/dictData';
import { IDictData, statusTypeEnum } from '@/modules';

export function useStatus() {
  // 启用停用
  const switchStatusMap: { [key: number]: statusTypeEnum } = {
    0: statusTypeEnum.danger,
    1: statusTypeEnum.success
  };
  const getSwitchStatusText = (status: string): string => {
    return getNameByValue(status, switchStatusList);
  };
  // 状态
  const statusMap: { [key: number]: statusTypeEnum } = {
    0: statusTypeEnum.danger,
    1: statusTypeEnum.warning,
    2: statusTypeEnum.success
  };
  // 运行状态
  const updateStatusMap: { [key: number]: statusTypeEnum } = {
    0: statusTypeEnum.warning,
    1: statusTypeEnum.primary,
    2: statusTypeEnum.success,
    3: statusTypeEnum.danger
  };

  const statusArray: Array<IDictData> = statusList;
  const runStatusArray: Array<IDictData> = runStatusList;
  const getStatusText = (status: number): string => {
    return getNameByValue(status, statusArray);
  };

  const getRunStatusText = (status: number): string => {
    return getNameByValue(status, runStatusArray);
  };

  const getStatusType = (status: number): statusTypeEnum => {
    return statusMap[status];
  };

  const getUpdateStatusType = (status: number): statusTypeEnum => {
    return updateStatusMap[status];
  };

  const getSwitchStatusType = (status: number): statusTypeEnum => {
    return switchStatusMap[status];
  };
  return {
    statusArray,
    runStatusArray,
    getStatusText,
    getRunStatusText,
    getStatusType,
    getUpdateStatusType,
    getSwitchStatusType,
    switchStatusList,
    getSwitchStatusText
  };
}
