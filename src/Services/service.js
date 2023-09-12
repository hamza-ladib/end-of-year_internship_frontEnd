



export const  deleteFileFromDriver= async(id)=>{return await fetch('http://localhost:3000/d',{method:"POST",body: {idFichier:id}}) ;}
export const  saveFileToDriver=async(file)=>{
        let form = new FormData();form.append('files',file);
       let res=  await fetch('http://localhost:3000/s',{method:"POST",body: form}).then(response => response.json()).then(response => response);
       
       return res}




// function to get all demandes that have state "authoriser"
export const getAuthorisedDemandeService = async(userId)=> {
    const response = await fetch('http://localhost:3000/getAllAuthorisedDemande',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(userId)
    })
    if(response.ok){
        return response.json()
    }
    return false
}

// function to get all demandes that have state "terminer"
export const getFinishedDemandeService = async(userId)=> {
    const response = await fetch('http://localhost:3000/getFinishedDemande',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(userId)
    })
    if(response.ok){
        return response.json()
    }
    return false
}



// function to get the none signed authorisations      
export const countNoneSignedAuth = async()=> {
    const response = await fetch('http://localhost:3000/countNoneAuthorised', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}
// function to get the none signed authorisations      
export const countNoneSignedConvoc = async()=> {
    const response = await fetch('http://localhost:3000/countNoneConvocated', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}
// function to get the none signed authorisations      
export const countNoneSignedMainLev = async()=> {
    const response = await fetch('http://localhost:3000/countNoneMainLevee', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}



// function to get the none signed authorisations      
export const getNoneSignedAuth = async()=> {
    const response = await fetch('http://localhost:3000/getUnsignedAut', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}

// function to get the none signed authorisations      
export const getNoneSignedConvo = async()=> {
    const response = await fetch('http://localhost:3000/getUnsignedconv', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}

// function to get the none signed authorisations      
export const getNoneSignedMain = async()=> {
    const response = await fetch('http://localhost:3000/getUnsignedMain', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}




// function to get the number of none coordinated demande       
export const countNoneCoordinationService = async()=> {
    const response = await fetch('http://localhost:3000/countNoneCoordination', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}

// function to get all none coordinated demandes       
export const getNoneCoordinated = async()=> {
    const response = await fetch('http://localhost:3000/getNonCoordinatedDemande', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok) {
        return response.json()
    }
    return false
}       


// function to add coordination to a demande
export const addCoordinationService = async(idDemand,coordinate)=> {
    const response = await fetch('http://localhost:3000/addCoordination/'+idDemand, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(coordinate)
    })
    if(response.ok){
        return response.json()
    }
    return false
}




// function to get the number of all the demands of state "envoyer"       
export const enregistreDemande = async(idDemand)=> {
    const response = await fetch('http://localhost:3000/enregistreDemande/'+idDemand, {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok) {
        return response.json()
    }
    return false
}       


// function to get the number of all the demands of state "envoyer"       
export const getNumberSendedDemand = async()=> {
    const response = await fetch('http://localhost:3000/getNumber', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok) {
        return response.json()
    }
    return false
}


// function to get all the demands of state "envoyer"       
export const getAllSendedDemandes = async()=> {
    const response = await fetch('http://localhost:3000/getAllDemande', {
        headers: {'Content-type':'application/json'}
    })
    if(response.ok) {
        return response.json()
    }
    return false
}

// function to update the demand and save it with state "envoyer"
export const updateAndAddDemandService = async(userID,demandeInfo) => {
    const response = await fetch('http://localhost:3000/updateSaveDemande/'+userID, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(demandeInfo)
    })
    if(response.ok) {
        return response.json()
    }
    return false
}


// function to update the demand and archive it with state "archiver"
export const updateAndArchiveDemandService = async(userID,demandeInfo) => {
    const response = await fetch('http://localhost:3000/updateArchiveDemande/'+userID, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(demandeInfo)
    })
    if(response.ok) {
        return response.json()
    }
    return false
}





// function to add the decision of the representant to a demand
export const updateFeedBack = async (demandeID,decision) => {
    console.log(decision)
    const response = await fetch('http://localhost:3000/updateFeedBack/'+demandeID, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(decision)
    })
    if(response.ok) {
        return response.json()
    }
    return false
}
export const addFeedBack = async (demandeID,decision) => {
    const response = await fetch('http://localhost:3000/addFeedBack/'+demandeID, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(decision)
    })
    if(response.ok) {
        return response.json()
    }
    return false
}



// function to get all the feedbacks of a demand
export const getDecisionsService = async (demandeId)=> {
    const response = await fetch('http://localhost:3000/getAllDecision/'+demandeId, {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}




// function to get all the feedbacks of an user
export const getFeedBackService = async (userID)=> {
    const response = await fetch('http://localhost:3000/getFeedBack/'+userID, {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}


// function to get a specific user by it's ID
export const getUserService = async(userID)=> {
    const response = await fetch('http://localhost:3000/getUser/'+userID, {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}



// function to save demand of user with state "enregistrer" created by bureau d'ordre
export const saveDemandUser = async(userID,demandeInfo)=> {
    const response = await fetch('http://localhost:3000/addDemande/'+userID, {
        method: 'POST',
        body:demandeInfo
    })
    if(response.ok) {
        return response.json()
    }
    return false
}

// function to archive demand of user with state "archiver" created by bureau d'ordre
export const archiveDemandUser = async(userID,demandeInfo)=> {
    const response = await fetch('http://localhost:3000/archiveDemande/'+userID, {
        method: 'POST',
        body:demandeInfo
    })
    if(response.ok) {
        return response.json()
    }
    return false
}


// function that will add a demande for a specific user by his id and it will have the state of enregistrer
export const addDemandeUser = async(idUser,formData)=> {
    const response = await fetch('http://localhost:3000/addDemande/'+idUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/form-data'
        },
        body: formData,
    })
    if(response.ok){
        return true
    }
    return false
}



// function to get all the users that have been created by "bureau d'ordre"
export const getUsersService = async()=> {
    const response = await fetch('http://localhost:3000/getAllUsers', {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok){
        return response.json()
    }
    return false
}


// function to update and save a demande
export const updateSaveService = async(demandeInfos,demandeID)=> {
    const response = await fetch('http://localhost:3000/updateSaveDemande/'+demandeID, {
        method:'POST',
        body: demandeInfos
    })
    if(response.ok) {
        return response.json()
    }
    return false
}

// function to update and archive a demande
export const updateArchiveService = async(demandeInfos,demandeID)=> {
    const response = await fetch('http://localhost:3000/updateArchiveDemande/'+demandeID, {
        method:'POST',
        body: demandeInfos
    })
    if(response.ok) {
        return response.json()
    }
    return false
}



// function to get a single demand by it's id
export const getSingleDemande = async(demandeID)=> {
    const response = await fetch('http://localhost:3000/getSingleDemande/'+demandeID, {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok) {
        return response.json()
    }
    return false
}

// function to delete a single demand by it's id
export const deleteSingleDemande = async(demandeID)=> {
    const response = await fetch('http://localhost:3000/deleteSingleDemande/'+demandeID, {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok) {
        return true
    }
    return false
}


// function to update the state of a demande to envoyer
export const saveSingleDemande = async(demandeID)=> {
    const response = await fetch('http://localhost:3000/saveSingleDemande/'+demandeID, {
        headers: {'Content-Type':'application/json'}
    })
    if(response.ok) {
        return true
    }
    return false
}



// function to register an user
export const registerService =async(userData)=>{
    const response = await fetch('http://localhost:3000/registerTest', {
          method: 'POST',
          body:userData
      })
      if(response.ok) {
          return true
      }
      return false
  }


// function to send dossier de recolement 
export const sendDemandMain = async(dossier)=> {
    const response = await fetch('http://localhost:3000/addDemandMain', {
        method: 'POST',
        body:dossier
    })
    if(response.ok) {
        return response.json()
    }
    return false
}



// function to send dossier de recolement 
export const sendDossierRecolement = async(dossier)=> {
    const response = await fetch('http://localhost:3000/addDossier', {
        method: 'POST',
        body:dossier
    })
    if(response.ok) {
        return response.json()
    }
    return false
}



// function to send message by user
export const addMsgService = async(messageInfo)=> {
    const response = await fetch('http://localhost:3000/addMessage', {
        method: 'POST',
        body:messageInfo
    })
    if(response.ok) {
        return response.json()
    }
    return false
}




// function to update the user
export const updateService = async (userData) => {
    const response = await fetch('http://localhost:3000/update', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(userData)
    })
    if(response.ok) {
        return response.json()
    }
    return false
}


// function to get the infos of the demandes of an user
export const getDemandeService = async (userId) => {
    const response = await fetch('http://localhost:3000/getDemande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userId)
    })
    if (response.ok) {
        return response.json()
    }
    return false
}


// function to login 
export const loginService = async (userInfo) => {
    const response = await fetch('http://localhost:3000/sign', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(userInfo)
    })
    if (response.ok) {
        const token = await response.json()
        localStorage.setItem('accessToken', token.access_token.token)
        localStorage.setItem('refreshToken', token.refresh_token.token)
        localStorage.setItem('expiredAccessToken', token.access_token.expire_at)
        localStorage.setItem('expiredRefreshToken', token.refresh_token.expire_at)
        return {
            state: true,
            token
        }
    }
    return response.json()
}

// this function represent the first step of resetting password which is sending the verification code to the user
export const sendCodeVerif = async (userEmail) => {
    const response = await fetch('http://localhost:3000/userEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userEmail)
    })
    if (response.ok) {
        return response.json()
    }
    return false
}

// this function represent the second step of resetting password which is checking the verification code sending in the email
export const checkCodeVerification = async (codeVerification)=>{
    const response = await fetch('http://localhost:3000/checkCode',{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(codeVerification)
    })
    if(response.ok){
        return response.json()
    }
    return false
}

// function to change the password of the user
export const resetPasswd = async (userInfo,iduser)=>{
    const response = await fetch('http://localhost:3000/resetPswd/'+iduser,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userInfo)
    })
    if(response.ok){
        return true
    }
    return false
}


// function to check the state of the access token so that we refresh it if it's the case
export const accessToken_state = async(expired_AccessToken,refreshToken) => {
    const now = new Date()
    if(now.getTime() - new Date(expired_AccessToken).getTime() > 0){
        await refreshTokenFct(refreshToken)
        return true
    }
    return true
}


// function to refresh the access token  : 
export const refreshTokenFct = async (refreshToken) => {

        const tokensInfo = await fetch('http://localhost:3000/refresh', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            }
        })

        if (tokensInfo.ok) {
            const token = await tokensInfo.json();
            await localStorage.removeItem('accessToken', token.access_token.token);
            await localStorage.removeItem('expiredAccessToken', token.access_token.expire_at);
            await localStorage.removeItem('refreshToken', token.refresh_token.token);
            await localStorage.removeItem('expiredRefreshToken', token.refresh_token.expire_at);

            await localStorage.setItem('accessToken', token.access_token.token);
            await localStorage.setItem('expiredAccessToken', token.access_token.expire_at);
            await localStorage.setItem('refreshToken', token.refresh_token.token);
            await localStorage.setItem('expiredRefreshToken', token.refresh_token.expire_at);
            return true;

        }
        else {
            return tokensInfo.json();
        }
}

// to verify if the user is authentificated or not : 

export const isUserAuth = async () => {
    const accessToken = await localStorage.getItem('accessToken')
    try {
        console.log(accessToken)
        const userAuth = await fetch('http://localhost:3000/userAuth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        })
        if (userAuth.ok) {
            return  userAuth.json()
        }
    }
    catch (err) {
        console.log(err)
    }

}

// to update the email of the user updatePhone
export const updateEmail = async (user)=> {
    try {
        const response = await fetch('http://localhost:3000/updateEmail',{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(user)
        })
        if(response.ok){
          return  response.json()
        }
    } catch (err) {
        console.log(err)
    }
} 

// to update the phone number of the user 
export const updatePhone = async (user)=> {
    try {
        const response = await fetch('http://localhost:3000/updatePhone',{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(user)
        })
        if(response.ok){
          return  response.json()
        }
    } catch (err) {
        console.log(err)
    }
} 