import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFormatterService {

  constructor() { }
  getFormattedPrice (price : number) : string{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    // formatter.setMaximumFractionDigits(4)
    return "¢" + formatter.format(price);
  }
}
