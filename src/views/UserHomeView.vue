<template>
  <div id="zero" class="bg-white flex   overflow-hidden s font-poppins ">
<div class=" w-screen h-screen flex-shrink-0 c font-poppins text-4xl  grid grid-cols-9">
  <div class=" col-span-3  grid grid-rows-3">
    <img  class=" row-span-2" src="../assets/images/logoCommune-removebg-preview.png"/>

    <div class="row-span-1 flex  justify-center items-center p-5  gap-3">
        <router-link to="/register">
            <button class=" bg-black text-white rounded-lg p-2 w-full text-base hover:bg-white hover:ring-2 hover:ring-blue-500 hover:text-black transition duration-200  ">Créez un compte</button>
        </router-link>
        <router-link to="/login">
          <button class=" bg-black text-white rounded-lg p-2 w-full text-base hover:bg-white hover:ring-2 hover:ring-blue-500 hover:text-black transition duration-200  "> log in</button>
        </router-link>
        
    
      
    </div>
   
  </div>
  <div class=" col-span-1 flex flex-col gap-4 justify-center items-center h-full p-2">
   
    <div class="vt flex justify-center text-black items-center  font-doted text-2xl font-semibold h-1/4  rotate-180 origin-center  hover:after:scale-y-100  p-4">SECTIONS</div>

    <div class=" font-quicksand cursor-pointer  flex flex-col justify-between text-lg h-full gap-1 items-center py-4  border-r-2 border-r-slate-300  w-fit" >
      <p ref="#1" class="vt nv p-1 relative  after:absolute after:bottom-0 rotate-180 origin-center  hover:after:scale-y-100 after:bg-slate-500  after:-translate-x-1/2  after:left-0 after:z-20 after:h-full after:scale-y-0  after:w-[2px]  after:transition-all after:duration-300 ">À propos</p>
      <p ref="#2" class="vt nv p-1 relative  after:absolute after:bottom-0 rotate-180 origin-center  hover:after:scale-y-100 after:bg-slate-500  after:-translate-x-1/2  after:left-0 after:z-20 after:h-full after:scale-y-0  after:w-[2px]  after:transition-all after:duration-300 "> Avantage</p>
      <p ref="#3" class="vt nv p-1 relative  after:absolute after:bottom-0 rotate-180 origin-center  hover:after:scale-y-100 after:bg-slate-500  after:-translate-x-1/2  after:left-0 after:z-20 after:h-full after:scale-y-0  after:w-[2px]  after:transition-all after:duration-300 ">ca marche ?</p>
      <p ref="#4" class="vt nv p-1 relative  after:absolute after:bottom-0 rotate-180 origin-center  hover:after:scale-y-100 after:bg-slate-500  after:-translate-x-1/2  after:left-0 after:z-20 after:h-full after:scale-y-0  after:w-[2px]  after:transition-all after:duration-300 "> Contact</p>
    </div>
   <!---
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m19 12-7-6v5H6v2h6v5z"></path></svg>
  
  -->

  </div>
  <div class=" col-span-2   flex flex-col justify-start items-center px-2">
<div class="text-xl  flex flex-col justify-center items-center ">
  <div class="w-full flex item-end justify-start ">
    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(59,130,246,.5) ;transform: ;msFilter:;"><path d="m15.203 6.98.804-.161V4h-1c-2.784 0-4.906.771-6.309 2.292C6.81 8.34 7 10.97 7.006 11v8a1 1 0 0 0 1 1h7c1.103 0 2-.897 2-2v-7a1 1 0 0 0-1-1h-4.079c.022-.402.123-.912.429-1.396.509-.801 1.466-1.347 2.847-1.624z"></path></svg>

  </div>
  <p class="px-3">Cette plateforme est un service offert par la commune d'Agadir
                qui vous permet de soumettre vos demandes en ligne de manière
                pratique et efficace<span class="bg-blue-500 text-4xl block rounded-full w-5 h-5 opacity-50" ></span></p>
                <div class="w-full flex item-end justify-end ">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(59,130,246,.5) ;transform: ;msFilter:;"><path d="M8.804 17.02 8 17.18V20h1c2.783 0 4.906-.771 6.309-2.292C17.196 15.66 17.006 13.03 17 13V5a1 1 0 0 0-1-1H9c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h4.078a2.89 2.89 0 0 1-.429 1.396c-.507.801-1.464 1.347-2.845 1.624z"></path></svg>
        </div>
              </div>
