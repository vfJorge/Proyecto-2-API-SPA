import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { HttpClient } from '@angular/common/http';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public ArticulosRecibidos: Array<any> = [];

  public isVisible = false;
  isConfirmLoading = false;


  constructor(private CatalogoService: CatalogoService, private http: HttpClient, private modalService: NzModalService, router: Router,private CarritoService: CarritoService){
    this.CatalogoService.getCatalogo().subscribe((resp: any) => {
    this.ArticulosRecibidos = resp;
  })
  }

  ngOnInit(): void {
  }

  agregarAlCarro(articuloID: any) {
    this.CarritoService.verificarSiExiste(articuloID);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  closeModal(): void {
    this.isVisible = false;
  }
}
