import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infoSearch'
})
export class InfoSearchPipe implements PipeTransform {

  transform(value: any[], searchedKey: string, firstParameter: string, secondParamater: string): any[] {
    return value.filter((element: any) => element[firstParameter].trim().toLowerCase().includes(searchedKey.trim().toLowerCase())
      || element[secondParamater].trim().toLowerCase().includes(searchedKey.trim().toLowerCase())
    );
  }

}
