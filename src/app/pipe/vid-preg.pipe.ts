import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vidPreg'
})
export class VidPregPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
