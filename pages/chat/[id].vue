<template>
  <AdditionalFeedbackModalPositive :isOpen="isOpen" @Opened="getOpened()" />
  <AdditionalFeedbackModal
    :isOpen="isAdditionOpen"
    @Opened="getAddtionalOpened()"
  />
  <div class="flex flex-col h-screen bg-gray-100 p-4 px-5">
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
      class="flex justify-between md:justify-end items-center gap-3 overflow-x-scroll w-full whitespace-nowrap custom-scroll"
    >
      <span
        class="text-sm hover:text-primary-yellow chat-svg flex gap-3 cursor-pointer"
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
        class="w-70 flex flex-row gap-3 px-2 items-center md:flex-row lg:flex-row xl:flex-row text-center p-2 rounded-md w-full focus:outline-none border-x-2 border-y-2 hover:border-primary-yellow border-border-gray text-primary-yellow hover:fill-primary-yellow chat-svg"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5173_599)">
            <path
              d="M0 19.375C0 19.2057 0.0260417 19.0299 0.078125 18.8477C0.130208 18.6654 0.179036 18.4928 0.224609 18.3301C0.374349 17.7116 0.530599 17.0996 0.693359 16.4941C0.85612 15.8887 1.01237 15.2767 1.16211 14.6582C0.777995 13.9421 0.488281 13.1934 0.292969 12.4121C0.0976562 11.6309 0 10.8333 0 10.0195C0 9.10156 0.117188 8.21615 0.351562 7.36328C0.585938 6.51042 0.921224 5.70964 1.35742 4.96094C1.79362 4.21224 2.31445 3.53841 2.91992 2.93945C3.52539 2.34049 4.20247 1.81641 4.95117 1.36719C5.69987 0.917969 6.4974 0.582682 7.34375 0.361328C8.1901 0.139974 9.07552 0.0195312 10 0C10.918 0 11.8001 0.117188 12.6465 0.351562C13.4928 0.585938 14.2904 0.924479 15.0391 1.36719C15.7878 1.8099 16.4616 2.33073 17.0605 2.92969C17.6595 3.52865 18.1836 4.20247 18.6328 4.95117C19.082 5.69987 19.4173 6.49414 19.6387 7.33398C19.86 8.17383 19.9805 9.05924 20 9.99023C20 10.9017 19.8828 11.7806 19.6484 12.627C19.4141 13.4733 19.0788 14.2708 18.6426 15.0195C18.2064 15.7682 17.6888 16.4453 17.0898 17.0508C16.4909 17.6562 15.8203 18.1803 15.0781 18.623C14.3359 19.0658 13.5417 19.4043 12.6953 19.6387C11.849 19.873 10.9668 19.9935 10.0488 20C9.24154 20 8.44727 19.9089 7.66602 19.7266C6.88477 19.5443 6.13607 19.2643 5.41992 18.8867L0.771484 19.9805C0.70638 19.9935 0.657552 20 0.625 20C0.449219 20 0.302734 19.9414 0.185547 19.8242C0.0683594 19.707 0.00651042 19.5573 0 19.375ZM9.96094 18.75C10.7682 18.75 11.5462 18.6458 12.2949 18.4375C13.0436 18.2292 13.7435 17.9362 14.3945 17.5586C15.0456 17.181 15.638 16.7285 16.1719 16.2012C16.7057 15.6738 17.1647 15.0814 17.5488 14.4238C17.9329 13.7663 18.2292 13.0664 18.4375 12.3242C18.6458 11.582 18.75 10.804 18.75 9.99023C18.75 9.18294 18.6458 8.4082 18.4375 7.66602C18.2292 6.92383 17.9362 6.22721 17.5586 5.57617C17.181 4.92513 16.722 4.33594 16.1816 3.80859C15.6413 3.28125 15.0488 2.82552 14.4043 2.44141C13.7598 2.05729 13.0632 1.76432 12.3145 1.5625C11.5658 1.36068 10.791 1.25651 9.99023 1.25C9.18945 1.25 8.41797 1.35417 7.67578 1.5625C6.93359 1.77083 6.23698 2.0638 5.58594 2.44141C4.9349 2.81901 4.3457 3.27148 3.81836 3.79883C3.29102 4.32617 2.83529 4.91536 2.45117 5.56641C2.06706 6.21745 1.77083 6.91081 1.5625 7.64648C1.35417 8.38216 1.25 9.1569 1.25 9.9707C1.25 10.3939 1.27604 10.7845 1.32812 11.1426C1.38021 11.5007 1.45508 11.849 1.55273 12.1875C1.65039 12.526 1.76758 12.8678 1.9043 13.2129C2.04102 13.5579 2.19727 13.9128 2.37305 14.2773C2.42513 14.3815 2.45117 14.4824 2.45117 14.5801C2.45117 14.6517 2.43164 14.7852 2.39258 14.9805C2.35352 15.1758 2.30143 15.4004 2.23633 15.6543C2.17122 15.9082 2.10286 16.1816 2.03125 16.4746C1.95964 16.7676 1.88477 17.0475 1.80664 17.3145C1.72852 17.5814 1.66341 17.8223 1.61133 18.0371C1.55924 18.252 1.51693 18.4147 1.48438 18.5254C1.92708 18.4212 2.36328 18.3171 2.79297 18.2129C3.22266 18.1087 3.66211 18.0013 4.11133 17.8906C4.33268 17.8385 4.5638 17.7767 4.80469 17.7051C5.04557 17.6335 5.27995 17.5977 5.50781 17.5977C5.5599 17.5977 5.60872 17.6042 5.6543 17.6172C5.69987 17.6302 5.7487 17.6497 5.80078 17.6758C6.15234 17.8385 6.49089 17.985 6.81641 18.1152C7.14193 18.2454 7.47396 18.3594 7.8125 18.457C8.15104 18.5547 8.49284 18.6263 8.83789 18.6719C9.18294 18.7174 9.55729 18.7435 9.96094 18.75ZM6.875 8.75C6.70573 8.75 6.55924 8.68815 6.43555 8.56445C6.31185 8.44076 6.25 8.29427 6.25 8.125C6.25 7.95573 6.31185 7.80924 6.43555 7.68555C6.55924 7.56185 6.70573 7.5 6.875 7.5H13.125C13.2943 7.5 13.4408 7.56185 13.5645 7.68555C13.6882 7.80924 13.75 7.95573 13.75 8.125C13.75 8.29427 13.6882 8.44076 13.5645 8.56445C13.4408 8.68815 13.2943 8.75 13.125 8.75H6.875ZM6.875 12.5C6.70573 12.5 6.55924 12.4382 6.43555 12.3145C6.31185 12.1908 6.25 12.0443 6.25 11.875C6.25 11.7057 6.31185 11.5592 6.43555 11.4355C6.55924 11.3118 6.70573 11.25 6.875 11.25H10.625C10.7943 11.25 10.9408 11.3118 11.0645 11.4355C11.1882 11.5592 11.25 11.7057 11.25 11.875C11.25 12.0443 11.1882 12.1908 11.0645 12.3145C10.9408 12.4382 10.7943 12.5 10.625 12.5H6.875Z"
              fill="#C4C9CF"
            />
          </g>
          <defs>
            <clipPath id="clip0_5173_599">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
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
svg:not(.navigation-button) {
  stroke: #c4c9cf;
  &:hover {
    path {
      stroke: #febd09;
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
.custom-scroll {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
