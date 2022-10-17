import { Test, TestingModule } from '@nestjs/testing';
import { CalculateController } from './calculate.controller';
import { CalculateDto } from './calculate.dto';
import { CalculateService } from './calculate.service';

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

  const dto: CalculateDto = new CalculateDto(110);

  it('Should return result 110', () => {
    expect(controller.calculate(100, 10, 'ADD')).toEqual(dto);
  });
});
