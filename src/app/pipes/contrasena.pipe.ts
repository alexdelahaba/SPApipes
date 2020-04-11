import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if (activar){
      return value;
    }else{
      let asteriscos = '';
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++){
        asteriscos += '*';
      }
      return asteriscos;
    }
  }

}
