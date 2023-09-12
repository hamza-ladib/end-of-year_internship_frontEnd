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
                    <p class=" text-white font-bold text-xl sm:text-5xl font-playfair text-center">Contact</p>
                    <p class=" text-center pt-4 text-white font-poltawski text-sm">N'hésitez surtout pas à exprimer toutes les questions qui vous
                viennent à l'esprit. nous me tiens à votre disposition pour y répondre.</p>      
                    </div>

                </div>

        <!-- Formulaire pour la création des demandes-->
        <div class=" px-11 py-4 rounded-lg drop-shadow-2xl ">
            
                <transition name="fade">
                        <div class=" bg-green-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 py-6 border-green-400 border-2"
                            v-if="showError">
                            <p class="text-green-400 font-bold text-lg">
                                Votre message a été envoyé avec succès.</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer text-green-400 hover:text-gray-300 hover:opacity-50 pl-4" size="xl"
                                @click="hideAlert" />
                        </div>
                    </transition>
            <div class="mt-9">


                <div class=" sm:ml-16 mt-11 border-l-4 border-yellow-600 w-fit relative group">
                    <p class=" text-gray-600 font-bold text-lg px-4 py-1 mt-4 w-full ">
                        {{ user.email }} 
                    </p>
                    <div class=" bg-yellow-600 absolute top-0 w-0 h-full py-1 overflow-hidden group-hover:w-full transition-all duration-300 rounded-r-md">
                        <p class=" text-white font-poppins text-center  ">Email</p>
                    </div>
                </div>

                <form class=" mt-11" enctype="multipart/form-data" @submit.prevent="submitForm">
                    <div class="grid sm:px-16 ">

                        <label class=" mt-8  font-bold text-xl font-serif  p-1 border-l-4 border-gray-200 relative group w-full">
                            Sujet
                            <div class=" bg-gray-200 absolute top-0 w-0 h-full overflow-hidden group-hover:w-full transition-all duration-500 py-1 rounded-r-md">
                                <p class=" text-gray-600 font-doted text-center">Le sujet de votre message</p>
                            </div>
                        </label>

                        <input type="text" placeholder="Veuillez entrez le sujet de votre message"
                            class=" border-2 border-gray-500 rounded-md mt-4 text-gray-500 py-1 px-2 h-11 mx-4 placeholder:text-sm" v-model="formInput.sujet" />
                            
                            <label class=" mt-11  font-bold text-xl font-serif p-1 border-l-4 border-gray-200 relative group w-full">
                                Pièces jointes
                                <div class=" bg-gray-200 absolute top-0 w-0 h-full overflow-hidden group-hover:w-full transition-all duration-500 py-1 rounded-r-md">
                                <p class=" text-gray-600 font-doted text-center">Les documents additionnels à intégrer</p>
                            </div>
                            </label>
                            <p class=" text-sm font-bold text-gray-400 mx-4 mt-2">Pour que nous puissions procéder, pourriez-vous nous fournir les pièces complémentaires que vous souhaitez envoyer ?</p>
                            <input type="file"
                            class=" border-2 border-gray-500 rounded-md mt-2 text-gray-500 py-1 px-2 h-11 mx-4" @change="onFileInputChange" multiple/>
                            
                            <label class=" mt-11  font-bold text-xl font-serif p-1 border-l-4 border-gray-200 relative group w-full">
                                Message
                                <div class=" bg-gray-200 absolute top-0 w-0 h-full overflow-hidden group-hover:w-full transition-all duration-500 py-1 rounded-r-md">
                                <p class=" text-gray-600 font-doted text-center">Le contenu du message que vous prévoyez d'envoyer</p>
                            </div>
                            </label>
                        <textarea placeholder="Si vous souhaitez communiquer un message, n'hésitez pas à le saisir dans la zone prévue à cet effet. "
                            class=" px-2 mt-4 h-44 border-2 border-gray-500 rounded-md text-gray-500 mx-4 placeholder:text-sm py-2" v-model="formInput.courrier"></textarea>
                    </div>
                    
                    <div class="flex justify-center mt-11 mx-16">
                        <button class="bg-blue-700 text-white font-bold py-2 rounded-md w-44 relative group
                            ">
                            Envoyer
                            <div class=" bg-gray-400 w-0 overflow-hidden absolute top-0 group-hover:w-full group-hover:h-full py-2 rounded-md transition-all duration-500">
                                <p class=" text-white">Envoyer</p>
                            </div>
                        </button>
                    </div>
                    
                    <routerLink to="/home">
                        <p class=" font-bold text-sm text-center text-gray-600 mt-3 px-16 cursor-pointer">Annuler</p>
                    </routerLink>
                </form>
            </div>
        </div>
            </div>
        </div>

      <!-- Footer -->
      <footerComponent :user='user' />
    </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { accessToken_state, isUserAuth,addMsgService } from '../Services/service'
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
        const now = new Date()
        const showError= ref(false)
        const formInput = reactive({})
        // to test the refresh and access token if they are expired or not  
        onMounted(async () => {
            if (now.getTime() - new Date(expired_RefreshToken).getTime() > 0) {
                return router.push('/login')
            }
            const response = await accessToken_state(expired_AccessToken, refreshToken)
            if (response == true) {
                user.value = await isUserAuth()
                formInput.email = await user.value.email,
                formInput.id = await user.value.id
            }
        })

        const logOutFunction = async () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('expiredAccessToken')
            localStorage.removeItem('expiredRefreshToken')
            await router.push('/login')
        }

        // function to grap the files from the input 
        const onFileInputChange = (event) => {
      formInput.fichier = event.target.files
    }

        // function to submit the form
  const submitForm = async () => {
  let form = new FormData();
  form.append('email', formInput.email);
  form.append('id', formInput.id);
  form.append('sujet', formInput.sujet);
  form.append('courrier', formInput.courrier);
  for( let file of formInput.fichier) {
    form.append('files',file)
  }
  const response = await addMsgService(form)
  if (response.state) {
                return showError.value = true
            }
}


        // function to hide the alert 
        const hideAlert = () => {
            showError.value = false
        }



        return { user, logOutFunction,formInput,submitForm,onFileInputChange,showError,hideAlert }
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
}
</style>