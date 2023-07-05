<template>
  <div>
    <div
      class="flex items-center w-1/2 pt-4 h-screen md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2 m-auto"
    >
      <div
        class="flex flex-col justify-center p-4 w-full scroll-hidden min-h-[80vh] max-h-[80vh] overflow-y-scroll custom-scrollbar"
        ref="scrollContainer"
      >
        <div v-for="(input, index) in inputs.slice().reverse()" :key="index">
          <template v-if="index === 0">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-black">
              What’s your marital status?
            </h3>

            <Checkbox />
          </template>
          <template v-if="index === 1">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-black pt-4">
              Do you have dependents?
            </h3>
            <Checkbox />
          </template>
          <template v-else-if="index === 2">
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-black pt-4">
              Do you have dependents?
            </h3>
            <div
              class="flex flex-row flex-wrap justify-start align-start gap-2"
            >
              <IncomeTypeBtn />
            </div>
          </template>
          <template v-else-if="index === 3">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-black pt-4">
              What type income you have?
            </h3>
            <Radiobox :lables="income" />
          </template>
          <template v-else-if="index === 4">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-black pt-4">
              Your monthly salary
            </h3>
            <input
              type="text"
              class="border-b-2 w-full placeholder:text-2xl mt-2 focus:outline-none"
              placeholder="Enter Amount"
            />
          </template>
          <template v-else-if="index === 5">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-black pt-4">
              What's your favorite games?
            </h3>
            <Radiobox :lables="games" />
          </template>
          <template v-else-if="index === 6">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-black pt-4">
              How old are you?
            </h3>
            <input
              type="date"
              class="border-b-2 w-full placeholder:text-2xl mt-2 focus:outline-none"
              placeholder="Enter Amount"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-start w-1/2 m-auto">
      <button
        @click="nextStep()"
        class="mb-3 mt-4 font-semibold hover:text-black hover:bg-primary-yellow py-2 px-3 rounded border-2 border-primary-yellow text-primary-yellow"
      >
        Next >
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputs = useState(() => [1]);
const currentStep = useState(() => 0);
const scrollContainer = ref(null);
const { games, income } = {
  games: [
    "Call of Duty",
    "Gta",
    "Fifa",
    "Pokemon",
    "Assassin’s Creed",
    "Others",
  ],
  income: ["Own a Home", "Rent a Home"],
};
function nextStep() {
  inputs.value.push(currentStep.value++);
  scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
}
</script>
<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
