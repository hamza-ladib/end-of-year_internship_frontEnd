
export default{
 refuseDemand:async(comment,dmd,user,router)=>{
          let information={
              comment:comment,
              idDemande:dmd.id,
              user:user,
             
          }
          ///  add descision////////////////

              let decision={
                idUser:user.id,
                sujet:" non favourable  patrimoine",
                message:information.comment,
              }
    let resAddDescision = await fetch('http://localhost:3000/addFeedBack/'+information.idDemande, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(decision)
        })
    /****************** send mail to user ********************* */
          let response= await fetch('http://localhost:3000/patrimoine/notAuthorized',{      
                method:'POST',  
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(information),
       })
  
  if(response.ok){
    router.go(0);
  return true
  }
      
  
  return false ;
        
  
  },

 acceptDemand:async(files,dmd,user,router)=>{
      /*  inviteCommission:async (files,tyepFile,choosenCommission,router)=>{ */
        /** save file to db  */
        let res= await fetch('http://localhost:3000/s',{
          method:'POST',
          body:files,
        }).then(res=>res.json())
        .then(data=>data);
        /**name: file.originalname, fichier: response.webViewLink, idFichier: response.id, typeFichier: 'dossier recolement' */
        let information={
             name:res.name,
            fichier:res.fichier,
            idFichier:res.idFichier,
            idDemande:dmd.id,
            user:user,
           
        }
        /***************************** */
        let decision={
            idUser:user.id,
            sujet:"favourable  patrimoine",
            message:"la demande a ete accepter par patrimoine fichier d'otorisation  <<"+ information.fichier+ ">>",
          }
let resAddDescision = await fetch('http://localhost:3000/addFeedBack/'+information.idDemande, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(decision)
    })




        /***************************** */
    
      let response= await fetch('http://localhost:3000/patrimoine/authorized',{
        method:'POST',  
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(information),
     })

if(response.ok){
    router.go(0);
return true
}
    

return false ;
      

},
getAlldemandes:async()=>{
        const response=  await fetch('http://localhost:3000/patrimoine/all', {
              headers: {'Content-type':'application/json'}
          })
          console.log("-------------------------------")
          console.log(response)
          console.log("-------------------------------")
          if(response.ok) {

              return response.json()
  
          }
          return false
            
  
      }
}