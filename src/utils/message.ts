import { ElMessage, ElMessageBox } from 'element-plus';
import { nextTick } from 'vue';

let messageInstance: any = null;

const openMessage = (option: any) => {
  if (messageInstance) messageInstance.close();
  nextTick(() => {
    messageInstance = ElMessage(option);
  });
};
export const message = {
  success(content: string) {
    openMessage({
      type: 'success',
      message: content
    });
  },
  error(content: string) {
    openMessage({
      type: 'error',
      message: content
    });
  },
  warning(content: string) {
    openMessage({
      type: 'warning',
      message: content
    });
  },
  info(content: string) {
    openMessage({
      type: 'info',
      message: content
    });
  }
};

export const messageBox = async (
  message: string,
  title = '提示',
  type: any = 'warning',
  options: object = {
    confirmButtonClass: 'ep-button ep-button--primary',
    cancelButtonClass: 'ep-button ep-button--info',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    autofocus: false
  }
) => {
  return await ElMessageBox.confirm(message, title, {
    type,
    ...options
  });
};
