import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Farms } from 'src/app/models/farms';

@Pipe({
  name: 'sortFarms'
})
export class SortFarmsPipe implements PipeTransform {

  transform(value: Farms[], sortBy: string): Farms[] {
    if(sortBy == "Hot") {
      return [value.find(el => el.name == "cake-bnb")!, ...value.filter(el => el.name != "cake-bnb")]
    } else if(sortBy == "Liquidity") {
      return value.sort((a: Farms, b: Farms) => b.liquidity - a.liquidity )
    } else if(sortBy == "APR") {
      return value.sort((a: Farms, b: Farms) => Number(b.apr) - Number(a.apr))
    } else {
      return value
    }
  }
}
