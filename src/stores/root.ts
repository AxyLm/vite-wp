import { defineStore } from 'pinia';

export const useRootStore = defineStore('root', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    countPlus() {
      this.count++;
    },
  },
});
