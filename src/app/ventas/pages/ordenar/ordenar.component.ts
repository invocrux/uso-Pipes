import { Component, OnInit } from '@angular/core';
import { Color,Heroe } from '../../interfaces/ventas.interfaces';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  nosotros = 'nosotros';
  
  
  ordenarPor: string = '';

  estado: boolean = true;
   heroes: Heroe []= [
     {
    nombre: 'Superman',
    valor: true,
    color: Color.azul
   },
   {
    nombre: 'Batman',
    valor: false,
    color: Color.negro
   },
   {
    nombre: 'Robin',
    valor: true,
    color: Color.verde
   },
   {
    nombre: 'Daredevil',
    valor: false,
    color: Color.rojo
   },
   {
    nombre: 'Linterna Verde',
    valor: true,
    color: Color.verde
   },
   ];
  
  constructor() { }

  cambiarEstado() {
    this.estado = !this.estado;
  }

  cambiarOrden( valor: string){
    this.ordenarPor = valor;
  }

}
