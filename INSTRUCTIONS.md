Ejercicio 2 - Worky
Objetivo: Desarrollar una aplicación desde donde podamos consumir endpoint a una API de empleados, al momento de obtener los datos vamos a poder desde la interfaz buscar por nombre, adicional realizar un CRUD donde podamos Crear, Eliminar y Actualizar empleados, cabe mencionar que para ello ya tenemos un diseño que se encuentra en figma que es el que vamos a seguir para la creación del proyecto.
¿Qué tecnologías se van a usar?
Para poder llevar acabo este proyecto vamos a ocupar un par de tecnologías que nos ayudarán a poder realizar el mismo de una forma eficiente y rápida, de igual manera se va ir de la mano con la documentación de todas las tecnologías esto para poder tener un mejor desempeño y despejar dudas en cualquier momento, las tecnologías a usar son las siguientes:
Vue 2.x
Vite
Tailwind CSS
Crear proyecto con Vue 2.x + Vite
Vamos a crear el proyecto con ayuda de vite ya que este nos ayuda una experiencia más rápida y que el proceso del desarrollo sea más eficiente. Los paso a seguir para crear el proyecto son:
Primero desde la terminal vamos a ubicarnos en la carpeta donde vamos a crear el proyecto, una vez dentro haremos uso del comando ➡️npm create vite@latest admin-employees
Una vez ejecutado el comando anterior en nuestra terminal, este nos ayudará a proceder con la creación del mismo para la primera parte donde nos pregunta que framework queremos utilizar, vamos a poner vainilla y en la variante seleccionamos JavaScript
Después de esto nos arroja en consola que el proyecto ha sido creado exitosamente, por lo que nos ubicamos dentro de la carpeta de nuestro proyecto cd admin-employees vamos a proceder a correr el siguiente comando npm install ➡️que nos ayudará a instalar las dependencias necesarias en nuestro proyecto
Luego una vez que terminemos con el comando anterior vamos a proceder a correr el siguiente comando ➡️ npm install vue@^2 para tener la versión de vue 2.
Una vez instalado vue 2, vamos a crear un archivo bajo el nombre vite.config.js el cual nos va a servir para configurar vue 2 en el vite y enseguida vamos a guardarlo y correr el comando npm run build nos va a generar un par de archivos que son archivos más limpios sin tanto código y que nos ayudarán a agilizar todo más fácil.
Por último procedemos a correr el comando npm run dev ➡️que nos ayudará a levantar los servicios para ver el proyecto en el navegador con la URL: http://localhost:5173/

Instalación de Tailwind CSS
Ya que tenemos la estructura de nuestro proyecto con ayuda de lo ejecutado en el punto anterior, vamos a proceder a instalar Tailwind CSS usando el plugin de PostCSS para poder aplicar los estilos y personalizar nuestra app.
Aquí vamos a ejecutar el siguiente comando npm install -D tailwindcss postcss autoprefixer ➡️Se instalará Tailwind junto con sus dependencias y se creará el archivo tailwind.config.js
Después en la raíz de nuestra carpeta del proyecto vamos a crear un archivo que se va a llamar postcss.config.cjs en este de manera manual vamos a agregar los plugins los cuales serán tailwindcss y autoprefixer
Ahora vamos a agregar las directivas correspondientes en este caso en nuestro archivo style.css
¿Cómo es la API? y ¿Cómo se usa?

Al momento de acceder a la app para ver los empleados, todo bien podemos ver que esta un formato JSON en la página donde muestra los empleados con la información correspondiente, pero las demás URL nos arrojan error de que no se encontró la pagina.
Para ellos utilizamos la herramienta postman donde se checo cada URL con su método correspondiente así se válido que todas estuvieran bien, así que hice la siguiente lista:

GET - https://dummy.restapiexample.com/api/v1/employees
PUT - https://dummy.restapiexample.com/public/api/v1/update/21
POST - https://dummy.restapiexample.com/api/v1/create
DELETE - https://dummy.restapiexample.com/public/api/v1/delete/2

Ya empezado a hacer el código en el archivo App.vue y realizar la llamada correspondiente a esta tuve un detalle, no me dió acceso ya que bloquea e impide que se obtenga la información.

Al ver que no se podía obtener de manera directa busque varias maneras pero por el tiempo, opte por hacer uso de la herramienta de postman y con el método GET más la URL de la API poder obtener el JSON y guardarlo para poder hacer uso de la información y mostrarla.

Copie todos los resultados con formato JSON y los pegue a un archivo al cual le puse el nombre de employees.json que se encuentra ubicado en la carpeta public dentro de la carpeta del proyecto.

Creación de la aplicación web en código
Vistas
Como lo comentaba, en este proyecto se proporciono un diseño a seguir por lo que igual dentro de nuestra carpeta view, vamos a incluir las vistas necesarias.
Vamos a crear los archivos para cada vista, en este caso tendremos el archivo App.vue, donde dentro del template comenzaremos con la maquetación de la tabla donde tendremos los datos obtenidos, en nuestro script dentro de esta vista crearemos una función y creamos un método donde haremos uso de un fetch para obtener la información de nuestro JSON (la API no nos dió acceso para obtener la información).
En esta misma dentro del ciclo de vida del componente al momento de montar el componente vamos a mostrar los datos obtenidos para poderlos reflejar en la tabla
También se crea Form.vue que justamente es donde vamos a construir la estructura para formarlo y adicional también la estructura de la lógica.

¿Qué hacer con el repositorio?
Lista de comandos a utilizar y explicación:
git clone + URL
cd repositorio
OJO aquí tenemos 2 carpetas por lo que podemos movernos al proyecto 1 o proyecto 2, ¿cómo lo hacemos?, bien ponemos cd proyecto 1 o cd proyecto 2 según sea el caso a necesitar.
En el primero requerimos un archivo .env con el nombre de la variable del entorno y su valor antes de correrlo y para correrlo sería con el comando npm run dev
En el segundo caso sólo nos movemos a la carpeta como se indico anteriormente y de igual manera el comando para correrlo sería con npm run dev.

Una vez que el proyecto esta arriba, para poderlo continuar trabajando, lo ideal sería realizar lo siguiente:
Una vez dentro de GitLab, vamos a botón de Fork, nos va a mandar a un formulario donde nos dirá que esa es una copia de dicho proyecto al que ingresamos, podemos dejar el mismo nombre o cambiarlo, adicional nos pide que en la URL se asigné un namespace que en este caso es nuestra cuenta de GitLab y nos da opción a ver que ramas se van a incluir y la visibilidad que dicho repositorio va a tener.
Una vez realizado lo anterior vamos a proceder a configurar el SSH (en mi caso no lo tenía configurado), en nuestra terminal vamos a ejecutar lo siguiente cd .ssh y después el comando ls para ver que archivos tenemos, debemos visualizar uno que tenga extensión .pub, ahora con el comando cat más ese archivo que termina con extensión .pub nos va a arrojar nuestra key.
Nos vamos al apartado de User Settings, tenemos un botón que dice SSH Keys donde podemos acceder y después tenemos un botón a mano derecha que nos dice “Add new key”, daremos click ahí para poder agregar nuestra key que obtuvimos previamente. copiamos nuestra key y agregamos un titulo.
Ahora vamos a clonar el repositorio en nuestra máquina, en la misma pantalla del repo viene un apartado con la URL que dice “clone with ssh” copiamos esa URL.
Nos ubicamos donde queramos realizar la clonación del repositorio(en mi caso lo hice en el escritorio), abrimos nuestra GitBash, y ponemos el siguiente comando git clone + URL que copiamos previamente
