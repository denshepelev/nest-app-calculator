import { Controller, Get, HttpException, HttpStatus, ParseFloatPipe, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { ResultDto } from 'src/dto/result.dto';
import { ResultService } from 'src/result/result.service';

@Controller('calculate')
export class CalculateController {
    constructor(private readonly resultService : ResultService){}
    @Get()
   
      calculate (@Query('firstArg', ParseFloatPipe) firstArg : number, @Query('secondArg', ParseFloatPipe) secondArg : number, @Query('method') method : string): ResultDto {
         return this.resultService.calculate(firstArg,secondArg,method) 
      }
}
