<template>
  <div class="flex flex-col h-screen bg-gray-100 p-4">
    <div class="flex-1 overflow-y-auto">
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
    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center mt-4 gap-2"
    >
      <button
        class="w-30 hidden md:block lg:block xl:block xxl:block font-semibold text-base whitespace-nowrap hover:text-black py-2 px-3 rounded mr-5 border-2 border-primary-yellow bg-primary-yellow"
        @click="navigateTo('/')"
      >
        + New Chat
      </button>
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
