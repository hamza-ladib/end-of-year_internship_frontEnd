<template>
    <div class=" h-full w-full">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />
        <div class=" relative">
            <!-- the side bar -->
            <div class=" h-full">
                <sideBarComponent :user="user" />
            </div>
            <!-- The main content -->
            <div class=" h-full pl-12 pt-9">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Les Décisions de la
                            demande</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Ci-joint, vous trouverez les décisions prises par les représentants concernant la demande.</p>
                    </div>
                </div>
                <div class=" pt-9 bg-gradient-to-b from-slate-50 to-slate-200">
                    <div class="flex justify-end mr-4">
                        <button type="button" @click="toggleForm = !toggleForm"
                            class=" transition-all duration-300 group  gap-5 text-white bg-[#2557D6] hover:bg-white hover:text-black hover:ring hover:ring-blue-600  focus:outline-none font-poppins rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            Ajouter une décision finale
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                class=" transition-all  group-hover:animate-bounce uration-300 w-6 h-6 fill-white group-hover:fill-black">
                                <path
                                    d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z">
                                </path>
                                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
                            </svg>
                        </button>
                    </div>

                    <!--Message afficher si le message a été ajouter avec success-->
                    <transition name="fade">
                        <div class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-6 border-green-400 border-2"
                            v-if="showError">
                            <p class="text-green-400 font-bold text-lg">
                                Votre décision a été ajouté avec succès.</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4" size="xl"
                                @click="hideAlert" />
                        </div>
                    </transition>
                    <!----------------------------------------------------------------------->

                    <transition name="fade">
                        <div class="  font-poppins text-base  justify-between items-center mt-4 px-4 mx-24 py-6 bg-white rounded-lg border-2 flex flex-col"
                            v-if="start && REPRESENTANTS.length>0" >
                            <div class="font-poppins flex flex-col gap-2 font-bold text-center p-1 text-red-500">
                                Les représentants avec l'adresse e-mail n'ont pas donné leur décision.
                                <button @click="senMail" class="flex justify-center items-center gap-2 w-full bg-red-100 p-2 rounded-lg "> 
                                     Envoyer un e-mail pour les informer  ?
                                     <svg  class="w-8 h-8  animate-bounce fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="m17.284 3.707 1.412-1.416 3.01 3-1.413 1.417zm-10.586 0-2.99 2.999L2.29 5.294l2.99-3zM12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9 9-4.121 9-9-4.121-9-9-9zm1 14h-2v-2h2v2zm0-4h-2V8h2v6z"></path></svg>
                                    
                                    </button></div>
                            <p v-for=" r in REPRESENTANTS" class=" font-bold text-lg flex flex-col justify-center items-center w-full gap-2">
                                <div v-if="r==PATRIMOINE && (demande.latitude==null || demande.longitude==null)">
                                 <div>

                                    <div  class=" cursor-pointer font-poppins flex flex-col gap-2 font-bold text-center p-1 text-red-500">
                                        La demande nécessite des coordonnées géographiques.
                                <button @click="addCoordonates()"  class="flex justify-center items-center gap-2 w-full bg-red-100 p-2 rounded-lg "> 
                                    Souhaitez-vous les ajouter ?
                                    <svg  class="w-8 h-8  animate-bounce fill-red-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                                    
                                    </button></div>



                                   
                                   
                                
                                </div>
                                </div>
                                {{r}}</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer w-10 h-10 bg-red-500 flex justify-center items-center rounded-md" size="xl"
                                @click="start=false" />
                        </div>
                    </transition>








                        <!-- Pop up pour Confirmer votre décision -->
                        <transition name="fade">
                            <div class=" mt-9  mx-12 bg-gray-300 pt-8 rounded-md" v-if="showPopUp">
                                <p class=" font-bold text-lg text-center text-gray-700">Vous êtes sur le point d'ajouter une décision finale pour cette demande, êtes-vous d'accord ?</p>
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
                            <div class=" mt-9  mx-12" v-if="toggleForm">
                                <p class=" text-lg font-playfair mx-4 pr-1 w-fit relative group ">Il est maintenant temps d'inclure votre décision finale concernant la demande en cours, en tenant compte des observations des représentants.
                                <p
                                    class=" absolute w-0 group-hover:border-b-2 group-hover:border-gray-300 group-hover:w-full transition-all duration-500">
                                </p>
                                </p>
                                <div class=" py-6">
                                    <form  @submit.prevent="submitForm" class=" grid drop-shadow-2xl">
                                        <label class=" font-poppins text-base  md:text-lg ">Veuillez prendre votre décision finale avec attention :</label>
                                        <input list="décisions" name="décision" id="décision" 
                                            class="border-2 border-gray-500 rounded-md mt-2 text-gray-500 px-2 h-11 mx-4"
                                            v-model="inputData.decision" />
                                        <datalist id="décisions">
                                            <option value="autoriser"></option>
                                            <option value="non autoriser"></option>
                                        </datalist>
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

                    <div class=" py-24 px-4 lg:px-16  drop-shadow-xl   " v-if="dataLoaded">
                        <p class="text-xl font-poppins text-gray-700  px-3 w-fit border-l-2 border-blue-700"> N° de la
                            demande :</p>
                        <p class="text-sm md:text-base font-poppins mt-3 ml-12 text-blue-700 font-bold">
                            {{ demande.ref_numero }}</p>
                        <p class="text-xl font-poppins text-gray-700 px-3 w-fit border-l-2 border-blue-700 mt-6">Objet de la
                            demande :</p>
                        <p class="text-sm md:text-base font-poppins mt-3 ml-12 text-blue-700 font-bold">{{ demande.objet }}
                        </p>
                        <table class=" bg-white w-full  drop-shadow-2xl mt-12">
                            <thead>
                                <tr class="w-full border-b-2 border-gray-100 bg-gray-200">
                                    <td class=" py-2 w-1/2 text-center   text-xl font-poppins text-gray-700">
                                        La décision des représentants</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="w-full border-b-2 border-gray-100" v-for="feedback of feedbacks">
                                    <td class=" group py-2 text-center   text-sm md:text-base font-poppins flex justify-center items-center gap-2 p-1">
                                        <p class="  p-1   text-poppins font-semibold w-36 ">{{ feedback.sujet }}</p>
                                        <p class="  p-1   text-poppins font-semibold w-36 ">{{ feedback.email }}</p>
                                        <p class=" w-0  group-hover:p-1 overflow-hidden  group-hover:w-full     text-poppins font-semibold truncate transition-all duration-200">{{ feedback.message }}</p>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <!-- While loading the data -->
                <div class=" w-full" v-if="!dataLoaded">
                    <img alt="loading" src="../assets/images/loading6.gif" class=" h-1/5 w-full" />
                </div>
            </div>
            <!------------------------------------------------>
            <div v-if="popUpAddFile" class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/3  p-1  font-poppins font-bold  rounde-lg cursor-pointer ">
  <div class="w-full  flex p-1 justify-center items-cente">
    <svg @click="popUpAddFile=false" class="w-8 h-8 fill-blue-500 hover:scale-110 hover:fill-red-500  hover:bg-blue-500 transition-all duration-300 bg-red-500 rounded-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
  </div>
  <div class="w-full  rounded-lg bg-white">
    <TextEditor :form="form" :files="files"  text="Veuillez donner le fichier d'uthorisation pour le president a signe"/>
  </div>
  <div  class="w-full py-2 flex justify-center items-center  ">
    <button @click="envoyerAuthorisation" class=" envoyer bg-blue-500 w-full p-2 rounded-sm hover:bg-white hover:text-black text-white hover:ring hover:ring-blue-300 shadow-xl"> confirmer</button>
  </div>
  
