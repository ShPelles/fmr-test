import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, interval, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StockValue } from './models/stock-value.model';
import { StocksListService } from './stocks-list.service';

const INTERVAL = 1000;

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private lastUpdateId = 0;

  constructor(
    private stocksListService: StocksListService,
    private http: HttpClient,
  ) { }

  getMarketData() {
    return interval(INTERVAL).pipe(
      switchMap(() => this.stocksListService.getList()),
      switchMap(symbols => symbols.length > 0 ?
        this.http.get<StockValue[]>(environment.apiUrl + 1, { params: { symbols: symbols.toString() } }) :
        of([])
      ),
      tap(result => this.lastUpdateId = result[0]?.UpdateId || 0),
    )
  }
}
