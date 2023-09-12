<template>
    <div class=" h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />
        <div>
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>
            <!-- Main content column-->
            <div class=" h-full pl-12 pt-9">
                <!-- the Image backGround-->
                <div class="heroImg flex justify-center pt-11 pb-9">
                  <div>
                    <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Ajouter un utilisateur</p>
                    <p class="  text-center pt-4 text-white font-poltawski">Merci de compléter le formulaire pour ajouter un nouveau
                        utilisateur.</p>
                  </div>

                  </div>
                <!-- div qui contient le formulaire pour la création d'un compte -->
                <div class=" drop-shadow-xl bg-gradient-to-b from-slate-50 to-slate-200 py-4">


                    <!--Début-->
                    <div class="flex justify-center items-center w-full flex-col py-9 drop-shadow-2xl">
                        <transition appear @before-enter="beforeTilte" @enter="enterTilte">
                            <div class="w-full " :key="categories[currentcategorie].index">
                                <p class="text-center text-4xl font-bold text-blue-700 pt-4">
                                    {{ categories[currentcategorie].title }}
                                </p>

                                <p class="text-center text-sm mt-1 font-bold text-gray-600">
                                    {{ categories[currentcategorie].description }}
                                </p>

                                <!--               -->
                                <transition name="fade">
                                    <div class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-5   border-green-400 border-2"
                                        v-if="showError">
                                        <p class="text-green-400 font-bold text">
                                            Félicitations, votre compte a été créé avec succès.</p>
                                        <font-awesome-icon icon="fa-solid fa-xmark"
                                            class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4"
                                            size="xl" @click="showError = !showError" />
                                    </div>
                                </transition>
                                <!--               -->


                                <!--- invalid elements (short pass , not valid mail or name etc) code to do by yasser -->

                                <!-- inputs div -->
                                <div class="mt-4 w-full px-24 ">
                                    <form class="grid w-full" enctype="multipart/form-data"
                                        @submit.prevent="gonextCategorie">
                                        <div class="w-full">
                                            <div class="w-full" v-for="input of categories[currentcategorie].inputs">
                                                <transition appear @before-enter="before" @enter="enter">
                                                    <label v-if="input.status.includes(selectedStatus) ||
                                                        input.status.length == 0
                                                        " :key="input.dbcol" class="text-sm mt-1 font-bold text-gray-500 ">{{ input.label }}</label>
                                                    <label v-else
                                                        class="text-sm mt-1 font-bold text-gray-500 ">{{ input.label }}
                                                        <span class="font-bold text-red-500">(non fonctionnel)</span>
                                                    </label>
                                                </transition>

                                                <div class="pb-4 relative">
                                                    <transition appear @before-enter="before" @enter="enter">
                                                        <input class=" cursor-pointer" :class="`
                                                         ${input.data == selectedStatus
                                                                ? ' bg-blue-700 text-white cursor-pointer'
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
    mt-2 rounded pl-2 text-xs border-2 border-gray-400 w-full outline-0 font-bold py-2 mx-4`" :type="input.type"
                                                            :required="input.required" :key="input.dbcol"
                                                            @click="input.selected" @change="input.changed" :disabled="!input.status.includes(selectedStatus) &&
                                                                !input.status.length == 0
                                                                " multiple="multipe" v-model="input.data" />
                                                    </transition>
                                                </div>
                                            </div>
                                            <!-- btn  + sign in -->
                                            <div class="mt-2">
                                                <div class="flex justify-end">
                                                    <button type="submit"
                                                        class="text-sm font-bold py-2 text-blue-700  flex gap-3 p-2">
                                                        {{ submitbtn }}
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-5 h-5 text-blue-700">
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
                                        <button v-if="currentcategorie > 0 && currentcategorie < categories.length - 1"
                                            @click="backprecendent"
                                            class=" text-sm font-bold py-2 text-blue-700 flex flex-row-reverse gap-3 p-2">
                                            Précédent
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="w-5 h-5 text-blue-700 rotate-180">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>



                                </div>
                            </div>
                        </transition>
                        <!------------------->
                    </div>
                    <!--Fin-->
                </div>

            </div>
        </div>
        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script setup>
import { ref, onMounted, reactive,watch } from 'vue'
import { useRouter } from 'vue-router'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import gsap from "gsap";
import { registerService,isUserAuth,accessToken_state } from '../Services/service.js';

// the declaration of the variables
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        const now = new Date()


// the onMounted function 
onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()
                // Protect the routes so that only the bureau d'ordre that can enter here
                if (user.value.roles[0].name=== 'demandeur') {
                    return await router.push('/home')
                }
                // Si l'utilisateur est le président
                if (user.value.roles[0].name=== 'président') {
                    return await router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'représentant') {
                    return await router.push('/notes')
                }
                // si l'utilisateur est un service technique
                if (user.value.roles[0].name === 'Service technique') {
                    return await router.push('/homeSTechnique')
                } 
                // si l'utilisateur est un service patrimoine
                if (user.value.roles[0].name === 'Patrimoine') {
                    return await router.push('/homePatrimoin')
                } 
            }
        })


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
    description: "",
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
    description: " Informations de connexion",
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
    description: " Détails de votre société.",
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
    form.append("selfCreated",false)
    const response = await registerService(form);
    if (response == true) {
      showError.value = true
      setTimeout(() => {
        router.push('/saveDemandes')
      }, 1500)
    }

  }
};
let backprecendent = () => {
  if (currentcategorie.value >= 0)
    currentcategorie.value--;


  console.log(currentcategorie.value, categories.length);
};


        //Function to log out 
        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

</script>

<style scoped>.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
}</style>