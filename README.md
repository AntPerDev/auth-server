# auth-server

Se trata del sistema de autentificación de una api creado con express
Para ponerlo a funcionar es necesario:

1- Clonar el proyecto.

2- npm install  (para generar las dependencias y el node_modules....).

3- crear un archivo de configuración llamado .env en la raiz del proyecto.



  .env  debe contener 
  
  
```
PORT=4000 //o el que te venga mejor
DB_CNN=mongodb+srv://tucadenadeconexionamongodb/tubasededatos
SECRET_JWT_SEED=SemillaSecretaParaLaGeneraciónDeLosHash
```

Para poner a funcionar el server usar
nodemon index.js

para conectar con el servidor usar postman o insomnia atanco a las urls...

- Crear usuario: localhost:4000/api/auth/new/

```
    {
      "name":"test14",
      "email":"test4@test1.com",
      "password":"123456"
    }
 ```
- Login de usuario: localhost:4000/api/auth

```
    {
      "email":"test4@test1.com",
      "password":"123456"
    }
 ```


- Renovar token: localhost:4000/api/auth/renew/


en los headers enviar un parametro x-token, con el token de usuario válido entonces se generará un nuevo token
