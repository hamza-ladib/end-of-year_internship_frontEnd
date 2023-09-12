export default{
    allDemands:async()=>{
        /** fetch fct  */
        // function to get the number of all the demands of state "envoyer"       
    const response = await fetch('http://localhost:3000/getAllDemandeTech/', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok) {
    
        return response.json()
    }
    return false
 
   },
    incmpleteDemand:async (dmd,comment,router)=>{
        const response = await fetch('http://localhost:3000/serviceTechnique/incomplete/'+dmd.id, {
            method:'POST',

            headers: {'Content-type':'application/json'},
            body: JSON.stringify({message:comment})
        })
        if(response.ok) {
            router.go(0);
            return response.json()
        }
        return false
   },
    acceptDemand:async (dmd,router)=>{
const response = await fetch('http://localhost:3000/serviceTechnique/accepter/'+dmd.id, {
            method:'POST',
            headers: {'Content-type':'application/json'}
        })
        if(response.ok) {
            router.go(0);
            return response.json()
        }
        return false

  
   },
    ArchiveDemand:async (dmd,router)=>{
        const response = await fetch('http://localhost:3000/serviceTechnique/archiver/'+dmd.id, {
            method:'POST',
            headers: {'Content-type':'application/json'}
        })
        if(response.ok) {
            router.go(0);
            return response.json()
           
        }
        return false
   },
    commision:async (dmd,router)=>{
        router.push('inviterCommission/'+dmd.id);
   
   },
    voirDescision:async (dmd,router)=>{
        
        router.push('/demandExamine/'+dmd.id)
   
   },
   }



