<template>
  <div
    v-show="isOpen"
    class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
  >
    <div
      class="w-11/12 xl:max-w-lg lg:max-w-lg md:max-w-lg py-12 px-5 mx-4 bg-white shadow-xl z-40 rounded-t-2xl rounded-b-2xl"
    >
      <div class="flex flex-col gap-2">
        <div class="flex justify-center">
          <img src="../assets/images/survay.svg" alt="survey" />
        </div>
        <div
          class="text-base md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl text-[#212121] text-center font-medium non-italic mt-2"
        >
          Congratulations
        </div>
        <div
          class="text-base md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl text-[#212121] text-center font-medium non-italic"
        >
          Survey is completed
        </div>
        <p
          class="mb-2 mt-4 text-[18px] not-italic text-[#212121] font-semibold leading-6"
        >
          Here is the Document file
        </p>
        <div
          class="flex justify-between items-center border border-[#EEE] p-2 rounded"
        >
          <input
            type="file"
            class="block w-full pl-3 text-sm text-gray-900 border border-0 rounded-lg bg-transparent"
            required
          />
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7715 12.4158H21.2794C18.4157 12.4158 16.0836 10.0837 16.0836 7.21995V3.72786C16.0836 3.06328 15.5398 2.51953 14.8752 2.51953H9.7519C6.03023 2.51953 3.02148 4.9362 3.02148 9.24995V19.9558C3.02148 24.2695 6.03023 26.6862 9.7519 26.6862H19.2494C22.9711 26.6862 25.9798 24.2695 25.9798 19.9558V13.6241C25.9798 12.9595 25.4361 12.4158 24.7715 12.4158ZM14.839 19.1704L12.4223 21.587C12.3377 21.6716 12.229 21.7441 12.1202 21.7804C12.0115 21.8287 11.9027 21.8529 11.7819 21.8529C11.6611 21.8529 11.5523 21.8287 11.4436 21.7804C11.3469 21.7441 11.2502 21.6716 11.1777 21.5991C11.1657 21.587 11.1536 21.587 11.1536 21.5749L8.7369 19.1583C8.38648 18.8079 8.38648 18.2279 8.7369 17.8774C9.08732 17.527 9.66732 17.527 10.0177 17.8774L10.8757 18.7595V13.6966C10.8757 13.2012 11.2865 12.7904 11.7819 12.7904C12.2773 12.7904 12.6882 13.2012 12.6882 13.6966V18.7595L13.5582 17.8895C13.9086 17.5391 14.4886 17.5391 14.839 17.8895C15.1894 18.2399 15.1894 18.8199 14.839 19.1704Z"
              fill="#FEBD09"
            />
            <path
              d="M21.0612 10.7456C22.2091 10.7577 23.8041 10.7577 25.1695 10.7577C25.8583 10.7577 26.2208 9.94811 25.7374 9.46477C23.9974 7.71269 20.8799 4.55894 19.0916 2.77061C18.5962 2.27519 17.7383 2.61352 17.7383 3.30227V7.51936C17.7383 9.28352 19.2366 10.7456 21.0612 10.7456Z"
              fill="#FEBD09"
            />
          </svg>
        </div>
        <div class="mt-3 mb-2 flex flex-col items-center">
          <div
            @click="isOpen = false"
            class="flex items-center justify-center gap-2 font-medium px-6 py-2 border-primary-yellow bg-primary-yellow rounded w-full text-center cursor-pointer"
          >
            <span
              ><svg
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0505 6.86328L3.98047 12.9333L10.0505 19.0033"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9804 12.9336H4.15039"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> </span
            >Back to Tax Bot
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isOpen: Boolean,
});
</script>
