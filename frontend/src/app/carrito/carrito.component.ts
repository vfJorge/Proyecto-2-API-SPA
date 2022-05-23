import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public pagina: number;
  public Articulos: any = [];
  public cantidadArticulos: number = 1;
  public cantidadesDeArticulos: any = [];
  public cantidadStock = Array;

  constructor(private CarritoService: CarritoService, private route:Router) { }

  
  ngOnInit(): void {
    this.CarritoService.obtenerArticulos().subscribe(resp => {
      this.Articulos = resp;
    });
  }

  obtenerCantidad(tag: HTMLSelectElement, articulo: any) {
    articulo.qty = +tag.value;
    this.CarritoService.obtenerCantidadArticulos();
  }

  eliminarArticuloDelCarro(idArticulo: any) {
    this.CarritoService.borrarArticuloDeLista(idArticulo);
    this.CarritoService.obtenerCantidadArticulos();
  }

  carritoVacio() {
    return this.Articulos.length === 0;
  }

  vaciarCarro() {
    this.CarritoService.eliminarTodo();
    this.CarritoService.obtenerCantidadArticulos();
  }

  valorTotalCompra(): number {
    return this.CarritoService.obtenerPrecioTotal();
  }


  realizarPago() {
    if(localStorage.getItem('bearerToken') == ''){
      alert("Crea una cuenta para poder realizar el pago")
    }
    else{
      this.CarritoService.realizarPago();
      this.route.navigate(['/qrpago']);
    }
  }

}
