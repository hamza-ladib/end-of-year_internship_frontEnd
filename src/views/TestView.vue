<template>
    <div class=" h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class="">
            <!-- the side bar -->
            <div class=" h-full">
                <sideBarComponent />
            </div>
            <!-- The main content -->
            <div class=" h-full pl-12 pt-9">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Vos observations</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Vous trouverez ci-joint l'historique
                            complet de toutes les demandes pour lesquelles vous avez soumis votre décision.</p>
                    </div>
                </div>
                <div v-if="dataLoaded">
                    <p>aaaaaaaaaa</p>
                </div>
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full"/>
                </div>
                
            </div>
        </div>
        <!-- Footer -->
        <footerComponent />
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
                const userID = await user.value.id
                feedbacks.value = await getFeedBackService(userID)
               setTimeout(()=> {
                dataLoaded.value =  true
               },4000)
               // console.log(feedbacks.value)
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













<!--
<div class=" my-28 mx-4 lg:mx-16">
                    <table class="w-full border-4 border-gray-100">
                        <thead>
                            <tr class="w-full border-b-2 border-gray-100 bg-gray-200">
                                <td
                                    class="py-2 w-1/6 text-center border-r-2 border-white  text-lg font-poltawski">
                                    N° de la demande</td>
                                <td
                                    class=" py-2 w-1/3 text-center border-r-2 border-white  text-lg font-poltawski">
                                    Objet de la demande</td>
                                <td
                                    class=" py-2 w-1/2 text-center border-r-2 border-white  text-lg font-poltawski">
                                    Votre décision</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="w-full border-b-2 border-gray-100" v-for="feedback of feedbacks">
                                <td class=" py-2 text-center border-r-2 border-gray-200 text-sm md:text-base">{{ feedback.demande.ref_numero }}</td>
                                <td class=" py-2 text-center border-r-2 border-gray-200 text-sm md:text-base">{{ feedback.demande.objet }}</td>
                                <td class=" py-2 text-center border-r-2 border-gray-200 text-sm md:text-base">{{ feedback.message }}</td>

                            </tr>
                        </tbody>

                    </table>
                </div>
-->
                
