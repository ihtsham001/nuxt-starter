<template>
  <AdditionalFeedbackModalPositive :isOpen="isOpen" @Opened="getOpened()" />
  <AdditionalFeedbackModal
    :isOpen="isAdditionOpen"
    @Opened="getAddtionalOpened()"
  />
  <div class="flex flex-col h-screen bg-gray-100 p-4 px-5 chatPanel">
    <div class="flex-1 overflow-y-auto custom-scrollbar">
      <div class="flex flex-col space-y-2">
        <div class="flex items-start justify-start">
          <img
            src="~assets/images/eliipse.svg"
            alt="Bot Avatar"
            class="w-8 h-8 rounded-full"
          />
          <div class="flex flex-col gap-2">
            <div class="bg-gray-200 py-2 px-2 rounded-xl ml-2 leading-6">
              <p class="text-gray-800 text-sm">
                Hello, I'm your tax advisor! How can I help you today?
              </p>
            </div>

            <p class="text-end text-[0.563rem]">10 mins ago</p>
          </div>

          <div class="flex flex-row gap-2 mx-3">
            <div
              class="hover:fill-primary-yellow chat-svg"
              @click="isOpen = true"
            >
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer hover:stroke-primary-yellow"
              >
                <path
                  d="M20.22 9.55C19.79 9.04 19.17 8.75 18.5 8.75H14.47V6C14.47 4.48 13.24 3.25 11.64 3.25C10.94 3.25 10.31 3.67 10.03 4.32L7.49 10.25H5.62C4.31 10.25 3.25 11.31 3.25 12.62V18.39C3.25 19.69 4.32 20.75 5.62 20.75H17.18C18.27 20.75 19.2 19.97 19.39 18.89L20.71 11.39C20.82 10.73 20.64 10.06 20.21 9.55H20.22ZM5.62 19.25C5.14 19.25 4.75 18.86 4.75 18.39V12.62C4.75 12.14 5.14 11.75 5.62 11.75H7.23V19.25H5.62ZM17.92 18.63C17.86 18.99 17.55 19.25 17.18 19.25H8.74V11.15L11.41 4.9C11.45 4.81 11.54 4.74 11.73 4.74C12.42 4.74 12.97 5.3 12.97 5.99V10.24H18.5C18.73 10.24 18.93 10.33 19.07 10.5C19.21 10.67 19.27 10.89 19.23 11.12L17.91 18.62L17.92 18.63Z"
                  fill="#000000"
                  class="hover:fill-primary-yellow"
                />
              </svg>
            </div>
            <div
              class="hover:fill-primary-yellow chat-svg"
              @click="isAdditionOpen = true"
            >
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon cursor-pointer"
                @mouseover="handleHover"
                @mouseleave="handleLeave"
              >
                <path
                  class="hover:fill-primary-yellow"
                  d="M18.38 3.25H6.81C5.72 3.25 4.79 4.03 4.6 5.11L3.29 12.61C3.18 13.27 3.36 13.94 3.78 14.45C4.21 14.96 4.83 15.25 5.5 15.25H9.53V18C9.53 19.52 10.76 20.75 12.36 20.75C13.06 20.75 13.69 20.33 13.97 19.68L16.51 13.75H18.39C19.7 13.75 20.76 12.69 20.76 11.38V5.61C20.76 4.31 19.7 3.25 18.39 3.25H18.38ZM15.26 12.85L12.59 19.1C12.55 19.19 12.46 19.26 12.27 19.26C11.58 19.26 11.03 18.7 11.03 18.01V13.76H5.5C5.27 13.76 5.07 13.67 4.93 13.5C4.78 13.33 4.73 13.11 4.77 12.88L6.08 5.38C6.14 5.02 6.45001 4.76 6.82 4.76H15.26V12.85ZM19.25 11.38C19.25 11.86 18.86 12.25 18.38 12.25H16.77V4.75H18.38C18.86 4.75 19.25 5.14 19.25 5.61V11.38Z"
                  :class="svgClass"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="flex items-start justify-end items-center gap-2"
          v-for="(chat, index) in userChat"
          :key="index"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.42442 3.29688H3.22442C2.90615 3.29688 2.60093 3.4233 2.37589 3.64835C2.15084 3.87339 2.02441 4.17862 2.02441 4.49688V12.8969C2.02441 13.2151 2.15084 13.5204 2.37589 13.7454C2.60093 13.9704 2.90615 14.0969 3.22442 14.0969H11.6244C11.9427 14.0969 12.2479 13.9704 12.473 13.7454C12.698 13.5204 12.8244 13.2151 12.8244 12.8969V8.69688"
              stroke="#C5C5D1"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.924 2.39623C12.1627 2.15753 12.4865 2.02344 12.824 2.02344C13.1616 2.02344 13.4853 2.15753 13.724 2.39623C13.9627 2.63492 14.0968 2.95866 14.0968 3.29623C14.0968 3.6338 13.9627 3.95753 13.724 4.19623L8.02403 9.89623L5.62402 10.4962L6.22402 8.09623L11.924 2.39623Z"
              stroke="#C5C5D1"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div class="p-2 rounded-lg mr-2 bg-light-yellow">
            <p class="text-gray-800 text-sm">{{ chat }}</p>
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
      class="flex justify-between md:justify-end items-center gap-3 overflow-x-scroll w-full whitespace-nowrap custom-scroll"
    >
      <span
        class="text-xs hover:text-primary-yellow chat-svg flex gap-2 cursor-pointer"
      >
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
        Chat with Live Tax Pro?</span
      >
      <div class="flex flex-row gap-3 justify-center">
        <button
          class="font-medium text-xs hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-x border-y border-primary-yellow text-primary-yellow"
        >
          Ask Tax Questions
        </button>
        <nuxtLink
          to="/taxadvice"
          class="font-medium text-xs text-center hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-x border-y border-primary-yellow text-primary-yellow"
        >
          Get Tax Advice
        </nuxtLink>
        <button
          @click="openFileReturnModal()"
          class="font-medium text-xs hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-x border-y border-primary-yellow text-primary-yellow"
        >
          File Tax Return
        </button>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center mt-2 gap-2"
    >
      <div
        class="w-70 flex flex-row gap-3 px-2 items-center md:flex-row lg:flex-row xl:flex-row text-center p-2 rounded-md w-full focus:outline-none border-x-2 border-y-2 hover:border-primary-yellow border-border-gray text-primary-yellow hover:fill-primary-yellow msg-svg"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
          />
          <path
            fill="#000000"
            d="M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
          />
        </svg>

        <input
          type="text"
          class="rounded-md w-full focus:outline-none border-0 bg-transparent placeholder:text-border-gray text-black text-[12px]"
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
const isOpen = useState(() => false);
const isAdditionOpen = useState(() => false);

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
const getOpened = (value) => {
  isOpen.value = value;
};

const getAddtionalOpened = (value) => {
  isAdditionOpen.value = value;
};
</script>

<style lang="scss">
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.chatPanel {
  svg:not(.navigation-button) {
    stroke: #c4c9cf;
    &:hover {
      path {
        stroke: #febd09;
      }
    }
  }
}
.chat-svg {
  stroke: #c4c9cf;
  &:hover {
    svg {
      path {
        stroke: #febd09;
      }
    }
  }
}
.msg-svg {
  path {
    fill: #c4c9cf;
  }
  &:hover {
    svg {
      path {
        fill: #212121;
      }
    }
  }
}
.custom-scroll {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
