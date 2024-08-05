import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCLI',
  standalone: true
})
export class AppendCLIPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "City Name CLI : " + value;
  }

}
