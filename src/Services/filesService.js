/* export let saveFileToDriver=async(file)=>{
    let form = new FormData();
    form.append('files',file);
   return  response =await fetch('http://localhost:3000/s',{method:"POST",body: form}) ;
}
export let deleteFileFromDriver=async(id)=>{
   
   return  response =await fetch('http://localhost:3000/d',{method:"POST",body: {idFichier:id}}) ;
} */

export default {
    deleteFileFromDriver: async(id)=>{return await fetch('http://localhost:3000/d',{method:"POST",body: {idFichier:id}}) ;},
    saveFileToDriver:async(file)=>{
        let form = new FormData();form.append('files',file);
       let res=  await fetch('http://localhost:3000/s',{method:"POST",body: form}).then(response => response.json()).then(response => response);
       
       return res}
  }