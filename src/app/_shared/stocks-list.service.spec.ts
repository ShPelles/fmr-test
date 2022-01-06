import { TestBed } from '@angular/core/testing';

import { StocksListService } from './stocks-list.service';

describe('StocksListService', () => {
  let service: StocksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
