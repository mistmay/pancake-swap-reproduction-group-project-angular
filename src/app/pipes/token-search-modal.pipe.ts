import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenSearchModal'
})
export class TokenSearchModalPipe implements PipeTransform {

  transform(value: any, searchedKey: string): any {
    if (searchedKey.trim() === '') {
      return value.filter((element: any) => element.symbol === 'bnb' ||
        element.symbol === 'btc' ||
        element.symbol === 'busd' ||
        element.symbol === 'cake' ||
        element.symbol === 'eth' ||
        element.symbol === 'usdt');
    } else {
      return value.filter((element: any) => element.symbol.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()) ||
        element.name.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()));
    }
  }

}
