# Portal de Administración

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

### Pasos para levantar el proyecto

1. Clonar el proyecto
2. Ejecutar `npm-install`
3. Ejecutar `ng-serve` y navegar hacia `http://localhost:4200/`


### API
https://dummyjson.com/docs/users

### Administración de Usuarios
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