</div>  

            <!------------------------------------------------>
            <div  :class="`${areYouSure?'scale-100':'scale-0'} transition-all duration-300  w-full lg:w-1/2  bg-white   absolute top-1/2 left-1/2 -translate-x-1/2 p-5 flex flex-col gap-5 items-center justify-center ring-2 ring-indigo-500 rounded-lg`">
                    <div class="w-full flex justify-end items-center   px-10 ">
                            <svg  @click="areYouSure=false"  class="w-10 h-10 fill-blue-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.001 12H4z"></path><path d="m15.707 10.707-1.414-1.414L12 11.586 9.707 9.293l-1.414 1.414L10.586 13l-2.293 2.293 1.414 1.414L12 14.414l2.293 2.293 1.414-1.414L13.414 13z"></path></svg>
                        </div>
                    <div class="w-full  flex justify-center items-center absolute top-0  -translate-y-1/2">
                                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 bg-white  border-t-2    border-indigo-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                                        </svg>
                            </div>
                            <div class="border border-red-300 rounded-lg text-2xl font-poppins py-10 p-2 flex flex-col gap-2 justify-center items-center">
                            <p class="lg:text-xl text-base  text-blue-500 font-poppins font-bold uppercase text-center"> s'il vous plait expliquer la cause de ce descision</p>
                            <p class="text-base text-gray-500 flex justify-centre items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 stroke-red-600 animate-bounce">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                     ce message s'envoyer direct au demandeur </p>
                            </div>
                            <div class=" w-full  p-2 font-poppins relative">
                                <label for="message" class="block mb-2 text-sm font-quicksand  font-bold text-gray-900 text-center "> <span class="text-blue-500 uppercase text-lg ">C</span>ommentaire </label>
                                <textarea  v-model="comment" id="message" rows="4" :class="`${emptyCmnt?'border-red-500':'border-emerald-500'}  transition-all duration-300 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none border-2  border-blue-500 `" placeholder="entrer votre commentaire..." required></textarea>
                            </div>
                            <div class="w-full p-2 flex gap-2 flex-col lg:flex-row justify-between items-center">
         <button @click="sendComment(demande,true)" class=" group relative w-full lg:w-1/2 bg-white ring-1 ring-emerald-400 rounded-md gap-2 p-2 text-center flex justify-center items-center font-poppins font-semibold">
                <div class= " absolute w-0 overflow-hidden group-focus:w-full transition-all duration-200  top-0 left-0 bg-slate-200 z-5 h-full  rounded-md" ></div>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-emerald-200 z-10 group-focus:fill-green-500 transition-all duration-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
       envoyer
    </button>
                            </div>
                   </div>
            <!------------------------------------------------>
        </div>
        <!-- Footer -->
        <footerComponent :user='user' />
    </div>
