<template>
    <div class=" h-full w-full ">
        <!-- the navbar -->
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class="">
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>

            <!-- Main content column-->
            <div class=" h-full pl-12 pt-9">

                <!-- the Image backGround-->
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Modifier votre demande</p>
                        <p class="   text-center pt-4 text-white font-poltawski">Merci de compléter le formulaire pour modifier votre
                        demande.</p>
                    </div>
                    
                </div>

                <!-- div qui contient le formulaire pour la création des demandes -->
                <div class="  drop-shadow-xl bg-gradient-to-b from-slate-50 to-slate-200  py-4">


                                            <!-- To confirm the process -->
                    <transition name="fade">
                        <div class=" bg-gray-200 rounded-lg  mt-4 px-4 mx-24 py-6 border-gray-100 border-2"
                            v-if="showPopUp">
                            <div v-if="error.length == 0">
                                <font-awesome-icon icon="fa-solid fa-xmark"
                                    class=" cursor-pointer text-gray-400 hover:text-gray-300 hover:opacity-50  justify-end"
                                    size="2xl" @click="showPopUp = !showPopUp" />
                                <p class="text-gray-600 font-bold text-lg mt-4">
                                    Nous souhaitons vous offrir la possibilité de personnaliser le traitement de votre
                                    demande
                                    selon vos préférences. Ainsi, vous pouvez choisir l'une des deux options en cliquant sur
                                    l'un des boutons ci-dessous : "Enregistrer" si vous souhaitez que vous modification soit
                                    définitivement enregistrée, ou "Archiver" si vous préférez qu'elles soient mise en attente
                                    jusqu'à ce qu'elle soit complétée.
                                    Nous vous invitons à sélectionner la réponse qui vous convient le mieux.</p>

                                <div class="mt-4 flex justify-center">
                                    <button
                                        class=" bg-gray-400 mx-2 p-2 rounded-md text-white font-bold w-1/5 hover:bg-gray-50 hover:text-gray-400"
                                        @click="enregistreDemande">Enregistrer</button>
                                    <button
                                        class=" bg-gray-400 mx-2 p-2 rounded-md text-white font-bold w-1/5 hover:bg-gray-50 hover:text-gray-400"
                                        @click="archiveDemande">Archiver</button>
                                </div>
                            </div>
                            <div class="flex justify-between items-center" v-else>
                                <p class="text-gray-600 font-bold text-lg">{{ error }}</p>
                                <font-awesome-icon icon="fa-solid fa-xmark"
                                    class=" cursor-pointer text-gray-400 hover:text-gray-300 hover:opacity-50 pl-4"
                                    size="2xl" @click="error = ''" />
                            </div>
                        </div>
                    </transition>

                    <!-- To show the success msg-->
                    <transition name="fade">
                        <div class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-6 border-green-400 border-2"
                            v-if="saveSuccess.length > 0">
                            <p class="text-green-400 font-bold text-lg">
                                {{ saveSuccess }}</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4" size="xl"
                                @click="saveSuccess = ''" />
                        </div>
                    </transition>

                    <div class=" drop-shadow-xl flex justify-center  pt-9 pb-4">
                        <form class=" bg-white w-3/4 border-2 border-gray-700 rounded-md px-4" enctype="multipart/form-data"
                            @submit.prevent="submitForm">
                            <div class=" grid" v-for="formInput in formInputs">
                                <p class=" text-gray-700 font-bold text-lg mt-9 ">{{ formInput.title }}</p>
                                <div class=" grid mt-4 px-4" v-for=" input in formInput.inputs">
                                    <label class="font-serif text-gray-600 ">{{ input.label }}</label>
                                    <input :type="input.type" :required="input.required"
                                        class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2"
                                        v-if="!input.option && !input.textArea && input.type !== 'file'"
                                        v-model="input.data" />
                                    <input :type="input.type" :required="input.required"
                                        class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2"
                                        v-if="!input.option && !input.textArea && input.type === 'file'"
                                        @change="onFileInputChange" multiple />


                                    <div v-if="input.dbcol === 'objet'" class=" w-full">
                                        <input list="browsers1" name="browser1" id="browser1"
                                            class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2 w-full"
                                            v-model="input.data" />
                                        <datalist id="browsers1">
                                            <option value="alignement pour travaux"></option>
                                            <option value="travaux en limite du domaine public"></option>
                                            <option value="occupation superficielle du domaine public"></option>
                                            <option value="aménagement d’accès"></option>
                                            <option value="travaux sur le domaine publics"></option>
                                        </datalist>
                                    </div>

                                    <div v-if="input.dbcol === 'modalite'" class=" w-full">
                                        <input list="browsers2" name="browser2" id="browser2"
                                            class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2 w-full"
                                            v-model="input.data" />
                                        <datalist id="browsers2">
                                            <option value="Route barré"></option>
                                            <option value="Circulation alterné par feu tricolores"></option>
                                            <option value="Circulation alterné par panneau B15 et C18"></option>
                                            <option value="Circulation alternée par signaux manuels k10, "></option>
                                            <option value="Par demi-chaussé avec déviation d’un sens de circulation">
                                            </option>
                                            <option value="interdiction de stationner"></option>
                                        </datalist>
                                    </div>

                                    <textarea :required="input.required"
                                        class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm px-2 text-gray-400 h-24"
                                        v-if="input.textArea" v-model="input.data"></textarea>
                                     
                                <div>
                                        

                                </div>
                                </div>
                            </div>
                            <div class="w-full p-4" v-if="demande.uploads">
                                <!--- under text area files component -->
                                
                                <Filler :uploads="demande.uploads" :deletdIds="deletdIds" :newFiles="newFiles"/> 
                            </div>
