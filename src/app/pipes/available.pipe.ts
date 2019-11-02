import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return values.filter((item) => item.Available);
  }

}
