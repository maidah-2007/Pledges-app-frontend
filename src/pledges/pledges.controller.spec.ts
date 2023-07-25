import { Test, TestingModule } from '@nestjs/testing';
import { PledgesController } from './pledges.controller';

describe('PledgesController', () => {
  let controller: PledgesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PledgesController],
    }).compile();

    controller = module.get<PledgesController>(PledgesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