<!----------------------------------------->  
                            <!-- For the button -->
                        
                            <div class=" bg-gray-600 text-center mx-4 my-9 rounded-md cursor-pointer">

                                <button class=" text-white font-bold p-2">Modifier</button>
                            </div>



                        </form>
                    </div>
                </div>

                <!-- While loading the data -->
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full"/>
                </div>

            </div>
        </div>

        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth, getSingleDemande,updateArchiveService,updateSaveService,saveFileToDriver,deleteFileFromDriver,
    updateAndAddDemandService,updateAndArchiveDemandService
} from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import Filler from '../components/filler.vue'
import CryptoJS from 'crypto-js';
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        const now = new Date()
        const dataLoaded = ref(false)
        /*** to handle new files   */
       let newFiles=ref([]);
       let deletdIds=ref([]);
       let uploads=ref({});
       let props =defineProps(['id']);
        /********** */
        let demande = ref({});
        const formInputs = reactive([{
            title: 'Réference cadastrale',
            inputs: [{
                dbcol: "ref_section",
                data: "",
                label: 'Section',
                type: 'text',
                required: false,
                textArea: false,
                option: false,
            },
            {
                dbcol: "ref_numero",
                data: "",
                label: 'Numéro',
                type: 'text',
                required: false,
                textArea: false,
                option: false,
            }]
        },
        {
            title: 'Période d\'intervention',
            inputs: [{
                dbcol: "date_debut",
                data: "",
                label: 'Date prévu du commencement des travaux',
                type: 'date',
                required: false,
                textArea: false,
                option: false
            },
            {
                dbcol: "duree",
                data: "",
                label: 'Durée envisagé des travaux (mois)',
                type: 'text',
                required: false,
                textArea: false,
                option: false
            }]
        },
        {
            title: 'Localisation',
            inputs: [{
                dbcol: "localisation",
                data: "",
                label: '',
                type: 'text',
                required: false,
                textArea: true,
                option: false
            }]
        },
        {
            title: 'Objet de la demande',
            inputs: [{
                dbcol: "objet",
                data: "",
                label: '',
                type: 'text',
                required: false,
                textArea: false,
                option: true
            }]
        },
        {
            title: 'Modalité d\'exploitation du chantier',
            inputs: [{
                dbcol: "modalite",
                data: "",
                label: '',
                type: 'text',
                required: false,
                textArea: false,
                option: true
            }]
        },
        {
            title: 'Pièces à joindre à la demande',
            inputs: [
                {
                    dbcol: "descriptif",
                    data: "",
                    label: 'Descriptif du projet',
                    type: 'text',
                    required: false,
                    textArea: true,
                    option: false
                },
            ]
        },
        ])
        const fichirs = ref([])
        let demandeID = null
        let form = new FormData()
        // to test the refresh and access token if they are expired or not  
        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value =await isUserAuth() 
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
                form.append('email', user.value.email)
                form.append('id', user.value.id)
                 let decryptedId = CryptoJS.AES.decrypt(props.id, 'yasser_key').toString(CryptoJS.enc.Utf8)
                 demandeID = parseInt(decryptedId)
                demande.value = await getSingleDemande(demandeID)
                
               demande.value = await { ...demande.value.demande, ...demande.value }
               uploads.value=demande.value.uploads;
                formInputs.forEach((inputForm) => {
                    inputForm.inputs.forEach((input) => {
                        if (input.type === 'date') {
                            const dateValue = new Date(demande.value[input.dbcol.toLowerCase()]);
                            const year = dateValue.getFullYear();
                            const month = String(dateValue.getMonth() + 1).padStart(2, '0');
                            const day = String(dateValue.getDate()).padStart(2, '0');
                            input.data = `${year}-${month}-${day}`;
                        } 
                        else {
                            input.data = demande.value[input.dbcol.toLowerCase()];
                        }
                    })
                })
                dataLoaded.value = true
            }
        })
        /****************** */
    
        /****************** */

        const files = ref([]);
        const showPopUp = ref(false)


        // function to submit the form 
        const submitForm = async () => {

            /** if there is new files  i should save them to google drive and get info to add new element to the uploids ** */
            for (let file of newFiles.value){
               let res= await saveFileToDriver(file);
               demande.value.uploads.push(
                {
            name: res.name,
            fichier: res.fichier,
            idFichier:res.idFichier,
            userId:demande.value.userId,
            messageId: null,
            demandeId: demande.value.id,})}
            /***** delete some of older   files ****** */
            for (let idFichier of deletdIds.value ){
                let res= await deleteFileFromDriver(idFichier);
                demande.value.uploads=demande.value.uploads.filter(upload=>upload.idFichier!==idFichier);
               // console.log(res);
            }
            /********* */
       
            formInputs.forEach((inputForm) => {
                    inputForm.inputs.forEach((input) => {
                        demande.value[input.dbcol.toLowerCase()]=input.data;
                        }
                    )
                })
                /** just send this to back end as */
                
               
            /******* */
            
          
        /************* */

            showPopUp.value = true
            for (const formSection of formInputs) {
                for (const input of formSection.inputs) {
                    if (input.type !== 'file') {
                        form.append(input.dbcol, input.data)
                    } 
                }
            }
        }
/** need change waaaaa checki demande machi forms */
        const checkReactive = async () => {
            for (let v in demande.value){
               
                if(demande.value[v].length===0) return false;
            }
            return true;
            
        }



        // function to call if button "Enregistrer " was triggred
        const error = ref('')
        const saveSuccess = ref('')
        const enregistreDemande = async () => {
            const answer = await checkReactive();
            if (answer) {
                const response = await updateAndAddDemandService(user.value.id,demande.value)
                if (response.state) {
                     saveSuccess.value = await response.message
                     showPopUp.value = false
                     router.push('/home')
                }
                return false
            } else {
                return error.value = "Pour finaliser l'enregistrement de votre demande, il est nécessaire que vous remplissiez encore quelques champs."
            }
        }



        // function to call if button "Archiver" was clicked
        const archiveDemande = async () => {
            const response = await updateAndArchiveDemandService(user.value.id,demande.value)

            if (response.state) {
                saveSuccess.value = await response.message
                showPopUp.value = false
                router.push('/home')
            }
            return false;
        }



        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }


</script>

<style  scoped>.heroImg {
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