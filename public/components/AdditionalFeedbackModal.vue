<template>
  <div
    v-show="isOpen"
    class="absolute inset-0 flex items-center justify-center bg-[#cacaca] bg-opacity-80 z-40 px-4"
  >
    <div
      class="relative overflow-y-auto w-full max-w-4xl bg-white rounded ml-1"
    >
      <div class="flex justify-between items-center p-3 border-b">
        <div class="flex justify-start items-center gap-3">
          <div class="bg-[#FEE2E2] p-2 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5089_61477)">
                <path
                  d="M17 13.0004L13 22.0004C12.2044 22.0004 11.4413 21.6843 10.8787 21.1217C10.3161 20.5591 10 19.796 10 19.0004V15.0004H4.34003C4.05012 15.0036 3.76297 14.9439 3.49846 14.8251C3.23395 14.7064 2.99842 14.5316 2.80817 14.3128C2.61793 14.0941 2.47753 13.8365 2.39669 13.5581C2.31586 13.2797 2.29652 12.987 2.34003 12.7004L3.72003 3.70036C3.79235 3.22346 4.0346 2.78875 4.40212 2.47636C4.76965 2.16396 5.2377 1.99491 5.72003 2.00036H17M17 13.0004V2.00036M17 13.0004H19.67C20.236 13.0104 20.7859 12.8122 21.2154 12.4435C21.645 12.0749 21.9242 11.5613 22 11.0004V4.00036C21.9242 3.43942 21.645 2.92586 21.2154 2.55718C20.7859 2.1885 20.236 1.99035 19.67 2.00036H17"
                  stroke="#DC2626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5089_61477">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="text-[#202123] text-[1rem] md:text-lg font-medium">
            Provide additional feedback
          </div>
        </div>
        <div
          @click="
            isOpen = false;
            $emit('Opened', isOpen);
          "
          class="cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15"
              stroke="#202123"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 5L15 15"
              stroke="#202123"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="px-4 py-4">
        <form>
          <textarea
            rows="3"
            class="block p-3 md:p-2.5 w-full mb-2 text-sm text-[#8E8EA0] border-[#8E8EA0] bg-white rounded-lg border border-[#8E8EA0] resize-none placeholder:text-[12px] md:placeholder:text-[0.8rem] placeholder:text-[#8E8EA0] focus:outline-0"
            placeholder="What was the issue with the response? How could it be improved?"
          ></textarea>
          <div class="flex justify-start items-center gap-2 mt-2">
            <input
              type="checkbox"
              class="w-3 h-3 accent-primary-yellow text-blue-500 bg-gray-100 border-[#C5C5D2] rounded"
            /><span class="text-[#343541] text-sm"
              >This is harmful / unsafe</span
            >
          </div>
          <div class="flex justify-start items-center gap-2 mt-2">
            <input
              type="checkbox"
              class="w-3 h-3 accent-primary-yellow text-blue-500 bg-gray-100 border border-[#C5C5D2] rounded"
            /><span class="text-[#343541] text-sm">This isn't true</span>
          </div>
          <div class="flex justify-start items-center gap-2 mt-2">
            <input
              type="checkbox"
              class="w-3 h-3 accent-primary-yellow text-blue-500 bg-gray-100 border-[#C5C5D2] rounded hover:border-primary-yellow focus:outline-none focus:ring-0 focus:border-[#C5C5D2]"
            /><span class="text-[#343541] text-sm">This isn't helpful</span>
          </div>
          <div
            class="flex justify-center md:justify-end lg:justify-end xl:justify-end xxl:justify-end items-center mt-4 md:mt-3"
          >
            <button
              type="submit"
              class="text-[#FEBD09] text-[12px] font-normal border-x border-y border-[#FEBD09] p-2 rounded"
            >
              Submit feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isOpen: Boolean,
});
</script>
