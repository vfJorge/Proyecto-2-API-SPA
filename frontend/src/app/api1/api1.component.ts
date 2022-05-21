import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidaremailService } from '../services/validaremail.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {

  mail!: FormGroup;
  public validacionEmail: any;

  constructor(private validaremailService: ValidaremailService, private fb: FormBuilder){
    
  }

  ngOnInit(): void {
    this.mail = this.fb.group({
      correoEmail: new FormControl('', [Validators.required, Validators.email])
    })
  }

  sendEmail(emailResp: string){
    this.validaremailService.getValidateEmail(emailResp).subscribe((resp: any) => {
      this.validacionEmail=resp
    })
  }


}
