import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import html2canvas from 'html2canvas'; // @ts-ignore
import jsPDF from 'jspdf'; 
import * as XLSX from 'xlsx';
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
  datosProductoAgregar!: FormGroup;
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
      id: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stockQty: new FormControl('', [Validators.required])
    })

    this.datosProductoAgregar = this.fb.group({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stockQty: new FormControl('', [Validators.required])
    })
  }

  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('TMNGMNDP_inventario_pagina_'+this.page+'.pdf');
    });
  }

  eliminarProducto(idProducto: any){
    this.CatalogoService.delEliminarProducto(idProducto).subscribe((resp: any) => {
      alert("El producto se ha eliminado con éxito");
      window.location.reload();
    })
  }

  agregarProducto(datosProductoAgregar: any){
    this.CatalogoService.postAgregarProducto(datosProductoAgregar).subscribe((resp: any) => {
      alert("El producto se ha añadido con éxito");
      window.location.reload();
    })
  }
  
  editProductoVista(idArti: any, tipo: any, nombre: any, imgURL: any, precio: any, stockCanti: any){
    this.datosProducto.controls['id'].setValue(idArti);
    this.datosProducto.controls['type'].setValue(tipo);
    this.datosProducto.controls['name'].setValue(nombre);
    this.datosProducto.controls['img'].setValue(imgURL);
    this.datosProducto.controls['price'].setValue(precio);
    this.datosProducto.controls['stockQty'].setValue(stockCanti);
  }

  editarProducto(datosProducto: any){
    const idArti = document.getElementById('idArticulo') as HTMLInputElement;
    this.CatalogoService.putAgregarProducto(datosProducto, idArti.value).subscribe((resp: any) => {
      alert("El producto se ha editado con éxito");
      window.location.reload();
    })
  }

  exportExcel(): void{
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Inventario_TMNGMNDP');
    XLSX.writeFile(wb, 'Inventario_TMNGMNDP.xlsx');
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
