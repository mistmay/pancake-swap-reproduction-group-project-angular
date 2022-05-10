import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePaginatorFilter'
})
export class TablePaginatorFilterPipe implements PipeTransform {

  transform(value: any[], itemsForPage: number, currentPage: number): any[] {
    return value.slice((itemsForPage * (currentPage - 1)), (itemsForPage + (itemsForPage * (currentPage - 1))));
  }

}
