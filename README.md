## Description

Приложение "Калькулятор" с использованием фреймворка [Nest (NestJS)](https://github.com/nestjs/nest) и кода на [TypeScript](http://www.typescriptlang.org/) .
Приложение умеет совершать простейшие математические операции.

Пример работы:
Отправляется GET - запрос на вычисление суммы/вычитания/умножения/деления
двух чисел, в ответ в body приходит результат вычисления.

## Swagger

- Документация Swagger: <http://localhost:3000/swagger-ui>

## Request example

1. <http://localhost:3000/calculate?firstNum=100&secondNum=10&method=ADD>
2. <http://localhost:3000/calculate?firstNum=50&secondNum=10&method=SUB>
3. <http://localhost:3000/calculate?firstNum=20&secondNum=4&method=DIV>
4. <http://localhost:3000/calculate?firstNum=80&secondNum=6&method=MUL>

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
# е2е tests
$ npm run test:e2e
```

## See my other App for Neoflex Java Development

- [VacationPayService](https://github.com/denshepelev/money)
