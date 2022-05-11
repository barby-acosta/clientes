import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
 
  promedio = 0;
  desviacion = 0;
  clientes: Cliente[] = [];
  flagClientes=false;

  constructor(private fs: FireServiceService) {
  }

  ngOnInit() {
    this.fs.getClientes().subscribe(res => {
      let  edades: number[] = [];
      this.clientes = res;
      this.flagClientes=true;
      res.forEach(element => {
        edades.push(element.edad);
      });
      // desviacion y promedio
      this.getPromedioDesviacion(edades);
    }, (err) => {
      console.log(err);
      this.flagClientes=false;
    });

  }

  getPromedioDesviacion(arr) {
    const prom = arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / arr.length;

    // (edad - promedio) ^ 2
    arr = arr.map((k) => {
      return (k - prom) ** 2;
    });

    // suma de (edad - promedio) ^ 2
    const sum = arr.reduce((acc, curr) => acc + curr, 0);

    // promedio
    this.promedio = parseFloat(prom.toFixed(5));

    // desviacion
    this.desviacion = parseFloat(Math.sqrt(sum / arr.length).toFixed(5));
  }

}
