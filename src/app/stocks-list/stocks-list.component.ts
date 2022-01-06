import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../_shared/market-data.service';
import { StocksListService } from '../_shared/stocks-list.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  marketData$ = this.marketDataService.getMarketData();

  constructor(
    private stocksListService: StocksListService,
    private marketDataService: MarketDataService,
  ) { }

  ngOnInit(): void { }

  removeStock(symbol: string) {
    this.stocksListService.removeStock(symbol);
  }
}
