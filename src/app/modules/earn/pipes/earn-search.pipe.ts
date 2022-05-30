import { Pipe, PipeTransform } from '@angular/core';
import { Pools } from 'src/app/models/pools';

@Pipe({
  name: 'poolsSearch'
})
export class PoolsSearchPipe implements PipeTransform {

  transform(value: Pools[], searchedKey: string): Pools[] {
    if(searchedKey.trim() == "") {
      return value
    } else {
      return value.filter(el => el.name.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()))
    }
  }

}
