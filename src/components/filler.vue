<template>
<div class=" w-full flex flex-col gap-2 border-2 border-teal-400 p-1 rounded-lg relative  group ">
    <div class="w-full bg-green rounded-lg border-blue-400 flex absolute top-0 group-hover:h-0 hover:h-0 overflow-hidden transition-all duration-300  left-0 h-full justify-center items-center z-50 bg-blue-500  font-ropa"> 
       <p class="w-full  flex gap-2 items-center justify-center text-lg p-2 group-hover:opacity-0 transition-all duration-500">
        il est necessaire d'ajouter  Des photographies et Un plan de l'oeuvrage projeté
        voir votre fichier et ajouter d'autre ici 
        <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M21.886 5.536A1.002 1.002 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13a.998.998 0 0 0 1.644 0l9-13a.998.998 0 0 0 .064-1.033zM12 17.243 4.908 7h14.184L12 17.243z"></path></svg>

       </p>
    </div>
<div class="w-full bg-blue-500 font-poppins text-lg text-center p-1"> 
    
    vos fichier</div>
<div class="  flex flex-col gap-2 rounded-lg w-full transition-all duration-1000 ">
<div v-for="(upload, index) in uploads" :key="upload.idFichier" class="  flex justify-center items-center gap-2 overflow-hidden">
<div class="text-base font-poppins flex items-center justify-center w-full">
    <div class="flex justify-between items-center w-full gap-2">
    <a :href="upload.fichier"   target="_blank" class="flex items-center justify-between gap-2 p-2  w-2/3 relative group/b">
        <div class="absolute w-0 group-hover/b:w-full rounded-r-lg transition-all duration-300 h-full  bg-blue-400 top-0 left-0 flex justify-center items-center text-base font-quicksand font-semibold overflow-hidden">
            <p>visiter
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>

        </div>
        <p :class="`${'p'+index} w-full px-2  truncate` ">{{ upload.name}}</p>
        </a>
        <div class=" overflow-hidden p-2 rounded-lg" @click="del(upload.idFichier,index)">
            <svg  :class="`${'c'+index} hover:-translate-y-1 cursor-pointer`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #ef4444;transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm0 11H8v-2h8v2z"></path></svg>
        </div>
    </div>
</div>
</div>
<!-- <div v-for="(upload, index) in uploads" :key="upload.idFichier" class="  flex justify-center items-center gap-2 overflow-hidden">
<div class="text-base font-poppins flex items-center justify-center w-full">
    <div class="flex justify-between items-center w-full gap-2">
    <a :href="upload.fichier"   target="_blank" class="flex items-center justify-between gap-2 p-2  w-2/3 relative group/b">
        <div class="absolute w-0 group-hover/b:w-full rounded-r-lg transition-all duration-300 h-full  bg-blue-400 top-0 left-0 flex justify-center items-center text-base font-quicksand font-semibold overflow-hidden">
            <p>visiter
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>

        </div>
        <p :class="`${'p'+index} w-full px-2  truncate` ">{{ upload.name}}</p>
        </a>
        <div class=" overflow-hidden p-2 rounded-lg" @click="del(upload.idFichier,index)">
            <svg  :class="`${'c'+index} hover:-translate-y-1 cursor-pointer`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #ef4444;transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm0 11H8v-2h8v2z"></path></svg>
        </div>
    </div>
</div>
</div> -->

</div>
<div id="garageContainer" class="w-full  relative bg-sky-500 rounded-md"> 
     <label id="labelFile" class=" w-full flex cursor-pointer  justify-center items-center rounded-md bg-blue-500 p-2 gap-2 group/e  text-white font-poppins">ajouter d'autres fichiers 
        <svg class=" group-hover/e:animate-bounce" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, .7);transform: ;msFilter:;"><path d="M18.948 11.112C18.511 7.67 15.563 5 12.004 5c-2.756 0-5.15 1.611-6.243 4.15-2.148.642-3.757 2.67-3.757 4.85 0 2.757 2.243 5 5 5h1v-2h-1c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.757 2.673-3.016l.581-.102.192-.558C8.153 8.273 9.898 7 12.004 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-2v2h2c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z"></path><path d="M13.004 14v-4h-2v4h-3l4 5 4-5z"></path></svg>
    </label>
    <div  class=" garage absolute top-0 left-0 h-0 overflow-hidden w-full  bg-black"></div>
        <input @change="treatementOfFiles" class=" hidden" id="file" type="file" multiple>
</div>

</div>
</template>
<script setup>
import { gsap } from 'gsap';
import { onMounted,ref} from 'vue';
const props =defineProps(['uploads','newFiles','deletdIds']);
let  uploads =ref(props.uploads);
let addedFiles=ref([]);
 onMounted(()=>{
    /* console.log('called',props.uploads); */
   
 document.querySelector('#labelFile').addEventListener('click',()=>{
document.querySelector('#file').click();
 })
 });
 /*** for adding new files  */
 let treatementOfFiles=(e)=>{
    props.newFiles.splice(0,props.newFiles.length);
    for(let file of e.target.files){
        props.newFiles.push(file);
    }  
}
/***for delete  */
 let del=(id,index)=>{
    let className='.c'+index;
    let plassName='.p'+index;
    gsap.timeline()
    .to(className,0.2,{xPercent:200}).to(className,0.2,{xPercent:-200}).to(className,0.1,{xPercent:0})
    .to(plassName,0.5,{xPercent:200}).
    call(()=>{
     for(let i=props.uploads.length-1;i>=0;i--){
        if(props.uploads[i].idFichier===id) props.uploads.splice(i,1)}
     uploads.value=[...props.uploads];
    });
    props.deletdIds.push(id);
 }
</script>
<style scoped>

</style>