<template>
    <div class="h-screen   flex justify-center items-center">
        <div class=" lg:h-5/6 lg:w-9/12">
            <div class=" gap-4  md:h-full bg-white lg:grid lg:grid-cols-2 lg:gap-4 lg:rounded-lg lg:drop-shadow-2xl  ">

                <!-- First Columns of user Informations -->

                <div class=" flex justify-center items-center pb-8 w-full border-r-2 ">
                    <div class=" p-20">
                        <p class=" text-4xl font-bold text-blue-700 text-center">Créez un nouveau mot Password</p>
                        <p class=" text-sm mt-3 font-bold text-gray-600 text-center">Plus qu'une étape. Indiquez votre
                            nouveau mot de passe et vous avez fini.</p>

                        <transition name="fade">
                            <div class=" bg-red-800 rounded-lg  flex justify-between items-center mt-4 px-4 h-11 border-red-400 border-2"
                                v-if="showError">
                                <p class="text-red-400 font-bold text-md">Erreur d'identification</p>
                                <font-awesome-icon icon="fa-solid fa-xmark"
                                    class=" cursor-pointer text-red-400 hover:text-gray-300 hover:opacity-50" size="lg"
                                    @click="showError = !showError" />
                            </div>
                        </transition>

                        <div class="mt-1 w-full">
                            <form class="grid w-full " @submit.prevent="submitForm">
                                <div class="w-full pt-9">
                                    <div>
                                        <label class=" text-sm  font-bold text-gray-500 ">Nouveau mot de passe</label>
                                        <div class="relative items-center ">
                                            <input
                                                class=" mt-1 rounded pl-2 h-8 text-xs border-2 border-gray-400 w-full outline-0"
                                                :class="{ strongPasswd: passwdError === 'false', weakPasswd: passwdError === 'true' }"
                                                type="text" required v-model="userInfo.password" @keypress="changeBorder" />
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <label class=" text-sm  font-bold text-gray-500">Confirmez votre nouveau mot de
                                            passe</label>
                                        <div class="relative items-center">
                                            <input
                                                class=" mt-1 rounded pl-2 h-8 text-xs border-2 border-gray-400 w-full outline-0"
                                                :class="{ strongPasswd: passwdError2 === 'false', weakPasswd: passwdError2 === 'true' }"
                                                type="password" required id="passwdInput" v-model="userInfo.confirmPassword"
                                                @keypress="changeBorder2" />
                                        </div>
                                    </div>
                                    <div class="flex justify-center mt-6 ">
                                        <button
                                            class=" bg-blue-700 text-sm font-bold w-1/4 py-2 rounded-lg text-white absolute group">Réinitialiser
                                            le mot de passe
                                            <div class=" bg-gray-400 h-full w-0 overflow-hidden absolute top-0 group-hover:w-full transition-all duration-500 py-2 rounded-lg">
                                                    <p>Réinitialiser le mot de passe</p>
                                                </div>
                                        </button>
                                    </div>
                                    <router-link to="/login">
                                        <div class=" mt-12 flex cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-700 ">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                            </svg>
                                            <p class="text-sm font-bold text-blue-700 pl-2">Back to login</p>
                                        </div>
                                    </router-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!--Second Columns for the backGround-->

                <div class="m-1 hidden lg:grid">
                    <div class=" flex justify-center items-center ">
                        <img src="../assets/images/reset_psswd.webp" alt="background"
                            class="h-3/6 object-cover rounded-r-lg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { resetPasswd } from '../Services/service'
import CryptoJS from 'crypto-js';
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        const displayPasswd = ref(true)
        const passwdError = ref('')
        const passwdError2 = ref('')
        const userInfo = reactive({
            password: '',
            confirmPassword: ''
        })
        const showError = ref(false)



        // function to submit the form 
        const submitForm = async () => {
            if ((userInfo.password !== userInfo.confirmPassword) || userInfo.password.length < 7 || userInfo.confirmPassword.length < 7) {
                return showError.value = true
            }
            const decryptedId = CryptoJS.AES.decrypt(props.id, 'yasser_key').toString(CryptoJS.enc.Utf8)
            const idUser = parseInt(decryptedId)
            const response = await resetPasswd(userInfo, idUser)
            if (response == true) {
                await router.push('/login')
            }
        }

        // function to change the color of the input based on the length of the password
        const changeBorder = () => {
            if (userInfo.password.length < 7) {
                return passwdError.value = 'true'
            }
            passwdError.value = 'false'
        }

        // function to change the color of the input based on the length of the password
        const changeBorder2 = () => {
            if (userInfo.confirmPassword.length < 7) {
                return passwdError2.value = 'true'
            }
            passwdError2.value = 'false'
        }



        return { submitForm, userInfo, passwdError, passwdError2, changeBorder, changeBorder2, showError }
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

