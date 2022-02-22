Topapp


- [Framework](#framework)
- [Motivación del proyecto](#motivación-del-proyecto)
- [Requisitos:](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Acceso al juego](#acceso-al-juego)
- [Manual de instalación](#manual-de-instalación)
- [Ejemplos de código](#ejemplos-de-código)
- [Recursos útiles](#recursos-útiles)
- [Listado de paquetes y dependencias](#listado-de-paquetes-y-dependencias)
- [Despliegue en produccion](#despliegue-en-produccion)
- [Agradecimientos](#agradecimientos)

# Framework

<img src="../final-proyecto-topapp/img/uno_dos.jpg" alt="" width="200"/>
<img src="../final-proyecto-topapp/img/cuatro_cinco.jpg" alt="" width="200"/>
<img src="../final-proyecto-topapp/img/seis_siete.jpg" alt="" width="200"/>

# Motivación del proyecto
Ser madre de un bebe de 1 año y ver lo difícil que es conciliar trabajo, estudio o un simple hobbie me ha llevado a crear una app para ayudar a conciliar. La falta de tiempo y recursos hacen que esperemos meses a entrar en una guardería, por eso el propósito de esta app es ahorrar tiempo e informar a los padres de todas las opciones que tienen según sus necesidades.

# Requisitos:

*Backend: 3 CRUDs completos y 3 modelos mongoose mínimo.
*Frontend: 10 componentes

Además este proyecto estará ejecutado con los paquetes y dependencias especificados: fronted desarrollado en next.js y typescript, sistema de autentificacion tanto en fronted como en backend... entre otros requisitos.

  
# Estructura del Proyecto
Mi proyecto se estructura en un monorepo que integra dos servicios: un fronted y un api.
Carpetas:

```
final-project
    ├── Api
    │    ├── src
    │    │    ├── lib
    │    │    ├── models
    │    │    │        ├──admin.model.ts : nombre, precio, zona, edad, horario.
    │    │    │        │ 
    │    │    │        └──reservas.model.ts: client_id, tipo, service_id, start_time, end_time
    │    │    │        └──padres.model.ts: hijos, edades, zona, horario, rango de precio.
    │    │    │ 
    │    │    ├── routers
    │    │    │     ├──admin_router.ts
    │    │    │     └──reservas_router.ts: 
    │    │    │     │         └── GET/api/comparativa: lista comparativa
    │    │    │     │         └── POST/api/comparativa: actualizar lista comparativa
    │    │    │     │         └── Delete/api/comparativa: borrar 
    │    │    │     │
    │    │    │     └──padres_router.ts
    │    │    │  
    │    │    │  
    │    │    │  
    │    │    │  
    │    │    ├── scripts
    │    │    ├── app.ts
    │    │    ├── config.ts
    │    │    └── server.ts
    │    └── package.json
    ├── Front
    │    ├── src
    │    │    ├── components
    │    │    │    └── formularios.tsx
    │    │    ├── lib
    │    │       
    │    └── package.json
    ├── package.json
    ├── lerna.json // si estas usando lerna
    └── README.md
```


# Acceso al juego

Puedes jugar pinchando el siguiente enlace : [Pincha aquí]()

# Manual de instalación 

Para ejecutar con parcel sigue los siguientes pasos

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

Para desplegar y actualiar verisiones en ghPages: `yarn run ghbuild`


# Ejemplos de código

# Recursos útiles
* lerna: 
[Documentación Lerna](https://github.com/lerna/lerna)
* 

# Listado de paquetes y dependencias

* App ejecutada en enorno de ejecución NodeJS
* Uso de typescript y next.js en fronted
* Uso de fastify y mongoose en backend
* Gestor de dependencias utilizado: Yarn
* Para ejecutar el html: Parcel
* Lenguaje utilizado: Typescript
* Librerias utilizadas para código: 
* Librerias utilizadas para maquetar:
* Otras herramientas: eslint

# Despliegue en produccion

* fronted: [Heroku] (https://www.heroku.com/)
* Base de datos : MongoDB Atlas

# Agradecimientos





