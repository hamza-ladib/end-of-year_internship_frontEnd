export default{
    getUser:async (id)=>{
        const response = await fetch("http://localhost:3000/getUser/"+id, {
     headers: {'Content-type':'application/json'}
 })
 if(response.ok) {
 
     return response.json();
 }
 return false

    },
sendMail:async(repres,demande)=>{
    console.log(repres,demande)
    let text="Service technique en attente de votre décision concernant la demande"+demande.ref_numero+". Veuillez essayer de l'envoyer dès que possible. Nous tenons à vous remercier par avance pour votre diligence et votre attention. Votre coopération et votre soutien sont grandement appréciés. Nous sommes impatients de recevoir votre décision afin de pouvoir avancer avec nos projets Cordialement";
let informations={
    receivers:repres,
    sujet:"invitation commision",
    text:text

}
const response = await fetch("http://localhost:3000/sendMail", {
    method: 'POST',
     headers: {'Content-type':'application/json'},
     body:JSON.stringify(informations),
 })
 if(response.ok) {
 
     return response.json();
 }
 return false
},
    
    
    getDescisions:async(id)=>{
 
     /** fetch fct  */
     // function to get the number of all the demands of state "envoyer"       
 const response = await fetch("http://localhost:3000/descision/descisions/"+id, {
     headers: {'Content-type':'application/json'}
 })
 if(response.ok) {
 
     return response.json();
 }
 return false
 
 },
 getCurrentDemande:async(id)=>{
 
     /** fetch fct  */
     // function to get the number of all the demands of state "envoyer"       
 const response = await fetch("http://localhost:3000/descision/demande/"+id, {
     headers: {'Content-type':'application/json'}
 })
 if(response.ok) {
 
     return response.json();
 }
 return false
 
 },
 sendCommenataire:async(demande,comment,router)=>{
    console.log(demande,comment)
      
      /**name: file.originalname, fichier: response.webViewLink, idFichier: response.id, typeFichier: 'dossier recolement' */
      let information={
         comment:comment,
          idDemande:router.currentRoute.value.params.id
      }
   let response= await fetch('http://localhost:3000/descision/notAuthorized',{
      method:'POST',  
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(information),
   })

if(response.ok){
 router.push('/homeSTechnique');
return true
 
 
 }},
 sendAuthorisation:async(files,tyepFile,router)=>{
          /** save file to db  */
          let res= await fetch('http://localhost:3000/s',{
            method:'POST',
            body:files,
          }).then(res=>res.json())
          .then(data=>data)
          
          /**name: file.originalname, fichier: response.webViewLink, idFichier: response.id, typeFichier: 'dossier recolement' */
          let information={
               name:res.name,
              fichier:res.fichier,
              idFichier:res.idFichier,
              tyepFile:tyepFile,
              idDemande:router.currentRoute.value.params.id
          }
       let response= await fetch('http://localhost:3000/descision/addAhutorisation',{
          method:'POST',  
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(information),
       })

if(response.ok){
  router.push('/homeSTechnique');
  return true
}
      

return false
}
      
       
,
    
    }
 
 
 
 