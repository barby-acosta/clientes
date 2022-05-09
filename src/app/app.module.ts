import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesAddComponent } from './clientes-add/clientes-add.component';

import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'clientes',
    component: ClientesListComponent,
    data: { title: 'Listado de Clientes' }
  },
  {
    path: 'cliente-create',
    component: ClientesAddComponent,
    data: { title: 'Crear Cliente' }
  },
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    ClientesAddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    CdkTableModule
  ],
  exports: [MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
