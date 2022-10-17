import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return 10 for division', () => {
    return request(app.getHttpServer())
      .get('/calculate?firstNum=100&secondNum=10&method=DIV')
      .expect(200)
      .expect({ result: 10 });
  });

  it('should return error on 0 division', () => {
    return request(app.getHttpServer())
      .get('/calculate?firstNum=100&secondNum=0&method=DIV')
      .expect(400)
      .expect({ status: 400, message: 'Division by zero is forbidden' });
  });

  it('should return error on wrong operation', () => {
    return request(app.getHttpServer())
      .get('/calculate?firstNum=100&secondNum=10&method=DIVV')
      .expect(400)
      .expect({ status: 400, message: 'Wrong operation was requested' });
  });

  it('should return error validation failed', () => {
    return request(app.getHttpServer())
      .get('/calculate?firstNum=100t&secondNum=10&method=DIV')
      .expect(400)
      .expect({
        statusCode: 400,
        message: 'Validation failed (numeric string is expected)',
        error: 'Bad Request',
      });
  });
});
