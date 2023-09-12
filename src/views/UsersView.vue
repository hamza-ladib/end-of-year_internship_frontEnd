<template>
    <div class="h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />
        <div class="">
            <!-- the side bar -->
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>

            <!-- The main content -->
            <div class="h-full pl-12 pt-9">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Vos utilisateurs</p>
                        <p class="text-center pt-4 text-white font-poltawski ">Ci-inclus, vous pourrez consulter
                            l'historique de tous
                            les utilisateurs pour lesquels vous avez créé un compte auparavant. </p>
                    </div>

                </div>

                <div class=" bg-gradient-to-b from-slate-50 to-slate-300">
                    <!---div holding button d'ajoute-->
                    <div class="w-full  flex items-center justify-end mt-4 px-5 gap-2">
                        <!-- button d'ajoute de demande --->
                        <router-link to="/adduser">
                            <button type="button"
                                class=" transition-all duration-300 group  gap-5 text-white bg-[#2557D6] hover:bg-white hover:text-black hover:ring hover:ring-blue-600  focus:outline-none font-poppins rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Ajouter un utilisateur
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    class=" transition-all  group-hover:animate-bounce uration-300 w-6 h-6 fill-white group-hover:fill-black">
                                    <path
                                        d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z">
                                    </path>
                                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
                                </svg>
                            </button>
                        </router-link>

                        <!-- end of button d'ajoute -->
                    </div>
                    <!--- end of div holding button d'ajoute-->

                        <!-- end of button d'ajoute -->
                    <div class=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-11 mx-4 drop-shadow-xl ">
                        <!-- col 1-->
                        <div class=" border-2 border-gray-300   rounded-md  py-2 drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer  bg-white"
                            v-for="user of users">
                            <p class="flex justify-end items-center px-2 text-gray-600  font-serif pb-1 border-b-2 border-gray-300 font-bold"
                                @click="pushFunction(user.id)">Ajouter une demande <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    class="w-5 h-5 ml-2 cursor-pointer hover:text-blue-700">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </p>
                            <div class=" my-4">
                                <!---------------------------->
                                <p class=" font-poltawski flex items-center relative group px-4 hover:px-0  py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class=" mr-2" width="20" height="20"
                                        viewBox="0 0 24 24" style="fill: rgba(92, 92, 92);transform: ;msFilter:;">
                                        <path
                                            d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z">
                                        </path>
                                    </svg>
                                    {{ user.email }}
                                <div
                                    class=" bg-gray-300 absolute w-0 overflow-hidden h-full py-1 group-hover:w-full transition-all duration-500 ">
                                    <p class="text-center  font-doted font-bold text-white">Email</p>
                                </div>

                                </p>
                                <!---------------------------->
                                <p class=" font-poltawski flex  items-center relative group mt-2 px-4 hover:px-0 py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" class="w-4 h-4 text-gray-600 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    {{ user.tel }}


                                <div
                                    class=" bg-gray-300 absolute w-0 overflow-hidden group-hover:w-full transition-all duration-500 py-1">
                                    <p class="text-center  font-doted font-bold text-white">Tel</p>
                                </div>
                                </p>
                                <p class=" font-poltawski flex items-center relative group mt-2 px-4 hover:px-0 py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" class="w-4 h-4 text-gray-600 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    {{ user.fixe }}

                                <div
                                    class=" bg-gray-300 absolute w-0 overflow-hidden group-hover:w-full transition-all duration-500 py-1">
                                    <p class="text-center  font-doted font-bold text-white">Fixe</p>
                                </div>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                <!-- While loading the data -->
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full" />
                </div>

            </div>

        </div>




        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script>
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import { getUsersService, accessToken_state, isUserAuth } from '../Services/service'
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import CryptoJS from 'crypto-js';
export default {
    components: {
        userNavBar,
        sideBarComponent,
        footerComponent
    },
    setup() {
        const users = ref([])
        const router = useRouter()
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const user = ref({})
        const now = new Date()
        const dataLoaded = ref(false)

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
                users.value = await getUsersService()
                dataLoaded.value = true
            }

        })

        const pushFunction = async (id) => {
            const encryptedId = CryptoJS.AES.encrypt(id.toString(), 'yasser_key').toString();
            const encodedId = encodeURIComponent(encryptedId);
            router.push('/createDemande/' + encodedId)
        }


        //Function to log out 
        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        return { user, users, pushFunction, logOutFunction, dataLoaded }
    }
}
</script>

<style  scoped>.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
}</style>