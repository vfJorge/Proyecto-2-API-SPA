import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../services/animes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api4',
  templateUrl: './api4.component.html',
  styleUrls: ['./api4.component.css']
})
export class Api4Component implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public AnimesRecibidos: Array<any> = [];
  

  constructor(private animesService: AnimesService, private http: HttpClient){
    this.animesService.getAnimes().subscribe((resp: any) => {
    this.AnimesRecibidos = resp.data;
  })
  }


  ngOnInit(): void {
  }

  public isVisible = false;
  isConfirmLoading = false;

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
