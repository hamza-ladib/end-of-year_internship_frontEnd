<template>
    <div class="h-screen w-screen " v-if="loaded">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class="w-full ">
            <!-- the side bar -->
                <div class=" h-full">
                  <sideBarComponent :user="user" />
                </div>
             <!-- The main content -->
             <div  class="h-full  pt-9 w-full   flex flex-col items-center justify-center ">
                <div class=" heroImg  w-full p-4 bg-black  flex flex-col font-poppins items-center justify-center ">
                    <p class=" text-center text-3xl text-white"> Dashboard</p>
                   <p class=" text-center text-base text-slate-200">Ci-dessous , vous trouvez des statistique sur votre service</p>
                </div>
                 <div class=" w-full  flex flex-col ">
                    <!----  all statics--->
                      <div  class=" pl-16 w-full  p-4 flex flex-wrap gap-4">
                        <div v-for="st in statics"  class=" flex flex-wrap gap-4 ">
                        <StaticsCard :statics="st"/>
                        </div>


                </div>
                        <div class=" pl-16  w-full  flex flex-wrap ">
                        <div v-for="g in grafes" class="w-fit p-2">
                          <StaticsGraph :statics="g"/>
                        </div>
                       
                      
                        </div> 






                       
                    
                
 <!---- end   all statics--->

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
/** place of service file  */
/* import serviceTech from '../services/serviceTechService' */
import { accessToken_state, isUserAuth} from '../Services/service'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import { loadRouteLocation, useRouter } from 'vue-router';
import  StaticsCard from '../components/dashboardCard.vue'
import  StaticsGraph from '../components/dashboardGraph.vue'
import DashbordStatics from '../Services/dashboardService'
/**** dakchi dyalk  */
/* import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue' */
      /*   const expired_RefreshToken = "";
        const expired_AccessToken = "localStorage.getItem('expiredAccessToken')"
        const refreshToken = "localStorage.getItem('refreshToken')"
      */
        const now = new Date() 
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const router = useRouter()
        const user = ref({})
        let myName=ref('hello');
        let loaded=ref(false);
/******************************** */
/********** statistics ********* */
let cards= reactive([])
let number_demandes=ref(50);
let number_commissions=ref(100);
let statics=ref([]);
let grafes=ref([]);
let allSttatics=ref();
/******************** */
   onMounted(async()=>{


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
                } }




























    allSttatics.value=await DashbordStatics.getallStatics();
/*     console.log(allSttatics.value,'rr') */
    
  
   /****  demandes **  */
let dmdArray=allSttatics.value.demandes;
let cmntArray=allSttatics.value.comments;
let fileArray=allSttatics.value.files;
let userArray=allSttatics.value.users;
console.log(dmdArray,"dmd")
console.log(cmntArray,"cmnt")
console.log(fileArray,"file")
console.log(userArray,"user")
////////// graphes for demandes ///////////
let map = new Map();
for(let i=1;i<13;i++){
  map.set(i,0);
}
console.log(map)
for(let dmd of dmdArray){
  /* console.log(dmd.createdAt) */
let nb=Number(dmd.createdAt.substring(5,7));
  /* console.log(nb,"ddddddd ") */
 /*  console.log(nb) */
  if(map.has(nb))
  map.set(nb,map.get(nb)+1);
}
console.log(map.values())
// ----------------------------------------------------------------------------------------------
grafes.value.push({
 color: new Array(12).fill("#312e81"),
 xAxis:['January','February','March','April','May','June','July','August','September','October','November','December'],
 yAxis:[...map].map(x=>x=""+x[1])
})
/* console.log(dmdArray.filter(x=>{return x.etat!="terminer" && x.etat!="classer"}).length,"zert")
console.log(dmdArray.filter(x=>{return x.etat=="classer"}).length/dmdArray.length,"zert")
console.log(dmdArray.filter(x=>{return x.etat=="terminer"}).length/dmdArray.length,"zert") */
 statics.value.push(
  {
  id:1,
  main_number:dmdArray.length,
  main_style :'bg-white shadow-lg',
  main_title:' nombre des demandes',
    childs:[
      {
        title:"en attente",
        prcent:(dmdArray.filter(x=>{return x.etat!="terminer" && x.etat!="classer"}).length/dmdArray.length),
        style1:"#fbbf24",
        style2:"#44403c"
      },
      {
        main_style :'bg-amber-300',
      title:"archiver",
        prcent:(dmdArray.filter(x=>{return x.etat=="classer"}).length/dmdArray.length),
        style1:"#fbbf24",
        style2:"#44403c"
      },
      {
        main_style :'bg-amber-300',
      title:"autorizer",
        prcent:(dmdArray.filter(x=>{return x.etat=="terminer"}).length/dmdArray.length),
        style1:"#fbbf24",
        style2:"#44403c"
      },
    ]

},
{
  id:2,
  main_number:fileArray.filter(x=>x.typeFichier=="authorisations").length,
  main_style :'bg-white shadow-lg',
  main_title:' nombre des autorisation',
    childs:[
      {
        title:"signee",
        prcent:fileArray.filter(x=>{return x.typeFichier=="authorisations" && x.isSigned=='true'}).length/fileArray.filter(x=>x.typeFichier=="authorisations").length,
        style1:"#fbbf24",
        style2:"#44403c"
      },
      {
        main_style :'bg-amber-300',
      title:"non signee",
      prcent:fileArray.filter(x=>{return x.typeFichier=="authorisations" && x.isSigned!='true'}).length/fileArray.filter(x=>x.typeFichier=="authorisations").length,
        style1:"#fbbf24",
        style2:"#44403c"
      },
    ]

},
{
  id:3,
  main_number:new Set(cmntArray.map(x=>x.demandeId)).size,
  main_style :'bg-white shadow-lg',
  main_title:' nombre des comission',
    childs:[
      {
        title:"pas encour de descision",
        prcent:cmntArray.filter(x=>x.sujet=='').length/cmntArray.length,
        style1:"#fbbf24",
        style2:"#44403c"
      },
      {
        main_style :'bg-amber-300',
      title:" representant donnez descision",
      prcent:cmntArray.filter(x=>x.sujet!='').length/cmntArray.length,
        style1:"#fbbf24",
        style2:"#44403c"
      },
    ]

},



{
  id:4,
  main_number:userArray.length,
  main_style :'bg-white-300 shadow-lg',
  main_title:' nombre des utilisateur',
    childs:[
      {
        title:"verifier ",
        prcent:userArray.filter(x=>x.emailVerified==true).length/userArray.length,
        style1:"#fbbf24",
        style2:"#44403c"
      },
      {
        main_style :'bg-amber-300',
      title:" non verifie",
      prcent:userArray.filter(x=>x.emailVerified!=true).length/userArray.length,
        style1:"#fbbf24",
        style2:"#44403c"
      },
    ]

},





) 
setTimeout(()=>{
   loaded.value=true;
    },100)
})
/*************** */
   
/*** end of fct ** */
        const logOutFunction = async () => {
        }
</script>

<style scoped>

.heroImg {
    background-image: url('../assets/images/Hero_image.png');
    background-repeat: no-repeat;
    background-size: cover;
   
}
  /****** */

</style>

