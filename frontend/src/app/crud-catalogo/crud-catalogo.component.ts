import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { LoginRegisterService } from '../services/login-register.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import html2canvas from 'html2canvas'; // @ts-ignore
import jsPDF from 'jspdf';// @ts-ignore
import autoTable from 'jspdf-autotable';
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

  constructor(private CatalogoService: CatalogoService, private http: HttpClient, private modalService: NzModalService,
    private fb: FormBuilder, private loginRegisterService:LoginRegisterService, private route: Router){
      this.verificarCredencial();
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

  verificarCredencial(){
    this.loginRegisterService.getTipoCliente().subscribe((resp:any)=>{
      if(resp.type == 'client'){
        this.route.navigate(['/menu']);
      }
    }, error=>{
      this.route.navigate(['/menu']);
    })
  }

  generarDescargarPDF() {
    this.CatalogoService.getCatalogo().subscribe({next: (resp:any) => {
        let doc = new jsPDF();
        let col = ["ID", "Tipo de producto", "Nombre","Precio","Stock"]
        let rows : any = [];

        let texto = "Inventario de Artículos de Tumangamandapio";
        let fecha = new Date();
        texto += '\t' + "Fecha: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        texto += '\n';
        texto += '\n'; 
        doc.text(texto, 20, 10);

        resp.forEach((articulo: any) => {
          let temp = [articulo.id, articulo.type, articulo.name,"$" + articulo.price, articulo.stockQty];
          rows.push(temp);
        });

        autoTable(doc, {head: [col], body: rows})
        
        doc.save("Reporte-Inventario-"+fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear());
      },
      error: (err) => {
        alert("No se pudo generar el reporte");
      }
    })
  }

  eliminarProducto(idProducto: any): boolean{
    this.CatalogoService.delEliminarProducto(idProducto).subscribe((resp: any) => {
      alert("El producto se ha eliminado con éxito");
      window.location.reload();
      return true;
    })
    return false;
  }

  agregarProducto(datosProductoAgregar: any): boolean{
    this.CatalogoService.postAgregarProducto(datosProductoAgregar).subscribe((resp: any) => {
      alert("El producto se ha añadido con éxito");
      window.location.reload();
      return true;
    })
    return false;
  }
  
  editProductoVista(idArti: any, tipo: any, nombre: any, imgURL: any, precio: any, stockCanti: any){
    this.datosProducto.controls['id'].setValue(idArti);
    this.datosProducto.controls['type'].setValue(tipo);
    this.datosProducto.controls['name'].setValue(nombre);
    this.datosProducto.controls['img'].setValue(imgURL);
    this.datosProducto.controls['price'].setValue(precio);
    this.datosProducto.controls['stockQty'].setValue(stockCanti);
  }

  editarProducto(datosProducto: any): boolean{
    const idArti = document.getElementById('idArticulo') as HTMLInputElement;
    this.CatalogoService.putAgregarProducto(datosProducto, idArti.value).subscribe((resp: any) => {
      alert("El producto se ha editado con éxito");
      window.location.reload();
      return true;
    })
    return false;
  }

  generarDescargarExcel(): void{
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
