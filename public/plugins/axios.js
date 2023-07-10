import axios from "axios";

export default defineNuxtPlugin(() => {
  let api = axios.create({
    baseURL: "",
  });
  return {
    provide: {
      api: api,
    },
  };
});
