export default{
    getallStatics:async()=>{
      const demandes=  await fetch('http://localhost:3000/statics/demandes', {
            headers: {'Content-type':'application/json'}
        }).then(data=>data.json());
      const files=  await fetch('http://localhost:3000/statics/files', {
            headers: {'Content-type':'application/json'}
        }).then(data=>data.json());
      const comments=  await fetch('http://localhost:3000/statics/commentaires', {
            headers: {'Content-type':'application/json'}
        }).then(data=>data.json());
      const users=  await fetch('http://localhost:3000/statics/users', {
            headers: {'Content-type':'application/json'}
        }).then(data=>data.json());
        console.log(comments)
            return {demandes:demandes
                , files:files, comments:comments, users:users}
 return true;
        }

          

    }