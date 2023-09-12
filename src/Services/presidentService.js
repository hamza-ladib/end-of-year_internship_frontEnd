export default{
   signeeAuthorisation:async(files,seleted,router)=>{

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
            old:seleted
        }
    
      let response= await fetch('http://localhost:3000/president/signeeAuthorisation',{
        method:'POST',  
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(information),
     })

if(response.ok){
router.push('/autorisation');
return true
}
    

return false ;
},
signeeConvocation:async(files,seleted,router)=>{

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
            old:seleted
        }
    
      let response= await fetch('http://localhost:3000/president/signeeConvocation',{
        method:'POST',  
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(information),
     })

if(response.ok){
router.push('/convocation');
return true
}
    

return false ;
},
signeeMainLevee:async(files,seleted,router)=>{

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
            old:seleted
        }
    
      let response= await fetch('http://localhost:3000/president/signeeMainLeveen',{
        method:'POST',  
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(information),
     })

if(response.ok){
router.push('/mainlevee');
return true
}
    

return false ;
},
}

