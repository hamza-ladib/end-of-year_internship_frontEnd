

<template>
    <div class="h-full w-full overflow-y-auto">
        <!-- the navbar -->
        <userNavBar :user='user' :logOutFunction='logOutFunction' />
        <div class=" ">
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>

            <div class="   h-full pl-12 pt-9">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                     <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Profile</p>   
                     <p class=" text-center pt-4 text-white font-poltawski ">Bienvenue dans votre profile</p>
                    </div>
                    
                </div>

                <!-- the main content -->
                <div class=" py-4 ">
                    
                    <!-- -->
                    <transition name="fade">
                        <div class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-6 border-green-400 border-2"
                            v-if="showError">
                            <p class="text-green-400 font-bold text-lg">
                                Vos données ont été mises à jour avec succès.</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4" size="xl"
                                @click="hideAlert" />
                        </div>
                    </transition>


                    <div class=" grid lg:grid-cols-6 gap-4  mt-11">
                        <!-- the first col -->
                        <div class="col-span-2 ml-4 border-2 rounded-md border-gray-400 drop-shadow-xl h-fit ">
                            <!-- the icon -->
                            <div class="flex justify-center my-4">
                                <div class=" bg-gray-400 rounded-full h-24 w-24 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class=" h-24 w-24 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                            <!-- the user infos -->
                            
                                <div class=" my-9 mx-9">
                                <p class=" font-doted font-bold text-gray-700">Statut</p>
                                <p class=" text-center font-serif  border-b-2 border-gray-400">{{ user.statut }}</p>
                                <div class=" mt-9" v-if="user.statut === 'personne physique'">
                                    <p class="font-doted font-bold text-gray-700">Raison sociale</p>
                                    <p class=" text-center font-serif  border-b-2 border-gray-400">{{
                                        user.personnephy.raison_social }}</p>
                                </div>
                                <div class=" mt-9" v-if="user.statut === 'Organisme publique'">
                                    <p class="font-doted font-bold text-gray-700">Nom d'organisme</p>
                                    <p class=" text-center font-serif  border-b-2 border-gray-400">{{
                                        user.organisme.nom_organisme }}</p>
                                </div>
                                <div class=" mt-9" v-if="user.statut === 'Représentant entreprise ou organisme'">
                                    <p class="font-doted font-bold text-gray-700">Nom et prénom</p>
                                    <p class=" text-center font-serif  border-b-2 border-gray-400">{{ user.entreprise.nom }}
                                        {{ user.entreprise.prenom }}</p>
                                </div>
                                <p class="font-doted font-bold text-gray-700 mt-9">Email</p>
                                <p class=" text-center font-serif  border-b-2 border-gray-400">{{ user.email }}</p>
                            </div>
                           

                        </div>
                        <!-- the second column -->
                        <div class="col-span-4  border-2 border-gray-400 rounded-md mx-4">
                            <div class=" my-9 ">
                                <form class="" @submit.prevent="submitForm">
                                    <div v-for="input in inputForms.inputs">
                                        <div class="grid mt-9 px-9  py-2 "
                                            v-if="input.status.includes(user.statut) && input.label !== 'Email' && input.label !== 'statut'">
                                            <!--Working here -->
                                            <label
                                                class=" font-doted md:text-xl py-2   px-2  border-l-4 border-gray-200 font-bold text-gray-700
                                                 relative group">
                                                
                                                {{input.label }}
                                                    <div>
                                                        <p class=" flex justify-center items-center font-doted text-blue-700  h-full py-2 text-center bg-gray-200 w-0 overflow-hidden absolute top-0 group-hover:w-full transition-all duration-500">
                                                            {{input.description}}
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </p>
                                                    </div>
                                                </label>
                                            <!-- End of work -->
                                            <input type="text"
                                                class="px-2 mt-4 mx-2 md:mx-16 border-gray-200 border-b-2 py-2 text-sm text-gray-700"
                                                v-if="!input.textArea" :value="input.data"
                                                @input="input.data = $event.target.value" />
                                            <textarea
                                                class="px-2 mt-4 mx-2 md:mx-16 border-gray-200 border-b-2 py-2 text-sm text-gray-700"
                                                v-if="input.textArea" :value="input.data"
                                                @input="input.data = $event.target.value"></textarea>
                                        </div>
                                    </div>
                                    <div class="mt-9 mx-16">
                                        <button
                                            class=" bg-blue-700 text-center py-2 text-white font-bold rounded-md w-full relative group">
                                              Modifier
                                              <div class=" bg-gray-400 w-0 overflow-hidden absolute top-0 group-hover:w-full group-hover:h-full py-2 rounded-md transition-all duration-500">
                                                <p class=" text-white">Modifier</p>
                                              </div>
                                            </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- While loading the data -->
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full"/>
                </div>

            </div>
        </div>
        <footerComponent :user='user' />
    </div>
