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
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Veuillez trouver ci-joint toutes les
                            demandes nécessitant l'ajout de leurs coordonnées.</p>
                    </div>
                </div>

                <!--Show the alert-->


                <!---------------------------------------->
                <div class=" bg-gradient-to-b from-slate-50 to-slate-300" v-if="dataLoaded">
                    <div class=" mx-4 pt-6">
                        <div
                            class="bg-gradient-to-l from-green-500 to-green-700 w-fit py-4 px-4 my-4 mx-1 sm:mx-8 md:mx-16 rounded-l-lg rounded-br-lg drop-shadow-lg cursor-pointer hover:drop-shadow-2xl">
                            <div class="relative group cursor-pointer">
                                <p class="text-white font-bold text-center">Vous avez encore <span
                                        class=" font-poppins text-gray-600">{{ numberDemand }}</span> demandes pour lesquelles les coordonnées doivent être fournies !
                                <div
                                    class=" border-b-2 border-gray-200 absolute w-0 group-hover:w-full transition-all duration-700">
                                </div>
                                </p>
                            </div>
                            <p class="text-white font-bold my-1 px-1">Il est recommandé de les traiter rapidement pour éviter tout retard ou toute erreur.</p>
                            <p class="text-white font-bold my-1 px-1"> Merci d'avance pour votre diligence.</p>
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
                                    @click="gotoPage(demande.id)">
                                    <div class="  flex items-center rounded-md overflow-hidden">
                                        <p class=" bg-blue-700  px-4 py-2 font-bold text-white">Ajouter les coordonnées</p>
                                        <p class=" bg-white  px-2 py-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-blue-700">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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


            </div>
        </div>

        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth, getNoneCoordinated,countNoneCoordinationService } from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import CryptoJS from 'crypto-js';
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

        // to test the refresh and access token if they are expired or not  
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
                if (user.value.roles[0].name === 'représentant') {
                    return await router.push('/notes')
                }           
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return await router.push('/saveDemandes')
                }
                // Si l'utilisateur est un patrimoine
                if (user.value.roles[0].name === 'Patrimoine') {
                    return await router.push('/homePatrimoin')
                }   
                 // Si l'utilisateur est un demandeur
                if (user.value.roles[0].name=== 'demandeur') {
                    return  router.push('/home')
                }
                demandes.value = await getNoneCoordinated();
                console.log(demandes.value)
                numberDemand.value = await countNoneCoordinationService();
                dataLoaded.value = true
            }
        })




        // function to navigate to another page 
        const gotoPage = async (idDemand) => {
            const encryptedId = CryptoJS.AES.encrypt(idDemand.toString(), 'yasser_key').toString();
            const encodedId = encodeURIComponent(encryptedId);
            await router.push('/addCoordinate/' + encodedId)
        }


        // function to logOut
        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        return { user, logOutFunction, demandes, numberDemand, demandeId, dataLoaded, gotoPage }
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
}
</style>