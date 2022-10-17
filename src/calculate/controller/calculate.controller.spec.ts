import { Test, TestingModule } from '@nestjs/testing';
import { Method } from 'src/calculate/types/method.enum';
import { CalculateController } from './calculate.controller';
import { CalculateDto } from '../model/calculate.dto';
import { CalculateService } from '../service/calculate.service';

describe('CalculateController', () => {
  let controller: CalculateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculateController],
      providers: [CalculateService],
    }).compile();

    controller = module.get<CalculateController>(CalculateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return result 110', () => {
    expect(controller.calculate(100, 10, Method.Addition)).toEqual(
      new CalculateDto(110),
    );
  });
});
