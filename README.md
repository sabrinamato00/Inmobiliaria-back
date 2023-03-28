# Inmobiliaria-back

Este es el repositorio del backend para el proyecto final del curso de inmobiliaria. El frontend del proyecto está alojado en otro repositorio (https://github.com/sabrinamato00/Inmobiliaria-front.git). El backend está construido con Express, Knex, Morgan, Nodemon, Multer, entre otros.

Tambien tiene la autenticación de usuarios, para lo cual se uso JWT (JSON Web Token) y bcrypt.

## Requerimientos

- Node.js
- PostgreSQL

## Instalacion

1. Clona este repositorio en tu máquina local. (https://github.com/sabrinamato00/Inmobiliaria-back.git)
2. En tu terminal, ve a la carpeta del proyecto y ejecuta el comando npm install para instalar todas las dependencias.
3. Crea una base de datos en PostgreSQL.
4. En la carpeta config, encontrarás un archivo llamado knex.js. Asegúrate de configurar la conexión de la base de datos con tus credenciales.
5. Ejecuta el proyecto con el comando npm start. El proyecto estará disponible en http://localhost:3001.

## Rutas

Este proyecto tiene las siguientes rutas y endpoints disponibles:

### Rutas de propiedades

- "GET /api/propiedades" : Devuelve todas las propiedades que se encuentran en la base de datos, con sus caracteristicas.
- "POST /api/propiedades/add " : Crea una nueva propiedad en la base de datos.
- "DELETE /api/propiedades/delet/:id" : Elimina la propiedad con el ID especificado.
- "PATCH /api/propiedades/editar/:id " : Modifica el campo deseado de la propiedad con el ID especificado.
- "GET /api/propiedades/buscar" : Busca la propiedad con el filtro aplicado en los parametros.
- "POST /api/propiedades/add/foto" : Guarda en el proyecto una foto que se carga en el body.

### Rutas de usuarios

- "POST /auth/register" : Registra un usuario en la base de datos.
- "POST /auth/login" : Verifica que el usuario y contraseña sean validos.
