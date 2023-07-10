<template>
  <div
    v-show="isOpen"
    class="absolute inset-0 flex items-center justify-center z-40 h-full"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div
      class="w-11/12 md:max-w-[602px] py-10 px-3 md:px-5 mx-4 bg-white shadow-xl z-40 rounded-t-2xl rounded-b-2xl"
    >
      <div
        class="text-base md:text-[2.3rem] text-[#212121] text-center font-medium non-italic"
      >
        Free, Easy, Online Filling
      </div>
      <div class="flex justify-center">
        <img
          src="../assets/images/filing.png"
          alt="filling"
          class="h-full md:h-[350px]"
        />
      </div>
      <div class="mt-2 mb-2 flex flex-col items-center">
        <p
          class="mb-2 text-xs md:text-sm not-italic text-center text-[#212121] font-normal leading-6"
        >
          We partner with “myFreeTaxes” to file taxes online. You will be
          redirected to our partner website to complete your online tax filling.
        </p>
        <a
          href="https://myfreetaxes.com/"
          class="px-6 py-2 w-full md:w-3/4 my-2 text-xs md:text-sm text-[#1E293B] text-center hover:text-[#1E293B] font-medium border rounded border-primary-yellow bg-primary-yellow underline"
        >
          File Online
        </a>
        <div
          @click="
            isOpen = false;
            $emit('Opened', isOpen);
          "
          class="flex items-center text-xs md:text-sm gap-2 font-medium cursor-pointer mt-[1.4rem]"
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
</template>
<script setup>
defineProps({
  isOpen: Boolean,
});
</script>
