<template>
  <div class="mt-3">
    <ul
      class="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
      v-for="(label, index) in lables"
      :key="index"
    >
      <li class="w-full mb-2">
        <div class="flex items-center mr-4 pt-2">
          <label
            class="relative flex cursor-pointer items-center rounded"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-primary-yellow checked:before:bg-primary-yellow"
            />
            <div
              class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <label
            class="mt-px cursor-pointer select-none font-medium ml-2 text-gray-700"
          >
            {{ label }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const lables = ["Yes", "No"];
</script>
<style>
.peer:checked ~ .peer-checked\:opacity-100 {
  opacity: 1 !important;
}
</style>
