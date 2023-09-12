<template>
    <div class="h-screen flex justify-center items-center">

        <!-- before sending the code verification to the user -->
        <div class="bg-white  rounded-lg drop-shadow-xl hover:drop-shadow-2xl p-9" v-if="beforeEmail">
            <div class="">
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-2/12 h-2/12 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>
                <p class="text-center text-3xl sm:text-4xl font-bold text-blue-700 mt-6">Mot de passe oublié ?</p>
                <p class="border-2 mt-2 sm:mx-12 mx-4"></p>
                <p class="text-gray-500 mt-4 text-center px-12 ">Veuillez entrer votre adresse email pour rechercher votre
                    compte</p>
                <transition name="fade">
                    <div class=" bg-red-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-12 h-11 border-red-400 border-2 "
                        v-if="showError">
                        <p class="text-red-400 font-bold text-md">
                            Invalide credentials</p>
                        <font-awesome-icon icon="fa-solid fa-xmark"
                            class=" cursor-pointer text-red-400 hover:text-gray-300 hover:opacity-50 pl-4" size="lg"
                            @click="hideAlert" />
                    </div>
                </transition>
            </div>
            <div class="mt-16 ">
                <form class="mx-12" @submit.prevent="submitFirstForm">
                    <div class="pb-4">
                        <input class="mt-1 border-b-2 pl-2 h-11 text-sm  border-gray-400 w-full outline-0 text-gray-400 "
                            type="email" required v-model="userEmail.email" />
                    </div>
                    <div class="flex justify-center  mt-4">
                        <button class=" bg-blue-700 text-sm font-bold w-full py-2 rounded-lg text-white relative group">
                            Rechercher
                            <div class=" bg-gray-400 h-full w-0 overflow-hidden absolute top-0 group-hover:w-full transition-all duration-500 py-2 rounded-lg">
                                <p>Rechercher</p>
                            </div>
                        </button>
                    </div>
                    <router-link to="/login">
                        <div class="mt-6 flex cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-blue-700 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            <p class="text-sm font-bold text-blue-700 pl-2">Back to login</p>
                        </div>
                    </router-link>

                </form>
            </div>
        </div>

        <!-- after sending the code verification to the user -->

        <transition name="outOfPage" mode="out-in">
            <div class="bg-white  rounded-lg drop-shadow-xl hover:drop-shadow-2xl p-9" v-if="!beforeEmail">
                <div class="">
                    <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-2/12 h-2/12 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>
                    </div>
                    <p class="text-center text-3xl sm:text-4xl font-bold text-blue-700 mt-6">Consultez votre email</p>
                    <p class="border-2 mt-2 sm:mx-12 mx-4"></p>
                    <p class="text-gray-500 mt-4 text-center px-12 ">Un code de vérification a été envoyé à {{ emailDisplay
                    }}</p>
                    <transition name="fade">
                        <div class=" bg-red-800 rounded-lg  flex justify-between items-center mt-4 px-4 mx-12 h-11 border-red-400 border-2 "
                            v-if="showError2">
                            <p class="text-red-400 font-bold text-md">
                                Veuillez vérifier le code que vous avez saisi.</p>
                            <font-awesome-icon icon="fa-solid fa-xmark"
                                class=" cursor-pointer text-red-400 hover:text-gray-300 hover:opacity-50 pl-4" size="lg"
                                @click="hideAlert2" />
                        </div>
                    </transition>
                </div>
                <div class="mt-16 ">
                    <form class="mx-12" @submit.prevent="submitSecondForm">
                        <div class="pb-4 flex justify-center">

                            <input type="text" id="verification-code1" name="verification-code1"
                                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 border-2 border-black w-12 text-center ml-2"
                                min="0" max="9" required v-model="codeVerification.code1" maxlength="1">
                            <input type="text" id="verification-code2" name="verification-code2"
                                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 border-2 border-black w-12 text-center ml-2"
                                min="0" max="9" required v-model="codeVerification.code2"  maxlength="1">
                            <input type="text" id="verification-code3" name="verification-code3"
                                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 border-2 border-black w-12 text-center ml-2"
                                min="0" max="9" required v-model="codeVerification.code3" maxlength="1">
                            <input type="text" id="verification-code4" name="verification-code4"
                                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 border-2 border-black w-12 text-center ml-2"
                                min="0" max="9" required v-model="codeVerification.code4" maxlength="1">
                            <input type="text" id="verification-code5" name="verification-code5"
                                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 border-2 border-black w-12 text-center ml-2"
                                min="0" max="9" required v-model="codeVerification.code5" maxlength="1">
                            <input type="text" id="verification-code6" name="verification-code6"
                                class="shadow appearance-none border rounded py-2 px-3 text-gray-700 border-2 border-black w-12 text-center ml-2"
                                min="0" max="9" required v-model="codeVerification.code6" maxlength="1">
                        </div>
                        <div class="flex justify-center  mt-4">
                            <button
                                class=" bg-blue-700 text-sm font-bold w-full py-2 rounded-lg text-white">Confirmer</button>
                        </div>
                        <router-link to="/login">
                            <div class="mt-6 flex cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 text-blue-700 ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                <p class="text-sm font-bold text-blue-700 pl-2">Back to login</p>
                            </div>
                        </router-link>

                    </form>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { sendCodeVerif, checkCodeVerification } from '../Services/service'
import { useRouter } from 'vue-router';
import CryptoJS from 'crypto-js';
export default {
    setup() {
        const router = useRouter()
        const showError = ref(false)
        const showError2 = ref(false)
        const beforeEmail = ref(true)
        const emailDisplay = ref('')
        const userByCode = ref('')
        const userEmail = reactive({
            email: '@Adresse e-mail....'
        })
        const codeVerification = reactive({
            code1: '',
            code2: '',
            code3: '',
            code4: '',
            code5: '',
            code6: ''
        })

        // function to submit the first form
        const submitFirstForm = async () => {
            const response = await sendCodeVerif(userEmail)
            if (response == false) {
                return showError.value = true
            }
            emailDisplay.value = await response.email
            beforeEmail.value = false
        }

        // function to submit the second form
        const submitSecondForm = async () => {
            const response = await checkCodeVerification(codeVerification)
            if (response == false) {
                return showError2.value = true
            }
            const id = await response.id
            const encryptedId = CryptoJS.AES.encrypt(id.toString(), 'yasser_key').toString();
            const encodedId = encodeURIComponent(encryptedId);
            await router.push('/reset/' + encodedId)
        }

        const hideAlert = () => {
            showError.value = false
        }
        const hideAlert2 = () => {
            showError2.value = false
        }

        return { beforeEmail, codeVerification, userEmail, submitFirstForm, submitSecondForm, hideAlert, showError, hideAlert2, showError2, emailDisplay }
    }
}
</script>

<style  scoped>
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

.outOfPage-enter-from {
    opacity: 0;
    transform: translateX(300px);
}

.outOfPage-enter-active {
    transition: all 0.4s ease-out;
}

.outOfPage-leave-to {
    opacity: 0;
    transform: translateX(-300px);
}

.outOfPage-leave-active {
    transition: all 0.4s ease-in;
}
</style>