<div class=" w-full h-full flex justify-end items-end">
   <svg class="" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 50 L 90 50 M 90 50 L 75 35 M 90 50 L 75 65" stroke="black" stroke-width="2"/>
</svg>
</div>

  </div>
  <div class=" col-span-3  relative  p-2 overflow-hidden">
  <div class=" imgdiv  flex w-full  h-1/2 absolute top-1/2 left-0   -translate-y-1/2  items-center justify-center p-2"><img class=" w-full h-full rounded-lg imgs " src="../assets/images/firstImg.jpeg"/></div>
  <div class=" imgdiv  flex w-full  h-1/2 absolute top-1/2 left-0   -translate-y-1/2  items-center justify-center p-2"><img class=" w-full h-full rounded-lg imgs " src="../assets/images/secondImg.jpeg"/></div>
  <div class=" imgdiv  flex w-full  h-1/2 absolute top-1/2 left-0   -translate-y-1/2  items-center justify-center p-2"><img class=" w-full h-full rounded-lg imgs " src="../assets/images/thirdImg.jpeg"/></div>
  <div class=" imgdiv  flex w-full  h-1/2 absolute top-1/2 left-0   -translate-y-1/2  items-center justify-center p-2 "><img class=" w-full h-full rounded-lg imgs " src="../assets/images/fourthImg.jpeg"/></div>
  <div  class=" hider  flex bg-white   w-full  h-1/2 absolute top-0 left-0    items-center justify-center p-2 "></div>
  </div>
</div>
<section id="uno" class="pg w-screen h-screen flex-shrink-0 c font-poppins overflow-hidden  grid grid-cols-10">

<div class="trig vt  col-span-1  flex justify-center items-center  h-full relative">
  <div class=" z-50 vtp  col-span-1 p-2 font-quicksand absolute  top-full text-center flex  gap-2 justify-center  items-center h-full">
    <div class="w-1 h-1/6 bg-black "></div>
  <p class=" text-6xl ">À PROPOS</p>
   <div class="w-1 h-1/6 bg-black"></div>
  </div>

</div>
<div class="  col-span-9 grid grid-row-6">
<div  class=" row-span-2 bg-white flex justify-center items-center">
  <div class="w-full flex items-center justify-center ">
     
    <p class=" text-8xl font-poppins text-blue-500 "> La commune d'Agadir<span>.</span></p></div>
</div>
<div  class="  row-span-2 500  items-center  grid grid-cols-6">
  <div class=" col-span-2 500 flex justify-center items-center relative ">
    <div class="hp  absolute top-0 left-0 w-full h-full bg-slate-200 "></div>
    <p class=" text-center font-poltawski  text-xl ">Le processus de traitement des demandes  est souvent long et fastidieux<span class="text-5xl font-quicksand text-blue-700">?</span></p></div>


</div>
<div class="  row-span-2   grid grid-cols-6">
  <div class=" col-span-2  "></div>
  <div class=" col-span-4  flex justify-center items-center text-xl font-poppins relative">
     
    <div class="hp absolute top-0 left-0 w-full h-full bg-slate-300 "></div>
    <p>
      <span class="text-7xl text-blue-700 font-poppins">IL </span>nécessite la rédaction de nombreux formulaires et la collecte de documents officiels, ce qui peut prendre beaucoup de temps et engendrer des frais supplémentaires pour les déplacements et les copies. Ce site web a pour objectif de simplifier cette procédure en offrant une solution numérique.
    </p>
  </div>


</div>

</div>

