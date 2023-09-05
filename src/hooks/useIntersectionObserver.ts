import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
export function intersectionObserver(target: any, callback: () => void) {
  const isVisible = ref(false);
  useIntersectionObserver(target, ([{ isIntersecting }], _observerElement) => {
    if (isIntersecting && !isVisible.value) {
      callback();
      isVisible.value = true;
    }
  });
}
