<template>
  <div>
    <ul
      class="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
      v-for="(lable, index) in lables"
      :key="index"
    >
      <li class="w-full rounded-t-lg p-2">
        <div class="flex gap-10 items-center">
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full"
              for="html"
              data-ripple-dark="true"
            >
              <input
                id="html"
                name="type"
                type="radio"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500"
              />
              <div
                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5089_62168)">
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      fill="#FEBD09"
                    />
                    <path
                      d="M15.9993 21.3346C18.9449 21.3346 21.3327 18.9468 21.3327 16.0013C21.3327 13.0558 18.9449 10.668 15.9993 10.668C13.0538 10.668 10.666 13.0558 10.666 16.0013C10.666 18.9468 13.0538 21.3346 15.9993 21.3346Z"
                      fill="#212121"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5089_62168">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </label>
            <label class="mt-px cursor-pointer text-[#8C95A1] pl-2" for="html">
              {{ lable }}
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  lables: Array,
});
</script>
<style></style>
