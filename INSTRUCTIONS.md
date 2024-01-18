# Prueba Técnica - Ejercicio #2

## Objetivo

El objetivo de esta segunda parte de la prueba técnica, es poder mostrar las hábilidades y conocimientos en cuanto al manejo de Vue 2.x, creación de modal, replicar el modelo proporcionado mediante **Figma**, consumo de endpoint para al final lograr la construcción de un **CRUD**, es decir, **C**rear, Leer (**R**ead), Actualizar (**U**pdate) y Eliminar (**D**elete) todo lo anterior con ayuda de una API que también previamente ya se proporcionó.

![](https://github.com/dianazavalaA/Empleados/blob/master/AdminEmployees%20Img/Presentaci%C3%B3n%20Final.png?raw=true)

## Tecnologías

En esta parte enlistaremos las tecnologías usadas para el desarrollo de la aplicación, de igual manera al dar click en cada una de las tecnologías puedes acceder a la documentación de cada una de ellas, a continuación se enlistan cada una de ellas:

- [Vue 2.x](https://v2.vuejs.org/v2/guide/ "Vue 2.x"): Este framework se utilizó para crear la estructura de toda la interfaz de la aplicación.
- [Tailwind CSS](https://tailwindcss.com/ "Tailwind CSS"): Está tecnología se uso para poder darle estilos a toda la estructura del proyecto, lo que facilitó mucho el desarrollo.
- [VeeValidate](https://vee-validate.logaretm.com/v3/ "VeeValidate"): Se hizo uso de esta plugin para poder validar la parte del formulario y los campos que tenemos, lo que nos hace un camino simple para lo que queremos lograr.
- [Vite](https://vitejs.dev/ "Vite"): Está poderosa herramienta de front-end se hizo uso para poder crear la aplicación hombro a hombro junto con Vue 2.x y que su construcción pudiera ser lo más sencilla posible, además de que la respuesta del servidor va a ser más rápida, ya que logra dividir dependencia y código fuente.
- [Vue-Router](https://v3.router.vuejs.org/ "Vue-Router"): Se hizó uso de esta biblioteca para poder asignar componentes de la aplicación a distintas URL, lo cual ayudo bastante a navegar en la misma y así obtener un resultado exitoso.
- [Toast-Vue](https://www.npmjs.com/package/vue-toast-notification/v/1.0.1 "Toast-Vue"): Se hizo uso de este componente para manejar las notificaciones de manera emergente.
- [Vuejs-paginate](https://www.npmjs.com/package/vuejs-paginate "Vuejs-paginate"): Se hizo uso de este componente que ayudo de una manera fácil a hacer la paginación.
- [Template literals](Template literals "Template literals"): se hizo uso de esta documentación para el desarrollo de la aplicación ya que hay algunas partes donde ocupamos cadenas de varias lineas ya que se hizo uso de query params.
- [API Dummy](https://dummyjson.com/docs/users "API Dummy"): Se utilizó esta API que como ya les comentaba al inicio, nos ayudo a poder realizar nuestro CRUD así se se logró que la comunicación entre la información y la aplicación fuera más completa, en la siguiente parte explicamos más a detalle su uso.
- [Diseño Figma](https://www.figma.com/file/BO5iFAlfeairAaNOjZkwpI/Front-End-Test?type=design&node-id=0-1&mode=design&t=hIOHAIIZ1pbSN11w-0 "Diseño Figma"): Este es el diseño que se replicó y que se trato de hacer lo más parecido posible a lo que se presenta en Figma, al final se agregan imagenes de los resultados obtenidos y la explicación de cada uno.

## ¿Cómo es la API? y ¿Cómo se usa?

Como bien se mencionó para lograr la construcción de la aplicación utilizamos [API Dummy](https://dummyjson.com/docs/users "API Dummy"), es importante poder conocer e indagar de que trata la API que se va a usar, ya que para ello necesitamos saber de primera instancia el entorno que tiene.
Esta API permitió una comunicación sin problemas, fue más flexible y se pudo trabajar de lleno de una forma más amigable y sobre todo con rápidez y fluidez.

#### Conozcamos la API

Esta API puede ayudar a la autenticación, obtener usuarios, obtener productos, categorías, recetas, etc.
En este caso nos vamos a centrar en **usuarios** y el endpoint que se consumió es el de **_/users_** en esta parte podemos ver nombre, apellido paterno, apellido materno, edad, sexo, correo electrónico, número de telefono, nombre de usuario, contraseña, fecha de nacimiento, etc
![](https://github.com/dianazavalaA/Empleados/blob/master/AdminEmployeesImg/Inicio%20API.png?raw=true)
como se puede ver es información muy completa la que nos proporciona pero no se hizo uso de todo el despliegue de esta, sólo se obtendrá y mostrará la siguiente información:

1. Nombre completo (En la API vienen separados Nombre, Apellido Paterno y Apellido Materno, pero hay que mostrarlo completo)
2. Edad
3. Peso
4. Altura
   ![](https://github.com/dianazavalaA/Empleados/blob/master/AdminEmployeesImg/Endpoint%20Users.png?raw=true)
   Adicional a poder obtener los usuarios con su respectiva información también de esta misma parte de** _/users_** vamos a hacer uso del apartados que se encuentran en la documentación para agregar, actualizar y eliminar, en la siguiente parte se explica más a detalle.

#### Añadir nuevo usuario

Para poder añadir un nuevo usuario vamos a hacer uso de lo que se nos proporciona en el apartado de **Add a new user ** aquí en la documentación nos explica a detalle el código a utilizar y también nos comparten algunas notas como que al momento de agregar un usuario, este será simulado ya que no se agregara al servidor y al momento de ser simulación podemos darnos cuenta en la consola del navegador cuando se añadé un usuario porque se ingresará y nos mostrará un nuevo id, es decir, si tenemos en total id: 30 que son los que se tienen en el servidor, al momento de agrega uno nuevo tendremos id: 31.
![](https://github.com/dianazavalaA/Empleados/blob/master/AdminEmployeesImg/Agregar%20nuevo%20usuario.png?raw=true)

#### Actualizar usuario

Para poder actualizar un usuario de igual manera la API nos ayuda a justamente poder tomar todos los elementos necesarios y uno de esos elementos es la parte de actualizar, revisando la documentación se tiene un apartado **Update a user**, de igual manera tenemos el código que se va a utilizar, de acuerdo a la documentación nos dan un par de notas que hay que considerar, ya que nos ayudará a actualizar pero el usuario NO se actualizara en el servidor, otra nota que se debe tomar en cuenta y es importante es que simulará el método **PUT/PATCH** en este caso se hizo uso del **PUT**
![](https://github.com/dianazavalaA/Empleados/blob/master/AdminEmployeesImg/Actualizar%20usuario.png?raw=true)

#### Eliminar usuario

Como lo mencioné antes la API nos da todo en nuestras manos sólo es cuestión de indagar en ella para encontrar la información necesaria, en la misma página de ** _/users_** tenemos un apartado justo para lo que necesitamos que es eliminar el usuario el apartado es **Delete a user** aquí nos proporciona parte del código que podemos utilizar o bien en su caso ir adaptando hasta lograr obtenerlo, de igual manera como en las anteriores partes, nos hacen mención de dos cosas, la primera el usuario NO se eliminará del servidor y la segunda es que simulará justamente que se eliminó el usuario seleccionado, de igual manera la misma API nos proporciona formas para darnos cuenta de este movimiento de eliminación ya que nos mostrará isDeleted o deletedOn estás de hecho nos apareceran en el apartado de **Red** en la pestaña **Request** y justo en esa parte se puede validar lo ya mencionado.
![](https://github.com/dianazavalaA/Empleados/blob/master/AdminEmployeesImg/Eliminar%20usuario.png?raw=true)

#### ¿Cómo usar la API en nuestro proyecto?

Para poder hacer uso de esta API se implemento en código **Fetch API con promises**, hay varias maneras de hacerlo, pero el uso de esta desde mi punto de vista me parece una sintaxis más limpia y más legible, ya que al escribir el código de está manera es fácil de entender para las personas que por primera vez echan un vistazo al código y otra cosa que también me parece buena para en un futuro darle escalabilidad a un sistema y que alguien más continue con ello **fetch** facilita mucho la parte de las respuestas, es decir, accedes más rápido sin tantos rodeos a la información de una API o hasta un JSON, los errores también son algo que maneja **fetch** bastante bien los errores hacer uso de **catch** nos hace más efectivo poder manejas los errores que se tengan y dar acciones rápidas.
A continuación se muestra como se hizo uso de esta parte para poder construir la aplicación.

##### ¿Cómo se implemento Fetch API con promises?

En el componente **_EmployeeList.vue_** se crearon varios métodos, en el apartado de **_methods_** podemos encontrar todos y cada uno de ellos, mientrás se va a ir desglozando la información por partes
