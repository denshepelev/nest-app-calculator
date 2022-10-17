import { Controller, Get, ParseFloatPipe, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalculateDto } from '../model/calculate.dto';
import { CalculateService } from '../service/calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly resultService: CalculateService) {}
  @Get()
  @ApiTags('calculate')
  calculate(
    @Query('firstNum', ParseFloatPipe) firstNum: number,
    @Query('secondNum', ParseFloatPipe) secondNum: number,
    @Query('method') method: string,
  ): CalculateDto {
    return this.resultService.calculate(firstNum, secondNum, method);
  }
}
