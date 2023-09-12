<template>
    <div class=" h-screen w-full  ">
        <div class="h-full  flex justify-center items-center absolute w-full ">
            <div class=" lg:h-5/6 lg:w-9/12 ">
                <div class=" gap-4  h-full bg-white  lg:grid lg:grid-cols-2 lg:gap-4 lg:rounded-lg lg:drop-shadow-2xl  ">

                    <div class=" flex justify-center items-center pb-8 w-full ">
                        <div class="w-full">
                            <p class="text-center text-5xl font-bold text-blue-700 font-playfair">La commune d'Agadir</p>
                            <p class="text-center text-lg mt-3 font-bold text-gray-600 font-poltawski">Veuillez saisir vos
                                informations</p>

                            <transition name="fade">
                                <div class=" bg-red-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-24 h-11 border-red-400 border-2"
                                    v-if="showError">
                                    <p class="text-red-400 font-bold text-md">
                                        Invalide credentials</p>
                                    <font-awesome-icon icon="fa-solid fa-xmark"
                                        class=" cursor-pointer text-red-400 hover:text-gray-300 hover:opacity-50 pl-4"
                                        size="lg" @click="hideAlert" />
                                </div>
                            </transition>

                            <div class="mt-11 w-full px-24">
                                <form class="grid w-full " @submit.prevent="submitForm">
                                    <div class="w-full">
                                        <label class=" text-sm mt-2 font-bold text-gray-500">Email</label>
                                        <div class="pb-4">
                                            <input
                                                class="mt-1 rounded pl-2 h-8 text-xs border-2 border-gray-400 w-full outline-0"
                                                type="email" placeholder="Enter your email " required
                                                v-model="userInfo.email" />
                                        </div>
                                        <label class=" text-sm  font-bold text-gray-500">Password</label>
                                        <div class="relative items-center">
                                            <input
                                                class=" mt-1 rounded pl-2 h-8 text-xs border-2 border-gray-400 w-full outline-0"
                                                :class="{ strongPasswd: passwdError === 'false', weakPasswd: passwdError === 'true' }"
                                                type="password" required id="passwdInput" v-model="userInfo.password"
                                                @keypress="changeBorder" />
                                            <div class="absolute right-0 top-2">
                                                <font-awesome-icon icon="fa-regular fa-eye-slash" size="sm" class=" pr-1"
                                                    @click="showPasswd" v-if="!displayPasswd" />
                                                <font-awesome-icon icon="fa-regular fa-eye" size="sm" class=" pr-1"
                                                    @click="showPasswd" v-if="displayPasswd" />
                                            </div>
                                        </div>
                                        <p class=" text-xs mt-4 text-right cursor-pointer text-gray-400 font-semibold">
                                            <router-link to="/forgot">mot de passe oublié</router-link>
                                        </p>
                                        <div class="flex justify-center  mt-4 ">
                                            <button
                                                class=" bg-blue-700 text-sm font-bold w-full py-2 rounded-lg text-white relative group">Sign
                                                in
                                                <div
                                                    class=" bg-gray-400 h-full w-0 overflow-hidden absolute top-0 group-hover:w-full transition-all duration-500 py-2 rounded-lg">
                                                    <p>Sign in</p>
                                                </div>
                                            </button>
                                        </div>
                                        <p class=" text-xs mt-4 text-center cursor-pointer text-gray-400 font-semibold">
                                            <router-link to="/register">
                                                Vous ne disposez pas d'un compte ? <span class=" text-blue-700">Créez-en
                                                    un.</span>
                                            </router-link>
                                        </p>

                                        <div class=" flex justify-between mx-9">
                                            <p class=" text-xs mt-4 text-center cursor-pointer text-gray-400 font-semibold">
                                                <router-link to="/">
                                                    Annuler
                                                </router-link>
                                            </p>
                                            <div class=" flex  justify-center  mt-4 cursor-pointer"
                                                @click="showHelp = !showHelp">
                                                <p class="text-xs text-center cursor-pointer text-gray-400 font-semibold">
                                                    help
                                                </p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="w-5 h-5 text-gray-400 pl-1 ">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="m-1 hidden lg:grid">
                        <div class=" flex justify-center items-center ">
                            <img src="../assets/images/logo.svg" alt="background" class="h-3/6 object-cover rounded-r-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Help -->
        <helpComponent :showHelp='showHelp' :changeShowHelp='changeShowHelp'>
            <template #text1>
                Si vous avez une demande à déposer auprès de la commune territoriale d'Agadir, il est maintenant possible de
                le faire en ligne grâce à ce site web. En effet, cette plateforme
                vous offre la possibilité de déposer votre demande en quelques clics, sans avoir à vous déplacer
                physiquement à la commune. De plus, vous pouvez facilement suivre l'avancement de votre demande depuis votre
                ordinateur ou votre téléphone portable, ce qui vous permet de rester informé en temps réel de son état.
                Pour utiliser cette fonctionnalité pratique, il vous suffit de suivre les instructions étape par étape
                disponibles au dessous :
            </template>
            <template #text2>
                1. Si vous ne disposez pas encore d'un compte, vous pouvez commencer par en créer un en suivant les étapes
                simples disponibles sur le site web.
            </template>
            <template #text3>
                2. Une fois que vous avez créé un compte, vous pouvez vous connecter à celui-ci pour accéder à la page
                d'accueil.
            </template>
            <template #text4>
                3. Sur cette page, vous aurez accès à toutes les fonctionnalités disponibles pour vous permettre de réaliser
                vos tâches en ligne, notamment la possibilité de soumettre des demandes, de suivre leur avancement et de
                communiquer avec le service concerné.
            </template>
            <template #text5>
                Si vous souhaitez obtenir des informations supplémentaires ou si vous avez des questions, vous pouvez nous
                contacter en utilisant les coordonnées ci-dessous :
            </template>
            <template #text6>
                06.66.66.66.66
            </template>
            <template #text7>
                y.lachguer01@gmail.com
            </template>
        </helpComponent>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { loginService,isUserAuth } from '../Services/service.js';
