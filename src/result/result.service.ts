import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';

@Injectable()
export class ResultService {
  calculate(firstArg: number, secondArg: number, method: string): ResultDto {
    switch (method) {
      case 'add': {
        return new ResultDto(firstArg + secondArg);
      }
      case 'sub': {
        return new ResultDto(firstArg - secondArg);
      }
      case 'mul': {
        return new ResultDto(firstArg * secondArg);
      }
      case 'div': {
        if (secondArg === 0) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'Division by zero is forbidden',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
        return new ResultDto(firstArg / secondArg);
      }
      default: {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Wrong operation was requested',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
}
