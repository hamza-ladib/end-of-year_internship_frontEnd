<template>
  <div
    class="flex w-fit p-1 relative gap-6 items-center group bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500"
  >
    <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 opacity-30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        v-model="searchFor"
        @input="searchLogic"
        class="bg-gray-100 outline-none"
        type="text"
        placeholder=" rechercher une mot cle"
      />
    </div>
    <div
    @click="showAllCategroies =true"
      class="bg-blue-500 py-3 px-5 flex text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
    >
      tous
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  
    <div
      :class="`overflow-hidden ${showAllCategroies?'w-fit  p-2':' w-0'}  flex transition-all duration-200  absolute bg-white  top-0 right-0 h-full  items-center justify-center gap-1`" 
    >
      <div
       @click="showAllCategroies=false"
        class= " w-7 h-7 felx items-center group justify-center hover:bg-red-400 rounded-lg transition-all duration-400"
      >
        <svg
          class="fill-red-400 group-hover:fill-black w-6 h-6 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
          ></path>
        </svg>
      </div>
      <div 
        v-for="categorie in categories"
        @click="filterByCategorie(categorie)"
        :class="`rounded-lg cursor-pointer hover:bg-blue-500  hover:scale-75 flex items-center justify-center h-full ${
          showAllCategroies ? '' : 'hidden'
        } w-fill bg-yellow-500 px-1 transition-all duration-300 font-poppins font-semibold`"
      >
        {{categorie}}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, onMounted, reactive } from "vue";
import { defineEmits } from "vue";
const emit = defineEmits(["filtered"]);
let searchFor = ref("");
let showAllCategroies = ref(false);
let props = defineProps(["demandes", "categories","categorieFilter"]);
let demandes = ref(props.demandes);
let categories = ref([]);
let original = reactive([]);
let categorieFilter=ref(props.categorieFilter);

onMounted(() => {
  original.value = demandes.value;
  categories.value = props.categories;

});
/***  for filtering */
let filterByCategorie=(categ)=>{
  demandes.value = original.value;
  demandes.value = original.value.filter((x) => x[categorieFilter.value]==categ);
  console.log(demandes.value);
    emit("filtered", demandes);
}

/********************************************************* */
let searchLogic = () => {
  console.log(searchFor);
  if (searchFor.value == "") {
    demandes.value = original.value;
  } else {
    demandes.value = original.value.filter((x) => {
      console.log(typeof x);
      for (let [key, value] of Object.entries(x)) {
        if (typeof value == "string") {
          if (value.toLowerCase().includes(searchFor.value)) return x;
        }
      }
    });
    emit("filtered", demandes);

  }
};
let showCategories = () => {
  console.log("show categories");
};
</script>
<style scoped></style>
