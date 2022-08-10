# ![mercado libre](https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.1/mercadolibre/logo__large_plus.png) Client


## Introducción

Este proyecto se creó con [Vite React Js](https://vitejs.dev/) para aprovechar la compilación de desarrollo desagregada.
Se realizó deploy de front-end en [Netlify](https://meli-bruno.netlify.app/) en donde se encuentra consumiento la API generada en [Heroku](https://shrouded-cove-81904.herokuapp.com/)

Este proyecto se creó con [ESLint](https://eslint.org/) para el desarrollo del código y [Sass](https://eslint.org/) para las hojas de estilo.

#### Se intentó evitar el uso de dependencias prescindibles.

## Uso
Para realizar pruebas en desarrollo, se recomienda inicar primero el servidor de forma local y luego iniciar esta aplicacion para realizar el consumo de dicha API.
De igual forma, se pueden modificar las variables de ambiente en caso de configurar otro puerto.

## Instalación
```
npm install
```

## Desarrollo:
Para correr el proyecto en modo dev:

`npm run dev`

Abrir [http://127.0.0.1:5173/](http://127.0.0.1:5173/) para ver en el navegador.

Para conocer los errores detectados por ESLint:

`npm run lint`

Para corregir automáticamente los errores detectados por ESLint

`npm run lint:fix`

## Producción:
Para correr el proyecto en modo producción, ejecutar comando:

`npm run build`

El `build` de la app se guardara en la carpeta `./dist`

## Estructura principal de archivos

```
+-- public
+-- src
|   +-- assets
|       +-- images // Contiene las imagenes necesarias para el desarrollo
|   +-- components
|       +-- ProductDetail // Contiene al componente del detalle de producto
|       +-- ProductList // Contiene al componente del listado de producto
|           +-- ProductListItem // Contiene al componente de producto en lista
|               ...
|       +-- SearchNavBar // Contiene al componente de la barra de busqueda
|       +-- Shared // Contiene componentes compartidos en varias páginas
|           +-- Breadcrumb // Contiene al componente con el camino de categorías
|           +-- Loading // Contiene al componente de carga
|               ...
|   +--environments // Contiene los ambientes
|       +-- environment.dev.js // Contiene las variables para desarrollo
|       +-- environment.prod.js // Contiene las variables para producción
|           ...
|   +-- helpers
|       +-- ApiFetchService.js // Contiene al servicio para consumir peticiones
|       +-- currencyFormat.js // Funcionalidad para dar formato a monedas
|       ...  
|   +-- hooks
|       +-- useFetch.js // hook para consumir peticiones
|       +-- useSEO.js // hook para configurar seo en las páginas dinámicamente
|       ... 
|   +-- pages
|       ...
|   +-- styles
|       ...
|   +-- App.jsx
|       ...
|   +-- main.jsx
|       ...
```

## Estilos

Los estilos principales se encuentran en `main.scss`, cuya configuración base se encuentra dentro de la carpeta `./base`.
Además, cada página y cada componente posee su propia hoja de estilo. 

Se agregaron algunas configuraciones para que las pantallas sean responsivas.