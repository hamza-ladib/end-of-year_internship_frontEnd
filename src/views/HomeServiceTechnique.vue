<template>
    <div class="h-screen w-screen " v-if="loaded">
        <userNavBar :user='user' :logOutFunction='logOutFunction' />

        <div class="w-full ">
            <!-- the side bar -->
                <div class=" h-full">
                    <sideBarComponent :user='user'/>
                </div>
             <!-- The main content -->
             <div  class=" h-full pl-12 pt-9 relative">
                <div class="heroImg flex justify-center pt-11 pb-9">
                    <div>
                        <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Ensemble des demandes</p>
                        <p class=" text-center pt-4 text-white font-poltawski text-sm">Veuillez trouver ci-joint toutes les demandes qui nécessitent d'être traitées.</p>
                    </div>
                </div>
                 <div class="h-full w-full p-2 flex flex-col gap-2 items-center justify-center relative bg-gradient-to-b from-slate-50 to-slate-300">
                    <!---div holding button d'ajoute-->
                   <div class="w-full   flex items-center justify-center p-2 gap-2 ">
                    <!--  filter demandes  --->
              
                <Filter @filtered="demandes = $event"  :demandes='demandes'  :categories=states  categorieFilter="etat"/>

<!--  end  filter demandes  -->

                   </div>
                    <!--- end of div holding button d'ajoute-->
                       <!---  div holding all demmandes -->
                   <div :class="`${areYouSure || view  ?'blur-xl':''} font-poppins  w-full h-full p-10 overflow-x-hidden flex flex-wrap items-center justify-center gap-5`  ">
 <!--                

 -->
 <div  v-for="(cmd,i) in demandes" :key="cmd.id" class="drop-shadow-2xl w-96 h-60  border border-black rounded-lg flex flex-col relative   card bg-white">
    <div :class="`accept${cmd.id} w-0  transition-all duration-300  h-full absolute top-0 left-0 bg-white z-[100] flex justify-center items-center overflow-hidden font-poppins font-bold text-lg`"><p>la demande est accepter avec success</p></div>
     <div class="  flex justify-between items-center w-full p-1 text-xl">
        <div class="text-blue-500 h-full p-2 font-bold ">N° &lt <span class="font-poppins text-black">{{ cmd.ref_numero}}</span> &gt</div>
        <button  @click="options[i]=!options[i]" id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100   rounded-lg text-lg p-1.5" type="button"> 
            <svg class="w-6 h-6 stroke-blue-500" aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
    </div>
    <div class="w-full  h-full  relative bg-white">
        <div class="w-full absolute top-0 left-0 flex flex-col gap-1 h-full">
       <div class="font-bold flex flex-start  items-center w-full p-2 cursor-pointer bg-slate-200  relative group/modalite">
            <svg xmlns="http://www.w3.org/2000/svg" class=" transition-all duration-300 cursor-pointer z-50  fill-blue-700 w-8 h-8 group-hover/modalite:fill-white" viewBox="0 0 24 24" ><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path></svg>
           <p class="w-full truncate  p-1">{{ cmd.modalite}}</p> 
            <p class="bg-blue-500 flex justify-center items-center z-2  absolute left-0 top-0 text-center truncate  w-0  overflow-hidden  group-hover/modalite:w-full   h-full transition-all duration-300  ">
            modalite de la demande 
        </p>
      
      
       </div>
       <div class=" flex justify-between px-2 items-center text-xl font-semibold gap-2">
        <p  class="flex  text-xl p-5 rounded-lg  bg-slate-300 justify-center items-center gap-1  truncate w-1/2 relative cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path></svg>
            {{ cmd.date_debut.substring(0,10)}}
            <p class="bg-blue-500 flex justify-center items-center  absolute left-0 top-0 text-center truncate  w-0  overflow-hidden  group-hover:w-full   h-full transition-all duration-300  ">
            date
        </p>
        </p>
            <p class="flex bgsbg-slate-300 p-5 rounded-lg gap-1 truncate w-1/2 bg-slate-200 relative cursor-pointer group ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2.06 2.06 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2 .892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A1.906 1.906 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.48 2.48 0 0 0 1.133-.281l2.399 1.963A2.077 2.077 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2-.892-2-2-2z"></path></svg>
                {{ cmd.etat}}
                <p class="bg-blue-500 flex justify-center items-center  absolute left-0 top-0 text-center truncate  w-0  overflow-hidden  group-hover:w-full   h-full transition-all duration-300  ">
            etat 
        </p>
            </p>
       </div>
       <div class="flex justify-center items-center text-xl font-semibold px-2  ">
        <p class="flex bg-slate-100 p-2  rounded-lg gap-1 truncate items-center justify-center relative cursor-pointer group ">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z"></path></svg>   
            {{ cmd.localisation }}
            <p class="bg-blue-500 flex justify-center items-center  absolute left-0 top-0 text-center truncate  w-0  overflow-hidden  group-hover:w-full   h-full transition-all duration-300  ">
                localisation
        </p>
        </p>
       </div>
    </div>
    <!---- buttons options -->
    <div :class="`  ${options[i]?'h-full':'h-0'} bg-white transition-all duration-500 overflow-hidden w-full  flex items-center justify-center absolute top-0 z-50  left-0`">
       <!--left -->
        <div @click="popUpView(cmd)" v-if="options[i]" class="w-1/3 p-1 h-full flex items-center justify-center overflow-hidden">
            <button class=" transition-all duration-200 flex gap-2 justify-center items-center p-2 font-poppins font-semibold text-lg w-fit rounded-lg bg-slate-300  group ">
                <p class="w-0 overflow-hidden group-hover:w-full transition-all duration-300 ">view</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
            </button>
        </div>
        <!----center -->
        <div  class="options  text-base flex flex-col justify-center font-poppins items-center gap-1 h-full  w-1/2 p-1">
        <div v-for="btn in buttons" @click="btn.click(cmd)" v-show="options[i] && btn.etat.includes(cmd.etat)"   :class="`w-full ${btn.bg} relative rounded-xl overflow-hidden`">

            <button  :class="btn.styleBtn">
           {{ btn.text }}
           <svg :class="btn.styleSvg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path :d="btn.svgP1"></path><path :d="btn.svgP2"></path></svg> </button>    
        </div>
        </div>
        
        <!---end center -->
    </div>
    <!-- end of btns options ---->
    </div>
 </div>

                   </div>
                    <!----- pop up  are you sure              -->
                    <div  :class="`${areYouSure?'scale-100':'scale-0'} transition-all duration-300  w-full lg:w-1/2  bg-white   absolute p-5 flex flex-col gap-5 items-center justify-center ring-2 ring-indigo-500 rounded-lg`">
                    <div class="w-full flex justify-end items-center   px-10 ">
                            <svg  @click="incompletDemande(cmd,false)"  class="w-10 h-10 fill-blue-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.001 12H4z"></path><path d="m15.707 10.707-1.414-1.414L12 11.586 9.707 9.293l-1.414 1.414L10.586 13l-2.293 2.293 1.414 1.414L12 14.414l2.293 2.293 1.414-1.414L13.414 13z"></path></svg>
                        </div>
                    <div class="w-full  flex justify-center items-center absolute top-0  -translate-y-1/2">
                                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 bg-white  border-t-2    border-indigo-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                                        </svg>
                            </div>
                            <div class="border border-red-300 rounded-lg text-2xl font-poppins py-10 p-2 flex flex-col gap-2 justify-center items-center">
                            <p class="lg:text-xl text-base  text-blue-500 font-poppins font-bold">ÊTES-VOUS SÛR DE VOULOIR CONTINUER VOTRE MODIFICATION ?</p>
                            <p class="text-base text-gray-500 flex justify-centre items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 stroke-red-600 animate-bounce">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                     toute modification que vous avez faite ne peut pas être restauré</p>
                            </div>
                            <div class=" w-full  p-2 font-poppins relative">
                                <label for="message" class="block mb-2 text-sm font-quicksand  font-bold text-gray-900 text-center "> <span class="text-blue-500 uppercase text-lg ">C</span>ommentaire </label>
                                <textarea  v-model="comment" id="message" rows="4" :class="`${emptyCmnt?'border-red-500':'border-emerald-500'}  transition-all duration-300 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none border-2  border-blue-500 `" placeholder="entrer votre commentaire..." required></textarea>
                            </div>
                            <div class="w-full p-2 flex gap-2 flex-col lg:flex-row justify-between items-center">
         <button @click="incompletDemande(TargetedDemande.value,true)" class=" group relative w-full lg:w-1/2 bg-white ring-1 ring-emerald-400 rounded-md gap-2 p-2 text-center flex justify-center items-center font-poppins font-semibold">
                <div class= " absolute w-0 overflow-hidden group-focus:w-full transition-all duration-200  top-0 left-0 bg-slate-200 z-5 h-full  rounded-md" ></div>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-emerald-200 z-10 group-focus:fill-green-500 transition-all duration-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
        oui sure 
    </button>
        <!--  <button @click="notAuthorize(cmd,false)" class=" group relative w-full lg:w-1/2 bg-white ring-1 ring-red-400 rounded-md gap-2 p-2 text-center flex justify-center items-center font-poppins font-semibold">
                <div class= " absolute w-0 overflow-hidden group-focus:w-full transition-all duration-200  top-0 left-0 bg-slate-200 z-5 h-full  rounded-md" ></div>    
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-red-200 z-10 group-focus:fill-red-500 transition-all duration-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                    </svg>
          no annuler
        </button> -->
                            </div>
                   </div>
                   <!--- end of sure pop up -->
                   <!--------- pop up view ----->
                  
                   <div class="wr9a scale-0  top-10   overflow-y-auto z-50 absolute w-full lg:w-1/2 bg-neutral-50  flex items-center justify-center rounded-lg">
                        
                        <div :class="`khtotWer9a  relative  h-fit  w-full px-5 flex flex-col  gap-5 items-center justify-start border-2 border-[#7fccd6]`">
                               <div class="text-3xl text-red-500 flex  absolute top-0 right-0 justify-center items-center ">
                                 <button @click="closeePopUpView" class="text-center font-hande w-full h-full p-2  bg-[#7fccd6] rounded-bl-lg  transition-all duration-200">X</button>
                             </div>
                 <div class="flex justify-center items-ceter  w-full p-2 text-lg font-poppins gap-2 ">
                     <p class="font-bold">referrence N° </p>
                     <p class="font-ropa font-bold text-blue-500"> &lt </p>
                     <p class="font-bold font-quicksand">{{ viewedDemand.ref_numero }}</p>
                     <p class="font-ropa font-bold text-blue-500"> &gt</p>
                 </div>

                 <div class="flex justify-center px-1  items-start flex-col   w-full   text-justify font-poppins     ">
                     <p class="font-bold text-blue-500  tracking-widest">objet :</p>
                     <p class="font-hande font-bold text-lg  pl-20 text-neutral-700  w-full p-2  text-start">{{ viewedDemand.objet }}</p>
                 </div>

                 <div class="flex justify-between gap-1 px-1  items-center   w-full    text-justify font-poppins    ">
                     <div class=" w-1/2 flex  flex-col">
                         <p class=" font-bold text-blue-500  tracking-widest">Duree :</p>
                     <p class="  font-hande font-bold text-lg   text-neutral-700  w-full p-2  text-center">{{ viewedDemand.duree }} jours</p>
                     </div>
                     <div class=" w-1/2 flex  flex-col">
                         <p class=" font-bold text-blue-500  tracking-widest">Date :</p>
                     <p class="  font-hande font-bold text-lg   text-neutral-700  w-full p-2  text-center">{{ viewedDemand.date_debut}}</p>
                      </div>
                     
                 </div>

                 <div class="flex justify-center px-1  items-start flex-col  w-full    text-justify font-poppins    ">
                     <p class="font-bold text-blue-500  tracking-widest">modalite :</p> 
                     <p class="font-hande font-bold text-lg  pl-20 text-neutral-700  w-full p-2  text-start">{{viewedDemand.modalite }}</p>
                 </div>

                 <div class="flex justify-center px-1  items-start flex-col  w-full    text-justify font-poppins    ">
                     <p class="font-bold text-blue-500  tracking-widest">localisation :</p>
                     <p class="font-hande font-bold text-lg  pl-20 text-neutral-700  w-full p-2  text-start">{{ viewedDemand.localisation }}</p>
                 </div>

                 <div class="flex justify-center px-1  items-start flex-col  w-full    text-justify font-poppins    ">
                     <p class="font-bold text-blue-500  tracking-widest">etat :</p>
                     <p class="font-hande font-bold text-lg  pl-20 text-neutral-700  w-full p-2  text-start">{{ viewedDemand.etat }}</p>
                 </div>
                 <div class="flex justify-center px-1  items-start flex-col  w-full    text-justify font-poppins    ">
                     <p class="font-bold text-blue-500  tracking-widest">descriptif :</p>
                     <p class="font-hande font-bold text-lg  pl-20 text-neutral-700  w-full p-2  text-start">{{ viewedDemand.descriptif }}</p>
                 </div>
                 <div class=" p-1 w-full flex flex-col gap-1">
                    <div class=" w-full text-start p-1 font-poppins font-base font-bold "><span class=" text-lg text-blue-500 ">F</span>ichiers disjoints</div>
                    <div v-for="up in viewedDemand.uploads" class="p-1 rounded-lg ">
                        <a :href="up.fichier" target="_blank" class=" flex gap-2 w-full rounded-lg group  justify-between border-2 border-blue-300 hover:bg-blue-500 transition-all duration-300 p-1 cursor-pointer">
                            <p class="text-base font-poppins font-semibold">{{ up.name}} </p><svg class=" group-hover:fill-white fill-blue-500 w-6 h-6" xmlns="http//www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path></svg>
                        </a>
                    </div>
                 </div>
                 </div>
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
/** place of service file  */
import serviceTech from '../Services/serviceTechService'
import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import { useRouter } from 'vue-router';
import { accessToken_state, isUserAuth } from '../Services/service'
/** dakchi dyalk  */
/* import userNavBar from '../components/userNavBar.vue'
import sideBarComponent from '../components/sideBarComponent.vue'
import footerComponent from '../components/footerComponent.vue' */

        
        const expired_RefreshToken = localStorage.getItem('expiredRefreshToken')
        const expired_AccessToken = localStorage.getItem('expiredAccessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        const now = new Date() 
        const router = useRouter()
        const user = ref({})
        let demande = reactive([])
        let myName=ref('hello');
        let loaded=ref(false);
        /** */ 
        /** are you sure pop up  */
let areYouSure=ref(false);
let view=ref(false);
let TargetedDemande=ref({})
/******* */
        /** */
        let comment=ref("");
let emptyCmnt=ref(true);
watch(comment,()=>{ emptyCmnt.value=(comment.value=="")?true:false;});
      
const states=ref(['enregistrer','accepter','incomplete','attente a','autoriser','attente d','terminer','classer']);
//                    0             1           2           3               4           5           6           7
let buttons=reactive([
    {
        etat:[states.value[0],states.value[2],states.value[7]],
        text:'accepter',
        styleBtn:" relative font-poppins font-semibold gap-2  w-full flex cursor-pointer   rounded-lg justify-between items-center  text-center  p-2 bg-slate-100",
        styleSvg:"w-6 h-6 fill-green-700",
        svgP1:"",
        svgP2:"M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-5 14.414-3.707-3.707 1.414-1.414L11 13.586l4.793-4.793 1.414 1.414L11 16.414z",
        bg:"bg-green-300",
        click:(cmd)=>{
             console.log('accepter')
            let c='.accept'+cmd.id;
            gsap.timeline()
        .to(c,0,{width:"100%"})
        .to(c,2,{width:"100%"})
        .to(c,0.1,{width:"0"})
        .call(serviceTech.acceptDemand(cmd,router))
            },
    },
    {
        etat:[states.value[3],states.value[5]],
        text:'voir decision',
        styleBtn:" relative font-poppins font-semibold gap-2  w-full flex cursor-pointer   rounded-lg justify-between items-center  text-center  p-2 bg-slate-100",
        styleSvg:"w-6 h-6 fill-blue-700" ,
        svgP1:"",
        svgP2:"M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 13H7v-2h7v2zm3-4H7V9h10v2z",
        bg:"bg-blue-300",
        click:(cmd)=>{ 
            console.log('voir decision');
            serviceTech.voirDescision(cmd,router);
        },
    },
    {
        etat:[states.value[1],states.value[4]],
        text:' commission',
        styleBtn:"relative font-poppins font-semibold gap-2  w-full flex cursor-pointer   rounded-lg justify-between items-center  text-center  p-2 bg-slate-100",
        styleSvg:"w-6 h-6 fill-yellow-700",
        svgP1:"",
        svgP2:"M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-3 16h-2v-2h2v2zm0-4h-2V6h2v8z",
        bg:"bg-yellow-300",
        click:(cmd)=>{
             console.log('comission')
            serviceTech.commision(cmd,router);
            
            },
       
    },
    {
        etat:[states.value[0]],
        text:'incomplete',
        styleBtn:"relative font-poppins font-semibold gap-2  w-full flex cursor-pointer   rounded-lg justify-between items-center  text-center  p-2 bg-slate-100",
        styleSvg:"w-6 h-6 fill-red-700",
        svgP1:"",
        svgP2:"M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm.706 13.293-1.414 1.414L12 13.415l-3.292 3.292-1.414-1.414 3.292-3.292-3.292-3.292 1.414-1.414L12 10.587l3.292-3.292 1.414 1.414-3.292 3.292 3.292 3.292z",
        bg:"bg-red-300",
        click:(cmd)=>{
            
             TargetedDemande.value=cmd;
         
             areYouSure.value=true;
             /* function of treatement is inside  incompletDemande() */            
            },
        
    },
    {
        etat:[...states.value],
        text:'classer',
        styleBtn:"relative font-poppins font-semibold gap-2  w-full flex cursor-pointer   rounded-lg justify-between items-center  text-center  p-2 bg-slate-100",
        styleSvg:"w-6 h-6 fill-violet-700",     
        svgP1:"",
        svgP2:"M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-3 16h-2v-2h2v2zm0-4h-2V6h2v8z",
        bg:"bg-violet-300",
        click:(cmd)=>{ 
            console.log('classer')
            serviceTech.ArchiveDemand(cmd,router);
        },
       
    },
]);
   

        let demandes= reactive([]);
/***malling array of options used in drop down of the options after clicking the   */
let options=ref([]);
//////////////////////////

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
                // Si l'utilisateur est un patrimoine
                if (user.value.roles[0].name === 'Patrimoine') {
                    return await router.push('/homePatrimoin')
                }                 
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return await router.push('/saveDemandes')
                }
                 // Si l'utilisateur est un demandeur
                if (user.value.roles[0].name=== 'demandeur') {
                    return  router.push('/home')
                }
            }
        
