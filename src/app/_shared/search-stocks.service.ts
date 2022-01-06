import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './models/stock.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchStocksService {

  constructor(private http: HttpClient) { }

  searchByName(query: string): Observable<Stock[]> {
    const params = { query };
    return this.http.get<Stock[]>(environment.apiUrl, { params });
  }
}
