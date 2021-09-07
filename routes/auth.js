const { Router } = require('express');
const { check  } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


//            ( Ruta , middleware[], controlador)
// router.post('/new', [         ] , crearUsuario);

//Crear un nuevo usuario
router.post('/new', [
  check('name', 'El nombre de usuario debe tener al menos 6 caracteres').not().isEmpty().isLength({ min: 6}),
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('email', 'El email debe tener un formato correcto').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
  validarCampos
], crearUsuario);

//login de usuario
router.post('/',[
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('email', 'El email debe tener un formato correcto').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validarCampos
] , loginUsuario);


// validar y revalidar token
router.get('/renew', validarJWT , revalidarToken);











module.exports = router;