</section>
<section id="dos" class= "  pg w-screen h-screen flex-shrink-0 c font-poppins   grid grid-cols-10">


  <div class="trig2 vt  col-span-1  flex justify-center items-center  h-full relative">

  <div class=" z-50 vtp2  col-span-1 p-2 font-quicksand absolute  top-full  text-center flex  gap-2 justify-center  items-center h-full">
    <div class="w-1 h-1/6 bg-black "></div>
  <p class=" text-6xl ">AVANTAGE</p>
   <div class="w-1 h-1/6 bg-black"></div>
  </div>
  </div>






  <div class="  trig3 col-span-9 grid grid-cols-10">

    <div class=" col-span-3     flex flex-col  p-5">
            <p @click="chooseTransition(0)" :class="` ${indexo==0 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"><svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  Le suivi en temps réel<span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300  text-6xl text-blue-600  font-poppins">.</span></p> 
            <p @click="chooseTransition(1)" :class="` ${indexo==1 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  La sécurité                 <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p> 
            <p @click="chooseTransition(2)" :class="` ${indexo==2  ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  La communication facilitée  <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p>   
            <p @click="chooseTransition(3)" :class="` ${indexo==3 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  La flexibilité              <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p> 
            <p @click="chooseTransition(4)" :class="` ${indexo==4 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  Gain de temps               <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p> 
            <p @click="chooseTransition(5)" :class="` ${indexo==5 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  Économie de papier          <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p> 
            <p @click="chooseTransition(6)" :class="` ${indexo==6 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  Traitement rapide           <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p> 
            <p @click="chooseTransition(7)" :class="` ${indexo==7 ?'text-blue-500':'text-black'}  text-center cursor-pointer group  tavnt p-1 w-full hover:text-blue-400 hover:translate-y-1 transition-all duration-300    bg-white   text-lg font-quicksand flex justify-start items-center`"> <svg width="55" height="10"><rect x="0" y="6" width="50" height="2" fill="#000" /></svg>  Suivi facile                <span class=" text-cener group-hover:scale-150 group-hover:animate-bounce  transition-all duration-300 text-6xl text-blue-600 font-poppins">.</span></p> 

    </div>
  
    
    <div class=" col-span-7">

    
      <div  class=" h-full w-ful flex items-center justify-center relative ">
    
                                    <div class="scene left-0 translate-x-1/2 absolute w-60 h-60 scale-150">
                                    
                        <div class="cube   w-60 h-60    absolute ">
                        
                                        <div class=" text-black rounded-lg  text-sm flex items-center justify-center p-4 font-poppins  w-full h-full cube_face cube_face--front"> </div>
                                        <div class=" text-black rounded-lg  text-sm flex items-center justify-center p-4 font-poppins  w-full h-full cube_face cube_face--back"> </div>
                                        <div class=" text-black rounded-lg  text-sm flex items-center justify-center p-4 font-poppins  w-full h-full cube_face cube_face--right"> </div>
                                        <div class=" text-black rounded-lg  text-sm flex items-center justify-center p-4 font-poppins  w-full h-full cube_face cube_face--left"> </div>
                                        <div class=" text-black rounded-lg  text-sm flex items-center justify-center p-4 font-poppins  w-full h-full cube_face cube_face--top"> </div>
                                        <div class=" text-black rounded-lg  text-sm flex items-center justify-center p-4 font-poppins  w-full h-full cube_face cube_face--bottom"> </div>
                                       
                        </div>
                        <div class=" divo  w-60 py-8  text-base  h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center ">
                          <div class="w-full  flex justify-end items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:  rgb(29,78,216,.7) ;transform: ;msFilter:;"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                          </div>
                          <div class="w-full ">{{ pIndex }}</div>
                          <div class="w-full  flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:  rgb(29,78,216,.7) ;transform: ;msFilter:;"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path></svg>
                          </div>
                          
                         </div>
                      </div>


      </div>
      <div class=" row-span-1 "></div> 





      </div>

  





</div>





</section>
<section id="tres" class= " bg-black pg w-screen h-screen grow flex-shrink-0 c font-poppins   grid grid-cols-12">


<div class=" bg-black  trig4 vt  col-span-1  flex justify-center items-center  h-full relative">

