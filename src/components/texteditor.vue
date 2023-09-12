<template>
 <div class=" p-4 w-full rounded-lg max-h-[500px] bg-white flex flex-col  items-center justify-center gap-1 relative  border-blue-500 overflow-x-hidden overflow-y-scroll">
 
 <div  class="w-full  text-lg font-bold font-poppins flex justify-center items-center relative ">
  <p :class="`${envoyer?'w-full':'w-0'}  transition-all duration-300 overflow-hidden absolute right-0  rounded-lg  text-center bg-green-400`">fichier envoyer</p>
</div>
  <div class="w-full  p-2 text-justify font-poppins font-semibold">
    <p class=" w-full  p-1 text-lg text-blue-500 text-center font-quicksand font-bold">{{demande.text}}</p>
  <span class=" uppercase text-blue-500 text-lg font-poppins font-bold">Il</span> est généralement préférable d'écrire le fichier en format pdf  et de l'importer à l'aide d'un bouton d'importation dans votre application. Cependant, dans le cas où vous souhaitez créer le fichier instantanément, le télécharger et ensuite l'importer, vous pouvez utiliser un éditeur de texte pour simplifier le processus.
 </div>
  <div class=" p-2 w-full  flex-col justify-center items-center gap-2 h-32"> 
        <div class=" w-full h-fit  flex flex-col  justify-center items-center">
          <div class=" w-full  p-2 flex md:flex-row flex-col gap-3 items-center justify-between ">
            
            <button @click="changed" class="bg-blue-500 text-center flex font-bold items-center justify-center gap-2 rounded-lg w-1/2 p-2 text-base font-poppins"> 
        generer pdf 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

    </button>
    <form class=" font-poppins font-bold w-full flex justify-end  items-center" enctype='multipart/form-data' @submit.prevent>
      <input type="file" class="hidden" id="file" @change="selectedFile"/>
    <button v-if="fileName=='none'" @click="filler" class="bg-blue-500 w-full   text-center flex font-bold items-center justify-center gap-2 rounded-lg  p-2 text-base font-poppins">
         importer fichier 

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
 </button>
 
    <button v-else @click="filler" class="bg-blue-500  w-full  text-center flex font-bold items-center justify-center gap-2 rounded-lg  p-2 text-base font-poppins">
         {{ fileName }}
        
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path></svg>
 </button>
</form>
          </div>
        
  </div>
  </div>
  <div class=" p-2 w-full relative h-fit "> 
    <div id="editor" class="h-[500px] p-5 overflow-y-scroll"></div>
  </div>
  </div>
</template>
<script setup>
import Quill from 'quill'
import { onMounted,ref,defineProps} from 'vue';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import html2pdf from 'html2pdf.js';
// Default export is a4 paper, portrait, using millimeters for units
/***** */
//247cea439c19b0fe9d8d0a6b42ccab5f
/**** text editoer conf****/
let demande= defineProps(['cmd','files','text','form']);
let envoyer =ref(false);
/******* */
var toolbarOptions =[
  ['bold', 'italic', 'underline', 'strike'],
  [{'script': 'sub'}, {'script': 'super'}],
  ['blockquote', 'code-block'],
  [{'header': 1}, {'header': 2}, {'header': 3}, {'header': 4}, {'header': 5}, {'header': 6}],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  [{'align': []}],
  ['link', 'image', 'video'],
  [{'color': []}],
  [{'font': []}],
  [{'size': ['small', false, 'large', 'huge']}],
  ['clean']
];
/********** necessite vars ******* */
let loaded=ref(false); // just foer loading not needed 
let fileName=ref("none"); //  the check if there is a file selected
let file=ref(); /// to put the selected file
import textEditorService from '../services/textEditorService.js' // TO to save the authorisation file
/** this function gransfer html to pdf to generate neded file* */
const changed=()=>{ 
    var text = editor.root.innerHTML+"</br>";
    html2pdf().set({
  pagebreak: { mode: "avoid-all" },
  margin: [10, 10],
  filename: "document.pdf",
  image: { type: "jpeg", quality: 0.98 },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
}).from(text).save();
}
/** saving logic for the selected file */
let uploidFile=()=>{
  //calling the saving api 
  textEditorService.savedDemandeAuthorisation();
  envoyer.value=true;
/*   console.log(file.value) */
}
let editor;

/******** just foe the clicl button to trigger the input type =input ****** */
let filler= ()=>{
    let input = document.getElementById('file');
    input.click();
}
/***** */
/****** in case a file selected wen change the value of file name and file ******** */
let selectedFile= async(e)=>{
  demande.form.delete('files');
    fileName.value=e.target.files[0].name;
    file.value=e.target.files[0];
    demande.files.splice(0,demande.files.length);
    demande.files.push(e.target.files[0]);
    demande.form.append('files',e.target.files[0]);

}
/***  implement the text editor and some css for the tool bare** */
    onMounted(()=>{
      envoyer.value=false;
        let texter = document.getElementById('editor');
editor = new Quill(texter, {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});
/**  styling toolbar*/
let toolbarelem=document.getElementsByClassName('ql-toolbar')[0];
let hideelem=document.getElementsByClassName('ql-hidden')[0];
toolbarelem.classList.value=" ql-toolbar ql-snow bg-blue-500 rounded-lg font-poppins text-red-500 ";
hideelem.classList.value=" ql-hidden hidden";
/** done styling  */
    })
</script>
<style scoped>
</style>