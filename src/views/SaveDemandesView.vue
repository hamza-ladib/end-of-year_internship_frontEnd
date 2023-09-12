<template>
    <div class=" h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class=" h-full">
            <!-- the side bar -->
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>

            <!-- The main content -->
            <div class=" h-full pl-12 pt-9 relative ">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Réception des
                            demandes</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Toutes les demandes nécessitant votre
                            enregistrement sont répertoriées ici pour votre référence.</p>
                    </div>
                </div>

                <!--Show the alert-->


                <!---------------------------------------->
                <div class=" bg-gradient-to-b from-slate-50 to-slate-300" v-if="dataLoaded">
                    <div class=" mx-4 pt-6">
                        <div
                            class="bg-gradient-to-l from-green-500 to-green-700 w-fit py-4 px-4 my-4 mx-1 sm:mx-8 md:mx-16 rounded-l-lg rounded-br-lg drop-shadow-lg cursor-pointer hover:drop-shadow-2xl">
                            <div class="relative group cursor-pointer">
                                <p class="text-white font-bold text-center">Il vous reste <span
                                        class=" font-poppins text-gray-600">{{ numberDemand }}</span> demandes à enregistrer
                                    !
                                <div
                                    class=" border-b-2 border-gray-200 absolute w-0 group-hover:w-full transition-all duration-700">
                                </div>
                                </p>
                            </div>
                            <p class="text-white font-bold my-1 px-2">Il est conseillé de les prendre en charge rapidement
                                afin d'éviter tout retard ou toute erreur.</p>
                            <p class="text-white font-bold my-1 px-2"> Merci d'avance pour votre diligence.</p>
                        </div>

                    </div>

                    <div class="px-11 py-4 rounded-lg drop-shadow-2xl mt-9">
                        <div class=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            <!-- Demandes -->
                            <div class=" border-2 border-gray-400 rounded-md  hover:drop-shadow-2xl bg-white"
                                v-for="demande in demandes">
                                <div class="relative group cursor-pointer">
                                    <p class=" text-center py-1 font-semibold">N° &lt <span
                                            class="font-poppins font-bold text-blue-700">{{ demande.ref_numero }}</span> &gt
                                    <p
                                        class=" absolute font-quicksand top-0 text-center w-0 h-full overflow-hidden group-hover:bg-blue-700 group-hover:text-white group-hover:w-full transition-all duration-700 py-1">
                                        Numéro de la demande</p>
                                    </p>
                                </div>
                                <!--infos-->
                                <div class="  py-2  cursor-pointer relative group">
                                    <p class=" text-center font-poppins  text-blue-700 font-semibold">{{ demande.objet }}
                                    <p
                                        class=" absolute font-quicksand h-0 group-hover:h-full top-0 text-center w-0 py-2  overflow-hidden group-hover:bg-blue-700 group-hover:text-white group-hover:w-full transition-all duration-700">
                                        Objet de la demande</p>
                                    </p>
                                </div>

                                <div class=" my-1 flex justify-center drop-shadow-lg cursor-pointer"
                                    @click="showPopUp(demande.id)">
                                    <div class="  flex items-center rounded-md overflow-hidden">
                                        <p class=" bg-blue-700  px-4 py-2 font-bold text-white">Enregistrer</p>
                                        <p class=" bg-white  px-2 py-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!--Fin demande -->
                        </div>
                    </div>
                </div>

                <!-- While loading the data -->
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full" />
                </div>


                <!---------------------------->

                <!---------------------------------------->
                <div class="bg-gradient-to-r from-slate-50 to-slate-400 absolute top-0 w-full h-full flex justify-center items-center"
                    v-if="showpop">
                    <!-- The pop up-->
                    <transition name="fade">
                        <div class=" bg-white drop-shadow-lg py-10 border-2 border-blue-500 rounded-md" v-if="!showSuccess">
                            <p class=" px-9 font-quicksand font-semibold text-xl text-blue-700 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-6 h-6 mr-2 text-red-600">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                Êtes-vous certain(e) de vouloir enregistrer cette demande ?
                            </p>
                            <div class=" mt-8 flex justify-center gap-3">
                                <p class=" bg-white py-2 px-2 drop-shadow-lg border-2 rounded-md border-green-600 font-quicksand font-semibold cursor-pointer"
                                    @click="saveDemande(demandeId)">Oui, je suis sûr(e)</p>
                                <p class=" bg-white py-2 px-2 drop-shadow-lg border-2 rounded-md border-red-600 font-quicksand font-semibold cursor-pointer"
                                    @click="showpop = !showpop">Non, annuler</p>
                            </div>
                        </div>
                    </transition>
                    <!-------------->
                    <!-- The alert -->
                    <transition name="fade2">
                        <div class=" bg-white  rounded-md  flex justify-between items-center mt-4 px-4 mx-24 py-6 border-green-600 border-2"
                            v-if="showSuccess">
                            <p class="text-green-600 font-bold text-lg">
                                {{ responseContent }}</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer text-green-600 hover:text-gray-700 hover:opacity-50 pl-4" size="xl"
                                @click="hideAlert()" />
                        </div>
                    </transition>
                    <!--------------->
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth, getAllSendedDemandes, getNumberSendedDemand, enregistreDemande } from '../Services/service'
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
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        const now = new Date()
        const demandes = ref([])
        const numberDemand = ref()
        const responseContent = ref()
        const showpop = ref(false)
        const showSuccess = ref(false)
        const dataLoaded = ref(false)
        const demandeId = ref(null)
        const userId = ref(null) 
        // to test the refresh and access token if they are expired or not  
        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()
                // Protect the routes so that only the bureau d'ordre that can enter here
                if (user.value.roles[0].name === 'demandeur') {
                    return await router.push('/home')
                }
                // Si l'utilisateur est le président
                if (user.value.roles[0].name === 'président') {
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
                demandes.value = await getAllSendedDemandes();
                numberDemand.value = await getNumberSendedDemand();
                userId.value = user.value.id
                dataLoaded.value = true
            }
        })


        // function that will show the Pop-Up
        const showPopUp = async (idDemand) => {
            demandeId.value = idDemand
            showpop.value = true
        }

        
        // function to save the new state of the demande
        const saveDemande = async (idDemand) => {
            const response = await enregistreDemande(idDemand)
            if (response.state) {
                responseContent.value = await response.message
                showSuccess.value = true
                 demandes.value=  demandes.value.filter(d=>d.id !=idDemand);
                numberDemand.value--; 

        }}

        // to hide the alert
        const hideAlert = () => {
            showSuccess.value = false
            showpop.value = false
        }


        // function to logOut
        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        return { user, logOutFunction, demandes, numberDemand, saveDemande, responseContent, showPopUp, showpop, demandeId, showSuccess, hideAlert, dataLoaded }
    }
}
</script>

<style scoped>
.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: all 1s ease;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: all 1s ease;
}


.fade2-enter-from {
    opacity: 0;
}

.fade2-enter-to {
    opacity: 1;
}

.fade2-enter-active {
    transition: all 1s ease;
}

.fade2-leave-from {
    opacity: 1;
}

.fade2-leave-to {
    opacity: 0;
}

.fade2-leave-active {
    transition: all 1s ease;
}</style>