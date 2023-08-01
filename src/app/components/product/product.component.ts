import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // aqui se declara el input que se va a recibir, un input es un valor que se recibe desde el componente padre (este caso la interface Product)

  @Input() product: Product = {
    // forma de inicializar un objeto (es buena practica)
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    image: '',
  };
  // @Input() product!: Product; // otra forma de inicializar un objeto (no es buena practica) se usa el signo de admiracion para indicar que el objeto no es nulo
}
