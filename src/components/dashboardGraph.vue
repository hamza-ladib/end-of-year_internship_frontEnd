<template>
    <div class="">
        <canvas ref="canvasRef" width="500" height="300" class=" rounded-lg"></canvas>
    </div>
    
</template>
<style></style>
<script setup>
import Chart from 'chart.js/auto'
import { onMounted, ref } from 'vue';
let statics= defineProps(['statics']);
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
   let data ={
  labels: labels,
  datasets: [{
    label: 'demande en fonction de temps',
    data: [65, 59, 80, 81, 56, 55, 40,10,20,30,12,10],
    color:"#0000",
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor:[
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 2
  }]
};
    const canvasRef = ref(null)
    onMounted(() => {
      console.log("is",statics);
      console.log(statics.statics.xAxis,"h")
      console.log(statics.statics.yAxis,"h")
      console.log(statics.statics.color,"h")
      console.log(statics.statics.color,"h")       
       createBarsOne(canvasRef.value,
        [...statics.statics.xAxis],
        [... statics.statics.yAxis],
        [...statics.statics.color],
        [...statics.statics.color]
        
        
        )
    })
        /* createBarsOne(canvasRef.value,
        [5,12,30],
        ['signe','non signe','burger'],
        [
  "rgba(255, 99, 71, 1)",     
  "rgba(255, 205, 86, 1)",     
  "rgba(255, 192, 203, 1)",    
], [
  "rgba(255, 165, 0, 1)",       
  "rgba(154, 205, 50, 1)",        
  "rgba(176, 224, 230, 1)", 
]
        
        
        )
    
    })
 */
  let createBarsOne=(elem,Yaxis,xAxis,title,colors)=>{
    let data ={
  labels: Yaxis,
  datasets: [{
    label: title,
    data: xAxis,
    backgroundColor:colors,
    borderColor:colors,
    borderWidth: 2
  }]
};
    new Chart(elem, {
        type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
    
      })
  }
  let createPolarArea=(elem,Yaxis,xAxis,title,colors)=>{
    let data ={
  labels: labels,
  datasets: [{
    label: title,
    data: Yaxis,
    backgroundColor:colors,
    borderColor:colors,
    borderWidth: 2
  }]
};
    new Chart(elem, {

        type: 'polarArea',
  data: data,
  options: {
    plugins: {
      legend: false,
      tooltip: false,
    },
    elements: {
      arc: {
        backgroundColor:colors,
       /*  hoverBackgroundColor: hoverColorize */
      }
    }
  }

        
      })

  }
     


 



 

</script>













