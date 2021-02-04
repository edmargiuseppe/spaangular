import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'spa-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  numero: number;
  constructor() { }

  ngOnInit(): void {
  }

  obtemNumero(numero: number){
    this. numero = numero * 1.5;
  }

}
