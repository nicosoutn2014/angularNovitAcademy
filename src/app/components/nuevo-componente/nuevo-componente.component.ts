import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit, OnChanges, OnDestroy {
  @Input() prop = '';
  constructor() {}
  
  nombre: string = '';
  apellido: string = '';
  usuarioDelServer = {nombre: 'Server', apellido: 'User'};
  roles = [{nombre: 'Adminstrador'}, {nombre:'Vendedor'}];
  myInterval: any;
  rol: string = '';
  fontStyle = '';
  cursos: any[] = [{nombre: 'Netcore', hecho: true, nota: 8 }, { nombre: 'Angular', hecho: true, nota: 7}, {nombre: 'Github', hecho: false}, {nombre:'Java', hecho:false}];

  ngOnInit(): void {
    console.log('ngOnInit!');
    /*this.myInterval = setInterval(() => {
      console.log('my interval');
    }, 5000);*/
  }
  
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    //console.log('destruyo mi interval');
    //clearInterval(this.myInterval);
  }

  showInputValue() {
    console.log(this.nombre, this.apellido);
    let nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido
    };


    this.fontStyle = 'oblique';
    //this.cursos.push({nombre:'Golang', hecho: false});
  }

  deleteCurso(nombre: string) {
    console.log('Borro curso con nombre', nombre);
  }

  getCurso(): string {
    return 'Angular';
  }
}
