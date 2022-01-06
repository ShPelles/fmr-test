import { Stock } from './stock.model';

export interface StockValue extends Stock {
  Ask: number;
  AskSize: number;
  BasePrice: number;
  Bid: number;
  BidSize: number;
  LastPrice: number;
  UpdateId: number;
}
