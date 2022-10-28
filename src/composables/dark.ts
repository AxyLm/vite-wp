// these APIs are auto-imported from @vueuse/core
import { useToggle, useDark } from '@vueuse/core';

export const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
  onChanged(isDark: boolean) {
    if (!import.meta.env.SSR) {
      document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', !isDark);
    }
  },
});
export const toggleDark = useToggle(isDark);
