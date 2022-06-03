import { Pipe, PipeTransform } from '@angular/core';
import { Farms } from 'src/app/models/farms';
import { Pools } from 'src/app/models/pools';

@Pipe({
  name: 'poolsSearch'
})
export class PoolsSearchPipe implements PipeTransform {

  transform(value: any, searchedKey: string): any {
    if(searchedKey.trim() == "") {
      return value
    } else {
      return value.filter((el: any) => el.name.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()))
    }
  }

}
