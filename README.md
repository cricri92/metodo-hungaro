# Metodo Hungaro
### Este es el proyecto de Fundamentos de Optimizacion para la Computacion - periodo lectivo 1-2016

> El método húngaro es un algoritmo sencillo basado en el método simplex, que permite resolver problemas de asignación, los cuales son una especialización de los problemas de transporte. 

#### Los pasos de este método son los siguientes:

- a) Para cada fila de la tabla de costos, identificar el mínimo y restarlo a todos los valores de la fila.
- b) Para cada columna de la tabla resultante, identificar el mínimo y restarlo a todos los elementos de la
columna.
- c) Identificar la solución óptima como la asignación factible asociada con las celdas cuyo valor quedo en cero
después del paso (b). Si se encontró una solución factible, terminar el algoritmo. Si no se encontró una
solución factible:
  - c.1) Tachar con el menor número de líneas horizontales y verticales todos los ceros obtenidos.
  - c.2) Encontrar el menor elemento no tachado. Este elemento le se debe restar a todos los elementos no
tachados y sumar a las intersecciones de las líneas.
  - c.3) Repetir (c).
  
## Instalacion

*Requiere* tener instalado previamente: Node.js (v 4.4.4 o superior)

1. En el fichero raiz, ejecutar el comando en el terminal para instalar todas las dependencias correspondientes al funcionamiento del servidor: 
>```$ npm install```

2. El el fichero *client/*, ejecutar el comando en el terminal para instalar todas las dependencias correspondientes al funcionamiento del cliente:
>```$ npm install```

3. Luego, en el fichero principal, ejecutar el comando en el terminal para correr el server:
>```$ npm start```

4. El servidor correra en [http://localhost:3000](http://localhost:3000)
