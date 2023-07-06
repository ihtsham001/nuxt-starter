<template>
  <div class="flex flex-col h-screen bg-gray-100 p-4 px-5">
    <div class="flex-1 overflow-y-auto custom-scrollbar">
      <div class="flex flex-col space-y-2">
        <div class="flex items-start justify-start items-center">
          <img
            src="~assets/images/bot_img.png"
            alt="Bot Avatar"
            class="w-8 h-8 rounded-full"
          />
          <div class="bg-gray-200 p-2 rounded-lg ml-2">
            <p class="text-gray-800">
              Hello, I'm your tax advisor! How can I help you today?
            </p>
          </div>
        </div>
        <div
          class="flex items-start justify-end items-center"
          v-for="(chat, index) in userChat"
          :key="index"
        >
          <div class="p-2 rounded-lg mr-2 bg-light-yellow">
            <p class="text-gray-800">{{ chat }}</p>
          </div>
          <img
            src="~assets/images/user_dummy.png"
            alt="User Avatar"
            class="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center gap-2 hover:text-primary-yellow">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-cyan-500 md:stroke-cyan-700"
      >
        <path
          d="M11.9863 7.19334V9.86001C11.9863 10.0333 11.9797 10.2 11.9597 10.36C11.8063 12.16 10.7463 13.0533 8.79301 13.0533H8.52635C8.35968 13.0533 8.19967 13.1333 8.09967 13.2667L7.29968 14.3333C6.94635 14.8067 6.37301 14.8067 6.01967 14.3333L5.21967 13.2667C5.133 13.1533 4.93968 13.0533 4.79301 13.0533H4.52635C2.39968 13.0533 1.33301 12.5267 1.33301 9.86001V7.19334C1.33301 5.24001 2.23301 4.18001 4.02635 4.02667C4.18635 4.00667 4.35301 4 4.52635 4H8.79301C10.9197 4 11.9863 5.06667 11.9863 7.19334Z"
          stroke="#212121"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.653 4.52732V7.19399C14.653 9.15399 13.753 10.2073 11.9597 10.3607C11.9797 10.2007 11.9864 10.034 11.9864 9.86066V7.19399C11.9864 5.06732 10.9197 4.00065 8.79303 4.00065H4.52637C4.35303 4.00065 4.18637 4.00732 4.02637 4.02732C4.1797 2.23399 5.2397 1.33398 7.19303 1.33398H11.4597C13.5864 1.33398 14.653 2.40066 14.653 4.52732Z"
          stroke="#212121"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.99733 8.83333H9.00333"
          stroke="#212121"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66334 8.83333H6.66934"
          stroke="#212121"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.33033 8.83333H4.33633"
          stroke="#212121"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span> Chat with Live Tax Pro?</span>
    </div>
    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center mt-2 gap-2"
    >
      <div
        class="w-70 flex flex-row gap-2 pr-2 items-center md:flex-row lg:flex-row xl:flex-row text-center p-2 rounded-md w-full focus:outline-none border-2 border-primary-yellow text-primary-yellow"
      >
        <img
          src="~assets/images/message-icon.svg"
          class="right-12 top-6 h-4 w-4 mx-2 text-gray-400 cursor-pointer hidden md:block lg:block xl:block xxl:block"
        />
        <input
          type="text"
          class="rounded-md w-full focus:outline-none border-0 bg-transparent text-primary-yellow"
          placeholder="Ask me anything... "
          v-model="prompt"
        />
        <div class="flex flex-row mr-2">
          <img
            src="~assets/images/file.svg"
            class="right-12 top-6 h-4 w-4 mx-1 text-gray-400 cursor-pointer"
          />
          <img
            src="~assets/images/send.svg"
            class="right-3 top-6 h-4 w-4 mx-2 text-gray-400 cursor-pointer"
            @click="sendMessage()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { vueApp } = useNuxtApp();
const prompt = useState(() => "");
const userChat = useState(() => ["I need personal Tax advice?"]);

onMounted(() => {
  const channel = vueApp.ably.channels.get("shami");
  channel.subscribe("shami", (res) => {
    userChat.value = [...userChat.value, res.data];
  });
});

const sendMessage = async () => {
  const channel = vueApp.ably.channels.get("shami");
  channel.publish("shami", prompt.value);
  prompt.value = "";
};
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
