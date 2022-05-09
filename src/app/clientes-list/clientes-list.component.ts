import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FireServiceService } from '../fire-service.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  edades: number[] = [];
  promedio = 0;
  desviacion = 0;
  dataSource: DataSource<any>;
  columnas = ['nombre', 'apellido', 'edad', 'fechaNacimiento', 'fechaMuerte'];

  constructor(private fs: FireServiceService) {
  }

  ngOnInit() {
    this.fs.getClientes().subscribe(res => {
      this.dataSource = res;
      res.forEach(element => {
        this.edades.push(element.edad);
      });
      // desviacion y promedio
      this.getPromedioDesviacion(this.edades);

    }, (err) => {
      console.log(err);
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
