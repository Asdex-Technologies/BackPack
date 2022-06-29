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
  topics = [
    { materia: 'Español', topic: 'Verbos' },
    { materia: 'Español', topic: 'Adjetivos' },
    { materia: 'Español', topic: 'Nombres' },
    { materia: 'Matematicas', topic: 'Sumas' },
    { materia: 'Matematicas', topic: 'Restas' },
    { materia: 'Matematicas', topic: 'Multiplicaciones' },
    { materia: 'Ciencias', topic: 'Celulas' },
    { materia: 'Ciencias', topic: 'Organismos' },
    { materia: 'Ciencias', topic: 'Ecosistemas' },
    { materia: 'Programacion', topic: 'Programacion' },
    { materia: 'Programacion', topic: 'Algoritmos' },
    { materia: 'Programacion', topic: 'Estructuras de Datos' },
    { materia: 'Civica', topic: 'Civica' },
    { materia: 'Civica', topic: 'Derecho' },
    { materia: 'Civica', topic: 'Historia' },
    { materia: 'Teo Automatas', topic: 'Teo Automatas' },
    { materia: 'Teo Automatas', topic: 'Automatas' },
    { materia: 'Teo Automatas', topic: 'Automata de pila' },
  ]
}
