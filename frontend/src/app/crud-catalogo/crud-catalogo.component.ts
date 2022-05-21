import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { HttpClient } from '@angular/common/http';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-crud-catalogo',
  templateUrl: './crud-catalogo.component.html',
  styleUrls: ['./crud-catalogo.component.css']
})
export class CrudCatalogoComponent implements OnInit {

  public page: number = 1;
  public ArticulosRecibidos: Array<any> = [];
  
  public isVisible = false;
  isConfirmLoading = false;

  constructor(private CatalogoService: CatalogoService, private http: HttpClient, private modalService: NzModalService){
    this.CatalogoService.getCatalogo().subscribe((resp: any) => {
    this.ArticulosRecibidos = resp;
  })
  }
  ngOnInit(): void {
  }

  eliminarProducto(idProducto: any){
    this.CatalogoService.delEliminarProducto(idProducto).subscribe((resp: any) => {
      alert("El producto se ha eliminado con éxito");
      window.location.reload();
    })
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
