import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notAvailable'
})
export class NotAvailablePipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return values.filter((item) => item.ComingSoon);
  }

}
