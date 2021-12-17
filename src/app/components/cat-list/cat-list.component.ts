import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  formValues: FormGroup;

  constructor(
        fb: FormBuilder,
        private catService: CatService
    ) {
    this.formValues = fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      idGato: [0, Validators.required]
    });
  }

  catList: any = [];
  isEditing: boolean = false;

  ngOnInit(): void {
    this.getAllCats();
  }

  giveAway(idGato: number) {
    console.log('Regalo el gato con Id', idGato);
  }

  edit(idGato: number) {
    console.log('Edito el gato con Id', idGato);

    //Marco que estoy editando
    this.isEditing = true;

    //Busco el gato a editar
    let cat = this.catList.find((c: any) => c.idGato === idGato);

    //Lleno los controles con los datos del gato encontrado

    this.formValues.controls['idGato'].setValue(idGato);
    this.formValues.controls['nombre'].setValue(cat.nombre);
    this.formValues.controls['raza'].setValue(cat.raza);
    this.formValues.controls['edad'].setValue(cat.edad);
  }

  submit() {
    if (this.formValues.status === 'VALID') {
      let aCat = new Cat();

      aCat.nombre = this.formValues.get('nombre')?.value;
      aCat.idGato = this.formValues.get('idGato')?.value;
      aCat.raza = this.formValues.get('raza')?.value;
      aCat.edad = this.formValues.get('edad')?.value;

      if (aCat.idGato != 0)
      {
        this.catService.updateCat(aCat).subscribe({
          next: _ => {
            // let cat = this.catList.find((c: any) => c.idGato === aCat.idGato);
            // cat.nombre = aCat.nombre;
            // cat.edad = aCat.edad;
            // cat.raza = aCat.raza;
            this.getAllCats();
          },
          error: error => {
            if (error.status === 401){
              window.alert('Error de autenticación con el servidor.');
            }
            else if (error.status === 400)
            {
              window.alert('Error de parametros incorrectos.');
            }
            else
              window.alert('Error desconocido.');
          }
        });
      }
      else{
        this.catList.push(
          {
          nombre: this.formValues.get('nombre')?.value,
          edad: this.formValues.get('edad')?.value,
          raza: this.formValues.get('raza')?.value
        });
      }

      this.isEditing = false;
      this.formValues.reset({});

    } else
      window.alert('Debe completar todos los campos');
  }

  cancelEdit() {
    this.isEditing = false;
    this.formValues.reset();
  }

  getAllCats(){
    this.catService.getCats().subscribe(
      gatos => this.catList = gatos
    );
  }
}
