# Proyecto creado para postular a Frenon
 
##### Qué es esto.
 
- página creada usando create-react-app basada en el modelo http://mortega.cl/test/#
- la aplicacion es dinamica y sus contenidos se obtienen consumiendo esta api falsa https://mockapi.io/projects/5f10e642d40d13001631d5b5
- la aplicación está dockerizada y el repositorio de gitlab tiene activada un pequeño CI, que corre eslint, normalmente acá irían tests, pero no me dio el tiempo
- para darle forma se utilizó la librería material.ui, y tambien se aprovecho de el custom hook que ellos proveen para hacer css in js
- el estado de la aplicación fue manejado utilizando React Context API
- la aplicación es responsiva y fue hecha considerando pantallas de todos tamaños
- de acuerdo a lo pedido, mensajes individuales pueden accederse utilizando la url localhost:3000/mensajes/<id>, 
 
##### Cómo Ejecutarla.
 
- como la aplicación se encuentra dockerizada el proceso de ejecución es sencillo, pero requiere una máquina con docker instalado en caso de carecer tambien dare las instrucciones para ejecutarlo usando npm.
- una vez clonado el repositorio se debe ejecutar:
    *$docker build -t frenontest .*
- una vez completada la creación de la imagen se debe correr:
    *$docker run -ti -p 3000:3000 frenontest*
- una vez completado esto la aplicacion deberia estar disponible en http://localhost:3000/
 
## Sin Docker.
 
desde la carpeta raiz, ejecute:
    *npm install*
una vez terminado ejecute:
    *npm start*
la aplicacion deberia estar disponible en http://localhost:3000/ despues de unos momentos


