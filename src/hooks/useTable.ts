import { reactive, getCurrentInstance } from 'vue';
import { ITableParams } from '@/modules/table';
import { messageBox } from '@/utils/message';

export function useTable<T>(
  options: ITableParams,
  isPaged = true
): {
  tableState: T | any;
  getTableDatas: () => Promise<void>;
  onCurrentChange: (val: number) => void;
  onSizeChange: (val: number) => void;
  onResetClick: () => void;
  onSearchClick: () => void;
  onDeleteClick: (id: string) => Promise<void>;
} {
  const proxy: any = getCurrentInstance()?.proxy;

  const tableState = reactive({
    loading: false,
    tableDatas: [],
    pagination: {
      page: 1,
      limit: 20,
      total: 0
    },
    searchConditions: options.searchConditions
  });
  const getTableDatas = async () => {
    tableState.tableDatas = [];
    tableState.loading = true;
    const params: any = isPaged
      ? {
          page: tableState.pagination.page,
          limit: tableState.pagination.limit,
          pageSize: tableState.pagination.limit
        }
      : { isPage: false };
    for (const key in tableState.searchConditions) {
      if (String(tableState.searchConditions[key])) {
        params[key] = tableState.searchConditions[key];
      }
    }
    const [res] = await proxy.slAwait(options.getTableDatas(params));
    tableState.loading = false;
    tableState.pagination.total = res.totalNum || res.total;
    tableState.tableDatas = res.detail || res.list;
    return Promise.resolve(tableState.tableDatas);
  };
  const onCurrentChange = (val: number) => {
    tableState.pagination.page = val;
    getTableDatas();
  };
  const onSizeChange = (val: number) => {
    tableState.pagination.limit = val;
    getTableDatas();
  };
  const onResetClick = () => {
    for (const key in tableState.searchConditions) {
      tableState.searchConditions[key] = '';
    }
    getTableDatas();
  };
  const onSearchClick = () => {
    tableState.pagination.page = 1;
    getTableDatas();
  };
  const onDeleteClick = async (id: string) => {
    messageBox('该内容删除后不可修复，是否确认删除？').then(async () => {
      options.deleteTableData && (await proxy.slAwait(options.deleteTableData(id)));
      getTableDatas();
    });
  };
  return {
    tableState,
    getTableDatas,
    onCurrentChange,
    onSizeChange,
    onResetClick,
    onSearchClick,
    onDeleteClick
  };
}
