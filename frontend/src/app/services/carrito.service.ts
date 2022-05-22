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

  obtenerPrecioTotal() : number{
    let total = 0;
    this.cartListaArticulos.map((articulo:any) => {
      total += articulo.price * articulo.qty;
    })
    
    return total;
  }

  borrarArticuloDeLista(articulo: any) {
    this.cartListaArticulos.map((a: any, index: any) => {
      if (articulo === a.id) {
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

    this.cartListaArticulos.map((a: any) => {
      if (a.id === articulo) {
        esIgual = true;
      } 
    })

    if(!esIgual) {
      this.agregarAlCarro(articulo);
    }


    this.obtenerCantidadArticulos();
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }


  obtenerCantidadArticulos() {
    let qty = 0;
    this.cartListaArticulos.map((a: any) => {
      qty += a.qty;
    })  

    this.cuentaArticulos.next(qty);
    localStorage.setItem('carrito', JSON.stringify(this.cartListaArticulos));
  }

  realizarPago() {
    this.createNotification('success', "Compra exitosa", `Tu compra se ha realizado correctamente por un total de $${this.obtenerPrecioTotal()}` )
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
