import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public pagina: number;
  public Articulos: any;
  public cantidadArticulos: number = 1;
  public cantidadArticulosAux: number = 1;
  public cantidadesDeArticulos: any = [];

  constructor(private CarritoService: CarritoService) { }

  
  ngOnInit(): void {
    this.CarritoService.obtenerArticulos().subscribe(resp => {
      this.Articulos = resp;
    });
  }

  resetCantidadArt(){
    this.cantidadArticulos = this.cantidadArticulosAux;
  }

  incrementarCantidad(cantidadStock: any){
    if(this.cantidadArticulos < cantidadStock)
    this.cantidadArticulos++;
  }

  decrementarCantidad(){
    if(this.cantidadArticulos > 1)
    this.cantidadArticulos--;
  }

  eliminarArticuloDelCarro(articulo: any) {
    this.CarritoService.borrarArticuloDeLista(articulo);
    this.CarritoService.obtenerCantidadArticulos();
  }

  carritoVacio() {
    return this.Articulos.length === 0;
  }

  vaciarCarro() {
    this.CarritoService.eliminarTodo();
    this.CarritoService.obtenerCantidadArticulos();
  }

  valorTotalCompra(cantArt: any): number {
    return this.CarritoService.obtenerPrecioTotal(cantArt);
  }


  realizarPago() {
    this.CarritoService.realizarPago();
  }

}
