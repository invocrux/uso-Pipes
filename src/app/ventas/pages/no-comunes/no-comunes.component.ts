import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  
  nombre = 'invocrux'
  genero = 'masculino'
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
  
  clientes: string[] = ['Roberto','invocrux','Roberto','invocrux','Roberto','invocrux']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  
  Borrar(){
    this.clientes.pop(); 
  }

  cambiar(){
    if (this.nombre === 'invocrux'){
      this.genero='femenino';
      this.nombre = 'sandra';
    }else{
      this.nombre = 'invocrux'
      this.genero = 'masculino'
    }
    
    
  }
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'San Andres'
  }

  miObservable = interval(1000); // este metodo interval devuelve una promesa, con el pipe async el suscribe ya no es es necesario y vuelve al observable independiente

  // ahora usaremos una promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(`tenemos data de la promesa `)}, 3000)
  })
}
