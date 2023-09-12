export default{
    getallrepres:async()=>{
      const response=  await fetch('http://localhost:3000/representant/all', {
            headers: {'Content-type':'application/json'}
        })
        if(response.ok) {
            return response.json()

        }
        return false
          

    },
    getDemand:async()=>{
        /** fetch fct  */
        //return fetch()
        /****** */
   return  {
            "id": "1",  
            "objet": "aménagement d’accès",
            "ref_section": "test0.0",
            "ref_numero": "8888",
            "date_debut": "2023-04-30T00:00:00.000Z",
            "duree": "19",
            "modalite": "Circulation alterné par feu tricolores",
            "descriptif": "azert yui op",
            "localisation": "azazd",
            "etat": "en attente",
            "userId": "13",
            
            "uploads": [
                {
                    "id": "4",
                    "name": "Mandat de portabilitÃ© y.lachguer01@gmail.com.pdf",
                    "fichier": "https://drive.google.com/file/d/1qRXo3c1ViDN4E3QNvWZYeSpkqasfIPn2/view?usp=drivesdk",
                    "idFichier": "1qRXo3c1ViDN4E3QNvWZYeSpkqasfIPn2",
                    "userId": "13",
                    "messageId": null,
                    "demandeId": "1"
                },
                {
                    "id": "6",
                    "name": "hamza Ladib.pdf",
                    "fichier": "https://drive.google.com/file/d/1SHHevwJUbMtPZkPSp2kOdIWEzG-LesvT/view?usp=drivesdk",
                    "idFichier": "1SHHevwJUbMtPZkPSp2kOdIWEzG-LesvT",
                    "userId": "13",
                    "messageId": null,
                    "demandeId": "1"
                }
            ]
        }

   },
    inviteCommission:async (files,tyepFile,choosenCommission,router)=>{
       
       
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
                commission:choosenCommission,
                idDemande:router.currentRoute.value.params.id
            }
            /************* give every representant new empty comment that they can fill  in future *************** */
            console.log(information.commission)
            for(let rep of information.commission){
                let decision={
                    idUser:rep.id,
                    sujet:"",
                    message:"",
                  }
        let resAddDescision = await fetch('http://localhost:3000/addFeedBack/'+information.idDemande, {
                method: 'POST',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify(decision)
            })
        }
            /*************  *******                                             ******** */
           console.log(information)
         let response= await fetch('http://localhost:3000/representant/invite',{
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

  /*   acceptDemand:async (dmd)=>{
   console.log('here accept logic')
   },
    ArchiveDemand:async (dmd)=>{
   console.log('here archive logic')
   },
    commision:async (dmd)=>{
   console.log('here commission logic')
   },
    voirDescision:async (dmd)=>{
   console.log('here voir descision logic')
   }, */
   }