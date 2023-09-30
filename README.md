# Calculator-Register
Calculator-Register performs and records product sums, along with sales details such as date, customer, and transaction status. It also enables the generation of PDF reports using pdfmake and the option to send them via email through the send-email API. This tool proves essential for effective business management.

[Documentación en español](README-es.md)

***

## Clone the project
To get started, you'll need to clone the project repository into your chosen directory. Use the following command:

```git clone https://github.com/diegonacimiento/calculator-register.git```

***

## Installing Dependencies
To install the necessary dependencies, run the following command:

``` npm install ```

***

## Environment variables
Calculator-Register relies on some environment variables. You'll need to create a ".env" file in the root directory of the project and define these variables. Here's an example of a ".env" file with explanations:
```
VITE_URL="" #You must enter the URL of your send-email API
VITE_URL_DEV="http://localhost:3000/api/v1/email/send-email"
```

***

## Start send-email
First, you should run [send-email](https://github.com/diegonacimiento/send-email)

Once the project is up and running, continue...

## Starting the project
To start the project, use the following command:

```npm run dev```

This command will initiate the API, and you can begin using it as intended.

***

This documentation should provide you with the necessary information to set up and use Calculator-Register. If you have more questions or encounter issues, feel free to ask for assistance.

