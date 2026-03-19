import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capatilize',
})
export class CapatilizePipe implements PipeTransform {
  transform(name: string): string {
    return name?.split(' ')
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
  }
}
