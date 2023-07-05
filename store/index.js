import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "api-data",
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    async retrieveDataFromAPI() {
      this.data = "hello";
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
