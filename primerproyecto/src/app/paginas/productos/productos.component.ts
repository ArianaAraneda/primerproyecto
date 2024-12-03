import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camisa de Algodón',
      descripcion: 'Camisa de algodón 100% cómoda y fresca.',
      precio: 29.99,
      imagen:  '/1.png' ,   
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Pantalones Vaqueros',
      descripcion: 'Pantalones vaqueros de corte clásico.',
      precio: 49.99,
      imagen: 'https://i.pinimg.com/236x/aa/b4/c2/aab4c2547fb01fcaa261b049a1b0045e.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Chaqueta de Cuero',
      descripcion: 'Chaqueta de cuero genuino.',
      precio: 89.99,
      imagen: 'https://i.pinimg.com/236x/aa/b4/c2/aab4c2547fb01fcaa261b049a1b0045e.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
