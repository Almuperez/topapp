Topapp

<img src="img/family.png" width="150" title="logo">

- [Framework](#framework)
- [Motivación del proyecto](#motivación-del-proyecto)
- [Requisitos:](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Acceso al juego](#acceso-al-juego)
- [Manual de instalación](#manual-de-instalación)
- [Ejemplos de código](#ejemplos-de-código)
- [Recursos útiles](#recursos-útiles)
- [Listado de paquetes y dependencias](#listado-de-paquetes-y-dependencias)
- [Próximos pasos : Issues](#próximos-pasos--issues)
- [Agradecimientos:](#agradecimientos)

# Framework

<img src="img/uno_dos.jpg" alt="" width="50"/>
<img src="img/cuatro_cinco.jpg" alt="" width="50"/>
<img src="img/seis_siete.jpg" alt="" width="50"/>

# Motivación del proyecto
* ¡Nueva app que ayuda a conciliar!

* ¿Cómo?
Ofrece una versión tinder de niñeras para faiclitar a los padres una búsqueda rápida
Localizaciñon de guardería disponibles en la zona

* ¿Por qué? 
Ser madre de un bebe de 1 año y ver lo difícil que es conciliar trabajo, estudio o un simple hobbie me ha llevado a crear una app para ayudar a conciliar. La falta de tiempo y recursos hacen que esperemos meses a entrar en una guardería, por eso el propósito de esta app es ahorrar tiempo e informar a los padres de todas las opciones que tienen según sus necesidades.

# Requisitos:

* Backend: 3 CRUDs completos y 3 modelos mongoose mínimo.
* Frontend: 10 componentes

Además este proyecto estará ejecutado con los paquetes y dependencias especificados: fronted desarrollado en next.js y typescript, sistema de autentificacion tanto en fronted como en backend... entre otros requisitos.

  
# Estructura del Proyecto
Mi proyecto se estructura en un monorepo que integra dos servicios: un fronted y un api.
Carpetas:

```
final-project
    ├── Api
    │    ├── src
    │    │    ├── lib - db.ts: conexion a mongo DB
    │    │    ├── models: cinco modelos
    │    │    ├── routers: cinco rutas 
    │    │    ├── app.ts: conectar con mongo BD las rutas y auth0
    │    │    ├── config.ts: configuracion de varibles de entorno
    |    |    |── seed.ts: data dummie
    │    │    └── server.ts
    │    └── package.json
    ├── Front
    │    ├── src
    │    │    ├── components: 11 componentes + 4 formularios
    │    │    │    
    │    │    ├── lib: store redux + api
    │    │    └──pages: api (auth0) + 11 pages
    │    └── package.json
    ├── package.json
    ├── lerna.json // si estas usando lerna
    └── README.md
```


# Acceso al juego

Puedes jugar pinchando el siguiente enlace : [Pincha aquí]()

# Manual de instalación 


* Primer paso: clonar el siguiente repositorio en la terminal
  
  * git clone 
  
* Segundo paso: generar una carpeta `cd final-proyecto-topapp`
  
* Tercer paso: 
  
  Ejecutar en la terminal los siguientes comandos en el orden indicado 
  ~~~
  yarn init -y
  yarn isntall
  yarn run dev
  ~~~


# Ejemplos de código

API- modelos y CRUD
[Ejemplo modelo parents](https://github.com/Almuperez/topapp/blob/main/packages/api/src/models/Parent.models.ts)
[Ejemplo CRUD parents](https://github.com/Almuperez/topapp/blob/main/packages/api/src/routers/parent.router.ts)
[Ejemplo store redux](https://github.com/Almuperez/topapp/blob/main/packages/front/lib/redux/store.ts)


# Recursos útiles
* Lerna: 
[Documentación Lerna](https://github.com/lerna/lerna)
* Postman : 
[Documentación Postamn](https://www.postman.com/)
* Auth0:
[Documentación Auth0](https://auth0.com/)
*Mongoose:
[Documentación Mongoose](https://mongoosejs.com/docs)
*Fastify:
[Documentacion Fastify](https://www.fastify.io/)
*Next getting started
[Documentación Nextjs](https://nextjs.org/docs/getting-started)
*npm para entender paquetes:
[Página principal npm](https://www.npmjs.com/)
[Redux](https://www.npmjs.com/package/redux)


# Listado de paquetes y dependencias

| Front | Api            | Raiz       |
| ----- | -------------- | ---------- |
| next  | ts-node        | yarn       |
| react | dotenv         | eslint     |
| axios | fastify        | lerna      |
| Auth0 | fastify-cors   | typescript |
| Redux | emailvalidator |            |
|       | mongoose       |            |
|       | nodemon        |            |
|       | pino           |            |
|       | pino-pretty    |            |
|       | fastify-blipp  |            |
|       | Ayth0          |

* Librería: [Chackra-iu](https://chakra-ui.com/)
* Maquetaar: [Bootstrap](https://getbootstrap.com/)

# Próximos pasos : Issues
  
* Asimilar todos los conceptos aprendidos en la store de REDUX y refactorizar generador el archivo action de forma correcta.
* Crear nuevas store de redux que me permitan vincular:
  * Hijo + padre
  * Match guardería
* Aprender a implementar la store de react sweet state
* Despliegue en Heroku
* Refactorizar código
* Implementar estilos más avanzados
* Diseño responsive
* Generar ideas que me ayuden a implementar conceptos vistos en clase en ultimos días
* Implementar react native
  
# Agradecimientos:
Gracias a Core Code y todas las personas que forman parte del bootcamp.
Gracias a mi familia por todo el apoyo recibido.
Gracias a mi amiga Anna Högberg porque sin ella no estaría aquí.





