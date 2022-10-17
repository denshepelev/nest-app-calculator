import { Test, TestingModule } from '@nestjs/testing';
import { Method } from '../types/method.enum';
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

  it('Should return result 10 for division', () => {
    expect(service.calculate(100, 10, Method.Division).result).toBe(10);
  });

  it('Should return result 250 for addition', () => {
    expect(service.calculate(200, 50, Method.Addition).result).toBe(250);
  });

  it('Should return result 100 for subtraction', () => {
    expect(service.calculate(150, 50, Method.Subtraction).result).toBe(100);
  });

  it('Should return result 2500 for multiplication', () => {
    expect(service.calculate(50, 50, Method.Multiplication).result).toBe(2500);
  });

  it('should return error on 0 division', () => {
    try {
      service.calculate(100, 0, Method.Division);
    } catch (error) {
      expect(error.message).toBe('Division by zero is forbidden');
    }
  });
});
