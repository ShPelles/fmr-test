import { TestBed } from '@angular/core/testing';

import { SearchStocksService } from './search-stocks.service';

describe('SearchStocksService', () => {
  let service: SearchStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
