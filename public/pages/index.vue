<template>
  <FreeTrialModalForm />
  <FileReturn :isOpen="isOpen" @Opened="getModalStatus()" />
  <div
    class="flex flex-col justify-center items-center h-screen space-y-2 md:px-20 lg:px-20 xl:px-20 xxl:px-20 px-2 w-9/12 m-auto"
    v-if="!isChat"
  >
    <img src="~assets/images/logo_img.svg" alt="Logo" class="w-40 h-20 mt-0" />
    <p class="text-bold font-medium text-center">
      Welcome to HIVE CPA Firm AI Tax Chat - Your Intelligent Tax Solution
    </p>
    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 justify-end w-full mt-5"
    >
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
    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center mt-2 gap-2 w-full"
    >
      <div
        class="w-full flex flex-row gap-3 px-2 items-center md:flex-row lg:flex-row xl:flex-row text-center p-2 rounded-md w-full focus:outline-none border-x border-y hover:border-primary-yellow border-border-gray text-primary-yellow hover:fill-primary-yellow placeholder:hover:text-[#212121] chat-new"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          class="hidden md:block"
        >
          <path
            fill="#C4C9CF"
            d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
          />
          <path
            fill="#C4C9CF"
            d="M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
          />
        </svg>

        <input
          type="text"
          class="rounded-md w-full focus:outline-none border-0 bg-transparent placeholder:text-border-gray text-black text-[12px] placeholder:hover:text-[#212121]"
          placeholder="Ask me anything... "
          v-model="prompt"
        />
        <div class="flex flex-row mr-5 md:mr-2">
          <img
            src="~assets/images/file.svg"
            class="right-12 top-6 h-4 w-4 mx-1 text-gray-400 cursor-pointer"
          />
          <img
            src="~assets/images/send.svg"
            class="right-3 top-6 h-4 w-4 mx-1 text-gray-400 cursor-pointer"
            @click="sendMessage()"
          />
        </div>
      </div>
    </div>
    <!-- <div
      class="message_input w-70 flex flex-row py-2.5 gap-2 pr-2 items-center md:flex-row lg:flex-row xl:flex-row text-center px-2 rounded-md w-full focus:outline-none hover:border-primary-yellow border border-border-gray text-primary-yellow chat-new"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 19.375C0 19.2057 0.0260417 19.0299 0.078125 18.8477C0.130208 18.6654 0.179036 18.4928 0.224609 18.3301C0.374349 17.7116 0.530599 17.0996 0.693359 16.4941C0.85612 15.8887 1.01237 15.2767 1.16211 14.6582C0.777995 13.9421 0.488281 13.1934 0.292969 12.4121C0.0976562 11.6309 0 10.8333 0 10.0195C0 9.10156 0.117188 8.21615 0.351562 7.36328C0.585938 6.51042 0.921224 5.70964 1.35742 4.96094C1.79362 4.21224 2.31445 3.53841 2.91992 2.93945C3.52539 2.34049 4.20247 1.81641 4.95117 1.36719C5.69987 0.917969 6.4974 0.582682 7.34375 0.361328C8.1901 0.139974 9.07552 0.0195312 10 0C10.918 0 11.8001 0.117188 12.6465 0.351562C13.4928 0.585938 14.2904 0.924479 15.0391 1.36719C15.7878 1.8099 16.4616 2.33073 17.0605 2.92969C17.6595 3.52865 18.1836 4.20247 18.6328 4.95117C19.082 5.69987 19.4173 6.49414 19.6387 7.33398C19.86 8.17383 19.9805 9.05924 20 9.99023C20 10.9017 19.8828 11.7806 19.6484 12.627C19.4141 13.4733 19.0788 14.2708 18.6426 15.0195C18.2064 15.7682 17.6888 16.4453 17.0898 17.0508C16.4909 17.6562 15.8203 18.1803 15.0781 18.623C14.3359 19.0658 13.5417 19.4043 12.6953 19.6387C11.849 19.873 10.9668 19.9935 10.0488 20C9.24154 20 8.44727 19.9089 7.66602 19.7266C6.88477 19.5443 6.13607 19.2643 5.41992 18.8867L0.771484 19.9805C0.70638 19.9935 0.657552 20 0.625 20C0.449219 20 0.302734 19.9414 0.185547 19.8242C0.0683594 19.707 0.00651042 19.5573 0 19.375ZM9.96094 18.75C10.7682 18.75 11.5462 18.6458 12.2949 18.4375C13.0436 18.2292 13.7435 17.9362 14.3945 17.5586C15.0456 17.181 15.638 16.7285 16.1719 16.2012C16.7057 15.6738 17.1647 15.0814 17.5488 14.4238C17.9329 13.7663 18.2292 13.0664 18.4375 12.3242C18.6458 11.582 18.75 10.804 18.75 9.99023C18.75 9.18294 18.6458 8.4082 18.4375 7.66602C18.2292 6.92383 17.9362 6.22721 17.5586 5.57617C17.181 4.92513 16.722 4.33594 16.1816 3.80859C15.6413 3.28125 15.0488 2.82552 14.4043 2.44141C13.7598 2.05729 13.0632 1.76432 12.3145 1.5625C11.5658 1.36068 10.791 1.25651 9.99023 1.25C9.18945 1.25 8.41797 1.35417 7.67578 1.5625C6.93359 1.77083 6.23698 2.0638 5.58594 2.44141C4.9349 2.81901 4.3457 3.27148 3.81836 3.79883C3.29102 4.32617 2.83529 4.91536 2.45117 5.56641C2.06706 6.21745 1.77083 6.91081 1.5625 7.64648C1.35417 8.38216 1.25 9.1569 1.25 9.9707C1.25 10.3939 1.27604 10.7845 1.32812 11.1426C1.38021 11.5007 1.45508 11.849 1.55273 12.1875C1.65039 12.526 1.76758 12.8678 1.9043 13.2129C2.04102 13.5579 2.19727 13.9128 2.37305 14.2773C2.42513 14.3815 2.45117 14.4824 2.45117 14.5801C2.45117 14.6517 2.43164 14.7852 2.39258 14.9805C2.35352 15.1758 2.30143 15.4004 2.23633 15.6543C2.17122 15.9082 2.10286 16.1816 2.03125 16.4746C1.95964 16.7676 1.88477 17.0475 1.80664 17.3145C1.72852 17.5814 1.66341 17.8223 1.61133 18.0371C1.55924 18.252 1.51693 18.4147 1.48438 18.5254C1.92708 18.4212 2.36328 18.3171 2.79297 18.2129C3.22266 18.1087 3.66211 18.0013 4.11133 17.8906C4.33268 17.8385 4.5638 17.7767 4.80469 17.7051C5.04557 17.6335 5.27995 17.5977 5.50781 17.5977C5.5599 17.5977 5.60872 17.6042 5.6543 17.6172C5.69987 17.6302 5.7487 17.6497 5.80078 17.6758C6.15234 17.8385 6.49089 17.985 6.81641 18.1152C7.14193 18.2454 7.47396 18.3594 7.8125 18.457C8.15104 18.5547 8.49284 18.6263 8.83789 18.6719C9.18294 18.7174 9.55729 18.7435 9.96094 18.75ZM6.875 8.75C6.70573 8.75 6.55924 8.68815 6.43555 8.56445C6.31185 8.44076 6.25 8.29427 6.25 8.125C6.25 7.95573 6.31185 7.80924 6.43555 7.68555C6.55924 7.56185 6.70573 7.5 6.875 7.5H13.125C13.2943 7.5 13.4408 7.56185 13.5645 7.68555C13.6882 7.80924 13.75 7.95573 13.75 8.125C13.75 8.29427 13.6882 8.44076 13.5645 8.56445C13.4408 8.68815 13.2943 8.75 13.125 8.75H6.875ZM6.875 12.5C6.70573 12.5 6.55924 12.4382 6.43555 12.3145C6.31185 12.1908 6.25 12.0443 6.25 11.875C6.25 11.7057 6.31185 11.5592 6.43555 11.4355C6.55924 11.3118 6.70573 11.25 6.875 11.25H10.625C10.7943 11.25 10.9408 11.3118 11.0645 11.4355C11.1882 11.5592 11.25 11.7057 11.25 11.875C11.25 12.0443 11.1882 12.1908 11.0645 12.3145C10.9408 12.4382 10.7943 12.5 10.625 12.5H6.875Z"
          fill="#C4C9CF"
        />
      </svg>

      <input
        type="text"
        class="rounded-md w-full focus:outline-none border-0 text-sm bg-transparent placeholder:text-border-gray text-black"
        placeholder="Ask me anything... "
      />
      <div class="flex flex-row mr-4 md:mr-2 md:mr-2 lg:mr-2 xl:mr-2 xxl:mr-2">
        <img
          src="~assets/images/file.svg"
          class="right-12 top-6 h-4 w-4 ml-1 md:mr-2 md:mr-2 lg:mr-2 xl:mr-2 xxl:mr-2 text-gray-400 cursor-pointer"
        />
        <img
          src="~assets/images/send.svg"
          class="right-3 top-6 h-4 w-4 ml-1 text-gray-400 cursor-pointer"
        />
      </div>
    </div> -->
  </div>
</template>

<script setup>
const isOpen = useState(() => false);

const openFileReturnModal = () => {
  isOpen.value = !isOpen.value;
};
const getModalStatus = (data) => {
  isOpen.value = data;
};
</script>
<style lang="scss">
.message_input:hover {
  border: 2px solid #febd09 !important;
}
.chat-new {
  stroke: #c4c9cf;
  &:hover {
    svg {
      path {
        fill: #212121;
      }
    }
  }
}
</style>
