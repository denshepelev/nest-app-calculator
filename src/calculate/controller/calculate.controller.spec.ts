import { Test, TestingModule } from '@nestjs/testing';
import { Method } from 'src/calculate/types/method.enum';
import { CalculateController } from './calculate.controller';
import { CalculateService } from '../service/calculate.service';

describe('CalculateController', () => {
  const calculate = jest.fn();
  const CalculateServiceStub = {
    calculate,
  };
  let controller: CalculateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculateController],
      providers: [
        { provide: CalculateService, useValue: CalculateServiceStub },
      ],
    }).compile();

    controller = module.get<CalculateController>(CalculateController);
    calculate.mockReset();
  });

  it('Should call calculate service method', () => {
    controller.calculate(100, 10, Method.Addition);
    expect(calculate).toHaveBeenLastCalledWith(100, 10, Method.Addition);
  });
});