import helpComponent from '../components/helpComponent.vue';
export default {
    components: { helpComponent },
    setup() {
        const router = useRouter()
        const displayPasswd = ref(true)
        const showError = ref(false)
        const passwdError = ref('')
        const user = ref({})
        const showHelp = ref(false)
        const userInfo = reactive({
            email: '',
            password: 'azert-9658ae'
        })

        onMounted(async() => {
            const access_Token = localStorage.getItem('accessToken')
            if(access_Token !== null) {
            user.value = await isUserAuth()
            if (user.value.roles[0].name === 'demandeur') {
                    return await router.push('/home')
                }
                // Si l'utilisateur est le président
                if (user.value.roles[0].name === 'président') {
                    return await router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (user.value.roles[0].name === 'bureau ordre') {
                    return await router.push('/saveDemandes')
                }
                // Si l'utilisateur est un représentant
                if (user.value.roles[0].name === 'représentant') {
                    return await router.push('/notes')
                }  
                // Si l'utilisateur est un service x
                if (user.value.roles[0].name === 'service x') {
                    return await router.push('/coordinate')
                }  

                return console.log('1 yes')
            }
            console.log(' 2 yeeeees')
        })


        // function to toggle the password field
        const showPasswd = () => {
            var x = document.getElementById("passwdInput")
            if (x.type === "password") {
                x.type = "text";
                displayPasswd.value = false
            }
            else {
                x.type = "password"
                displayPasswd.value = true
            }
        }

        // function to submit the form 
        const submitForm = async () => {
            const response = await loginService(userInfo)
            if (response.state == true) {
                // Si l'utilisateur est un simple demandeur
                if (response.token.user.roles[0].name === 'demandeur') {
                    return await router.push('/home')
                }
                // Si l'utilisateur est le président
                if (response.token.user.roles[0].name === 'président') {
                    return await router.push('/president')
                }
                // Si l'utilisateur est le bureau d'ordre
                if (response.token.user.roles[0].name === 'bureau ordre') {
                    return await router.push('/saveDemandes')
                }
                // Si l'utilisateur est un représentant
                if (response.token.user.roles[0].name === 'représentant') {
                    return await router.push('/notes')
                }
                // Si l'utilisateur est un service x
                if (response.token.user.roles[0].name === 'service x') {
                    return await router.push('/coordinate')
                } 
                // si l'utilisateur est un service technique
                if (response.token.user.roles[0].name === 'Service technique') {
                    return await router.push('/homeSTechnique')
                } 
                // si l'utilisateur est un service patrimoine
                if (response.token.user.roles[0].name === 'Patrimoine') {
                    return await router.push('/homePatrimoin')
                } 
               
            }
            showError.value = true
        }


        // function to change the color of the input based on the length of the password
        const changeBorder = () => {
            if (userInfo.password.length < 7) {
                return passwdError.value = 'true'
            }
            passwdError.value = 'false'
        }

        // function to hide the alert 
        const hideAlert = () => {
            showError.value = false
        }

        // function to change the value of the showHelp when we click on the svg in the helpComponent
        const changeShowHelp = () => {
            showHelp.value = !showHelp.value
        }

        return { showPasswd, displayPasswd, submitForm, userInfo, passwdError, changeBorder, hideAlert, showError, showHelp, changeShowHelp }
    }
}
</script>

<style scoped>
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

.strongPasswd {
    border-color: green;
}

.weakPasswd {
    border-color: red;
}
</style>

