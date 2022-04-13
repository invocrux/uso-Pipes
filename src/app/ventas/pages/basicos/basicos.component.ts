import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'fernando';
  nombreUpper: string = 'Fernando';
  nombreCompleto: string = 'fErNando herRera';

  fecha: Date = new Date(); // clase de javascript que siempre te devolvera el dia en que lo estes mirando
}
