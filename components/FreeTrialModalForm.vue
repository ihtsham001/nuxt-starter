<template>
  <div
    v-show="isOpen"
    class="absolute inset-0 flex items-top justify-center bg-gray-700 bg-opacity-50"
  >
    <div
      class="min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] mx-4 bg-white shadow-xl z-40 rounded-t-2xl rounded-b-2xl px-5 my-4"
    >
      <div class="flex items-center justify-center">
        <img
          src="~assets/images/freeTrial.svg"
          class="right-3 mt-2 w-3/5 mx-2 text-gray-400 cursor-pointer"
        />
      </div>
      <div class="mt-3 mb-2 flex flex-col gap-2 items-center">
        <h1
          class="text-base md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl font-semibold font-poppins text-center leading-relaxed tracking-wide"
        >
          Start with FREE 7 days Trail
        </h1>
        <p class="mb-3 text-sm text-center text-gray-light">
          Please fill the information below and claim your 7days trail.
        </p>

        <div class="flex -mx-3">
          <div class="w-full md:w-1/2 px-3 md:mb-0">
            <label
              class="block tracking-wide text-dark-blue text-sm font-normal mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-greyish-blue rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-sm"
              id="grid-first-name"
              type="text"
              placeholder="eg. richard@piedpiper.com"
            />
          </div>

          <div class="w-full md:w-1/2 px-3 md:mb-0">
            <label
              class="block tracking-wide text-dark-blue text-sm font-normal mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-greyish-blue rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-sm"
              id="grid-last-name"
              type="text"
              placeholder="eg. Piedpiper"
            />
          </div>
        </div>
        <div class="flex -mx-3">
          <div class="w-full md:w-1/2 px-3 md:mb-0">
            <label
              class="block tracking-wide text-dark-blue text-sm font-normal mb-2"
              for="grid-first-name"
            >
              State of Residence
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-greyish-blue rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-sm"
              id="grid-first-name"
              type="text"
              placeholder="Enter Business State"
            />
          </div>

          <div class="w-full md:w-1/2 px-3 md:mb-0">
            <label
              class="block tracking-wide text-dark-blue text-sm font-normal mb-2"
              for="grid-last-name"
            >
              How Did You Hear About Us?
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-greyish-blue rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-sm"
              id="grid-last-name"
              type="text"
              placeholder="eg. Piedpiper"
            />
          </div>
        </div>

        <button
          @click="isOpen = false"
          class="px-6 py-2 w-full md:w-72 my-2 text-black-800 border border-blue-600 rounded border-2 border-primary-yellow bg-primary-yellow"
        >
          Start Trial
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const isOpen = useState(() => true);
</script>