</template>
  
<script>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth, updateService } from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
    components: {
        userNavBar,
        sideBarComponent,
        footerComponent
    },
    setup() {
        /*
          "Personne physique",
          "Représentant entreprise ou organisme",
          "Organisme publique",
        */
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const now = new Date()
        const user = ref({})
        const showError = ref(false)
        const dataLoaded = ref(false)
        let statusinfo = ref([
            "Personne physique",
            "Représentant entreprise ou organisme",
            "Organisme publique",
        ]);
        const inputForms = reactive(
            {
                inputs: [
                    {
                        data: "",
                        dbcol: "email",
                        label: 'Email',
                        description:'',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [...statusinfo.value]

                    },
                    {
                        data: "",
                        dbcol: "statut",
                        label: 'statut',
                        description:'',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [...statusinfo.value]

                    },
                    {
                        data: "",
                        dbcol: "tel",
                        label: 'Tel',
                        description:'Votre numéro de téléphone mobile est le suivant',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [...statusinfo.value]

                    },
                    {

                        data: "",
                        dbcol: "fixe",
                        label: 'Fixe',
                        description:'Votre numéro de téléphone résidentiel est le suivant',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [...statusinfo.value]

                    },
                    {

                        data: "",
                        dbcol: "ice",
                        label: 'Ice',
                        description:'Votre Ice',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [statusinfo.value[0], statusinfo.value[2]],
                    },
                    {

                        data: "",
                        dbcol: "patente",
                        label: 'Patente',
                        description:'Votre patente',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [statusinfo.value[0]],
                    },
                    {

                        data: "",
                        dbcol: "nom_organisme",
                        label: 'nom_organisme ',
                        description:'Le nom de l\'organisme que vous avez représenté est le suivant',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [statusinfo.value[2]],

                    },
                    {

                        data: "",
                        dbcol: "nom",
                        label: 'Nom',
                        description:'Votre nom est le suivant',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [statusinfo.value[1]],
                    },
                    {

                        data: "",
                        dbcol: "prenom",
                        label: 'Prenom',
                        description:'Votre prénom est le suivant',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [statusinfo.value[1]],
                    },
                    {

                        data: "",
                        dbcol: "cin",
                        label: 'CIN',
                        description:'Votre numéro de carte d\'identité nationale (CIN) est le suivant',
                        type: 'text',
                        required: false,
                        textArea: false,
                        status: [statusinfo.value[1]],
                    },
                    {

                        data: "",
                        dbcol: "adresse",
                        label: 'Adresse',
                        description:'Votre adresse postale est la suivante',
                        type: 'text',
                        required: false,
                        textArea: true,
                        status: [...statusinfo.value],
                    },
                ]
            })



        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }

            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()
                // Si l'utilisateur est le président
                if (user.value.roles[0].name === 'président') {
                    return await router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return await router.push('/saveDemandes')
                }
                // Si l'utilisateur est un représentant
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
                if(user.value.statut === 'Personne physique'){
                     user.value = await { ...user.value, ...user.value.personnephy }
                }
                else if(user.value.statut === 'Représentant entreprise ou organisme'){
                     user.value = await { ...user.value, ...user.value.entreprise }
                } else {
                     user.value = await { ...user.value, ...user.value.organisme }
                }
                inputForms.inputs.forEach((inputForm) => {
                    if(inputForm.dbcol ==='nom_organisme'){
                        inputForm.data = user.value.nom_organisme
                    }else{
                        inputForm.data = user.value[inputForm.label.toLowerCase()];
                    }
                });
                dataLoaded.value = true
            }
        });



        // function to submit the form
        const test = reactive({});
        const submitForm = async () => {
            for (const inputForm of inputForms.inputs) {
                test[inputForm.dbcol] = await inputForm.data;
            }
            const response = await updateService(test)
            if (response.state) {
                return showError.value = true
            }
        };

        //Function to log out 
        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        // function to hide the alert 
        const hideAlert = () => {
            showError.value = false
        }

        return { submitForm, user, inputForms, logOutFunction, showError, hideAlert,dataLoaded };
    },
};
</script>
  
  
<style scoped>
::-webkit-scrollbar{
scroll-behavior: smooth;
width:5px;


}
::-webkit-scrollbar-track{
width: 15px;
background-color:darkgray;


}
::-webkit-scrollbar-thumb{
box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
border-radius: 10px;
background-color:rgba(29,78,216,0.7);

}
.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-300px);
}

.fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-enter-active {
    transition: all 0.5s ease;
}

.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-300px);
}

.fade-leave-active {
    transition: all 0.5s ease;
}
</style>
  





