import { Module } from '@nestjs/common';
import { CalculateModule } from './calculate/calculate.module';

@Module({
  imports: [CalculateModule],
})
export class AppModule {}
