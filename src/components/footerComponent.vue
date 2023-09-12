<template>
  <!-- bg-gray-700 -->
  <div class=" bg-gradient-to-r from-gray-400 to-slate-700 border-2 border-white h-full">
    <div class="  mx-24 my-11">
      <div class=" grid md:grid-cols-2 lg:grid-cols-3 border-b-2 border-white">
        <!--- First column-->
        <div class=" flex justify-center  py-2">
          <img src="../assets/images/Logo_footer.svg" class=" h-36 w-36" />
        </div>
        <!--- 2 column-->
        <div class=" my-2 flex justify-center">
          <div class=" ">
            <p class=" mx-4 text-yellow-600 font-bold text-xl w-fit border-b-2 border-white">La commune territoriale</p>
            <form class=" grid  w-fit ">
              <label class=" text-white text-sm mx-4 mt-4 font-semibold">Inscrivez-vous à notre newsletter</label>
              <input type="text" class=" mx-4 mt-2 md:p-1 w-fit placeholder:text-sm rounded-sm"
                placeholder="Entrez votre email" />
              <button
                class=" bg-white w-fit text-sm font-bold text-gray-700 border-2 mx-4 my-2 md:p-1 rounded-sm">Subscribe</button>
            </form>
          </div>
        </div>
        <!--- 3 column-->
        <div class="my-2 flex justify-center">
          <div>
            <p class=" mx-4 text-yellow-600 font-bold text-xl w-fit border-b-2 border-white">Liens rapides</p>
            <ul class=" mt-4 pl-4">
              <routerLink :to=routing>
                <li class=" text-white font-serif hover:text-yellow-600 hover:border-l-2 hover:border-white hover:pl-1">
                  Acceuil</li>
              </routerLink>

              <routerLink to="/contact">
                <li
                  class=" text-white font-serif mt-3 hover:text-yellow-600 hover:border-l-2 hover:border-white hover:pl-1">
                  Contact</li>
              </routerLink>

              <routerLink to="/contact">
                <li
                  class=" text-white font-serif mt-3 hover:text-yellow-600 hover:border-l-2 hover:border-white hover:pl-1">
                  Privacy</li>
              </routerLink>
            </ul>
          </div>

        </div>
        <!--- 4 column-->
      </div>

      <div class=" md:flex md:justify-between mt-4">
        <p class=" text-white text-center">2023 © Commune urbaine d'Agadir</p>
        <div class=" flex mt-4 md:mt-0 justify-center">
          <p class=" flex text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255) ;transform: ;msFilter:;" class=" cursor-pointer">
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255);transform: ;msFilter:;" class=" cursor-pointer">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255);transform: ;msFilter:;" class=" cursor-pointer">
              <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255);transform: ;msFilter:;" class=" cursor-pointer">
              <path
                d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z">
              </path>
            </svg>
          </p>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref,watchEffect } from "vue";
export default {
  props: ["user"],
  setup(props) {
    const myRole = ref()
    const routing = ref("")
    watchEffect(() => {
      if (props.user && props.user.roles && props.user.roles.length > 0) {
        if( props.user.roles[0].name ==='demandeur') {
           routing.value = "/home"
        }
        if( props.user.roles[0].name ==='président') {
           routing.value = "/president"
        }
        if( props.user.roles[0].name ==='bureau ordre') {
           routing.value = "/saveDemandes"
        }
        if( props.user.roles[0].name ==='représentant') {
           routing.value = "/notes"
        }
      }
    
    });

    return {myRole,routing}
  }
}
</script>

<style lang="scss" scoped></style>