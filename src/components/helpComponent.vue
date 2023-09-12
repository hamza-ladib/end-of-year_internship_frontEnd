<template>
  <transition name="fadeV2">
    <div class="absolute w-full h-full lg:flex lg:justify-center lg:items-center" v-if="showHelp">
      <div class="absolute inset-0 bg-black opacity-60 "></div>
      <div class=" absolute bg-white p-4 lg:p-9 rounded-xl mx-11 my-9 lg:my-0 lg:mx-14">
        <div class=" flex justify-between items-center">
          <p class=" text-blue-700 text-4xl font-bold">Help</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-7 h-7 cursor-pointer" @click="changeShowHelp">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p class=" pt-9 pl-4 ">
          <slot name="text1"></slot>
        </p>
        <div class=" pt-3 px-9">
          <p class=" pt-3 font-bold text-gray-600">
            <slot name="text2"></slot>
          </p>
          <p class=" pt-3 font-bold text-gray-600">
            <slot name="text3"></slot>
          </p>
          <p class=" pt-3 font-bold text-gray-600">
            <slot name="text4"></slot>
          </p>
        </div>

        <p class="pl-4 pt-4">
          <slot name="text5"></slot>
        </p>
        <div class="flex pt-3 px-9">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <p class=" pl-2 text-sm  text-gray-700">
            <slot name="text6"></slot>
          </p>
        </div>
        <div class="flex pt-3 px-9 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <p class=" pl-2 text-sm  text-gray-700">
            <slot name="text7"></slot>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["showHelp", "changeShowHelp"],
  setup() {
    return {}
  }
}
</script>

<style  scoped>
.fadeV2-enter-from {
  opacity: 0;
}

.fadeV2-enter-to {
  opacity: 1;
}

.fadeV2-enter-active {
  transition: all 0.7s ease;
}

.fadeV2-leave-from {
  opacity: 1;
}

.fadeV2-leave-to {
  opacity: 0;
}

.fadeV2-leave-active {
  transition: all 0.7s ease;
}
</style>


