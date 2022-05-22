import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './Pipes/filter.pipe';
import { FilterMangaPipe } from './Pipes/filter-manga.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { Api3Component } from './api3/api3.component';
import { Api4Component } from './api4/api4.component';
import { Api5Component } from './api5/api5.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TiendaComponent } from './tienda/tienda.component';
import { FilterCatalogoPipe } from './Pipes/filter-catalogo.pipe';
import { CrudCatalogoComponent } from './crud-catalogo/crud-catalogo.component';
import { CarritoComponent } from './carrito/carrito.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Api1Component,
    LoginComponent,
    RegisterComponent,
    Api2Component,
    FilterPipe,
    Api3Component,
    FilterMangaPipe,
    Api4Component,
    Api5Component,
    TiendaComponent,
    FilterCatalogoPipe,
    CrudCatalogoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzModalModule,
    NgxPaginationModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
