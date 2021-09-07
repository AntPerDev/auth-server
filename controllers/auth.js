const { response } = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res = response ) => {
 
  const {name, email, password } = req.body;

  return res.json({
    ok: true,
    msg: 'Crear usuario /new'
  });
};



const loginUsuario = (req, res = response ) => {

  const errors = validationResult( req );
  // console.log( errors );
  if( !errors.isEmpty() ){
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  
  // console.log(req.body);

  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  return res.json({
    ok: true,
    msg: 'Login de usuario /'
  });
};

const revalidarToken = (req, res = response) => {

  // console.log(req.body);

  const { email, password } = req.body;

  console.log(email);
  console.log(password);
  
  return res.json({
    ok: true,
    msg: 'renew de usuario /'
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}