<template>

        <form class=" bg-white  w-3/4 border-2 border-gray-700 rounded-md px-4 drop-shadow-2xl" enctype="multipart/form-data"
                            @submit.prevent="submitForm">
                            <div class=" grid" v-for="formInput in formInputs">
                                <p class=" text-gray-700 font-bold text-lg mt-9 ">{{ formInput.title }}</p>
                                <div class=" grid mt-4 px-4" v-for=" input in formInput.inputs">
                                    <label class="font-serif text-gray-600 ">{{ input.label }}</label>
                                    <input :type="input.type" :required="input.required"
                                        class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2"
                                        v-if="!input.option && !input.textArea && input.type !== 'file'"
                                        v-model="input.data" />
                                    <input :type="input.type" :required="input.required"
                                        class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2"
                                        v-if="!input.option && !input.textArea && input.type === 'file'"
                                        @change="onFileInputChange" multiple />


                                    <div v-if="input.dbcol === 'objet'" class=" w-full">
                                        <input list="browsers1" name="browser1" id="browser1"
                                            class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2 w-full"
                                            v-model="input.data" />
                                        <datalist id="browsers1">
                                            <option value="alignement pour travaux"></option>
                                            <option value="travaux en limite du domaine public"></option>
                                            <option value="occupation superficielle du domaine public"></option>
                                            <option value="aménagement d’accès"></option>
                                            <option value="travaux sur le domaine publics"></option>
                                        </datalist>
                                    </div>

                                    <div v-if="input.dbcol === 'modalite'" class=" w-full">
                                        <input list="browsers2" name="browser2" id="browser2"
                                            class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm  px-2 w-full"
                                            v-model="input.data" />
                                        <datalist id="browsers2">
                                            <option value="Route barré"></option>
                                            <option value="Circulation alterné par feu tricolores"></option>
                                            <option value="Circulation alterné par panneau B15 et C18"></option>
                                            <option value="Circulation alternée par signaux manuels k10, "></option>
                                            <option value="Par demi-chaussé avec déviation d’un sens de circulation">
                                            </option>
                                            <option value="interdiction de stationner"></option>
                                        </datalist>
                                    </div>

                                    <textarea :required="input.required"
                                        class="py-1 rounded-md border-2 border-gray-400 mt-1 text-sm px-2 text-gray-400 h-24"
                                        v-if="input.textArea" v-model="input.data"></textarea>
                                </div>
                            </div>
                            <!-- For the button -->
                            <div class=" bg-gray-600 text-center mx-4 my-9 rounded-md cursor-pointer">
                                <button class=" text-white font-bold p-2">Confirmer</button>
                            </div>
                        </form>

</template>

<script>
export default {
    props: ["formInputs","submitForm","onFileInputChange"],
    setup (props) {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>