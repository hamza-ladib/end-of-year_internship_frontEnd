<template>
<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/leaflet.css" rel="stylesheet" />

  <div id="map"  class="w-full h-full" ></div>
</template>
<script setup>
import L from 'leaflet'
import { onMounted,reactive } from 'vue';
let {coords}= defineProps(['coords']);

onMounted(async ()=>{
  /* var map = L.map('map', {
    center: ,
    zoom: 13
}); */
var map = L.map('map').setView([30.427755,-9.598107], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define the center coordinates
var center = L.latLng(30.427755, -9.598107);
// Optionally, disable dragging the map outside the maximum bounds
 for(let c of coords){
  let add=c.localisation.adresse;
  let lat=c.localisation.latitude;
  let long=c.localisation.longitude;
  let ref=c.ref_numero;

  const myIcon = L.divIcon({
  html: `
  <svg class='fill-red-500 w-32 h-32' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>`,
  className: "",
  iconSize: [50, 50],
  iconAnchor: [12, 40],
}); 

console.log(ref)

  L.marker([lat, long],{icon: myIcon}).addTo(map)
   .bindPopup("<div class='w-64 h-64 bg-white-300 rounded-tl-2xl rounded-br-2xl font-poppins font-bold  flex flex-col gap-2 shadow-lg  justify-center items-center'><div class='w-full text-lg p-2 flex justify-center items-center gap-2 bg-transparent shadow-lg rounded-lg shadow-blue-100'> <span class='text-blue-500 text-2xl '>&lt;</span>"+ref+"<span class='text-blue-500 text-2xl'>&gt;</span></div><div class='w-full p-2 overflow-hidden truncate'>"+add+"</div><div class='w-full justify-between items-center p-2 gap-2 flex '><p class='p-1  bg-blue-500  text-center w-32  transition-all duration-300'> longitude </p> <span class='truncate font-quicksand p-2 bg-white rounded-md shadow-lg  '>"+long+"</span></div><div class='w-full justify-between items-center p-2 gap-2 flex '><p class='p-1  bg-blue-500  w-32 text-center  transition-all duration-300'>latitude</p>  <span class='truncate  font-quicksand p-2 bg-white rounded-md shadow-lg '>"+ lat +"</span></div></div>")
   
   .openPopup();
 
  console.log(c.localisation)
}
 


})















</script>
<style scoped></style>