import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculateController } from './calculate/calculate.controller';
import { ResultService } from './result/result.service';

@Module({
  imports: [],
  controllers: [AppController, CalculateController],
  providers: [AppService, ResultService],
})
export class AppModule {}
