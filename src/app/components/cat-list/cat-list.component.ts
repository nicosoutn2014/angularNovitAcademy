import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  formValues: FormGroup;

  constructor(fb: FormBuilder) {
    this.formValues = fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  catList: any = [];
  editing: boolean = false;

  ngOnInit(): void {
    this.catList = [{
      "idGato": 2,
      "nombre": "Luna",
      "edad": 13,
      "raza": "Siames"
      },
      {
        "idGato": 3,
        "nombre": "Milo",
        "edad": 12,
        "raza": "Persa"
      },
      {
        "idGato": 4,
        "nombre": "Lupe",
        "edad": 14,
        "raza": "Siames"
      },
      {
        "idGato": 5,
        "nombre": "Clara",
        "edad": 5,
        "raza": "Persa"
      },
      {
        "idGato": 7,
        "nombre": "Manchitas",
        "edad": 15,
        "raza": "Manchado"
      },
      {
        "idGato": 8,
        "nombre": "Manchitas2",
        "edad": 15,
        "raza": "Manchado"
      },
      {
        "idGato": 9,
        "nombre": "Manchitas3",
        "edad": 15,
        "raza": "Manchado"
      },
      {
        "idGato": 10,
        "nombre": "Mimi",
        "edad": 4,
        "raza": "Calle"
      }
    ];
  }

  adopt(idGato: number) {
    console.log('Adopto el gato con Id', idGato);
  }

  giveAway(idGato: number) {
    console.log('Regalo el gato con Id', idGato);
  }

  edit(idGato: number) {
    console.log('Edito el gato con Id', idGato);
    
    //Marco que estoy editando
    this.editing = true;

    //Busco el gato a editar
    let cat = this.catList.find((c: any) => c.idGato === idGato);

    //Lleno los controles con los datos del gato encontrado
    this.formValues.controls['nombre'].setValue(cat.nombre);
    this.formValues.controls['raza'].setValue(cat.raza);
    this.formValues.controls['edad'].setValue(cat.edad);
  }

  submit(asd: any) {
    if(this.formValues.status === 'VALID') {
      console.log(this.formValues.get('nombre')?.value);
      console.log(this.formValues.get('raza')?.value);
      console.log(this.formValues.get('edad')?.value);
    } else
      window.alert('Debe completar todos los campos');
  }

  cancelEdit() {
    this.editing = false;
    this.formValues.reset();
  }

}
