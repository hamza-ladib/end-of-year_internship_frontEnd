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
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center ">Espace du président </p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Nous vous prions de bien vouloir trouver ci-joint un ensemble de documents qui nécessitent votre signature.</p>
                    </div>
                </div>
                <div class=" w-full flex justify-center items-center h-full bg-gradient-to-b from-slate-50 to-slate-200" v-if="dataLoaded">
                        <div class=" mx-4 lg:flex my-12">
                            <!-- authorization tranche -->
                            <div class=" w-full lg:w-1/3 bg-white pt-4 px-20 drop-shadow-sm hover:drop-shadow-2xl cursor-pointer">
                                <router-link to="/autorisation">
                                <p class=" text-center text-2xl font-bold font-serif text-blue-700">Autorisation</p>
                                <div class=" my-4">
                                    <img src="../assets/images/pre.webp" />
                                </div>
                                <div class=" my-4">
                                    <p class=" text-center font-poppins">Pour toutes les autorisations nécessitant une signature, vous les trouverez rassemblées ici. <span class=" text-gray-500 text-sm font-bold cursor-pointer">En savoir plus</span></p>
                                </div>
                            </router-link>
                            </div>


                            <!--------------------------->
                            
                            <div class="  w-full lg:w-1/3 bg-white pt-4 px-20 drop-shadow-lg hover:drop-shadow-2xl cursor-pointer">
                                <router-link to="/convocation">
                                <p class=" text-center text-2xl font-bold font-serif text-blue-700">Convocation</p>
                                <div class=" my-4">
                                    <img src="../assets/images/pre3.webp" />
                                </div>
                                <div class=" my-4">
                                    <p class=" text-center font-poppins">Pour toutes les convocations nécessitant une signature, vous les trouverez rassemblées ici. <span class=" text-gray-500 text-sm font-bold cursor-pointer">En savoir plus</span></p>
                                </div>
                                </router-link>
                            </div>

                            <!--------------------------->

                            <!-- Main levée tranche -->
                           
                            <div class=" w-full lg:w-1/3 bg-white pt-4 px-20 drop-shadow-sm hover:drop-shadow-2xl cursor-pointer">
                                <router-link to="/mainlevee">
                                <p class=" text-center text-2xl font-bold font-serif text-blue-700">Main levée</p>
                                <div class=" my-4">
                                    <img src="../assets/images/pre6.webp" />
                                </div>
                                <div class=" my-4">
                                    <p class=" text-center font-poppins">Pour toutes les mains levées nécessitant une signature, vous les trouverez rassemblées ici. <span class=" text-gray-500 text-sm font-bold cursor-pointer">En savoir plus</span></p>
                                </div>
                                </router-link>
                            </div>
                            <!--------------------------->
                        </div>
                </div>
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full"/>
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
import { accessToken_state, isUserAuth, getFeedBackService } from '../Services/service'
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
        let feedbacks = ref()
        const now = new Date()
        const dataLoaded = ref(false)
        const showPoP = ref(false)
        const show = ref([{
            'idFeedBack':'2',
            'data':false
        },
        {
            'idFeedBack':'3',
            'data':false
        },
        {
            'idFeedBack':'6',
            'data':false
        },
        {
            'idFeedBack':'7',
            'data':false
        },
    ])
        // to test the refresh and access token if they are expired or not  
        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()
                if (user.value.roles[0].name === 'demandeur') {
                    return await router.push('/home')
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
                dataLoaded.value =  true
            }

        })

        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        const showDecision = async(idFeedBack) => {
                for(let sh of show.value) {
                    if(sh.idFeedBack == idFeedBack) {
                      return  sh.data = true
                    }
                }
        }

        const hideDecision = async(idFeedBack)=> {
            //show.value = false

        }



        return { user, logOutFunction,feedbacks,dataLoaded,showDecision,show,hideDecision,showPoP }
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
}</style>








                    
                    <!--- Les Autorisation 
                    <div class=" w-full my-11 relative group h-full border-2">
                        <p class=" text-blue-700 font-poltawski text-xl mx-12 py-2 cursor-pointer bg-gradient-to-r from-slate-50 to-slate-400">Les autorisations
                            <div class=" ml-12 pt-6 absolute w-0 overflow-hidden group-hover:w-full  transition-all duration-700 bg-gradient-to-r from-slate-50 to-slate-400">
                                <p>aaaaa</p>
                                <p>bbbbb</p>
                                <p>aaaaa</p>
                                <p>bbbbb</p>
                                <p>aaaaa</p>
                                <p>bbbbb</p>
                            </div>
                        </p>
                    </div>
                    -------------------->

