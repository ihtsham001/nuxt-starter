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
          <div class="bg-[#D2F4D3] p-2 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 11L11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V9H19.66C19.9499 8.99672 20.2371 9.0565 20.5016 9.17522C20.7661 9.29393 21.0016 9.46873 21.1919 9.68751C21.3821 9.90629 21.5225 10.1638 21.6033 10.4423C21.6842 10.7207 21.7035 11.0134 21.66 11.3L20.28 20.3C20.2077 20.7769 19.9654 21.2116 19.5979 21.524C19.2304 21.8364 18.7623 22.0055 18.28 22H7M7 11V22M7 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H7"
                stroke="#1A7F64"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
            placeholder="What do you like about the response?"
          ></textarea>

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
  isOpen: false,
});
</script>
