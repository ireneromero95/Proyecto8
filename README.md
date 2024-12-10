# Proyecto 7

Este proyecto es un backend diseñado para organizar canciones por plataformas y permitir la creación de usuarios. El sistema permite gestionar canciones, plataformas, y usuarios con diferentes roles, incluyendo la posibilidad de que los administradores gestionen contenido y usuarios.

## Features

Endpoints

**Acceso público**
Todo el mundo puede acceder a la información de las canciones y plataformas:

**Obtener canciones:**
-GET http://localhost:3000/api/v1/canciones
**Obtener plataformas:**
-GET http://localhost:3000/api/v1/plataformas


**Acceso registrado (usuarios)**
Para hacer cualquier tipo de modificación, los usuarios deben estar registrados e iniciar sesión.

**Registro de usuario**
Registrar usuario:
-POST http://localhost:3000/api/v1/users/register

**Inicio de sesión**
Iniciar sesión:
-POST http://localhost:3000/api/v1/users/login

**Acciones disponibles para usuarios:**

Los usuarios con el rol "user" pueden:

Subir canciones (aunque un administrador debe verificarlas antes de que sean visibles):
-POST http://localhost:3000/api/v1/canciones

Eliminar su propio usuario:
-DELETE http://localhost:3000/api/v1/users/:id

**Acciones disponibles para administradores:**
Los administradores pueden gestionar contenido y usuarios:

Eliminar plataformas:
-DELETE http://localhost:3000/api/v1/plataformas/:id

Eliminar canciones:
-DELETE http://localhost:3000/api/v1/canciones/:id

Eliminar o editar usuarios:
-DELETE http://localhost:3000/api/v1/users/:id
-PUT http://localhost:3000/api/v1/users/:id

Verificar canciones de usuarios: Los administradores pueden revisar las canciones que no han sido verificadas para aprobarlas o rechazarlas.
-GET http://localhost:3000/api/v1/canciones/not-verified

Convertir usuarios a administradores:
-PUT http://localhost:3000/api/v1/users/:id

## La semilla

La semilla esta con imagen rota ya que no se crear de base para que cargue el archivo, pero cuando se sube una cancion con archivo se pone como imagen, se pueden actualizar iniciando sesión como administrador y, así, ponerle una imagen que cargue en cloudinary. Y también las imágenes de las plataformas están cargadas en cloudinary.
