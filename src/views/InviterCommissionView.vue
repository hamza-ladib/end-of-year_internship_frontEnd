<template>
    <div class="h-screen w-full " v-if="loaded">
        <userNavBar :user='user' :logOutFunction='logOutFunction'  />

        <div :class=" `w-full `">
            <!-- the side bar -->
                <div class=" h-full">
                    <sideBarComponent :user='user' />
                </div>
             <!-- The main content -->
             <div  class="h-full  w-full   flex flex-col items-center justify-center relative ">
              <div  class="h-full pl-12 pt-9 relative w-full ">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Inviter une commission</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Veuillez trouver ci-joint la liste des personnes que vous pouvez inviter à participer à une commission.</p>
                    </div>
                </div>
                </div>
<div class=" p-5 pl-20 w-full  grid md:grid-cols-2 grid-col-1 gap-2 h-full font-bold font-poppins text-lg bg-gradient-to-b from-slate-50 to-slate-300">
   <div class=" flex flex-col items-center justify-center col-span-1 gap-1"  >
   <div class=" w-full bg-blue-400 flex justify-between items-center text-black font-poppins  text-center border border-black p-2 rounded-lg"  v-for=" rep in allCommission" >
    <p> {{ rep.email }}</p>
    <p> {{ rep.statut }}</p>
     
     <button @click="choosedPresenter(rep)" class="rounded-lg relative group">
      <svg class="btn transition-all duration-200  fill-white stroke-2 w-8 h-8"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
    </button>
    </div>  
   </div>
   <div class=" w-full h-full col-span-1">
    <div class="w-full  p-2 ">
      <button @click="invitecommission()" class=" invite bg-blue-500 text-lg font-ropa w-full p-2 px-5 rounded-lg hover:bg-white hover:ring hover:ring-blue-600 transition-all duration-200">
        <p class=" font-bold w-full transition-all animate-bounce durantion-100" v-if="choosenCommission.length>0">inviter</p> 
        <p class=" font-bold w-full transition-all durantion-100" v-else>aucun representants selectionées</p> 
      
      </button>

    </div>
   <div :class="` overflow-hidden overflow-y-auto h-full transition-all duration-300 p-2 border-2 ${choosenCommission.length==0?'border-red-700':'border-green-500'} w-full flex flex-col items-center  justify-start  gap-1`"  >
    <div v-if="choosenCommission.length==0" class=" transition-all duration-300w-full h-full text-center flex justify-center items-center ">
       <p class= "p-4">listes des representents selectionées</p>
      </div>
    
      <div v-else  :class="`${choosenCommission.map(x=>x.id).indexOf(rep.id)>=0?'flex pres c'+rep.id:'hidden'}  transition-all duration-100 w-full bg-blue-400  justify-between items-center text-black font-poppins  text-center border border-black p-2 rounded-lg`"  v-for=" rep in allCommission"  >

     <p> {{ rep.email }}</p>
     <p> {{ rep.statut }}</p>
     <button @click="notChoosedAnymore(rep)" class="rounded-lg relative group">
      <svg class="btn transition-all duration-200  border-red fill-white stroke-2 w-8 h-8"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </button>
    </div>
  </div>
  </div>
</div>
<div v-if="popUpAddFile" class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/3  p-1  font-poppins font-bold  rounde-lg cursor-pointer ">
  <div class="w-full  flex p-1 justify-center items-cente">
    <svg @click="popUpAddFile=false" class="w-8 h-8 fill-blue-500 hover:scale-110 hover:fill-red-500  hover:bg-blue-500 transition-all duration-300 bg-red-500 rounded-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
  </div>
  <div calass="bg-blue-500 p-5 focus:bg-yellow-500 group/g transition-all duration-200 ">
   <p @click="showOptions=!showOptions" class=" flex justify-between p-2  group-hover/g:bg-red-500 hover:bg-slate-400 items-center rounded-lg gap-2 bg-white ring ring-blue-500">{{ typeFile }}
    <svg class="w-6 h-6 fill-blue-500  cursor-pointer focus:fill-red-300" fill-blue-500 xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>  
  </p>
   <p @click="selecttypeFile('dossier de recoulement')" :class=" `transition-all duration-200  ${showOptions?'h-fit p-2  ring ring-green-500 ':'h-0'}  overflow-hidden  flex hover:bg-green-300  justify-between   items-center rounded-lg gap-2 bg-white `"> dossier de recoulement
  <svg class="w-6 h-6 fill-green-500 cursor-pointe" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path></svg>
  </p>
   <p @click="selecttypeFile('autorisation')" :class=" `transition-all duration-200   ${showOptions?'hfit p-2 ring ring-green-500  ':'h-0'}  overflow-hidden  flex hover:bg-green-300   justify-between   items-center rounded-lg gap-2 bg-white `">autorisation
  <svg class="w-6 h-6 fill-green-500 cursor-pointe" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path></svg>
  </p>  
  </div>
  <div class="w-full py-2 rounded-lg">
    <TextEditor :form="form" :files="files"  text="Veuillez donner le fichier d'inviation de commission"/>
  </div>
  <div  class="w-full py-2 flex justify-center items-center  ">
    <button @click="envoyerComission" class=" envoyer bg-blue-500 w-full p-2 rounded-sm hover:bg-white hover:text-black text-white hover:ring hover:ring-blue-300 shadow-xl"> confirmer</button>
  </div>
  
