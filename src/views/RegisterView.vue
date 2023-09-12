
<template>
  <div class="h-screen flex justify-center items-center">
    <div class="">
      <div class="gap-4 h-full bg-white lg:grid lg:grid-cols-2 lg:gap-4 lg:rounded-lg lg:drop-shadow-2xl overflow-hidden">
        <!-- divs of inputs  half-->
        <div class="flex justify-center items-cente w-full flex-col py-9">
          <transition appear @before-enter="beforeTilte" @enter="enterTilte">
            <div class="w-full" :key="categories[currentcategorie].index">
              <p class="text-center text-4xl font-bold text-blue-700 pt-4">
                {{ categories[currentcategorie].title }}
              </p>

              <p class="text-center text-sm mt-1 font-bold text-gray-600">
                {{ categories[currentcategorie].description }}
              </p>

              <!--               -->
              <transition name="fade">
                <div
                  class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-5   border-green-400 border-2"
                  v-if="showError">
                  <p class="text-green-400 font-bold text">
                    Félicitations, votre compte a été créé avec succès.</p>
                  <font-awesome-icon icon="fa-solid fa-xmark"
                    class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4" size="xl"
                    @click="showError = !showError" />
                </div>
              </transition>
              <!--               -->


              <!--- invalid elements (short pass , not valid mail or name etc) code to do by yasser -->

              <!-- inputs div -->
              <div class="mt-4 w-full px-24">
                <form class="grid w-full" enctype="multipart/form-data" @submit.prevent="gonextCategorie">
                  <div class="w-full">
                    <div class="w-full" v-for="input of categories[currentcategorie].inputs">
                      <transition appear @before-enter="before" @enter="enter">
                        <label v-if="input.status.includes(selectedStatus) ||
                          input.status.length == 0
                          " :key="input.dbcol" class="text-sm mt-1 font-bold text-gray-500">{{ input.label }}</label>
                        <label v-else :key="input.dbcol" class="text-sm mt-1 font-bold text-gray-500">{{ input.label }}
                          <span class="font-bold text-red-500">(non fonctionnel)</span>
                        </label>
                      </transition>

                      <div class="pb-4 relative">
                        <transition appear @before-enter="before" @enter="enter">
                          <input :class="`
                                  ${input.data == selectedStatus
                              ? ' bg-blue-700 text-white'
                              : ''
                            } 
                                                              ${!input.status.includes(
                              selectedStatus
                            ) &&
                              !input
                                .status
                                .length ==
                              0
                              ? ' bg-gray-200'
                              : ''
                            } 
    mt-1 rounded pl-2 h-8 text-xs border-2 border-gray-400 w-full outline-0 font-bold `" :type="input.type"
                            :required="input.required" :key="input.dbcol" @click="input.selected" @change="input.changed"
                            :disabled="!input.status.includes(selectedStatus) &&
                              !input.status.length == 0
                              " multiple="multipe" v-model="input.data" />
                        </transition>
                      </div>
                    </div>
                    <!-- btn  + sign in -->
                    <div class="mt-2">
                      <div class="flex justify-end">
                        <button type="submit" class="text-sm font-bold py-2 text-blue-700  flex gap-3 p-2">
                          {{ submitbtn }}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-blue-700">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </button>






                      </div>

                    </div>
                  </div>
                </form>
                <!-- button previous-->
                <div class=" felx justify-start">
                  <button v-if="currentcategorie > 0 && currentcategorie < categories.length - 1" @click="backprecendent"
                    class=" text-sm font-bold py-2 text-blue-700 flex flex-row-reverse gap-3 p-2">
                    Précédent
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5 text-blue-700 rotate-180">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
                <!-- connectert vous-->
                <div>
                  <p class="text-xs mt-0 text-center cursor-pointer text-gray-400 font-semibold p-2">
                    <router-link to="/login">
                      Vous avez déjà un compte ?
                      <span class="text-blue-700">Connectez-vous</span>
                    </router-link>
                  </p>
                </div>


              </div>
            </div>
          </transition>
          <!------------------->
        </div>
        <!-- image half-->

        <div class="m-1 hidden lg:grid">
          <div class="p-12 gap-14 flex flex-col justify-start items-start bg-blue-700 md:rounded-lg pt-24">
            <!--- etapes svg+ title+ desc-->
            <div v-for="categorie in categories" class="flex flex-col gap-2 items-start relative">
              <div
                :class="` ${categorie.index < currentcategorie
                    ? 'before:bg-white'
                    : 'before:bg-gray-400'
                  } flex gap-2 items-center justify-center p-1 text-lg font-semibold text-white before:top-1 before:z-0  before:left-5 before:block before:absolute before:rounded-lg before:-inset-1 before:-skew-y-3  before:w-2 before:h-full`">
                <div class="w-10 h-10 rounded-full flex justify-center items-center bg-white z-10">
                  <!--- condition svgs-->
                  <svg v-if="categorie.index < currentcategorie" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 text-blue-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <!----->
                  <svg v-if="categorie.index == currentcategorie" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 text-blue-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <!----->
                </div>
                <p class="text-md font-bold">{{ categorie.title }}</p>
              </div>

              <div class="text-right p-2 pl-12 text-gray-300 font-bold">
                {{ categorie.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { useRouter } from 'vue-router';

import gsap from "gsap";
import { registerService } from '../Services/service.js';

function before(el) {
  el.style.opacity = "0";
}
function enter(el) {
  gsap.to(el, { ease: "Elastic.ease", duration: 2, opacity: 1 });
}
/***for titles   */
function beforeTilte(el) {
  el.style.transform = "translateX(-200px)";
}
function enterTilte(el) {
  gsap.to(el, { ease: "Elastic.ease", duration: 0.5, opacity: 1, x: 0 });
}
/* */

let currentcategorie = ref(0);
let statusinfo = ref([
  "Personne physique",
  "Représentant entreprise ou organisme",
  "Organisme publique",
]);
let selectedStatus = ref(statusinfo.value[0]);
let selectedFiles = ref([]);

/** */

let categories = reactive([
  {
    index: 0,
    description: " Merci de choisir votre statut",
    title: "Information de statut",
    inputs: {
      Personne_physique: {
        data: statusinfo.value[0],

        dbcol: "",
        label: "",
        type: "button",
        status: [],
        required: true,
        selected: (el) => {
          selectedStatus.value = el.target.defaultValue;
        },
      },
      Représentant_entreprise_ou_organisme: {
        data: statusinfo.value[1],
        dbcol: "",
        label: "",
        type: "button",
        status: [],
        required: true,
        selected: (el) => {
          selectedStatus.value = el.target.defaultValue;
        },
      },
      Organisme_publique: {
        data: statusinfo.value[2],

        dbcol: "",
        label: "",
        type: "button",
        status: [],
        required: false,
        selected: (el) => {
          selectedStatus.value = el.target.defaultValue;
        },
      },
    },
  },
  {
    index: 1,
    description: " Veuillez saisir vos informations de connexion",
    title: "Connexion",
    inputs: {
      email: {
        data: "",
        dbcol: "email",
        label: "email",
        type: "email",
        status: [...statusinfo.value],
        required: true,
        selected: () => { },
      },
      password: {
        data: "",

        dbcol: "password",
        label: "mot de passe",
        type: "password",
        status: [...statusinfo.value],
        required: true,
        selected: () => { },
      },
      address: {
        data: "",

        dbcol: "adresse",
        label: "adresse",
        type: "text",
        status: [...statusinfo.value],
        required: true,
        selected: () => { },
      },
      phoneNumber: {
        data: "",
        dbcol: "tel",
        label: "tel",
        type: "text",
        status: [...statusinfo.value],
        required: true,
        selected: () => { },
      },
      fixeNumber: {
        data: "",

        dbcol: "fixe",
        label: "fixe",
        type: "text",
        status: [...statusinfo.value],
        required: true,
        selected: () => { },
      },
    },
  },

  {
    index: 2,
    description: " Merci de fournir les détails de votre société.",
    title: " Informations sur l'entreprise",
    inputs: {
      raison_social: {
        data: "",
        dbcol: "raison_social",
        label: "raison social",
        status: [statusinfo.value[0]],
        type: "text",
        required: true,

        selected: () => { },
      },
      ice: {
        data: "",
        dbcol: "ice",
        label: "ICE",
        status: [statusinfo.value[0], statusinfo.value[2]],
        type: "text",
        required: true,

        selected: () => { },
      },
      patente: {
        data: "",
        dbcol: "patente",
        label: "patente",
        status: [statusinfo.value[0]],
        type: "text",
        required: true,

        selected: () => { },
      },
      nom: {
        data: "",
        dbcol: "nom",
        label: "nom",
        status: [statusinfo.value[1]],
        type: "text",
        required: true,
        selected: () => { },
      },
      prenom: {
        data: "",
        dbcol: "prenom",
        label: "prenom",
        status: [statusinfo.value[1]],
        type: "text",
        required: true,

        selected: () => { },
      },
      cin: {
        data: "",
        dbcol: "cin",
        label: "CIN",
        status: [statusinfo.value[1]],
        type: "text",
        required: true,

        selected: () => { },
      },
      nom_organisme: {
        data: "",
        dbcol: "nom_organisme",
        label: "nom d'organisme",
        status: [statusinfo.value[2]],
        type: "text",
        required: true,

        selected: () => { },
      },
    },
  },
  {
    index: 3,
    description: "Nous vous remercions d'importer les fichiers nécessaires ",
    title: "Fichiers joints  ",
    inputs: {
      message: {
        data: "",

        dbcol: "files",
        label: "comme RC,statut,cine Gérant",
        type: "file",
        status: [],
        required: false,
        selected: (el) => { },
        changed: (el) => {
          let selections = el.target.files;
          if (selections.length > 0) {
            selectedFiles.value = selections;
          }

        },
      },
    },
  },
]);
/* got next categorie */
let submitbtn = ref("Suivant");
watch(currentcategorie, () => {
  if (currentcategorie.value < categories.length - 1)
    submitbtn.value = "Suivant";
  else submitbtn.value = "Confirmer";
});

const router = useRouter()
let showError = ref(false)
let gonextCategorie = async () => {
  if (currentcategorie.value < categories.length - 1) {
    currentcategorie.value++;
  } else {
    let form = new FormData();
    categories.map((categorie) => {
      for (let input in categorie.inputs) {
        let q = categorie.inputs[input];
        if (q.status.includes(selectedStatus.value)) {
          form.append(q.dbcol, q.data)
        };
      }
    });
    for (let file of selectedFiles.value) { form.append('files', file); };
    form.append("statut", selectedStatus.value);
    form.append("selfCreated",true)
    const response = await registerService(form);
    if (response == true) {
      showError.value = true
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    }

  }
};
let backprecendent = () => {
  if (currentcategorie.value >= 0)
    currentcategorie.value--;


  console.log(currentcategorie.value, categories.length);
};

</script>

<style scoped></style>