import { ref } from 'vue';
export function useToggleVisible(isVisible: boolean) {
  const isShowVisible = ref(isVisible);
  const hideVisible = () => {
    isShowVisible.value = false;
  };
  const showVisible = () => {
    isShowVisible.value = true;
  };
  return {
    isShowVisible,
    hideVisible,
    showVisible
  };
}
