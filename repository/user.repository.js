
class UserRepository {

  constructor(){
    const con = require('./db');
  }

 selectUser(email){
    console.log('vai rodar a consulta')

    con.query(`
    select * from users u where u.email == ${ email }`
    , (err, result) => {
      console.log(result);  
    })
    
}

}




