<template>
  <!-- bg-blue-700-->
  <div
    :class="` ${show ? 'w-80 md:w-12' : ''} bg-gradient-to-t from-blue-300 to-blue-700  h-full border-x-2 fixed top-0 left-0 z-20 overflow-y-auto w-12  transition-all duration-300 md:hover:w-80 group`">
    <!-- either showing logo fom lg screens or menu/cancel for  small-->
    <div
      :class="`${show ? 'rounded-r-xl' : ''}  p-2 fixed top-0 left-0 w-12 h-12    md:group-hover:rounded-r-xl bg-gray-200   flex justify-center  items-center transition-all duration-300`">
      <img src="../assets/images/logoCommune-removebg-preview.png" class="hidden md:block bg-green rounded-full w-14 " />
      <svg v-if="show" @click="show = !show" class="lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" style="fill: rgba(29, 72, 216, 1);transform: ;msFilter:;">
        <path
          d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-4.793 9.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z">
        </path>
      </svg>
      <svg v-else @click="show = !show" class="lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" style="fill: rgba(29, 72, 216, 1);transform: ;msFilter:;">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>

    </div>
    <div class="py-9   flex flex-col  justify-center  gap-4 h-full">

      <!--- POUR LE PRESIDENT -->
      <div v-for="presidentSideElement in presidentSideElements" v-if="myRole === 'président'">
        <routerLink :to="presidentSideElement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ presidentSideElement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="presidentSideElement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>

      <!--- POUR LE bureau d'ordre -->
      <div v-for="ordreSideElement in ordreSideElements" v-if="myRole === 'bureau ordre'">
        <routerLink :to="ordreSideElement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ ordreSideElement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="ordreSideElement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>

      <!--- POUR LE demandeur -->
      <div v-for="demandeurSideEelement in demandeurSideEelements" v-if="myRole === 'demandeur'">
        <routerLink :to="demandeurSideEelement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ demandeurSideEelement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="demandeurSideEelement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>

      <!--- POUR LE representant -->
      <div v-for="representantSideElement in representantSideElements" v-if="myRole === 'représentant'">
        <routerLink :to="representantSideElement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ representantSideElement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="representantSideElement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>

      <!--- POUR LE SERVICE X -->
      <div v-for="serviceXSideElement in serviceXSideElements" v-if="myRole === 'service x'">
        <routerLink :to="serviceXSideElement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ serviceXSideElement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="serviceXSideElement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>

            <!--- POUR LE SERVICE TECHNIQUE -->
            <div v-for="serviceTechniqueSideElement in serviceTechniqueSideElements" v-if="myRole === 'Service technique'">
        <routerLink :to="serviceTechniqueSideElement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ serviceTechniqueSideElement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="serviceTechniqueSideElement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>

                  <!--- POUR LE SERVICE Patrimoine -->
                  <div v-for="patrimoineSideElement in patrimoineSideElements" v-if="myRole === 'Patrimoine'">
        <routerLink :to="patrimoineSideElement.routes">
          <div
            class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
            <p
              :class="`   ${show ? 'flex' : 'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`">
              {{ patrimoineSideElement.text }}

            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" w-8 h-8" viewBox="0 0 24 24"
              style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
              <path :d="patrimoineSideElement.icon"></path>
            </svg>
          </div>
        </routerLink>
      </div>


      <!--
        <div v-for="sideElement in sideElements" v-if="dataLoaded">
          <div v-if="sideElement.shown ==='all' || sideElement.shown === user.roles[0].name " class=" bg-red-400">
                <routerLink :to="sideElement.routes">
          <div class=" w-full p-3 flex flex-row justify-center items-center gap-2 hover:bg-gray-200 hover:text-gray-600 hover:opacity-90 transition duration-300 ease-in-out">
              <p
              :class="`   ${show?'flex':'hidden'}  md:group-hover:flex font-bold  text-white font-serif  group-hover:transition`"
            >
              {{ sideElement.text }}
             
          </p>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class=" w-8 h-8"
                viewBox="0 0 24 24"
                style="fill: rgba(255,255, 255, 0.7); transform: ; msfilter: ">
                <path :d="sideElement.icon"></path>
              </svg>
          </div>
          </routerLink>      
          </div>
        </div>
        -->

    </div>
  </div>
</template>
  