<div class=" z-50 vtp3  col-span-1 p-2 font-quicksand absolute  top-full  text-center flex  gap-2 justify-center  items-center h-full">
  <div class="w-1 h-1/6 bg-white "></div>
<p class=" text-7xl text-white">CA MARCHE</p>
 <div class="w-1 h-1/6 bg-white"></div>
</div>
</div>
<div class=" diapos  col-span-11 relative grid grid-cols-12 font-ropa text-white">
  <!----------------------------------------->
 <div class=" diapo  scale-0 opacity-0 col-span-3  grid grid-rows-2  ">
  <div class="row-span-1 flex flex-c items-center ">
<div class=" w-1/2 h-full text-6xl flex items-center justify-center  relative  after:border-4 after:border-white after:absolute after:w-1/2 after:h-1/2  after:top-1/2 after:left-1/2 after:rotate-45 after:-translate-y-1/2 after:-translate-x-1/2 "><p class="text-center">00</p></div>
<div class="  w-1/2 h-full text-6xl  flex items-center justify-center relative
  after:border-t-4 after:border-r-4 after:border-white after:absolute  after:h-1/2 after:w-1/2 after:top-0 after:left-1/2
  before:border-b-4 before:border-l-4 before:border-white before:absolute      before:h-1/2 before:w-1/2 before:top-1/2 before:left-0

">
<div class=" line absolute top-0 left-0 z-5 -translate-x-1/2  w-[4px] bg-white rounded-lg  h-0  origin-top -rotate-45"></div>
<p class="text-center z-10">CRÉER UN COMPTE</p></div>


  </div>
  <div class="row-span-1  flex items-center justify-center ">
    <div class=" w-1/2 h-full p-1 font-poppins  text-justify text-xl">
       <span class="text-blue-500 text-3xl">C </span>reate your free account or log in your  account 
       the processus is very sazy just fill in 
       with your personal information and profetional 
       in case you messing or you don't have any of required info 
       contact us<span class="text-orange-500">&gt</span> 
    </div>
    
  </div>





 </div>
   <!----------------------------------------->
   <div class=" diapo  scale-0 opacity-0 col-span-3  grid grid-rows-2  ">
  <div class="row-span-1 flex flex-c items-center ">
<div class=" w-1/2 h-full text-6xl flex items-center justify-center  relative  after:border-4 after:border-white after:absolute after:w-1/2 after:h-1/2  after:top-1/2 after:left-1/2 after:rotate-45 after:-translate-y-1/2 after:-translate-x-1/2 "><p class="text-center">01</p></div>
<div class="  w-1/2 h-full text-6xl  flex items-center justify-center relative
  after:border-t-4 after:border-r-4 after:border-white after:absolute  after:h-1/2 after:w-1/2 after:top-0 after:left-1/2
  before:border-b-4 before:border-l-4 before:border-white before:absolute      before:h-1/2 before:w-1/2 before:top-1/2 before:left-0

">
<div class=" line absolute top-0 left-0 z-5 -translate-x-1/2  w-[4px] bg-white rounded-lg  h-0  origin-top -rotate-45"></div>
<p class="text-center z-10"> CRÉER LA DEMANDE</p></div>


  </div>
  <div class="row-span-1  flex items-center justify-center ">
    <div class=" w-1/2 h-full p-1 font-poppins  text-justify text-xl">
       <span class="text-blue-500 text-3xl">A </span> près avoir créé un compte, vous serez dirigé vers la section d'accueil où vous pourrez voir vos demandes. 
       Vous pouvez modifier et supprimer n'importe quelle demande tant qu'elle n'a pas été envoyée. Il y a également un bouton "+" pour créer de nouvelles demandes et remplir un formulaire qui vous aidera avec votre demande.
       <span class="text-orange-500">&gt</span> 
    </div>
    
  </div>





 </div>
   
 <!-------------------------------->

 <div class=" diapo  scale-0 opacity-0 col-span-3  grid grid-rows-2  ">
  <div class="row-span-1 flex flex-c items-center ">
