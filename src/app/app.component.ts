import {
  Component, // importar el decorador Component (sirve para crear componentes)
  ElementRef, // importar el decorador ElementRef (sirve para manipular el DOM al igual que ViewChild pero este es mas complejo de usar)
  InjectorType, // importar el decorador InjectorType (sirve para inyectar dependencias en el constructor de la clase)
  ViewChild, // importar el decorador ViewChild (sirve para manipular el DOM al igual que ElementRef pero este es mas facil de usar)
  inject, // importar el decorador inject (sirve para inyectar dependencias )
} from '@angular/core';

import { BtnComponent } from './components/btn/btn.component'; // importar el componente BtnComponent
import { InputComponent } from './components/input/input.component'; // importar el componente InputComponent
import { ProductComponent } from './components/product/product.component'; // importar el componente ProductComponent
import { Product } from './models/product.model'; // importar la interface Product
import { NgOptimizedImage } from '@angular/common';

import { HttpClient } from '@angular/common/http'; // importar el modulo HttpClient (sirve para hacer peticiones http)

@Component({
  // decorador Component (sirve para crear componentes)
  selector: 'app-root', // selector del componente
  templateUrl: './app.component.html', // template del componente
  styleUrls: ['./app.component.css'], // estilos del componente
})
export class AppComponent {
  // clase AppComponent (aqui esta todo el codigo del componente))
  @ViewChild(InputComponent, { static: true })
  InputComponent: // ViewChild del componente InputComponent (es como un getElementById)
  InputComponent | undefined;
  @ViewChild(BtnComponent, { static: true })
  BtnComponent: // ViewChild del componente BtnComponent (es como un getElementById)
  BtnComponent | undefined;

  http = inject(HttpClient); // inyectar dependencia HttpClient en la variable http (es como un singleton)
  products: Product[] = []; // declarar la variable products como un array de Product (es como un useState de react)

  btnHandler() {
    // funcion btnHandler (se ejecuta cuando se hace click en el boton)
    console.log('test');
    this.InputComponent?.changeName();
  }

  ngOnInit() {
    // funcion ngOninit (se ejecuta cuando se inicia el componente, como un useEffect de react)
    console.log('hola init');
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe({
      // peticion http get a la api fakestoreapi.com/products
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
