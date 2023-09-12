<template>
    <div class=" h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class="">
            <!-- the side bar -->
            <div class=" h-full">
                <sideBarComponent :user="user"/>
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

                <div class="py-28 px-4 lg:px-16  drop-shadow-xl bg-gradient-to-b from-slate-50 to-slate-200 relative  " v-if="dataLoaded">
                    <table class=" bg-white w-full  drop-shadow-2xl">
                        <thead>
                            <tr class="w-full border-b-2 border-gray-100 bg-gray-200">
                                <td class="py-2 w-1/6 text-center border-r-2 border-white  text-xl font-poppins text-gray-700">
                                    N° de la demande</td>
                                <td class=" py-2 w-1/3 text-center border-r-2 border-white  text-xl font-poppins text-gray-700">
                                    Objet de la demande</td>
                                <td class=" py-2 w-1/2 text-center border-r-2 border-white  text-xl font-poppins text-gray-700">
                                    Votre décision</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="w-full border-b-2 border-gray-100" v-for="feedback of feedbacks">
                                <td class=" py-2 text-center border-r-2 border-gray-200 text-sm md:text-base font-poppins"> {{
                                    feedback.demande.ref_numero }} </td>
                                <td class=" py-2 text-center border-r-2 border-gray-200 text-sm md:text-base font-poppins">{{
                                    feedback.demande.objet }}</td>

                                <td class=" py-2 text-center  text-sm md:text-base font-poppins">
                                    <p>{{ feedback.sujet }}</p>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                    <div v-if="dataLoaded" :class=" `  cursor-pointer absolute  bg-white shadow-lg shadow-blue-200 hover:ring-white hover:ring transition-all duration-200 group top-5 left-5 flex flex-col flex-center justify-center rounded-lg`">
                        <div :class="` ${showNotifications ? 'w-full p-1 ':'w-0 overflow-hidden  '}   transition-all duration-100  flex flex-col justify-center items-center relative  gap-2` ">
                            <div v-for="commenatire of NewEmptyFeeds" class=" flex gap-1 shadow-md justify-center items-center font-poppins">
                                <div class="   p-1 px-2 font-poppins">
                                    <span class="p-1 font-xl text-blue-500">&lt;</span>
                                    {{ commenatire.demande.ref_numero}} 
                                    <span class="p-1 font-2xl text-blue-500">&gt;</span>
                                    
                                </div>
                                <div class="   p-1 px-2 font-poppins">
                                    
                                    {{ commenatire.demande.objet}}
                                   
                                </div>
                                <div class="p-1 px-2 font-poppins"><button @click="goToAddDescision(commenatire)" class="w-full p-2 outline-none rounded-md  bg-blue-500 shadow-blue-300 shadow-lg"> ajouter descision</button></div>
                            
                            </div>
                         
                        </div>
                      
                        <svg @click="showNotifications=!showNotifications"  class="absolute left-full top-0  w-20 h-14 shadow-lg rounded-lg transition-all duration-700   fill-blue-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M13 7.037h-2V10H8.037v2H11v2.963h2V12h2.963v-2H13z"></path><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
                        <div  class=" group-hover:bg-blur-500 group-hover:scale-125 transition-all duration-300  absolute left-full top-0 p-2 text-md font-bold font-quicksand  w-8 rounded-full flex items-center justify-center opacity-80 bg-white shadow-lg  h-8 text-center"> {{ number }}</div>
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
import { accessToken_state, isUserAuth, getFeedBackService } from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'

        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        let feedbacks = ref()
        let showNotifications=ref(false);
        const now = new Date()
        const dataLoaded = ref(false)
        const show = ref(false)
        let number=ref(0);
        let NewEmptyFeeds=ref();
        // to test the refresh and access token if they are expired or not  
        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()
                // Protect the routes so that only the representant that can enter here
                if (user.value.roles[0].name=== 'demandeur') {
                    return  router.push('/home')
                }
                // Si l'utilisateur est le président
                if (user.value.roles[0].name=== 'président') {
                    return  router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return  router.push('/saveDemandes')
                }
                // si l'utilisateur est un service technique
                if (user.value.roles[0].name === 'Service technique') {
                    return await router.push('/homeSTechnique')
                } 
                // si l'utilisateur est un service patrimoine
                if (user.value.roles[0].name === 'Patrimoine') {
                    return await router.push('/homePatrimoin')
                } 
                const userID = await user.value.id
                feedbacks.value = await getFeedBackService(userID)
                NewEmptyFeeds.value=feedbacks.value.filter(x=>{if(x.sujet=="" || x.sujet == null) return x});
                feedbacks.value=feedbacks.value.filter(x=>{if(x.sujet!="" && x.sujet!=null) return x});
                number=NewEmptyFeeds.value.length;
                
                
                console.log(feedbacks.value,NewEmptyFeeds.value,userID);
                dataLoaded.value = true
            }

        },)

        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        const showDecision = async (idFeedBack) => {
            //
        }

        const hideDecision = async (idFeedBack) => {
            //show.value = false

        }
        let goToAddDescision=(d)=>{
            console.log(d)
            console.log(d.id)
      router.push('/addDecision/'+d.demandeId) 

        }

</script>




<style  scoped>
.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>




<!--
                                <td class=" py-2 text-center border-r-2 border-gray-200 text-sm md:text-base font-poppins">
                                    <p>{{ feedback.message }}</p>
                                  To show to open eye 
                                    <p class="flex justify-center cursor-pointer" @click="showDecision(feedback.id)"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg></p>
                              To show the closed eye 
                                <p class=" flex justify-center cursor-pointer" @click="hideDecision(feedback.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                </p>
                            </td>

-->