<div class=" w-1/2 h-full text-6xl flex items-center justify-center  relative  after:border-4 after:border-white after:absolute after:w-1/2 after:h-1/2  after:top-1/2 after:left-1/2 after:rotate-45 after:-translate-y-1/2 after:-translate-x-1/2 "><p class="text-center">02</p></div>
<div class="  w-1/2 h-full text-6xl  flex items-center justify-center relative
  after:border-t-4 after:border-r-4 after:border-white after:absolute  after:h-1/2 after:w-1/2 after:top-0 after:left-1/2
  before:border-b-4 before:border-l-4 before:border-white before:absolute      before:h-1/2 before:w-1/2 before:top-1/2 before:left-0

">
<div class=" line absolute top-0 left-0 z-5 -translate-x-1/2  w-[4px] bg-white rounded-lg  h-0  origin-top -rotate-45"></div>
<p class="text-center z-10">SUIVIE DE LA DEMANDE</p></div>


  </div>
  <div class="row-span-1  flex items-center justify-center ">
    <div class=" w-1/2 h-full p-1 font-poppins  text-justify text-xl">
       <span class="text-blue-500 text-3xl">A </span>fter saving your demand you'll have a table i,n your home page contains every demand and the treatement processus of it step by step and you'll stay in contact with us all the time by
        notification evry time you got a response or you messing something in your demand<span class="text-orange-500">&gt</span> 
    </div>
    
  </div>





 </div>
 <!----------------------------------->
 <div class=" diapo  scale-0 opacity-0 col-span-3  grid grid-rows-2  ">
  <div class="row-span-1 flex flex-c items-center ">
<div class=" w-1/2 h-full text-6xl flex items-center justify-center  relative  after:border-4 after:border-white after:absolute after:w-1/2 after:h-1/2  after:top-1/2 after:left-1/2 after:rotate-45 after:-translate-y-1/2 after:-translate-x-1/2 "><p class="text-center">03</p></div>
<div class="  w-1/2 h-full text-6xl  flex items-center justify-center relative
  after:border-t-4 after:border-r-4 after:border-white after:absolute  after:h-1/2 after:w-1/2 after:top-0 after:left-1/2
  before:border-b-4 before:border-l-4 before:border-white before:absolute      before:h-1/2 before:w-1/2 before:top-1/2 before:left-0

">
<div class=" line absolute top-0 left-0 z-5 -translate-x-1/2  w-[4px] bg-white rounded-lg  h-0  origin-top -rotate-45"></div>
<p class="text-center z-10">CONTACT</p></div>


  </div>
  <div class="row-span-1  flex items-center justify-center ">
    <div class=" w-1/2 h-full p-1 font-poppins  text-justify text-xl">
       <span class="text-blue-500 text-3xl">Y</span> ou can contact us every time you have a question or a problem with your demand in this plateform or by email o call <span class="text-orange-500">&gt</span> 
        <div class=" w-full flex justify-center items-center gap-2 p-2">
          <button class="w-1/2 border transition-all duration-300  hover:bg-white rounded-md p-2 border-white bg-blue-500 flex items-center  justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg></button>
          <button class="w-1/2 border transition-all duration-300  hover:bg-white rounded-md p-2 border-white bg-blue-500 flex items-center  justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.793 5.793-4.5 4.5 1.414 1.414 4.5-4.5L21 10V3h-7z"></path><path d="M16.422 13.446a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.516a1 1 0 0 0-1.391-.087L3.299 5.29a.996.996 0 0 0-.291.648c-.015.25-.301 6.172 4.291 10.766 4.006 4.006 9.024 4.299 10.406 4.299.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path></svg></button>
        </div>
       
      </div>
    
  </div>





 </div>
 <!----------------------------------------->
 </div>






</section>



















<section id="quatro" class="pg w-screen h-screen flex-shrink-0 c font-poppins text-4xl grid grid-cols-9 bg-lime-500">SAFI SALINA ALHBILA SALA SHOW</section>


</div>

</template>


<style scoped>
html {
  scroll-behavior: smooth;
}


#tres{
  width:200vw;
}
.vt{
  writing-mode: vertical-rl;
}

/* */

.scene {

 
 
  perspective: 400px;
}

