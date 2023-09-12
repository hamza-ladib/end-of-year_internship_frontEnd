<template>
 <div :class=" 'shadow-lg border-amber-400 border-2 relative w-fit   rounded-xl p-1 flex flex-col  gap-1 justify-center items-center text-lg font-poppins text-black font-bold '+statics.main_style ">
        <div class="w-full  border-amber-400  relative  h-36  rounded-xl p-1 flex  gap-1 justify-center items-center text-lg font-poppins text-black font-bold">
            <div class=" flex items-center justify-center px-4 h-full"><p> {{ statics.main_title}}</p></div>
                            <div class=" flex items-center justify-center p-5  h-full aspect-square">
                                  <div class=" w-full h-full flex items-center justify-center rounded-full bg-orange-500 relative">
                                   <div class="circle border-4 border-white rounded-full bg-white w-5/6  h-5/6 absolute flex justify-center items-center ">
                                    <div class="wave bg-blue-400"></div>
                                    <p class="z-50">{{main_number}}</p>
                                   </div>
                                </div>
                            </div>
        </div>     
    
                            <!-------------------------------------------------------------------------------->
                            <div class="absolute m-[1px] shadow-lg  flex items-rend justify-end p-1  w-14 h-14 rounded-bl-full  aspect-square bg-white top-0 right-0">
                                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="fill-red-500" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path class="mark" d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                            </div>
                            <!------------------------------------------------------------------->

                            <div  class="relative w-full h-fit p-2 flex flex-wrap justify-around items-center">
                                <div v-for=" e,i  in statics.childs" :class="'flex w-fit h-full p-1 rounded-lg shadow-lg  gap-1 justify-centr items-center border-r-4 border-r-blue-400'">

                                     <div class="text-md h-full flex items-center justify-center  p-2 font-poppins font-bold">{{e.title}}</div>

                                    <div :id="'ert'+i+'container'+statics.id" class="w-14 h-14  z-40 font-poppins font-bold text-base"></div>

                                </div>
                            </div>
                              <!------------------------------------------------------------------->
                              
                            

            





                              <!------------------------------------------------------------------->
                        </div>
</template>
<script setup>
import { ref, onMounted, reactive,watch } from 'vue'
/* 
var ProgressBar = require('progressbar.js')
 
 */
import ProgressBar  from 'progressbar.js'
/* var line = new ProgressBar.Line('#container'); */
 let {statics}= defineProps(['statics']);
 let  main_number= ref(statics.main_number)


 /// function for increasing number annimation/////
 function incNbrRec(i, endNbr, number,speed) {
  if (i <= endNbr) {
    number.value = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i +1, endNbr, number);
    }, speed);
  }
}
//********************************************************** */
onMounted(()=>{

statics.childs.map((x,i)=>{

  CreateProgressCircle("#ert"+i+"container"+statics.id,x.prcent,x.style2,x.style1);
})

    
    /*   console.log(i)
     */
      let wave = document.querySelectorAll('.wave')[statics.id-1];wave.classList.add('wavea');
    /*   console.log(wave) */
    

    /* var line = new ProgressBar.Line('#container'); */
  // Value from 0.0 to 1.0
  /*   console.log(statics) */
    /** annumation */
    let endNbr=main_number.value;
  /*   console.log(endNbr); */
    
    incNbrRec(0,endNbr,main_number,15);
    /***************** */


})
/***** create circle  */
let CreateProgressCircle=(elem,percent,col1,col2)=>{
var bar = new ProgressBar.Circle(elem, {
  color: col1,
  trailColor: 'transparent',
  trailWidth: 1,
  duration: 5000,
  easing: 'bounce',
  strokeWidth: 10,
  from: {color: col1, a:0},
  to: {color: col2, a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width',6);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('0'+'%');
    } else {
      circle.setText(value+"%");
    }

  }
});

bar.animate(percent); 
}
///////////////+

</script>
<style scoped>
.mark{
    animation-name: mark;
  animation-duration: 1s;
  animation-iteration-count: 5;
}
@keyframes mark {
  25% { transform: translateY(3px); }
  50% { transform: translateY(0px); }
  75% { transform: rotate(-6px); }
  0% { transform: rotate(0px); }
}
.circle {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  cursor:pointer;
}
.wave {
  position: absolute;
  top: 110%;
  height: 200%;
  width: 200%;
  border-radius: 38%;
  left: -50%;
  transform: rotate(360deg);
  transition: all 5s ease;
  animation: wave 30s linear infinite;
}
@keyframes wave {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(3600deg); }
}
/* .circle:hover  */
.wavea {
  top: 0%;
}








</style>