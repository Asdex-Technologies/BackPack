import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor() { }
  appPages = [
    { title: 'Home', icon: 'home' },
    { title: 'Español', icon: 'mail' },
    { title: 'Matematicas', icon: 'paper-plane' },
    { title: 'Ciencias', icon: 'heart' },
    { title: 'Programacion', icon: 'archive' },
    { title: 'Civica', icon: 'trash' },
    { title: 'Teo Automatas', icon: 'warning' },
  ];
}
