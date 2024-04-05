import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css',
})
export class PrimeiroComponent {
  nome: string = 'Laylson';
  cor = 'red';
  imprime() {
    console.log('oi');
  }
  //two way data biding
  cor2 = '';
  mudar() {
    if (this.cor2 != 'darkorange') {
      this.cor2 = 'darkorange';
    } else {
      this.cor2 = 'white';
    }
  }
  //variável de template
  cor3 = '';
  mudar2(info: string) {
    this.cor3 = info;
  }
  //Diretivas Estruturais - *ngIf
  usuario = ''
  cursos: string[] = [
    'javascript',
    'python',
    'java',
    'sql'
  ]
}
