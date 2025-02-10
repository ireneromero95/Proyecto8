# Proyecto 7

Este proyecto es un backend diseñado para organizar canciones por plataformas y permitir la creación de usuarios. El sistema permite gestionar canciones, plataformas, y usuarios con diferentes roles, incluyendo la posibilidad de que los administradores gestionen contenido y usuarios.

## Features

Las personas registradas como usuario podrán realizar diferentes acciones:

- Crear una canción
- Eliminar su usuario
- Modificar su usuario


Los administradores, por su parte podrán realizar algunas más:

-  Verificar una canción
-  Eliminar una canción
-  Editar una canción
-  Eliminar una plataforma
-  Editar una plataforma
-  Eliminar un usuario
-  Editar un usuario

## Prueba

- Para probar la aplicación lo primero será clonar el repositorio

``git clone https://github.com/ireneromero95/Proyecto8 ``

- Entrar al proyecto e instalar las dependencias (indicadas más abajo)

`` npm i``

- En caso de que fuera necesario rellenar el .env con las variables de entorno:

``DB_URL=
JWT_SECRET=
CLOUD_NAME=
API_KEY=
API_SECRET=``

Y ejecutar el proyecto:

``npm run start
npm run dev``

- Una vez iniciado ya podría registrarse el usuario, a través de:
 `` http://localhost:3000/api/v1/users/register ``

- Una vez registrado ya puede acceder a través del login:
  ``  http://localhost:3000/api/v1/users/login ``

El usuario puede realizar búsquedas para ver qué canciones y plataformas hay ya en la aplicacion: 

`` http://localhost:3000/api/v1/canciones
  http://localhost:3000/api/v1/plataformas
``

##Dependencias

Este proyecto utiliza las siguientes dependencias:

- express: Framework para crear el servidor web.
- mongoose: ODM para interactuar con MongoDB.
- jsonwebtoken: Para la gestión de autenticación y autorización.
- cloudinary: Para gestionar el almacenamiento de imágenes en la nube.
- bcryptjs: Para el hash y comparación de contraseñas.
- dotenv: Para manejar variables de entorno.
- cors: Para habilitar CORS y permitir peticiones desde diferentes orígenes.
  
## La semilla

La semilla esta con imagen rota ya que no se crear de base para que cargue el archivo, pero cuando se sube una cancion con archivo se pone como imagen, se pueden actualizar iniciando sesión como administrador y, así, ponerle una imagen que cargue en cloudinary. Y también las imágenes de las plataformas están cargadas en cloudinary.
