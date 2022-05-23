import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public ComicsRecibidos: Array<any> = [];
  public ImagenesComics: String = "/portrait_fantastic.jpg";
  

  constructor(private comicsService: ComicsService){
    this.comicsService.getComics().subscribe((resp: any) => {
    this.ComicsRecibidos = resp.data.results;
  })
  }


  ngOnInit(): void {
  }

}
