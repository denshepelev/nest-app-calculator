import { Test, TestingModule } from '@nestjs/testing';
import { Method } from '../types/method.enum';
import { CalculateDto } from '../model/calculate.dto';
import { CalculateService } from './calculate.service';

describe('ResultService', () => {
  let service: CalculateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculateService],
    }).compile();

    service = module.get<CalculateService>(CalculateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return result 110', () => {
    expect(service.calculate(100, 10, Method.Division)).toEqual(
      new CalculateDto(10),
    );
  });
});