</template>

<script setup>
import { ref, onMounted, reactive,watch } from 'vue'
import { useRouter } from 'vue-router'
import TextEditor from '../components/texteditor.vue'
import { accessToken_state, isUserAuth, getDecisionsService} from '../Services/service'
import  descisionService from '../Services/descisionService'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import  gsap from 'gsap';
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        
        const router = useRouter()
        const user = ref({})
        let feedbacks = ref()
        const now = new Date()
        const showError = ref(false)
        const toggleForm = ref(false)
        const showPopUp = ref(false)
        const dataLoaded = ref(false)
        const inputData = ref({})
        let popUpAddFile=ref(false);
        let demande=ref({});
        let files=ref([]);
        let areYouSure=ref(false)
        let form= new FormData();
        let emptyCmnt=ref(true);
        let comment =ref("")
        let REPRESENTANTS=ref([]);
        let PATRIMOINE=ref("patrimoine@gmail.com");
        let PATRIEXIST=ref(false);
        let start=ref(true);
watch(comment,()=>{ emptyCmnt.value=(comment.value=="")?true:false;});
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
                    return router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return router.push('/saveDemandes')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'représentant') {
                    return await router.push('/notes')
                }
                // Si l'utilisateur est un patrimoine
                if (user.value.roles[0].name === 'Patrimoine') {
                    return await router.push('/homePatrimoin')
                }   
                 // Si l'utilisateur est un demandeur
                 if (user.value.roles[0].name=== 'demandeur') {
                    return  router.push('/home')
                }

               
                feedbacks.value = await descisionService.getDescisions(router.currentRoute.value.params.id);
                demande.value = await descisionService.getCurrentDemande(router.currentRoute.value.params.id);
                console.log(demande.value.etat)

                

                for(let des of feedbacks.value){
                   
                    let a=await descisionService.getUser(des.userId);
                                                                                                
                    if(a.email===PATRIMOINE.value){
                        PATRIEXIST.value=true;

                    }

                    

                   
                    if(des.sujet==""){
                        REPRESENTANTS.value.push(a.email);
                    }}
                    
                   // console.log(REPRESENTANTS.value,PATRIMOINE.value)
                   /* console.log(REPRESENTANTS.value,"atrimoine_communeAga@gmail.com","--------") */
                    if(!PATRIEXIST.value && demande.value.etat!="attente d"){
                      
                        REPRESENTANTS.value.push(PATRIMOINE.value)
                    }
                dataLoaded.value = true
            }

        })
        let senMail=async()=>{
            
            let mail=  await descisionService.sendMail(REPRESENTANTS.value,demande.value);
           start.value=false;

        }
        let addCoordonates=()=>{
           
           /* router.go('addCoordinate/'+demande.value.id); */
  router.push('/coordinate');
        }

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

                //submit the form
                const submitForm = () => {
            showPopUp.value = true
            toggleForm.value = false
        }
        /*************** */
        let sendComment=(demande)=>{
    if(comment.value==""){
    gsap.timeline()
    .to("#message",.1,{xPercent:50})
    .to("#message",.1,{xPercent:-50})
    .to("#message",.1,{xPercent:0})

}
else {

descisionService.sendCommenataire(demande.value,comment.value,router);
   

    areYouSure.value=false;
}
        }



/************************* */
let envoyerAuthorisation=async()=>{
  if( files.value.length!=0){
  gsap.timeline()
  .to('.envoyer',.05,{xPercent:10})
  .to('.envoyer',.05,{xPercent:0,})
  .to('.envoyer',.05,{xPercent:-10})
  .to('.envoyer',.05,{xPercent:0})
  .call(async ()=>{
    await descisionService.sendAuthorisation(form,'autorisation',router);
   /*  await commissionService.inviteCommission(form,typeFile.value,choosenCommission.value,router);  */
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















        const sendData = async () => {
  
            if(inputData.value.decision=='autoriser'){
             popUpAddFile.value=true;
            }
            else {
                areYouSure.value=true;
            }
      /*    const response = await sendDemandMain(form) */
           
                /* showError.value = true */
                showPopUp.value = false
                toggleForm.value = false
        
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


