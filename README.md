# Online Calculator (REST API)

This is a pilot project to create the REST API for an online calculator. This project was conceived from one of the exercises in module 2 of the Cubos Academy backend software development course.

<img src="https://github.com/dosilva425/calculadora-online-api-rest/blob/main/prints/multiplicacao.png">
<img src="https://github.com/dosilva425/calculadora-online-api-rest/blob/main/prints/porcentagem.png">
<img src="https://github.com/dosilva425/calculadora-online-api-rest/blob/main/prints/raiz_quadrada.png">

# Features:

- Sum
- Subtraction
- Multiplication
- Division
- Power (Exponentiation)
- Square Root
- Percentage

# Technologies

- JavaScript
- NodeJS
- Express

# Requirements

- node installed on your machine
- npm installed on your machine

## Prepare

- Clone this repository on any folder that you want
- Open your terminal on the same folder and type

```

npm install express

```

#### Run

```

npm run dev

```

# Routes

- [GET]/soma
- [GET]/subtracao
- [GET]/multiplicacao
- [GET]/divisao
- [GET]/potencia
- [GET]/raiz_quadrada
- [GET]/porcentagem

# More details about each route

## Sum

- URL: `/soma?num1&num2`
- Request Query Params:
  - `/num1` (required): 1st number;
  - `/num2` (required): 2st number.

## Subtraction

- URL: `/subtracao?num1&num2`
- Request Query Params:
  - `/num1` (required): 1st number;
  - `/num2` (required): 2st number.
 
## Multiplication

- URL: `/multiplicacao?num1&num2`
- Request Query Params:
  - `/num1` (required): 1st number;
  - `/num2` (required): 2st number.
 
## Division

- URL: `/divisao?num1&num2`
- Request Query Params:
  - `/num1` (required): 1st number (dividend);
  - `/num2` (required): 2st number (divisor).

## Power (Exponentiation)

- URL: `/potencia?num1&num2`
- Request Query Params:
  - `/num1` (required): 1st number (base);
  - `/num2` (required): 2st number (exponent).
  
## Square Root

- URL: `/raiz_quadrada?num1&num2`
- Request Query Params:
  - `/num` (required): Number (radicand).
  
## Percentage
- URL: `/porcentagem?num1&num2`
- Request Query Params:
  - `/num1` (required): 1st number (percent);
  - `/num2` (required): 2st number (total value).
