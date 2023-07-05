<template>
  <div v-for="(input, index) in inputs.slice().reverse()" :key="index">
    <template v-if="index === 0">
      <h3 class="mb-2 font-semibold text-gray-900 dark:text-black">
        What’s your marital status?
      </h3>
      <ul
        class="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
      >
        <li class="w-full rounded-t-lg">
          <div class="flex items-center mr-4 pt-3">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 accent-primary-yellow text-yellow-400 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              class="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
              >Yes</label
            >
          </div>
          <div class="flex items-center mr-4 pt-3">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 accent-primary-yellow text-yellow-400 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              class="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
              >No</label
            >
          </div>
        </li>
      </ul>
    </template>
    <template v-if="index === 1">
      <h3 class="mb-2 font-semibold text-gray-900 dark:text-black pt-4">
        Do you have dependents?
      </h3>
      <ul
        class="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
      >
        <li class="w-full rounded-t-lg">
          <div class="flex items-center mr-4 pt-3">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 accent-primary-yellow text-yellow-400 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              class="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
              >Yes</label
            >
          </div>
          <div class="flex items-center mr-4 pt-3">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 accent-primary-yellow text-yellow-400 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              class="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
              >No</label
            >
          </div>
        </li>
      </ul>
    </template>
    <template v-else-if="index === 2">
      <IncomeTypeBtn class="grid grid-cols-4 gap-4"
    /></template>
    <!-- Add more templates for different input types -->
  </div>

  <button
    @click="nextStep()"
    class="mt-4 font-semibold hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-2 border-primary-yellow text-primary-yellow"
  >
    Next >
  </button>
</template>

<script setup>
const inputs = useState(() => [1]);
const currentStep = useState(() => 0);
function nextStep() {
  inputs.value.push(currentStep.value++);
}
</script>
