import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './models/cliente';
import * as firebase from 'firebase';

import '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  ref = firebase.firestore().collection('clientes');
  expectativaVida = 75;
  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const clientes: Cliente[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          const fecha = data.fechaNacimiento.split('-', 3);
          const anio = Number(fecha[0]) + this.expectativaVida;

          clientes.push({
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            fechaNacimiento: fecha[2] + '-' + fecha[1] + '-' + fecha[0],
            fechaMuerte: fecha[2] + '-' + fecha[1] + '-' + anio.toString()
          });
        });
        observer.next(clientes);
      });
    });
  }

  postClientes(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
}
