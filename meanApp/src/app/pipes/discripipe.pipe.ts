import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discripipe',
})
export class DiscripipePipe implements PipeTransform {
  // transform(value: string, args = 25): unknown {
  //   console.log('args', args);
  //   // return value.substr(0, 20);
  //   return value.substr(0, args) + '...';
  // }

  transform(value: string, togglePipe: boolean): string {
    if (value.length > 20 && togglePipe) {
      return value.substr(0, 20);
    } else {
      return value;
    }
  }
}
