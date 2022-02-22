

** auth0 **

dentro del archivo pages de next, una carpeta auth con el archivo ...auth0.
crear un archivo demo.ts

se externaliza el proceso de login en auth0 porque es mas facil y ejecuta mejor.

Porceso a seguir: logueras, crear un tentant (agurpaciond de todos los usuarios de un sistema o una app)
1. nombre
2. region: europa
3. envionrment tag: desarollo

en auth0 ya estan los modelos de usuarios, como mucho hay que traerse el id de usuarios

acces token, vamos a usarlo para mandar a una web Api: en mi app tengo un token de sesion unico, cuanod yo me loguee a web Api A o web Api b les voy a enviar una copia a cada uno. el acces token es unico, pero las copias seran excluyentes entre si, es decir no funcionara al de web api a en web api b y viciversa. de esta forma somos menos vulnerables.

el token es posibles verificarlo con una plataforma de auntetificaicon o el proveedor de este certificado.

Crear app: regular web applications

en la docu de auth esta el proceso y el codigo  "add the dynamic app route" para copiarlo y pegarlo.

la autentificacion la va llevar auth0 en el front, tendremos  usar auth2 para que se quede en el back

...

react fc: fc signifca function component.

objetivo de clase de hoy: saber Como funciona y como implementarlo


SEMANA QUE VIENE - miercoles : seed archivo , api con crud y modelos.

