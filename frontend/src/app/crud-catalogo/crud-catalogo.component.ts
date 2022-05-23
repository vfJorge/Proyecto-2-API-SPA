import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-crud-catalogo',
  templateUrl: './crud-catalogo.component.html',
  styleUrls: ['./crud-catalogo.component.css']
})
export class CrudCatalogoComponent implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public ArticulosRecibidos: Array<any> = [];
  datosProducto!: FormGroup;
  idProd: any;
  
  public isVisible = false;
  isConfirmLoading = false;

  constructor(private CatalogoService: CatalogoService, private http: HttpClient, private modalService: NzModalService, private fb: FormBuilder){
    this.CatalogoService.getCatalogo().subscribe((resp: any) => {
    this.ArticulosRecibidos = resp;
  })
  }

  ngOnInit(): void {
    this.datosProducto = this.fb.group({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stockQty: new FormControl('', [Validators.required])
    })
  }

  eliminarProducto(idProducto: any){
    this.CatalogoService.delEliminarProducto(idProducto).subscribe((resp: any) => {
      alert("El producto se ha eliminado con éxito");
      window.location.reload();
    })
  }

  agregarProducto(datosProducto: any){
    this.CatalogoService.postAgregarProducto(datosProducto).subscribe((resp: any) => {
      alert("El producto se ha añadido con éxito");
      window.location.reload();
    })
  }
  
  editarProducto(datosProducto: any){
    const idArt = document.getElementById('idArticulo') as HTMLInputElement | null;
    this.CatalogoService.putAgregarProducto(datosProducto, idArt).subscribe((resp: any) => {
      alert("El producto se ha editado con éxito");
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
