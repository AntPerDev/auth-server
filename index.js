const express = require('express');
const cors    = require('cors');
require('dotenv').config();

// console.log( process.env );

// Crear el servidor/aplicación de express
const app = express();


// Directorio publico
app.use( express.static('public'));


//MIDDLEWARES


// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT }`);

});