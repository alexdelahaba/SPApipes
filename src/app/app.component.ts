import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitán América';
  miNombre: string = 'aLejANdRo MartINeZ De lA hAba';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  mensaje: string = "providers: [{provide: LOCALE_ID, useValue:'es'}]";

  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/lR7icNffxXE';
  activar: boolean=true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó el dato');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 30,
    direccion: {
      calle: 'ancha',
      numero: 5,
    },
  };
  constructor() {
    console.log(this.heroe);
  }
}