<script>
import { reactive, ref,watchEffect } from "vue";
export default {
  props: ["user"],
  setup(props) {
    let show = ref(false);

    const patrimoineSideElements = reactive([
      {
        text: "Acceuil",
        routes: "/homePatrimoin",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "Patrimoine"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z",
        shown: "all"
      },
    ])    


    const serviceTechniqueSideElements = reactive([
      {
        text: "Dashboard",
        routes: "/dashboardServiceTech",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "all"
      },
      {
        text: "Acceuil",
        routes: "/homeSTechnique",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "Service technique"
      },
      {
        text: "Ajouter une localisation",
        routes: "/coordinate",
        icon: "M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zM9.799 14.987H8v-1.799l4.977-4.97 1.799 1.799-4.977 4.97zm5.824-5.817-1.799-1.799L15.196 6l1.799 1.799-1.372 1.371z",
        shown: "Service technique"
      },
      {
        text: "Inviter une commission",
        routes: "/inviterCommission",
        icon: "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 10H7v-2h5v2zm5-4H7V8h10v2z",
        shown: "Service technique"
      },
      {
        text: "Examiner une demande",
        routes: "/demandExamine",
        icon: "M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z",
        shown: "Service technique"
        
      },
    ])    


        // element qui vont etre afficher pour le service X
        const serviceXSideElements = reactive([
      {
        text: "Dashboard",
        routes: "/dashboard",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "all"
      },
      {
        text: "Acceuil",
        routes: "/coordinate",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "service x"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z",
        shown: "all"
      },
    ])



    // element qui vont etre afficher pour le président
    const presidentSideElements = reactive([
      {
        text: "Dashboard",
        routes: "/dashboardPresident",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "all"
      },
      {
        text: "Acceuil",
        routes: "/president",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "président"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z",
        shown: "all"
      },
      {
        text: "Autorisation",
        routes: "/autorisation",
        icon: "M8 12.052c1.995 0 3.5-1.505 3.5-3.5s-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5 1.505 3.5 3.5 3.5zM9 13H7c-2.757 0-5 2.243-5 5v1h12v-1c0-2.757-2.243-5-5-5zm11.294-4.708-4.3 4.292-1.292-1.292-1.414 1.414 2.706 2.704 5.712-5.702z",
        shown: "président"
      },
      {
        text: "Convocations",
        routes: "/convocation",
        icon: "M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z",
        shown: "président"
      },
      {
        text:"Main levée",
        routes: "/mainlevee",
        icon: "M17.004 5H9c-1.838 0-3.586.737-4.924 2.076C2.737 8.415 2 10.163 2 12c0 1.838.737 3.586 2.076 4.924C5.414 18.263 7.162 19 9 19h8v-2H9c-1.303 0-2.55-.529-3.51-1.49C4.529 14.55 4 13.303 4 12c0-1.302.529-2.549 1.49-3.51C6.45 7.529 7.697 7 9 7h8V6l.001 1h.003c.79 0 1.539.314 2.109.886.571.571.886 1.322.887 2.116a2.966 2.966 0 0 1-.884 2.11A2.988 2.988 0 0 1 17 13H9a.99.99 0 0 1-.698-.3A.991.991 0 0 1 8 12c0-.252.11-.507.301-.698A.987.987 0 0 1 9 11h8V9H9c-.79 0-1.541.315-2.114.889C6.314 10.461 6 11.211 6 12s.314 1.54.888 2.114A2.974 2.974 0 0 0 9 15h8.001a4.97 4.97 0 0 0 3.528-1.473 4.967 4.967 0 0 0-.001-7.055A4.95 4.95 0 0 0 17.004 5z",
        shown: "président"
      },
    ])

    // element qui vont etre afficher pour le bureau d'ordre 
    const ordreSideElements = reactive([
      {
        text: "Acceuil",
        routes: "/saveDemandes",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "bureau ordre"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z",
        shown: "all"
      },
      {
        text: "Ajouter un utilisateur",
        routes: "/adduser",
        icon: "M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z",
        shown: "bureau ordre"
      },
      {
        text: "Utilisateurs",
        routes: "/users",
        icon: "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z",
        shown: "bureau ordre"
      },
    ])

    // element qui vont etre afficher pour le demandeur 
    const demandeurSideEelements = reactive([
      {
        text: "Acceuil",
        routes: "/home",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "demandeur"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z",
        shown: "all"
      },
      {
        text: "Profil",
        routes: "/profile",
        icon: "M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z",
        shown: "demandeur"
      },
      {
        text: "Demandes",
        routes: "/home",
        icon: "M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z",
        shown: "demandeur"
      },
      {
        
        text: "Ajouter une demande",
        routes: "/createDemande",
        icon: "M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zM8 14h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z",
        shown: "demandeur"
      },
      {
        text: "dossier de recolement",
        routes: "/dossierRocolement",
        icon: "M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zM8 14h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z",
        shown: "demandeur"
      },
      {
        text: "Main levée",
        routes: "/demandeMain",
        icon: "M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z",
        shown: "demandeur"
      },
    ])

    // element qui vont etre afficher pour le representant 
    const representantSideElements = reactive([
      {
        text: "Acceuil",
        routes: "/notes",
        icon: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z",
        shown: "représentant"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z",
        shown: "représentant"
      },
      {
        text: "Mes Décisions",
        routes: "/notes",
        icon: "M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8a.996.996 0 0 0 .707-.293l7-7a.997.997 0 0 0 .196-.293c.014-.03.022-.061.033-.093a.991.991 0 0 0 .051-.259c.002-.021.013-.041.013-.062V5c0-1.103-.897-2-2-2zM5 5h14v7h-6a1 1 0 0 0-1 1v6H5V5zm9 12.586V14h3.586L14 17.586z",
        shown: "représentant"
      },
    ])

    const sideElements = reactive([
      {
        text: "Dashboard",
        routes: "/dashboard",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "all"
      },
      {
        text: "Acceuil",
        routes: "/home",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "demandeur"
      },
      {
        text: "Acceuil",
        routes: "/saveDemandes",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "bureau ordre"
      },
      {
        text: "Acceuil",
        routes: "/president",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "président"
      },
      {
        text: "Contact",
        routes: "/contact",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "all"
      },
      {
        text: "Profile",
        routes: "/profile",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "demandeur"
      },
      {
        text: "Autorisation",
        routes: "/autorisation",
        icon: "M8 12.052c1.995 0 3.5-1.505 3.5-3.5s-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5 1.505 3.5 3.5 3.5zM9 13H7c-2.757 0-5 2.243-5 5v1h12v-1c0-2.757-2.243-5-5-5zm11.294-4.708-4.3 4.292-1.292-1.292-1.414 1.414 2.706 2.704 5.712-5.702z",
        shown: "président"
      },
      {
        text: "Convocations",
        routes: "/convocation",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "président"
      },
      {
        text: "Mains levées",
        routes: "/mainlevee",
        icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
        shown: "président"
      },
      {
        text: "Demandes",
        routes: "/home",
        icon: "M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z",
        shown: "demandeur"
      },

      {
        text: "Ajouter une demande",
        routes: "/createDemande",
        icon: "M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z",
        shown: "demandeur"
      },
      {
        text: "Ajouter un utilisateur",
        routes: "/adduser",
        icon: "M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z",
        shown: "bureau ordre"
      },

      {
        text: "Utilisateurs",
        routes: "/users",
        icon: "M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z",
        shown: "bureau ordre"
      },

      {
        text: "Entreprise",
        routes: "/entreprise",
        icon: "M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z",
      },
      {
        text: "Organisme",
        routes: "/organisme",
        state: false,
        icon: "M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zM5 20v-8h6v8H5zm9-12h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z",
      },
      {
        text: "Role",
        routes: "/role",
        icon: "M2.5 18.5C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337v-3.488c.244.273.509.527.813.744 1.18.844 2.617 1.098 3.918 1.098.966 0 1.853-.14 2.506-.281a3.5 3.5 0 0 0 3.264 2.265c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5a3.5 3.5 0 0 0-3.404 2.718c-1.297.321-3.664.616-5.119-.426-.666-.477-1.09-1.239-1.306-2.236C8.755 7.96 9.5 6.821 9.5 5.5 9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337zm15-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 12.827 16 12s.673-1.5 1.5-1.5zm-10 8c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5zm-3-13C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5z",
      },
      {
        text: "Procès verbale",
        routes: "/pv",
        icon: "M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z",

      },
      {
        text: "Pièces jointes",
        routes: "/pièces",
        icon: "M17.004 5H9c-1.838 0-3.586.737-4.924 2.076C2.737 8.415 2 10.163 2 12c0 1.838.737 3.586 2.076 4.924C5.414 18.263 7.162 19 9 19h8v-2H9c-1.303 0-2.55-.529-3.51-1.49C4.529 14.55 4 13.303 4 12c0-1.302.529-2.549 1.49-3.51C6.45 7.529 7.697 7 9 7h8V6l.001 1h.003c.79 0 1.539.314 2.109.886.571.571.886 1.322.887 2.116a2.966 2.966 0 0 1-.884 2.11A2.988 2.988 0 0 1 17 13H9a.99.99 0 0 1-.698-.3A.991.991 0 0 1 8 12c0-.252.11-.507.301-.698A.987.987 0 0 1 9 11h8V9H9c-.79 0-1.541.315-2.114.889C6.314 10.461 6 11.211 6 12s.314 1.54.888 2.114A2.974 2.974 0 0 0 9 15h8.001a4.97 4.97 0 0 0 3.528-1.473 4.967 4.967 0 0 0-.001-7.055A4.95 4.95 0 0 0 17.004 5z",
      },
    ]);
    const myRole = ref()
    watchEffect(() => {
      if (props.user && props.user.roles && props.user.roles.length > 0) {
       return myRole.value = props.user.roles[0].name
      } 
    });


    return { show, sideElements, presidentSideElements, ordreSideElements, demandeurSideEelements, representantSideElements,myRole,serviceXSideElements,serviceTechniqueSideElements,patrimoineSideElements }
  }
}
  /*  for small devices menu*/





</script>
  
<style scoped>
::-webkit-scrollbar {
  scroll-behavior: smooth;
  width: 5px;


}

::-webkit-scrollbar-track {
  width: 10px;
  background-color: darkgray;


}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 2px;
  background-color: rgba(29, 78, 216, 0.7);

}
</style>