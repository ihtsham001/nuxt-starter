<template>
  <!-- <FreeTrialModal /> -->
  <FreeTrialModalForm />
  <div
    class="flex flex-col justify-center items-center h-screen space-y-4 md:px-20 lg:px-20 xl:px-20 xxl:px-20 px-5"
    v-if="!isChat"
  >
    <img src="~assets/images/logo_img.svg" alt="Logo" class="w-40 h-20" />
    <p class="text-bold font-medium text-center">
      Welcome to HIVE CPA Firm AI Tax Chat - Your Intelligent Tax Solution
    </p>
    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 justify-end w-full mt-5"
    >
      <button
        class="font-semibold hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-2 border-primary-yellow text-primary-yellow"
      >
        Ask Tax Questions
      </button>
      <nuxtLink
        to="/taxadvice"
        class="font-semibold text-center hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-2 border-primary-yellow text-primary-yellow"
      >
        Get Tax Advice
      </nuxtLink>
      <button
        class="font-semibold hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-2 border-primary-yellow text-primary-yellow"
      >
        File Tax Return
      </button>
    </div>
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
      />
      <div class="flex flex-row mr-2">
        <img
          src="~assets/images/file.svg"
          class="right-12 top-6 h-4 w-4 mx-1 text-gray-400 cursor-pointer"
        />
        <img
          src="~assets/images/send.svg"
          class="right-3 top-6 h-4 w-4 mx-2 text-gray-400 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>
