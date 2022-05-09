import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireServiceService } from '../fire-service.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css']
})
export class ClientesAddComponent implements OnInit {
  clientesForm: FormGroup;

  constructor(private router: Router, private fs: FireServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clientesForm = this.formBuilder.group({
      'nombre': [null, Validators.required],
      'apellido': [null, Validators.required],
      'edad': [null, Validators.required],
      'fechaNacimiento': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.fs.postClientes(form)
      .subscribe(res => {
        const id = res['key'];
        this.router.navigate(['/clientes']);
      }, (err) => {
        console.log(err);
      });
  }

}
