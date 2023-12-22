# Online Calculator (REST API)

This is a simple project to create the REST API for an online calculator.

<img src="https://github.com/dosilva425/calculadora-online-api-rest/blob/main/prints/percentage.png">
<img src="https://github.com/dosilva425/calculadora-online-api-rest/blob/main/prints/squareroot.png">
<img src="https://github.com/dosilva425/calculadora-online-api-rest/blob/main/prints/division.png">

# Features:

- Addition
- Subtraction
- Multiplication
- Division
- Power 
- Square Root
- Percentage

# Technologies

- JavaScript
- NodeJS
- dotenv
- express
- joi

# Requirements

- node installed on your machine
- npm installed on your machine

## Prepare

```

git clone git@github.com:dosilva425/online-calculator.git

cd online-calculator

npm install

```

#### Run

```

npm run dev

```

# Routes

- [GET]/addition
- [GET]/subtraction
- [GET]/multiplication
- [GET]/division
- [GET]/power
- [GET]/squareroot
- [GET]/percentage

# More details about each route

## Addition

- URL: `/addition`
- Request Body
  - `x` (required): 1st number;
  - `y` (required): 2st number.

## Subtraction

- URL: `/subtraction`
- Request Body
  - `x` (required): 1st number;
  - `y` (required): 2st number.
 
## Multiplication

- URL: `/multiplication`
- Request Body
  - `x` (required): 1st number;
  - `y` (required): 2st number.
 
## Division

- URL: `/division`
- Request Body
  - `x` (required): 1st number (dividend);
  - `y` (required): 2st number (divisor).

## Power 

- URL: `/power`
- Request Body:
  - `x` (required): 1st number (base);
  - `y` (required): 2st number (exponent).
  
## Square Root

- URL: `/squareroot`
- Request Body
  - `x` (required): Number (radicand).
  
## Percentage
- URL: `/percentage`
- Request Body:
  - `x` (required): 1st number (percent);
  - `y` (required): 2st number (total value).
