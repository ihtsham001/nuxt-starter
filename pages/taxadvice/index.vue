<template>
  <CompletedSurveyModal :isOpen="isOpen" @lastStep="getStep" />
  <div
    class="flex flex-col items-start justify-center pt-4 h-screen w-full md:w-1/2 m-auto px-5 md:px-0"
  >
    <div class="overflow-y-scroll custom-scrollbar" ref="scrollContainer">
      <!-- <div v-for="(input, index) in inputs.slice().reverse()" :key="index"> -->
      <template v-if="currentStep === 0">
        <div
          class="mb-2 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          What’s your marital status?
        </div>

        <Checkbox :fieldName="'marital'" />
      </template>
      <template v-if="currentStep === 1">
        <h3
          class="mb-2 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          Do you have dependents?
        </h3>
        <Checkbox :fieldName="'dependant'" />
      </template>
      <template v-else-if="currentStep === 2">
        <h3
          class="mb-4 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          What type of income do you have?
        </h3>
        <div class="flex flex-row flex-wrap justify-start align-start gap-2">
          <IncomeTypeBtn />
        </div>
      </template>
      <template v-else-if="currentStep === 3">
        <h3
          class="mb-2 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          What type of income you have?
        </h3>
        <Radiobox :lables="income" :fieldName="'income'" />
      </template>
      <template v-else-if="currentStep === 4">
        <h3
          class="mb-2 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          Your monthly salary
        </h3>
        <input
          type="number"
          class="border-b-2 w-full py-3 placeholder:text-[#C4C9CF] font-semibold text-4xl placeholder:text-2xl mt-2 focus:outline-none"
          placeholder="Enter Amount"
        />
      </template>
      <template v-else-if="currentStep === 5">
        <h3
          class="mb-2 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          What's your favorite games?
        </h3>
        <Radiobox :lables="games" :fieldName="'game'" />
      </template>
      <template v-else-if="currentStep === 6">
        <h3
          class="mb-2 font-[500] text-[1rem] md:text-[1.3rem] text-gray-900 dark:text-black tracking-wide"
        >
          How old are you?
        </h3>
        <input
          type="date"
          class="border-b-2 font-normal text-[#C4C9CF] py-3 text-2xl md:text-3xl w-full placeholder:text-2xl mt-2 focus:outline-none bg-transparent"
          placeholder="Enter Amount"
        />
      </template>
      <!-- </div> -->
    </div>
    <div class="flex mt-4 gap-2">
      <button
        v-if="currentStep > 0"
        @click="prevStep()"
        class="font-normal font-sm text-black bg-primary-yellow py-2 px-4 rounded border-2 border-primary-yellow text-primary-yellow focus:outline-none"
      >
        <div class="flex justify-center">
          <span style="transform: rotate(180deg)">
            <svg
              class="navigation-button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_5089_61819)">
                <path
                  d="M11 6L17 12L11 18"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5089_61819">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>

          <span class="text-[0.879rem]"> Back </span>
        </div>
      </button>
      <button
        @click="nextStep()"
        class="font-normal text-black bg-primary-yellow py-2 px-4 rounded-lg border-2 border-primary-yellow text-primary-yellow focus:outline-none"
      >
        <div class="flex justify-center">
          <span class="text-[0.879rem]">
            {{
              currentStep < 1
                ? "Get Started"
                : currentStep == 6
                ? "Submit"
                : "Next"
            }}
          </span>
          <span>
            <svg
              class="navigation-button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_5089_61819)">
                <path
                  d="M11 6L17 12L11 18"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5089_61819">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
const inputs = useState(() => [1]);
const currentStep = useState(() => 0);
const scrollContainer = ref(null);
const isOpen = useState(() => false);

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
  if (currentStep.value == 6) {
    isOpen.value = true;
  }
  if (currentStep.value != 6) {
    currentStep.value = currentStep.value + 1;
  }
  // inputs.value.push(currentStep.value++);
  // scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
}
function prevStep() {
  currentStep.value = currentStep.value - 1;
}
function getStep(step) {
  console.log(step);
  currentStep.value = step;
}
</script>
<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
