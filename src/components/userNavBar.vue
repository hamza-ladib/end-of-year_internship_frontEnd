<template>
  <!-- bg-gray-200 -->
    <div class="w-full fixed bg-gradient-to-r from-slate-50 to-slate-400 z-10 p-2 border-b-2">
      <div class="w-full flex justify-end gap-7 items-center">
        <!-- first group of info -->
  
        <!--second group of infos-->
        <div
          class="flex justify-center items-center w-fit h-full"
          @click="currentlg = ++currentlg % languages.length"
        >
          <div class="flex flex-col gap-1 w-12">
            <span class="text-center px-2 w-full h-full font-bold text-lg">{{
              languages[currentlg]
            }}</span>
          </div>
  
          <div class="cursor-pointer flex flex-row w-fit rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 hover:text-yellow-600 transition-all duration-300 ease-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </div>
        </div>
        <!--third group of infos-->
        <div class="flex" >
          <routerLink to="/profile" v-if="myRole === 'demandeur'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-4 cursor-pointer hover:text-yellow-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </routerLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2 cursor-pointer hover:text-yellow-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <p class="px-2 flex cursor-pointer" @click="logOutFunction">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 hover:text-yellow-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script >
  import { onMounted, ref,watchEffect } from "vue";
  export default {
    props: ["user", "logOutFunction"],
    setup(props){
      const languages = ref(["Fr", "ع", "En"]);
      const currentlg = ref(0);
      const showMenu = ref(true);
      const tooggleMenuBar = () => (showMenu.value = !showMenu.value);
      const showNot = ref(false)

      const myRole = ref()
      watchEffect(() => {
      if (props.user && props.user.roles && props.user.roles.length > 0) {
        return myRole.value = props.user.roles[0].name;
      }
    });

      return {languages,currentlg,showMenu,tooggleMenuBar,showNot,myRole}
    }
  }

  </script>
  
  <style scoped>
  .NavBgImg {
    background-image: url("../assets/images/Hero_image.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>