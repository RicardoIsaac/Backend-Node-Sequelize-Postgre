# Backend aid 4 aids e-commerce

## Contexto

Estamos construyendo un e-commerce para la venta de libros, sin embargo no ****descartamos la posibilidad de vender otro tipo de productos en el futuro. El sistema que queremos construir debe estar en la capacidad de manejar inventario, vender, comprar, un carrito de compras, registrar usuarios, un perfil de usuarios y que los usuarios se puedan autenticar.

Tú tarea es construir los servicios que nos permita cumplir con estas funciones, nos preocupa mucho la seguridad por lo que queremos conocer que **practicas de seguridad** tuviste en cuenta durante el desarrollo.

### Requerimientos

-   **Registro de usuarios**:
    -   Los usuarios deben estar en la capacidad de registrarse indicando un correo electrónico, un nombre y una contraseña.
-   **Autenticación de usuarios:**
    -   Los usuarios podrán ingresar en su cuenta ingresando el correo y contraseña del registro.
-   **Perfil de Usuarios:**
    -   Los usuarios podrán agregar una dirección de residencia y una foto de perfil.
    -   La dirección de residencia y foto de perfil se puede editar en cualquier momento.
-   **Inventario de productos:**
    -   Se debe poder agregar libros indicando el ISBN, título del libro, precio, autor, editorial y número de existencias.
    -   En un futuro queremos tener más productos, pero no tenemos características especificas para esos productos, más allá del precio, código, nombre del producto y número de existencias.
    -   Se debe poder actualizar las existencias de los producto ens cualquier momento.
    -   Se debe poder registrar el ingreso (compra) de un producto indicando el distribuidor y la cantidad comprada.
    -   Se debe poder consultar la lista de productos con sus existencias.
-   **Productos**
    -   El usuario debe poder agregar un producto al carrito de compras.
    -   El usuario debe poder comprar un producto
        -   Si no hay existencias, se le debe notificar al usuario al finalizar la compra.
    -   El usuario debe poder consultar la lista de productos.
-   Plus si construye el API con NodeJs.
-   Se debe conectar a una base de datos. Plus si utiliza PostgreSQL y Prisma como ORM.
-   Es importante que el API tenga documentación que explique como es su manejo.
-   Tenga en cuenta parámetros de seguridad y documente que implementaciones de seguridad ha utilizado.

### Criterios de Evaluación

-   Es importante que se preocupe por la escalabilidad, reutilización y la solidez de su solución. Suponga que otros desarrolladores trabajarán con usted eventualmente.
-   Capacidad de entender un problema de negocio, indagar y plantear una solución.
-   Capacidad para desarrollar una API.
-   Uso de buenas practicas.
-   Estilo de codificación.
-   Documentación.
-   Testing (Deseable).


## Funcionamiento

debe de tener un archivo .env o variables globales para su funcionamiento

port=**puerto a usar**
host=**localhost**
DB_PORT=**5432 por defecto**
user=**usuario**
password= **contraseña**
db=**base de datos a usar**
jwt_secret=**palabra que sea, para este proyecto se utillizo aid4aids_secret_key**


## Rutas

#### "host":"port"/api/auth/signup,
se pasan los valores username, email, password y roles (roles en formato de array)
	
    {
    username:"example2",
    email:"example2@gmail.com",
    password:"examplepassword2",
    roles:["user"]
    }

#### "host":"port"/api/auth/signup,
se pasan los valores  email y password 
	
    {
    username:"example2",
    password:"examplepassword2",
    }
  este te dara un token necesario para poder seguir usando

### para estas rutas es necesario estar logeado como admin 

#### "host":"port"/api/product/create
se pasan los  valores de codigo, titulo, precio, existencias, autors, editorials

        {
    codigo:"1"
    titulo:"libroprueba2"
    precio:5
    existencias:5
    autors:"escritor 1"
    editorials:"editorial1"
        }

#### "host":"port"/api/product/allproducts
no se pasa ningun valor, te da los objetos con su nombre y numero de existencias

#### "host":"port"/api/product/restock
titulo y valor del nuevo stock

    {
    titulo:"libroprueba2"
    values:5
    }

### para estas rutas se puede accerder como usuario

#### "host":"port/api/test/usercart/:email"
por params el usuario puede ver su carrito o un admin

    host:port/api/test/usercart/:example2@gmail.com

#### "host":"port"/api/test/update
se manda el email direccion de la imagen y la nueva direccion
 

     {
        email:"example2@gmail.com",
        img:"imgdireccion.com",
        adress:"calle ejemplo entre avenida 4 y 5"
        }


#### "host":"port"/api/test/shop
se mandan los valores del correo del usuario, el titulo que comprara y cantidad como values

       {
	    email:"example2@gmail.com",
        titulo:"libroprueba2"
        values:2
        }
esta añadira valores a la lista de comprados del usuario, modificara la existencia de los productos y hara resgistro en el item de la compra

#### "host":"port"/api/test/addcart
se mandan los valores del correo del usuario, el titulo que comprara y cantidad como values

       {
	    email:"example2@gmail.com",
        titulo:"libroprueba2"
        values:2
        }
esta añadira el producto al carrito del usuario