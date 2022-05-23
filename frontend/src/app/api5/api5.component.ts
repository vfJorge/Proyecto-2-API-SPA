import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EnviaremailService } from '../services/enviaremail.service';

@Component({
  selector: 'app-api5',
  templateUrl: './api5.component.html',
  styleUrls: ['./api5.component.css']
})
export class Api5Component implements OnInit {

  datosEmail!: FormGroup;

  constructor(private enviaremailService: EnviaremailService, private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.datosEmail = this.fb.group({
      nombreCompleto: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      comentarios: new FormControl('', [Validators.required])
    })
  }

  sendCorreo(datosEmail: any): boolean{
    this.enviaremailService.postEnviarEmail(datosEmail).subscribe((resp: any) => {
      alert("El correo se ha enviado con éxito");
      return true;
    })
    return false;
  }


}
