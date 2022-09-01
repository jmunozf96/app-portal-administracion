# AppPortalAdministracion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Prueba FrontEnd Reto “Portal de Administración”

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## API
https://dummyjson.com/docs/users

## Administración de Usuarios
Se tienen enumerables que reconoce el tipo de usuario
> ADMINISTRADOR = 0
> 
> ANY = 1

Este cambio se lo hace desde el environment, para configurar el tipo de usuario que está ingresando

#### Simulación de EndPoints
Realmente el api solo hace una simulación de cada petición, por ende al registrar un usuario no puedes entrar con ese mismo,
se simuló con una cuenta `X` para poder obtener el token.

>src/app/core/helpers/const.helper.ts

Con ello obtengo token e internamente ya valido el tipo de Usuario segun la configuracion puesta en el environment
