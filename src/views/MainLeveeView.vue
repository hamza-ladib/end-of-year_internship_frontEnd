


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
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center ">Mains levées</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Vous êtes tenu(e) de signer les mains levées énumérées ci-dessous.</p>
                    </div>
                </div>
                <div class="" v-if="dataLoaded">
                    <!--  The Statistic  -->
                    <div class="bg-gradient-to-l from-green-500 to-green-700 w-fit py-8 px-4 my-4 mx-1 sm:mx-8 md:mx-16 rounded-l-lg rounded-br-lg drop-shadow-lg cursor-pointer hover:drop-shadow-2xl">
                        <p class=" text-white font-poppins font-semibold">Pour finaliser la procédure, il est impératif de signer les <span class=" text-gray-500">{{nbreSigned}}</span> autorisations restantes dans les plus brefs délais. </p>
                        <p class=" text-white font-poppins font-semibold pt-4">Nous vous remercions de votre diligence à cet égard.</p>
                    </div>
                    <!-------------------->

                    <div class="my-10 group flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 ml-16 text-blue-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                     <p class=" text-2xl py-2 text-blue-700 font-quicksand font-semibold mx-4 cursor-pointer">Listes des Main levée </p>
                    </div>

                    <div class=" grid sm:grid-cols-2 md:grid-cols-4 gap-4 mx-9 mb-9">
                        <div class="bg-white rounded-md drop-shadow-2xl border-2 border-gray-4=300" v-for="autorisation in autorisations">
                            <p class=" text-center py-2 font-poppins mt-1 text-lg cursor-pointer">
                                <a :href="autorisation.fichier" target="_blank">{{ autorisation.name }}</a>
                                </p>
                            <div class=" flex justify-center">
                                <button @click="signee(autorisation)" class=" bg-blue-700 px-3 py-1 rounded-md text-white font-semibold my-2">Signer</button>
                            </div>
                            
                        </div>

                    </div>



                </div>
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full"/>
                </div>
                
            </div>
            <!---------------------------------------------------------->
            <!------------------------------------------------>
            <div v-if="popUpAddFile" class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/3  p-1  font-poppins font-bold  rounde-lg cursor-pointer ">
  <div class="w-full  flex p-1 justify-center items-cente">
    <svg @click="popUpAddFile=false" class="w-8 h-8 fill-blue-500 hover:scale-110 hover:fill-red-500  hover:bg-blue-500 transition-all duration-300 bg-red-500 rounded-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
  </div>
  <div class="w-full  rounded-lg bg-white">
    <TextEditor :form="form" :files="files"  text="Veuillez donner le fichier d'uthorisation signee"/>
  </div>
  <div  class="w-full py-2 flex justify-center items-center  ">
    <button @click="apllySignature" class=" envoyer bg-blue-500 w-full p-2 rounded-sm hover:bg-white hover:text-black text-white hover:ring hover:ring-blue-300 shadow-xl"> confirmer</button>
  </div>
  
</div>  

            <!------------------------------------------------>

            
            <!---------------------------------------------------------->
        
        
        </div>
        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth,getNoneSignedAuth,getNoneSignedMain} from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import presidentService from '../Services/presidentService'
import TextEditor from '../components/texteditor.vue'
import { gsap } from 'gsap'
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        const now = new Date()
        const dataLoaded = ref(false)
        let autorisations = ref([])
        const nbreSigned = ref()
        /*************************** */
        let popUpAddFile=ref(false);
        let demande=ref({});
        let files=ref([]);
        let selectedOne=ref({});
       
        let form= new FormData();

        /**************************** */
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
                autorisations.value = await getNoneSignedMain()
                nbreSigned.value = autorisations.value.length;
                dataLoaded.value =  true
            }

        })
        /******** to be copy****** */
        let signee=(auth)=>{
            selectedOne.value=auth;
            popUpAddFile.value=true;

        }
        /************************* */
let apllySignature=async()=>{
  if( files.value.length!=0){
  gsap.timeline()
  .to('.envoyer',.05,{xPercent:10})
  .to('.envoyer',.05,{xPercent:0,})
  .to('.envoyer',.05,{xPercent:-10})
  .to('.envoyer',.05,{xPercent:0})
  .call(async ()=>{
    console.log(selectedOne.value)
    /* await descisionService.sendAuthorisation(form,'autorisation',router); */
   /*  await commissionService.inviteCommission(form,typeFile.value,choosenCommission.value,router);  */
   presidentService.signeeMainLevee(form,selectedOne.value,router);
  })
  }
else {
    gsap.timeline()
  
  .to('.envoyer',.05,{xPercent:10,background:'red'})
  .to('.envoyer',.1,{xPercent:0,background:'red'}) 
  .to('.envoyer',.05,{xPercent:-10,background:'red'})
  .to('.envoyer',.05,{xPercent:0,background:'blue'})
  .call(()=>{
   /*  console.log(' no selections'); */
  })
  }
 
}
/************************* */

        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
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


