import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(value: any[], currentPage: number): any[] {
    return value.slice((9 * (currentPage - 1)), (9 + (9 * (currentPage - 1))));
  }

}
