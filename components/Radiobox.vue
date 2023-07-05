<template>
  <div>
    <ul
      class="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
      v-for="(lable, index) in lables"
      :key="index"
    >
      <li class="w-full rounded-t-lg">
        <div class="flex items-center mr-4 pt-3">
          <label class="flex items-center gap-2">
            <input
              type="radio"
              class="accent-primary-yellow focus:bg-red-500"
              name="radio"
            />
            <span class="text-black">{{ lable }}</span>
          </label>
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
