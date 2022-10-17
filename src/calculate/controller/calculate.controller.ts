import { Controller, Get, ParseFloatPipe, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalculateDto } from '../model/calculate.dto';
import { CalculateService } from '../service/calculate.service';
import { Method } from '../types/method.enum';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}
  @Get()
  @ApiTags('calculate')
  calculate(
    @Query('firstNum', ParseFloatPipe) firstNum: number,
    @Query('secondNum', ParseFloatPipe) secondNum: number,
    @Query('method') method: Method,
  ): CalculateDto {
    return this.calculateService.calculate(firstNum, secondNum, method);
  }
}
