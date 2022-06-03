import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], seachedKey: string): any[] {
    if (seachedKey.trim() === '') {
      return value;
    } else {
      return value.filter((item: any) => item.collection_name.trim().toLowerCase().includes(seachedKey.trim().toLowerCase()));
    }
  }

}
