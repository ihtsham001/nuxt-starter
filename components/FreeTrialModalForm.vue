<template>
  <div
    v-show="isOpen"
    class="absolute inset-0 flex items-center justify-center bg-[#000000] bg-opacity-50 h-max md:h-full"
  >
    <div
      class="overflow-y-auto md:overflow-y-hidden md:overflow-y-lg md:overflow-y-xl scroll-hidden min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] mx-4 bg-white shadow-xl z-40 rounded-t-3xl rounded-b-3xl p-4 my-4"
    >
      <div class="flex justify-center items-center flex-col">
        <div class="flex items-center justify-center">
          <img
            src="~assets/images/freeTrial.svg"
            class="right-3 mt-2 w-3/5 mx-2 text-gray-400 cursor-pointer"
          />
        </div>
        <div class="mt-3 flex flex-col gap-2 items-center">
          <h1
            class="text-base md:text-3xl font-semibold font-poppins text-center leading-relaxed tracking-wide"
          >
            Start with FREE 7 days Trial
          </h1>
          <p class="mb-3 text-xs text-center text-gray-light">
            Please fill the information below and claim your 7days trail.
          </p>
          <form>
            <div class="flex flex-col md:flex-row lg:flex-row gap-1 -mx-3">
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-dark-blue text-xs md:text-[13px] lg:text-[13px] xl:text-[13px] xxl:text-[13px] font-normal mb-1 md:mb-2 lg:mb-2 xl:mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full text-xs bg-white text-gray-700 border border-greyish-blue rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-xs"
                  id="grid-first-name"
                  type="text"
                  placeholder="eg. richard@piedpiper.com"
                />
              </div>

              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-dark-blue text-xs md:text-[13px] lg:text-[13px] xl:text-[13px] xxl:text-[13px] font-normal mb-1 md:mb-2 lg:mb-2 xl:mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block text-xs w-full bg-white text-gray-700 border border-greyish-blue rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-xs"
                  id="grid-last-name"
                  type="text"
                  placeholder="eg. Piedpiper"
                />
              </div>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-row gap-1 -mx-3">
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-dark-blue text-xs md:text-[13px] lg:text-[13px] xl:text-[13px] xxl:text-[13px] font-normal mb-1 md:mb-2 lg:mb-2 xl:mb-2"
                  for="grid-residence"
                >
                  State of Residence
                </label>
                <input
                  class="appearance-none text-xs block w-full bg-white text-gray-700 border border-greyish-blue rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-xs"
                  id="grid-residence"
                  type="text"
                  placeholder="Enter Business State"
                />
              </div>

              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-nowrap text-dark-blue text-xs md:text-[13px] lg:text-[13px] xl:text-[13px] xxl:text-[13px] font-normal mb-1 md:mb-2 lg:mb-2 xl:mb-2"
                  for="grid-about"
                >
                  How Did You Hear About Us?
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full text-xs bg-white border text-stone-gray text-xs hover:text-stone-gray border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Select</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      fill="#000000"
                      height="12px"
                      width="12px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 330 330"
                      xml:space="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          id="XMLID_225_"
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row lg:flex-row gap-1 -mx-3">
              <div
                class="w-full md:w-1/2 px-3 md:mt-0 lg:mt-0 xl:mt-0 xxl:mt-0"
              >
                <label
                  class="block tracking-wide text-dark-blue text-xs mt-1 md:mt-0 lg:mt-0 xl:mt-0 xxl:mt-0 md:text-[13px] lg:text-[13px] xl:text-[13px] xxl:text-[13px] font-normal mb-1 md:mb-1 lg:mb-1 xl:mb-1"
                  for="grid-password"
                >
                  Set Password
                </label>
                <input
                  class="appearance-none block w-full text-xs bg-white text-gray-700 border border-greyish-blue rounded py-2 px-2 mb-1 leading-tight focus:outline-none focus:bg-white placeholder:text-xs"
                  id="grid-password"
                  type="password"
                  placeholder="*********"
                />
              </div>
            </div>
          </form>
          <div class="flex justify-center">
            <button
              @click="close()"
              type="submit"
              class="px-6 py-2 mt-2 text-sm font-semibold w-full md:w-72 text-black-800 rounded border border-primary-yellow bg-primary-yellow"
            >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const isOpen = useState(() => true);

function close(e) {
  isOpen.value = false;
}
</script>
<style>
.scroll-hidden::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
