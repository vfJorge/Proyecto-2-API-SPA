import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CatalogoService } from './catalogo.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public cartListaArticulos: any = [];
  public listaArticulos = new BehaviorSubject<any>([]);
  public cuentaArticulos = new ReplaySubject<number>(0);
  public cuenta = this.cuentaArticulos.asObservable();
  

  constructor(private notification: NzNotificationService, private CatalogoService: CatalogoService) { 
    this.revisarLocalStorage();
  }

  obtenerArticulos() {
    return this.listaArticulos.asObservable();
  }

  setArticulo(articulo: any) {
    this.cartListaArticulos.push(...articulo);
    this.listaArticulos.next(articulo);
  }

  agregarAlCarro(articulo: any) {
    this.CatalogoService.getArticulo(articulo).subscribe((resp: any) => {
      this.cartListaArticulos.push(resp);
    })
    this.listaArticulos.next(this.cartListaArticulos);
  }

  obtenerPrecioTotal(cantidadArt: any) : number{
    let total = 0;
    this.cartListaArticulos.map((articulo:any) => {
      total += articulo.price * cantidadArt;
    })
    
    return total;
  }

  borrarArticuloDeLista(articulo: any) {
    this.cartListaArticulos.map((a: any, index: any) => {
      if (articulo.id === a.id) {
        this.cartListaArticulos.splice(index, 1);
      }
    })
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }

  eliminarTodo() {
    this.cartListaArticulos = []
    this.listaArticulos.next(this.cartListaArticulos);
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }

  verificarSiExiste(articulo: any) {

    let esIgual = false;
    let articuloEncontrado: any;

    this.cartListaArticulos.map((a: any) => {
      if (a.id === articulo.id) {
        articuloEncontrado = a;
        esIgual = true;
      }
    })


    if (esIgual) {
      let index = this.cartListaArticulos.indexOf(articuloEncontrado);
      if (articuloEncontrado.cantidad === 10) {
        this.createNotification('warning', "Cantidad máxima alcanzada", "Has alcanzado el máximo de compras por articulo (10). Revisa tu carrito!")
      } else {
        this.cartListaArticulos[index].cantidad += 1;
      }
    } else {
      this.agregarAlCarro(articulo);
    }

    this.obtenerCantidadArticulos();
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }


  obtenerCantidadArticulos() {
    let cantidad = 0;
    this.cartListaArticulos.map((a: any) => {
      cantidad += a.cantidad;
    })  

    this.cuentaArticulos.next(cantidad);
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }

  realizarPago() {
    this.createNotification('success', "Compra exitosa", `Tu compra se ha realizado correctamente por un total de $${this.obtenerPrecioTotal(0)}` )
    this.eliminarTodo();
    this.obtenerCantidadArticulos();
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }

  revisarLocalStorage() {
    if (!localStorage['carrito']) {
      localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
    } else {
      this.cartListaArticulos = JSON.parse(localStorage['carrito']);
      this.listaArticulos.next(this.cartListaArticulos);
      this.obtenerCantidadArticulos();
    }
  }

  createNotification(type: string, titulo: string, mensaje: string): void {
    this.notification.create(
      type,
      titulo,
      mensaje
      );
  }
}
