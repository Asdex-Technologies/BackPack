import { Component } from '@angular/core';
import { MateriasService } from './services/materias.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  appPages = this.materias.appPages;
  constructor(private materias: MateriasService) {}
}
