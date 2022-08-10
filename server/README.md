# ![mercado libre](https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.1/mercadolibre/logo__large_plus.png) Server

## Introducción

Este proyecto se creó con [Node Js](https://nodejs.org/es/) y [Express](http://expressjs.com/es/).
Se realizó deploy de back-end en [Heroku](https://shrouded-cove-81904.herokuapp.com/) cuyo servicio se encuentra siendoconsumido por un app corriendo en  [Netlify](https://meli-bruno.netlify.app/).

Este proyecto se creó con [ESLint](https://eslint.org/) para el desarrollo del código.

#### Se intentó evitar el uso de dependencias prescindibles.

## Uso
Para realizar pruebas en desarrollo, se recomienda inicar primero el servidor de forma local y luego iniciar la aplicacion de frontend para realizar el consumo de esta API.
De igual forma, se pueden modificar las variables de ambiente en caso de configurar otro puerto.

## Instalación
```
npm install
```
## Desarrollo:
Para correr el proyecto en modo dev:

`npm run dev`

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

Para conocer los errores detectados por ESLint:

`npm run lint`

Para corregir automáticamente los errores detectados por ESLint

`npm run lint:fix`

## Endpoints:

`/api/items?q=​:query`

Debe consultar el siguiente endpoint: 
https://api.mercadolibre.com/sites/MLA/search?q=​:query

Y devolver los resultados en el formato indicado:

````
{
    "author": {
        "name": String
        "lastname": String
    },  
    categories: [String, String, String, ...],  
    items: [
        {
            "id": String,
            "title": String,
            "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_shipping": Boolean
        },
        {...},
        {...},
        {...}
    ]
}
````

`/api/items/​:id`

Debe consultar los siguientes endpoints:

1. https://api.mercadolibre.com/items/​:id
2. https://api.mercadolibre.com/items/​:id​/description

Y devolver los resultados en el formato indicado:

````
{
    "author": {
        "name": String,
        "lastname": String
    },
    "item": {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity": Number,
        "description": String
    }
}
````
