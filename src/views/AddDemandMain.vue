<template>
    <div class=" h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class="">
            <!-- the side bar -->
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>
            <!-- The main content -->
            <div class=" h-full pl-12 pt-9">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Demande d'une main levée</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Nous vous demandons d'inclure votre demande afin de recevoir la main levée.</p>
                    </div>

                </div>

                <div class=" px-2 sm:px-11 py-4 rounded-lg drop-shadow-2xl  bg-gradient-to-b from-slate-50 to-slate-200">

                    <div class="mt-9">
                        <!--Button to show and hide the form -->
                        <div class="flex justify-end">
                            <button type="button" @click="toggleForm = !toggleForm"
                                class=" transition-all duration-300 group  gap-5 text-white bg-[#2557D6] hover:bg-white hover:text-black hover:ring hover:ring-blue-600  focus:outline-none font-poppins rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Ajouter la demande
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    class=" transition-all  group-hover:animate-bounce uration-300 w-6 h-6 fill-white group-hover:fill-black">
                                    <path
                                        d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z">
                                    </path>
                                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
                                </svg>
                            </button>
                        </div>
                        <!---------------------------------------->

                        <!--Message afficher si le message a été ajouter avec success-->
                        <transition name="fade">
                            <div class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-6 border-green-400 border-2"
                                v-if="showError">
                                <p class="text-green-400 font-bold text-lg">
                                    Votre document a été ajouté avec succès.</p>
                                <font-awesome-icon icon="fa-solid fa-xmark"
                                    class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4"
                                    size="xl" @click="hideAlert" />
                            </div>
                        </transition>
                        <!------------------------------------------------------------->
                        <!-- Pop up pour Confirmer votre décision -->
                        <transition name="fade">
                            <div class=" mt-9  mx-12 bg-gray-300 pt-8 rounded-md" v-if="showPopUp">
                                <p class=" font-bold text-lg text-center text-gray-700">Vous êtes sur le point d'ajouter ce dossier comme une demande pour la main levée, êtes-vous d'accord ?</p>
                                <div class=" flex justify-center py-4">
                                    <button class="bg-gray-400 p-2 font-bold text-white mx-4 w-1/6 rounded-md"
                                        @click="sendData()">D'accord</button>
                                    <button class="bg-gray-400 p-2 font-bold text-white mx-4 w-1/6 rounded-md"
                                        @click="showPopUp = !showPopUp">Annuler</button>
                                </div>
                            </div>
                        </transition>

                        <!-------------------FIN-------------------->


                        <!-- Formulaire pour ajouter une décision -->
                        <transition name="fade">
                            <div class=" mt-9" v-if="toggleForm">
                                <p class=" text-lg font-playfair mx-4 pr-1 w-fit relative group ">Il est temps d'ajouter
                                    votre demande de la main levée pour la demande en cours
                                <p
                                    class=" absolute w-0 group-hover:border-b-2 group-hover:border-gray-300 group-hover:w-full transition-all duration-500">
                                </p>
                                </p>
                                <div class=" py-6">
                                    <form enctype="multipart/form-data" @submit.prevent="submitForm" class=" grid">
                                        <label class=" font-poppins text-base  md:text-lg ">La demande à inclure :</label>
                                        <input type="file"
                                        class=" border-2 border-gray-500 rounded-md mt-2 text-gray-500 py-1 px-2 h-11 mx-4" @change="onFileInputChange" multiple/>
                                        <button
                                            class=" bg-blue-700 text-white font-bold rounded-md mt-6 py-2 relative group">Confirmer
                                            <div
                                                class=" bg-gray-300 py-2 h-full w-0 overflow-hidden absolute top-0 group-hover:w-full rounded-md transition-all duration-500">
                                                <p>Confirmer</p>
                                            </div>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </transition>

                        <!------------------------------------------>
                        <!--- Informations about the demande -->
                        <div class=" my-9 border-2 border-gray-300 rounded-md bg-white drop-shadow-2xl" v-if="dataLoaded">
                            <div class="px-4 sm:px-16 py-4">
                                <div class=" grid  sm:grid-cols-5 ">
                                    <!-- colon of the N° -->
                                    <div class=" relative group ">
                                        <p class=" px-2 py-1 border-l-2 border-gray-300 font-poppins font-bold "> N° <span
                                                class="text-blue-700">{{ informations.demande.ref_numero }}</span>
                                        <p
                                            class=" absolute top-0 h-full font-poltawski text-white w-0 overflow-hidden group-hover:w-full bg-gradient-to-l from-blue-500 to-blue-700 py-1 px-0 group-hover:px-4 transition-all duration-300">
                                            Le numéro de la demande
                                        </p>
                                        </p>
                                    </div>
                                    <!-- colon of the section -->
                                    <div class="  col-span-3 relative group  sm:mx-6">
                                        <p class=" px-2 py-1 border-l-2 border-gray-300 font-poppins font-bold ">
                                            {{ informations.demande.ref_section }}
                                        <p
                                            class=" absolute top-0 h-full font-poltawski text-white w-0 overflow-hidden group-hover:w-full bg-gradient-to-l from-blue-500 to-blue-700 py-1 px-0 group-hover:px-4 transition-all duration-300">
                                            La section de la demande
                                        </p>
                                        </p>
                                    </div>
                                    <!-- colon of the duree -->
                                    <div class="relative group sm:ml-6">
                                        <p class=" px-2 py-1 border-l-2 border-gray-300 font-poppins font-bold ">{{
                                            informations.demande.duree }} <span class=" text-sm text-gray-400">(Mois)
                                            </span>
                                        <p
                                            class=" absolute top-0 h-full font-poltawski text-white w-0 overflow-hidden group-hover:w-full bg-gradient-to-l from-blue-500 to-blue-700 py-1 px-0 group-hover:px-4 transition-all duration-300">
                                            La durée de la demande
                                        </p>
                                        </p>
                                    </div>
                                </div>

                                <div class=" mt-8 relative group">
                                    <p
                                        class=" py-1 text-center border-2 rounded-md border-gray-400 font-poppins font-bold text-base  md:text-lg ">
                                        {{ dateDebut }}
                                    <p
                                        class=" absolute top-0 py-1 w-0 h-full overflow-hidden group-hover:w-full
                                        bg-gradient-to-l from-blue-500 to-blue-700 group-hover:rounded-md text-white font-poltawski font-bold text-base  md:text-lg  transition-all duration-500 text-center">
                                        La date de début</p>
                                    </p>
                                </div>


                                <div class=" mt-4 relative group">
                                    <p
                                        class=" py-1 text-center border-2 rounded-md border-gray-400 font-poppins font-bold text-base  md:text-lg  ">
                                        {{ informations.demande.objet }}
                                    <p
                                        class=" absolute top-0 py-1 w-0 h-full overflow-hidden group-hover:w-full
                                        bg-gradient-to-l from-blue-500 to-blue-700 group-hover:rounded-md text-white font-poltawski font-bold text-base  md:text-lg  transition-all duration-500 text-center">
                                        L'Objet de la demande</p>
                                    </p>
                                </div>

                                <div class=" mt-4 relative group">
                                    <p
                                        class=" py-1 text-center border-2 rounded-md border-gray-400 font-poppins font-bold text-base  md:text-lg  ">
                                        {{ informations.demande.modalite }}
                                    <p
                                        class=" absolute top-0 py-1 w-0 h-full overflow-hidden group-hover:w-full
                                        bg-gradient-to-l from-blue-500 to-blue-700 group-hover:rounded-md text-white font-poltawski font-bold text-base  md:text-lg  transition-all duration-500 text-center">
                                        La modalité de la demande</p>
                                    </p>
                                </div>

                                <div class=" mt-4 relative group">
                                    <p
                                        class=" py-1 text-center border-2 rounded-md border-gray-400 font-poppins font-bold text-base  md:text-lg  ">
                                        {{ informations.demande.localisation }}
                                    <p
                                        class=" absolute top-0 py-1 w-0 h-full overflow-hidden group-hover:w-full flex items-center justify-center
                                        bg-gradient-to-l from-blue-500 to-blue-700 group-hover:rounded-md text-white font-poltawski font-bold text-base  md:text-lg  transition-all duration-500 text-center">
                                        La localisation</p>
                                    </p>
                                </div>

                                <div class=" mt-4 relative group">
                                    <p
                                        class=" py-1 text-center border-2 rounded-md border-gray-400 font-poppins font-bold text-base  md:text-lg  ">
                                        {{ informations.demande.descriptif }}
                                    <p
                                        class=" absolute top-0 py-1 w-0 h-full overflow-hidden group-hover:w-full flex items-center justify-center
                                        bg-gradient-to-l from-blue-500 to-blue-700 group-hover:rounded-md text-white font-poltawski font-bold text-base  md:text-lg transition-all duration-500 text-center">
                                        La description de la demande</p>
                                    </p>
                                </div>

                                <p
                                    class=" mt-6 text-base  md:text-lg  font-poltawski text-gray-700 w-fit pr-1 border-b-2 border-gray-200">
                                    Les attachements de la demande </p>

                                <div class=" mt-2 border-2 rounded-md border-gray-400 grid"
                                    v-for="upload in informations.uploads">
                                    <a class=" py-1 text-center font-poppins font-bold cursor-pointer "
                                        :href="upload.fichier" target="_blank">{{ upload.name }}</a>
                                </div>
                                  
                            </div>
                        </div>
                        <!------------------------------------->


                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>


