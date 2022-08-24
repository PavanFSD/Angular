import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(amount: any, ...params: any[]): Number {
     return amount*params[0];
  }

}
