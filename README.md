# Proyecto 7

Se trata de un proyecto backend que organiza canciones por plataformas y permite la creación de usuarios

## Features

- Crear, editar y eliminar canciones

Lo primero para poder comenzar a utilizar el proyecto es crear un usuario. Todo el mundo tiene acceso a la información de los videojuegos y de las plataformas, para ello se accede a través de:
 - http://localhost:3000/api/v1/canciones
 - http://localhost:3000/api/v1/plataformas

Para poder hacer cualquier tipo de modificacion (o al menos intentarlo) hay que estar registrado, para registrarse hay que hacerlo a través de:
 - http://localhost:3000/api/v1/users/register

Una vez registrado hay que iniciar sesión:
 - http://localhost:3000/api/v1/users/login

Los usuarios se crean directamente con rol de user, los user pueden subir juegos (aunque un admin  tiene que verificarlos) y eliminarse a sí mismos:
 - http://localhost:3000/api/v1/canciones
 - http://localhost:3000/api/v1/users/:id

Los admin pueden eliminar canciones, plataformas y usuarios, así como editarlos. Los admin pueden convertir en admin a los otros usuarios:
 - http://localhost:3000/api/v1/users/:id
 - http://localhost:3000/api/v1/canciones/:id
 - http://localhost:3000/api/v1/plataformas/:id

También pueden revisar los canciones que han subido los usuarios para verificarlos y que aparezcan en la página o no:

 - http://localhost:3000/api/v1/canciones/not-verified
 

No consigo concatenar lo de eliminarse a sí mismo del anterior ejercicio

## La semilla

La semilla esta con imagen rota ya que no se crear de base para que cargue el archivo, pero cuando se sube una cancion con archivo se pone como imagen, se pueden actualizar iniciando sesión como administrador y, así, ponerle una imagen que cargue en cloudinary. Y también las imágenes de las plataformas están cargadas en cloudinary.
