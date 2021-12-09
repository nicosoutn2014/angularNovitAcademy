import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novitAcademyFront';
  menuElegido = '';

  menu(pagina: string) {
    this.menuElegido = pagina;
  }
}
