const { Client } = require('pg');
const rep = require('../repository/user.repository');
var express = require('express');
var router = express.Router();



async function selectUser(email){

  const con = await new Client({ 
    host: 'db',
    port: 5432,
    database: 'adsficr',
    user: 'postgres',
    password: 'example123'
  });

  await con.connect();
  

  console.log('vai rodar a consulta')

  await con.query(`
  select * from users u where u.email = '${ email }'`
  , (err, result) => {
    console.log(result);  
  })
  
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req, res, next) =>  {

    const { email, senha } = req.body;

    console.log(email, senha);


    selectUser(email);

    if( email == 'admin@gmail.com' &&
    senha == '123456'){

      res.render('dashboard', {})

    }else{
      res.render('index', { title: 'Express' });
    }


} )

module.exports = router;
