import Ably from "ably";
export default defineNuxtPlugin({
  name: "ably",
  enforce: "pre",
  async setup() {
    const { vueApp } = useNuxtApp();
    const config = useRuntimeConfig().public;
    const ably = new Ably.Realtime.Promise(
      "QMcMkg.NEwZgQ:TOWGl3Tzi14ZPsOXjvTqfkMAXZhXXb5x699q3unpWzk"
    );
    await ably.connection.once("connected");
    console.log("Connected to Ably!");
    vueApp.ably = ably;
  },
});
