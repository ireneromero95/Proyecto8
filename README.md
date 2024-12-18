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

Para probar la aplicación lo primero será registrarse, puede hacerse a través de `` - http://localhost:3000/api/v1/users/register ``

Una vez registrado debe acceder a través del login ``  http://localhost:3000/api/v1/users/login ``

El usuario puede realizar búsquedas para ver qué canciones y plataformas hay ya en la aplicacion: 

`` http://localhost:3000/api/v1/canciones
  http://localhost:3000/api/v1/plataformas
``

## La semilla

La semilla esta con imagen rota ya que no se crear de base para que cargue el archivo, pero cuando se sube una cancion con archivo se pone como imagen, se pueden actualizar iniciando sesión como administrador y, así, ponerle una imagen que cargue en cloudinary. Y también las imágenes de las plataformas están cargadas en cloudinary.