<script>
import CryptoJS from 'crypto-js';
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth, getSingleDemande, sendDemandMain } from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        userNavBar,
        sideBarComponent,
        footerComponent
    },
    setup (props) {
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        const now = new Date()
        const showError = ref(false)
        const toggleForm = ref(false)
        const showPopUp = ref(false)
        const dataLoaded = ref(false)
        const dateDebut = ref()
        const informations = ref({})
        const inputData = ref({})
        const idDemand = ref()


        // to test the refresh and access token if they are expired or not  
        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()

                // Si l'utilisateur est le président
                if (user.value.roles[0].name=== 'président') {
                    return await router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return await router.push('/saveDemandes')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'représentant') {
                    return await router.push('/notes')
                }
                // Si l'utilisateur est un service x
                if (user.value.roles[0].name === 'service x') {
                    return await router.push('/coordinate')
                }        


                const decryptedId = CryptoJS.AES.decrypt(props.id, 'yasser_key').toString(CryptoJS.enc.Utf8)
                idDemand.value = parseInt(decryptedId)
                informations.value = await getSingleDemande(idDemand.value)
                dataLoaded.value = true
                const dateValue = new Date(informations.value.demande.date_debut);
                const year = dateValue.getFullYear();
                const month = String(dateValue.getMonth() + 1).padStart(2, '0');
                const day = String(dateValue.getDate()).padStart(2, '0');
                dateDebut.value = `${year}-${month}-${day}`
                inputData.demandeID = await informations.value.demande.id,
                inputData.id = await user.value.id

            }
        })





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


    // function to grap the files from the input 
      const onFileInputChange = (event) => {
        inputData.fichier = event.target.files
    }



        //submit the form
        const submitForm = () => {
            showPopUp.value = true
            toggleForm.value = false
        }

        const sendData = async () => {
            let form = new FormData();
            form.append('demandeID', inputData.demandeID);
            form.append('id', inputData.id);
            for( let file of inputData.fichier) {
                form.append('files',file)
            }
            const response = await sendDemandMain(form)
            if (response.state) {
                showError.value = true
                showPopUp.value = false
                toggleForm.value = false
                router.push('/home')
            }
        }


        return {user, logOutFunction, showError, hideAlert, toggleForm, submitForm, showPopUp, sendData, informations, dataLoaded, dateDebut, inputData,onFileInputChange}
    }
}
</script>

<style  scoped>
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