import { defineStore } from "pinia";

export const useGlobal = defineStore("global", {
  state: () => ({
    isLogin: true,
  }),
});
