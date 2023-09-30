# Calculator-Register
Calculator-Register realiza y registra sumas de productos, junto con detalles de ventas como fecha, cliente y estado de la transacción. También permite la generación de informes en PDF mediante pdfmake y la opción de enviarlos por correo electrónico a través de la API send-email. Esta herramienta resulta esencial para una gestión comercial efectiva.

***

## Clonar el proyecto
Para comenzar, necesitarás clonar el repositorio del proyecto en el directorio que elijas. Utiliza el siguiente comando:

```git clone https://github.com/diegonacimiento/calculator-register.git```

***

## Instalación de Dependencias
Para instalar las dependencias necesarias, ejecuta el siguiente comando:

``` npm install ```

***

## Variables de Entorno
Calculator-Register depende de algunas variables de entorno. Deberás crear un archivo ".env" en el directorio raíz del proyecto y definir estas variables. Aquí tienes un ejemplo de un archivo ".env" con explicaciones:
```
VITE_URL="" # Debe escribir la url de su API send-email 
VITE_URL_DEV="http://localhost:3000/api/v1/email/send-email"
```

***

## Iniciar send-email
Primero, debes ejecutar [send-email](https://github.com/diegonacimiento/send-email)

Una vez que el proyecto esté en funcionamiento, continúa...

## Iniciar el proyecto
Para iniciar el proyecto, utiliza el siguiente comando:

```npm run dev```

Este comando iniciará la API y podrás comenzar a utilizarla según lo previsto.

***

Esta documentación debería proporcionarte la información necesaria para configurar y utilizar Calculator-Register. Si tienes más preguntas o encuentras problemas, no dudes en pedir ayuda.
