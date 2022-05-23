import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  compraRealizada: any = JSON.parse(localStorage.getItem('compra'));
  
  constructor(private carritoService:CarritoService) { }

  ngOnInit(): void {
  }

  obtenerPagoTotal(): number{
    return this.carritoService.obtenerPrecioTotalPago();
  }
}
