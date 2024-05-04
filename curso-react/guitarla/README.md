# Guitarla - Frontend de Ecommerce de Guitarras
¡Bienvenido a Guitarla! Este es el proyecto frontend de un ecommerce de guitarras desarrollado con Vue.js utilizando la Composition API. Aquí encontrarás una tienda virtual donde podrás explorar y comprar guitarras de diferentes estilos y marcas.

En este proyecto, reforzaremos varios conceptos importantes de Vue.js y la Composition API para mejorar nuestras habilidades en el desarrollo de aplicaciones web interactivas. A continuación, explicaremos cada uno de estos conceptos que se han empleado en Guitarla:

## Conceptos reforzados:
### 1. Creación de Componentes
En Guitarla, hemos utilizado la estructura de componentes de Vue.js para dividir la interfaz de usuario en piezas reutilizables y fáciles de mantener. Los componentes clave que hemos creado son:

Header: Contiene la barra de navegación y el carrito de compras.
Footer: Muestra información del sitio.
Guitarra: Representa una tarjeta de guitarra con detalles como imagen, nombre, precio, etc.
### 2. Custom Events
Para permitir la interacción entre componentes, hemos utilizado custom events para comunicar cambios o acciones específicas. Por ejemplo, cuando un usuario agrega una guitarra al carrito de compras, se emite un evento personalizado para que otros componentes, como el carrito de compras, actualicen su estado.

### 3. Directivas
Las directivas son características especiales que se aplican a los elementos del DOM en los templates de Vue.js. En Guitarla, hemos utilizado directivas incorporadas como v-if, v-for.

### 4. State y Emits
Hemos utilizado el estado del componente para almacenar información relevante y mantener la coherencia de la interfaz de usuario. Además, hemos emitido eventos personalizados (emits) cuando el estado cambia, lo que permite a otros componentes conocer y reaccionar a esos cambios.

### 5. Computed
Los computed properties son funciones en Vue.js que permiten realizar cálculos basados en los datos almacenados en el estado del componente. Hemos utilizado computed properties para calcular datos derivados y optimizar el rendimiento al evitar cálculos innecesarios.

### 6. Métodos de los Arrays
Para manejar la lista de guitarras y el carrito de compras, hemos utilizado diversos métodos de arrays como filter, findIndex, y reduce. Estos métodos nos permiten manipular y obtener información específica de los arreglos de manera eficiente.

### 7. Local Storage
Para mantener la persistencia de datos en la aplicación, hemos utilizado el Local Storage del navegador. De esta manera, los productos en el carrito de compras y ciertas preferencias del usuario se mantienen incluso después de cerrar y volver a abrir la página.

### 8. Watch
Hemos utilizado la opción watch de Vue.js para observar cambios en el estado y realizar acciones cuando estos cambios ocurren. Por ejemplo, podemos vigilar el carrito de compras y guardar automáticamente los cambios en el Local Storage.

### 9. Props
Los props son una forma de pasar datos de un componente padre a un componente hijo. En Guitarla, hemos utilizado props para enviar información específica de una guitarra desde el componente principal hacia el componente Guitarra y mostrar detalles únicos de cada guitarra.

Check this proyect in: [https://venerable-biscuit-2380c1.netlify.app/](https://catalog-rlpr-guitarla.netlify.app/)

