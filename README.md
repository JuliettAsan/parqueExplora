# Prueba técnica Parque Explora

La prueba consiste en dos partes, back-end y front-end.

Back-end:
1. Creación de base de datos MySQL
2. Implementación de API Rest con CRUD y consumo de API externo usando Node.js

Front-end:
1. Creación de vistas y rutas
2. Implemetación de hooks en React para APIs
3. Implemetación de formulario funcional que envía un correo informativo al usuario

## Prerequisitos

Solo vas a necesitar instalar Node.js y npm
Las versiones utilizadas para el desarrollo de la prueba fueron:
- Node.js v14.17.6
- npm v6.14.15

### Node
- #### Instalación Node.js Windows

  Visita el sitio oficial de [Node.js](https://nodejs.org/) y descarga el instalador.

- #### Instalación Node.js Ubuntu

  Puedes instalar Node.js y npm facilmente con apt install, ejecuta los siguientes comandos

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Instalación en otros sistemas operativos
  Puedes encontrar más información de como instalar en otros sistemas en [Node.js](https://nodejs.org/) y [NPM](https://npmjs.org/).

## Dependencias Node.js
```
    cors: ^2.8.5
    ejs: ^3.1.6
    express: ^4.17.3
    mysql2: ^2.3.3
    node-fetch: ^2.6.1
    sequelize: ^6.18.0
    sequelize-cli: ^6.4.1
```
## Dependencias React js
```
    emailjs-com: ^3.2.0
    react: ^18.0.0
    react-dom: ^18.0.0
    react-icons: ^4.3.1
    react-router-dom: ^6.3.0
    react-scripts: 5.0.0
    web-vitals: ^2.1.4
```

## Instalación

Clona el repositorio

`$ git clone url`

Instala las dependencias

`$ npm install`

## Cómo se usa

1. Descarga la carpeta `BDparquexplora` e importalo en tu base de datos Mysql
2. Modifica el archivo `src/database/config/config.js`

    ```
    "development": {
        "username": "root", // Pon tu usuario de MySql
        "password": "root", // Pon la constraseña en caso de haber creado la conexión con contraseña
        "database": "parqueexplora", 
        "host": "127.0.0.1", // Modifica en caso de tener otro hostname
        "dialect": "mysql"
      }
    ```
**BACK-END**

3. Ejecuta el comando en la raíz del proyecto

    `npm start`

4. Abra http://localhost:3300/ para verlo en el navegador

5. Puedes usar una herramienta como ***Postman*** para probar los siguientes endpoints:

    GET obtener todas las experiencias
    `http://localhost:3300/api`
    GET obtener experiencia por id
    `http://localhost:3300/api/{id}`
    GET obtener salas por busqueda
    `http://localhost:3300/salas?keyword={InsertarSalaAEncontrar}`

    POST crear experiencia
        `http://localhost:3300/api`
    
    PUT actualizar una experiencia
        `http://localhost:3300/api/{id}`
    
    DELETE eliminar una experiencia
        `http://localhost:3300/api/{id}`

**FRONT-END**

6. Ejecuta el proyecto con el comando en la carpeta `my-app`

    `npm start`

7. Abra http://localhost:3000/ para verlo en el navegador

8. Podrás navegar en las paginas inicio, experimenta y conócenos

## Recursos

- Api externo: https://serpapi.com/
- Carpeta MySQL:  `BDparquexplora`
- Colección Postman archivo: `Parque Explora.postman_collection.json`
