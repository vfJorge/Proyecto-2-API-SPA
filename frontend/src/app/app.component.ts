import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api_project';
  modalInterior = '';
  modalTitleString = '';
  comment = "<p><em><strong>abc</strong></em></p>";

  public isVisible = false;
  isConfirmLoading = false;
  isLogged = localStorage.getItem('bearerToken');

  constructor( router: Router, private modalService: NzModalService){
  }

  ngOnInit(){
    if(this.isLogged != ''){
      document.getElementById("loginButton").setAttribute("style","display: none");
      document.getElementById("logoutButton").setAttribute("style","display: block");
    }
    else{
      document.getElementById("loginButton").setAttribute("style","display: block");
      document.getElementById("logoutButton").setAttribute("style","display: none");
    }
  }

  cerrarSesion(){
    localStorage.setItem('bearerToken','');
    localStorage.setItem('compra','');
    window.location.reload();
  }

  showModal(): void {
    this.isVisible = true;
  }
  openRegisterModal() :void {
    this.closeModal();
    this.modalService.create({
      nzTitle: 'Registro',
      nzContent: RegisterComponent
    });
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