.cube {
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);

}

/* .go-front  { transform: translateZ(-160px) rotateY(   0deg); }
.go-right  { transform: translateZ(-160px) rotateY( -90deg); }
.go-back   { transform: translateZ(-160px) rotateY(-180deg); }
.go-left   { transform: translateZ(-160px) rotateY(  90deg); }
.go-top    { transform: translateZ(-160px) rotateX( -90deg); }
.go-bottom { transform: translateZ(-160px) rotateX(  90deg); } */

.cube__face {
  position: absolute;
  background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




}

/* .cube__face--front  { background:  linear-gradient(to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2));}
.cube__face--right  { background:  linear-gradient(to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2));}
.cube__face--back   { background:  linear-gradient(to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2));}
.cube__face--left   { background:  linear-gradient(to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2));}
.cube__face--top    { background:  linear-gradient(to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2));}
.cube__face--bottom { background:  linear-gradient(to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2));}
 */
.cube__face--front  { transform: rotateY(  0deg) translateZ(120px); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(120px); }
.cube__face--back   { transform: rotateY(180deg) translateZ(120px); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(120px); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(120px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(120px); }

/*.cube__face--bottom p { transform: rotateX(90deg) ; } */

 /** */
</style>

<script setup>
import { gsap,Back } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router'

gsap.registerPlugin(MotionPathPlugin,ScrollTrigger,ScrollToPlugin);
let transIndex=ref(-1);
let parag=ref([
"une fois que vous avez soumis votre demande sur la plateforme, vous pouvez facilement suivre son évolution jusqu'à ce qu'elle soit signée par le président",
"nous nous chargeons de protéger vos données personnelles en mettant en place des mesures de sécurité robustes",
"la plateforme vous permet de communiquer directement avec le service en charge de votre demande. Vous pouvez ainsi ajouter des pièces complémentaires ou récupérer les feedbacks de la commission en toute simplicité.",
 "la plateforme accepte tous types de fichiers, et vous recevrez l'autorisation signée sous forme de fichier.",
" en utilisant la plateforme, vous évitez de vous déplacer physiquement pour déposer votre demande, ce qui vous permet de gagner du temps.",
" en utilisant la plateforme, vous contribuez à réduire la consommation de papier et à préserver l'environnement.",
"la plateforme est accessible 24h/24 et 7j/7, ce qui vous permet de soumettre votre demande à tout moment.",

"grâce à la plateforme, le traitement des demandes est accéléré, ce qui vous permet d'obtenir une réponse plus rapidement.",
" en utilisant la plateforme, vous pouvez facilement suivre l'historique de toutes vos demandes, ce qui vous permet de garder une trace de l'ensemble de vos démarches."
])
let pIndex=ref(parag.value  [0]);
let indexo=ref(0);
let transactions=[
{ translateZ:-100, rotateY:   0,ease:Back,},
{ translateZ:-100, rotateY: -90,ease:Back,},
{ translateZ:-100, rotateY:-180,ease:Back,},
{ translateZ:-100, rotateY:  90,ease:Back,},
{ translateZ:-100, rotateX: -90,ease:Back,},
{ translateZ:-100, rotateX:  90,ease:Back,}
  ]

let getRandomtr=()=>{
  
  let index=Math.floor(Math.random()*transactions.length);
  while(index===transIndex.value){
    index=Math.floor(Math.random()*transactions.length);
  }
  let theRandom= transactions[index];
  transIndex.value=index;
  return theRandom; 

}

let chooseTransition =(e)=>{

  
  let t= gsap.timeline();
        
 let theRandom=getRandomtr(e);
 indexo.value=Number(e);
  pIndex.value=parag.value[indexo.value];
  t.to('.divo',.05,{opacity:0}).to('.cube',.5,theRandom).to('.divo',.5,{opacity:1},"-=0.2")
}

onMounted(()=>{
  gsap.timeline({repeat:-1,duration:5 ,}).call(()=>{
    indexo.value=++indexo.value%parag.value.length;
    pIndex.value=parag.value[indexo.value];
   gsap.timeline().to('.divo',.05,{opacity:0}).to('.cube',.5,getRandomtr()).to('.divo',.5,{opacity:1},"-=0.2");  
  })
  /*** */

  /*** */
  ScrollTrigger.defaults({
      scroller:window,  
    })
    /*** */
 
  let imgs=document.querySelectorAll('.imgs');
    let imgdiv=document.querySelectorAll('.imgdiv');
    let timgs=gsap.timeline({  yoyo: true,
    repeat: -1})
    imgs.forEach((e,i)=>{
      let container =imgdiv[imgdiv.length-i-1];
      let image=imgs[imgs.length-i-1]
    timgs
  .to('.hider',1,{height:"90%",ease:Back})
  .to(container,1.2,{opacity:0,ease:Back})
  .to('.hider',1,{height:"0%",ease:Back})
      }   ) 
      

    /* */
let pavnt=document.querySelector('.pavnt');

    /** */
 let navs=document.querySelectorAll('.nv');
window.addEventListener('click',()=>{console.log(window.scrollY,window.innerWidth)})
 navs.forEach((e,i)=>{

  e.addEventListener('click',()=>{
    
    gsap.to(window,{scrollTo:700*(i+1)})

  }

     )
  }) 

    /*** */

let t=gsap.timeline({
  scrollTrigger: {
        trigger: ".s",
        end:"+="+window.innerWidth*4,
        pin:true,
        scrub:3,
       // markers:true,
        toggleActions:"play none reverse none",
        invalidateOnRefresh: true, 
      }
      
})
t.to(".c",0.5,{
  x:-window.innerWidth*4,
})

let  ctx = gsap.context(() => {
verticalAnimation('.trig','.vtp');
verticalAnimation2('.trig2','.vtp2');
verticalAnimation3('.trig4','.vtp3');
hope('.diapos','.diapo');


})

    /*** */
 
  
    /** */
 })


 /* vertical text annimation */
 const verticalAnimation =(trig,elem)=>{

  let tp=gsap.timeline({
  scrollTrigger: {
        trigger: trig,
       start:'top top',
        
        scrub:3,
        /* markers:true, */
        immediateRender:false,
        toggleActions:"play none reverse none",
        invalidateOnRefresh: true, 
      }
      
})
tp
.to(elem,1,{top:"-10%"}).to('.hp',.5,{opacity:0,width:0},"-=0.7")


 }
 const verticalAnimation2 =(trig,elem)=>{

  let tp2=gsap.timeline({
  scrollTrigger: {
        trigger: trig,
        start:""+window.innerWidth/2,
        end:"+="+window.innerWidth/2,
       
        scrub:3,
       
        immediateRender:false,
        toggleActions:"play none reverse none",
        invalidateOnRefresh: true, 
      }
      
})
tp2
.to(elem,1,{top:"-10%"})


 }
 const verticalAnimation3 =(trig,elem)=>{

  let tp2=gsap.timeline({
  scrollTrigger: {
        trigger: trig,
        start:"+="+window.innerWidth*1.25,
       
        scrub:3,
         //markers:true,
        immediateRender:false,
        toggleActions:"play none reverse none",
        invalidateOnRefresh: true, 
      }
      
})
tp2
.to(elem,1,{top:"-10%"})


 }

 const hope =(trig,elem)=>{
  let diaps= document.querySelectorAll('.diapo');
  let lines= document.querySelectorAll('.line');
  console.log(diaps)
diaps.forEach((e,i)=>{

  let start=window.innerWidth*1.3+i*e.offsetWidth;
  let end =e.offsetWidth*0.4;
  console.log(e.offsetWidth);
  let tp3=gsap.timeline({
  scrollTrigger:{
        trigger: e,
        start:"+="+start,
        end:"+="+end,
        scrub:1,
         //markers:true,
        immediateRender:false,
        toggleActions:"play none reverse none",
        invalidateOnRefresh: true, 
      }
      
})
tp3.to(e,3,{opacity:1,scale:1}).to(lines[i],2,{height:"100vh"})

})
 }


   


 
  




 
</script>