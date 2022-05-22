import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginRegisterService } from '../services/login-register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private LoginRegisterService: LoginRegisterService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm(cuenta: any): void {
    if (this.validateForm.valid) {
      this.LoginRegisterService.postIniciarSesion(cuenta).subscribe((resp: any) => {
        alert("Has iniciado sesión exitosamente");
        console.log(resp);
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