/** get all demandes ** */
demandes=await serviceTech.allDemands(); 
options.value=new Array(demandes.length).fill(false);
loaded.value=true; 
        })
/*** */

/**view pop up */
let viewedDemand=ref({});

//* for view pop up*** */
let popUpView=(cmd)=>{
         viewedDemand.value=cmd;
         viewedDemand.value.date_debut=viewedDemand.value.date_debut.substring(0,10);
         view.value=true;
        gsap.timeline()
    .to('.wr9a',0.2,{scale:1,y:50})
    .to('.wr9a',0.2,{y:-50})
}
let closeePopUpView=(answer)=>{
    gsap.timeline().to('.wr9a',0.2,{y:-50}).to('.wr9a',0.2,{scale:0,y:50}).call(()=>{view.value=false});
}
/** end pop up view */
/** for incompleted demands** */

let incompletDemande=(cmd,answer)=>{
    console.log("incomplete",cmd)
  if(answer){
    if(comment.value==""){
    gsap.timeline()
    .to("#message",.1,{xPercent:50})
    .to("#message",.1,{xPercent:-50})
    .to("#message",.1,{xPercent:0})
    }
   else {
    console.log(cmd)
    serviceTech.incmpleteDemand(TargetedDemande.value,comment.value,router);
    areYouSure.value=false;}
}
else 
    areYouSure.value=false;
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


  .options button:focus{
    
    animation:  1s leftAndBack alternate;
   
  }
  @keyframes leftAndBack {
    0%{
       
        transform: translateX(0);
        background-color: transparent;
    }
    
    10%,50%{
        transform: translateX(-50%);
        background-color: transparent;
        
    }
   
    100%{
        transform: translateX(0);
        background-color: transparent;
    }
    
  }
  /** */
  
.wr9a {box-shadow: 0 2px 8px rgba(0,0,0,.3);}

.khtotWer9a {
    
    background: linear-gradient(transparent, transparent 9px, #67e8f9 0);
    background-size: 10px 10px;
}



  /*** */
</style>