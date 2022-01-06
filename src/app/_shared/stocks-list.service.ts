import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksListService {

  private listSubject = new BehaviorSubject([] as string[]);

  constructor() { }

  getList(): Observable<string[]> {
    return this.listSubject.asObservable();
  }

  addStock(symbol: string): void {
    const currentList = this.listSubject.getValue();
    if (currentList.includes(symbol)) {
      throw new Error('already subscribed');
    }

    const newList = [...currentList, symbol];
    this.listSubject.next(newList);
  }

  removeStock(symbol: string): void {
    const currentList = this.listSubject.getValue();
    const index = currentList.indexOf(symbol);
    if (index < 0) {
      throw new Error('already deleted');
    }
    currentList.splice(index, 1);
    this.listSubject.next(currentList);
  }
}
