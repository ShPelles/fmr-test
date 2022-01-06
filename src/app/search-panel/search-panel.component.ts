import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';
import { Stock } from '../_shared/models/stock.model';
import { SearchStocksService } from '../_shared/search-stocks.service';
import { StocksListService } from '../_shared/stocks-list.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  searchInput = new FormControl('');

  searchResult$ = this.searchInput.valueChanges.pipe(
    switchMap(search => this.searchStocksService.searchByName(search)),
  );

  constructor(
    private searchStocksService: SearchStocksService,
    private stocksListService: StocksListService,
  ) { }

  ngOnInit(): void { }

  addStock(stock: Stock) {
    try {
      this.stocksListService.addStock(stock.Symbol);
    } catch (error) {
      alert((error as Error).message);
    }
  }
}
