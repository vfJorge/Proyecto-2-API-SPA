import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { Api3Component } from './api3/api3.component';
import { Api4Component } from './api4/api4.component';
import { Api5Component } from './api5/api5.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CrudCatalogoComponent } from './crud-catalogo/crud-catalogo.component';
import { CarritoComponent } from './carrito/carrito.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'menu', component:MenuComponent},
  {path: 'api1', component:Api1Component},
  {path: 'api2', component:Api2Component},
  {path: 'api3', component:Api3Component},
  {path: 'api4', component:Api4Component},
  {path: 'api5', component:Api5Component},
  {path: 'tienda', component:TiendaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'crud-catalogo', component:CrudCatalogoComponent},
  {path: 'carrito', component:CarritoComponent},
  {path: '', redirectTo:'/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