</div>             
</div>
        </div>
      <!-- Footer -->
       <footerComponent /> 
    </div>
  

</template>

<script setup>
import { ref, onMounted, reactive,watch } from 'vue'
import gsap from 'gsap';
import Filter from '../components/filter.vue'
import serviceTech from '../Services/serviceTechService'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import commissionService from '../services/comissionService';
import { useRouter } from 'vue-router';
import { loadRouteLocation } from 'vue-router';
import { accessToken_state, isUserAuth } from '../Services/service'
import TextEditor from '../components/texteditor.vue'
/** dakchi dyalk  */
/* import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue' */
      /*   const expired_RefreshToken = "";
        const expired_AccessToken = "localStorage.getItem('expiredAccessToken')"
        const refreshToken = "localStorage.getItem('refreshToken')"
       
    
/******* */
const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const now = new Date() 
const router = useRouter()
/** */
   let loaded = ref(false);
   let demande = ref({});
   let allCommission=ref([]);
   let choosenCommission=ref([]);
   const user = ref({})
   let showOptions=ref(false);
   let typeFile=ref('objectif de la commission');
   let files=ref([]);
   let form= new FormData();
   let popUpAddFile=ref(false);

//////////////////////////
 
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
          demande = await commissionService.getDemand();
          allCommission= await commissionService.getallrepres();
         /*  console.log("all",allCommission) */

          loaded.value=true;
              }

        })
/*** */
let choosedPresenter=(pres)=>{
  if(choosenCommission.value.map(x=>x.id).indexOf(pres.id)<0)
  choosenCommission.value.push(pres)
};
let notChoosedAnymore=(pres)=>{
  if(loaded.value){
    let elem=".c"+pres.id;
  gsap.timeline()
  .to(elem,.2,{xPercent:100,opacity:0,background:'red'})
  .call(()=>{
    choosenCommission.value=choosenCommission.value.filter(p=>p.id!=pres.id);
  })
  }
};
/*** invite  **/
let envoyerComission=async()=>{
  if(typeFile.value!="objectif de la commission" && files.value.length!=0){
  gsap.timeline()
  .to('.envoyer',.05,{xPercent:10})
  .to('.envoyer',.05,{xPercent:0,})
  .to('.envoyer',.05,{xPercent:-10})
  .to('.envoyer',.05,{xPercent:0})
  .call(async ()=>{
    await commissionService.inviteCommission(form,typeFile.value,choosenCommission.value,router); 
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
/// nvite 
let invitecommission=()=>{

  if(choosenCommission.value.length>0){
    gsap.timeline()
  .to('.invite',.05,{xPercent:10})
  .to('.invite',.05,{xPercent:0,})
  .to('.invite',.05,{xPercent:-10})
  .to('.invite',.05,{xPercent:0})
  .call(async ()=>{
   
     popUpAddFile.value=true;
  })
  }
else {
    gsap.timeline()
  
  .to('.invite',.05,{xPercent:10,background:'red'})
  .to('.invite',.1,{xPercent:0,background:'red'}) 
  .to('.invite',.05,{xPercent:-10,background:'red'})
  .to('.invite',.05,{xPercent:0,background:'transparent'})
  .call(()=>{
    /* console.log(' no selections'); */
  })
  }



}
/*** file type  */
let selecttypeFile=(val)=>{ 
 showOptions.value=false;
  typeFile.value=val;

}
            
/* end of fct ** */
        const logOutFunction = async () => {
          localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }
</script>

<style scoped>

.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
   
}


button:focus  .btn{
    
    animation:  1s leftAndBack alternate;
   
  }
  .pres{
    
    animation:  1s pres alternate;
   
  }
  @keyframes leftAndBack {
    0%{
       
        transform: scale(1);
        fill: #ef4444;
    }
    
    10%,50%{
      transform: scale(1.2);
        fill: #ef4444;
        
    }
   
    100%{
      transform: scale(1);
      fill: #ef4444;
    }
    
  }
  @keyframes pres {
    0%{
       
        transform: scale(1);
        fill: #ef4444;
    }
    
    10%,50%{
      transform: scale(1.05);
        fill: #ef4444;
        
    }
   
    100%{
      transform: scale(1);
      fill: #ef4444;
    }
    
  }
  /** */
  




  /*** */
</style>