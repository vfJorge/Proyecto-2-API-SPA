import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public ArticulosRecibidos: Array<any> = [];
  

  constructor(private CatalogoService: CatalogoService, private http: HttpClient){
    this.CatalogoService.getCatalogo().subscribe((resp: any) => {
    this.ArticulosRecibidos = resp;
  })
  }
  ngOnInit(): void {
  }

}
