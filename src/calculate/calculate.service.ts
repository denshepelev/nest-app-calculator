import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CalculateDto } from './calculate.dto';

@Injectable()
export class CalculateService {
  calculate(firstNum: number, secondNum: number, method: string): CalculateDto {
    enum Method {
      Addition = 'ADD',
      Multiplication = 'MUL',
      Division = 'DIV',
      Substraction = 'SUB',
    }
    switch (method) {
      case Method.Addition: {
        return new CalculateDto(firstNum + secondNum);
      }
      case Method.Substraction: {
        return new CalculateDto(firstNum - secondNum);
      }
      case Method.Multiplication: {
        return new CalculateDto(firstNum * secondNum);
      }
      case Method.Division: {
        if (secondNum === 0) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              message: 'Division by zero is forbidden',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
        return new CalculateDto(firstNum / secondNum);
      }
      default: {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            message: 'Wrong operation was requested',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
}
