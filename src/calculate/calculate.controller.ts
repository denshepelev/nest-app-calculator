import { Controller, Get, ParseFloatPipe, Query } from '@nestjs/common';
import { CalculateDto } from './calculate.dto';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly resultService: CalculateService) {}
  @Get()
  calculate(
    @Query('firstNum', ParseFloatPipe) firstNum: number,
    @Query('secondNum', ParseFloatPipe) secondNum: number,
    @Query('method') method: string,
  ): CalculateDto {
    return this.resultService.calculate(firstNum, secondNum, method);
  }
}
