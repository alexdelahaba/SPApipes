import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado',
})
export class PersonalizadoPipe implements PipeTransform {
  transform(value: string, letra: boolean = true): string {
    // value es el valor que recibe el pipe
    // lo de despues del value son los añadidos despues del pipe, por ejemplo, ':true'
    if (letra === false) {
      return 'No puedo saludarte :(';
    } else {
      return 'Hola ' + value.toUpperCase();
    }
  }
}
