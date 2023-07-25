import { Test, TestingModule } from '@nestjs/testing';
import { PledgesService } from './pledges.service';

describe('PledgesService', () => {
  let service: PledgesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PledgesService],
    }).compile();

    service = module.get<PledgesService>(PledgesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
